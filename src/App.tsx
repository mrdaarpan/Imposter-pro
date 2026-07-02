/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GamePhase, Player, Word } from './types';
import { categoriesData } from './wordsData';

// Component Imports
import MainMenu from './components/MainMenu';
import About from './components/About';
import HowToPlay from './components/HowToPlay';
import PlayersSetup from './components/PlayersSetup';
import GameSetup from './components/GameSetup';
import PassDevice from './components/PassDevice';
import Discussion from './components/Discussion';
import Voting from './components/Voting';
import Result from './components/Result';
import Leaderboard from './components/Leaderboard';

export default function App() {
  // Game Navigation Phase State
  const [phase, setPhase] = useState<GamePhase>('menu');

  // Player Settings & Permanent Score Tracker
  const [players, setPlayers] = useState<Player[]>([
    { id: '1', name: 'Player 1', score: 0, role: 'civilian', isAlive: true, votesReceived: 0 },
    { id: '2', name: 'Player 2', score: 0, role: 'civilian', isAlive: true, votesReceived: 0 },
    { id: '3', name: 'Player 3', score: 0, role: 'civilian', isAlive: true, votesReceived: 0 }
  ]);

  // Game Setup Configurations
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['animals', 'food']);
  const [numImposters, setNumImposters] = useState<number>(1);
  const [funModeEnabled, setFunModeEnabled] = useState<boolean>(false);
  const [discussionTimerEnabled, setDiscussionTimerEnabled] = useState<boolean>(true);

  // Round History & Avoid Repetitive Words List
  const [playedWords, setPlayedWords] = useState<string[]>([]);
  const [roundNumber, setRoundNumber] = useState<number>(1);
  const [lastFunRound, setLastFunRound] = useState<number>(-10); // Tracks when the last Fun Round was to prevent repeats within 7 rounds

  // Current Active Round State variables
  const [currentWord, setCurrentWord] = useState<string>('');
  const [currentHint, setCurrentHint] = useState<string>('');
  const [isFunModeActive, setIsFunModeActive] = useState<boolean>(false);
  const [firstDiscussionPlayerId, setFirstDiscussionPlayerId] = useState<string>('');
  const [currentRevealPlayerIndex, setCurrentRevealPlayerIndex] = useState<number>(0);
  const [votedOutPlayerId, setVotedOutPlayerId] = useState<string>('');
  const [votes, setVotes] = useState<Record<string, string>>({});

  // Handles state reset when initializing or going to next round
  const startNewRound = (
    setupCategories = selectedCategories,
    setupNumImposters = numImposters,
    setupFunMode = funModeEnabled
  ) => {
    // 1. Pick Category and select a fresh word that hasn't been played in this session
    const activeCategories = categoriesData.filter((cat) => setupCategories.includes(cat.id));
    // Gather all words in chosen categories
    let pool: Word[] = [];
    activeCategories.forEach((cat) => {
      pool = [...pool, ...cat.words];
    });

    // Filter out played words
    let availableWords = pool.filter((w) => !playedWords.includes(w.word));
    if (availableWords.length === 0) {
      // Clear history if we run out of words
      availableWords = pool;
      setPlayedWords([]);
    }

    // Pick a random word from the remaining list
    const selectedWordObj = availableWords[Math.floor(Math.random() * availableWords.length)] || pool[0];
    const newWord = selectedWordObj.word;
    
    // Choose Hint Level randomly: "hint is supposed to be medium hint to hard hint randomly okay"
    const randomHintLevel: 'medium' | 'hard' = Math.random() < 0.5 ? 'medium' : 'hard';
    const chosenHint = selectedWordObj.hints[randomHintLevel];

    // 2. Manage Fun Mode activation
    // "also fun mode should not repeat before finishing 7 random rounds"
    // "When in fun mode no body should know it is fun mode only that every one should be imposter."
    let funActive = false;
    if (setupFunMode) {
      const roundsSinceLastFun = roundNumber - lastFunRound;
      // It has a random chance of triggering, provided at least 7 rounds have passed since the last Fun Mode
      if (roundsSinceLastFun >= 7 && Math.random() < 0.35) {
        funActive = true;
        setLastFunRound(roundNumber);
      }
    }

    // 3. Set Up Roles for this Round
    const totalPlayers = players.length;
    let imposterIndices: Set<number> = new Set();

    if (funActive) {
      // Fun Mode Active: EVERYONE is assigned as an imposter!
      // (They don't know this, so they'll see the Imposter card & hint screen)
    } else {
      // Regular Round: Randomly choose specified amount of Imposters
      const maxAllowed = Math.min(setupNumImposters, totalPlayers - 2);
      while (imposterIndices.size < maxAllowed) {
        const randIndex = Math.floor(Math.random() * totalPlayers);
        imposterIndices.add(randIndex);
      }
    }

    const updatedPlayers = players.map((player, idx) => {
      const isImposter = funActive || imposterIndices.has(idx);
      return {
        ...player,
        role: (isImposter ? 'imposter' : 'civilian') as 'civilian' | 'imposter',
        isAlive: true,
        votesReceived: 0
      };
    });

    // 4. Randomly select who starts the first discussion
    const speakerIndex = Math.floor(Math.random() * totalPlayers);
    const speakerId = updatedPlayers[speakerIndex].id;

    // Save states
    setPlayers(updatedPlayers);
    setPlayedWords((prev) => [...prev, newWord]);
    setCurrentWord(newWord);
    setCurrentHint(chosenHint);
    setIsFunModeActive(funActive);
    setFirstDiscussionPlayerId(speakerId);
    setCurrentRevealPlayerIndex(0);
    setVotes({});
    setPhase('reveal');
  };

  // Triggers game launch on the Setup screen
  const handleStartGameSetup = (settings: {
    selectedCategories: string[];
    numImposters: number;
    funModeEnabled: boolean;
    discussionTimerEnabled: boolean;
  }) => {
    setSelectedCategories(settings.selectedCategories);
    setNumImposters(settings.numImposters);
    setFunModeEnabled(settings.funModeEnabled);
    setDiscussionTimerEnabled(settings.discussionTimerEnabled);

    // Launch the game round with these fresh configurations
    startNewRound(settings.selectedCategories, settings.numImposters, settings.funModeEnabled);
  };

  // Moves onto next player on Pass Device reveal phase
  const handleNextPlayerReveal = () => {
    if (currentRevealPlayerIndex < players.length - 1) {
      setCurrentRevealPlayerIndex((prev) => prev + 1);
    }
  };

  // Called when all players have privately checked their card
  const handleRevealComplete = () => {
    setPhase('discussion');
  };

  // Called when votes are complete
  const handleCompleteVotes = (votedId: string, finalVotes: Record<string, string>) => {
    setVotedOutPlayerId(votedId);
    setVotes(finalVotes);
    setPhase('result');
  };

  // Distribute scores after result
  const handleDistributeScores = (gains: Record<string, number>) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((p) => ({
        ...p,
        score: p.score + (gains[p.id] || 0)
      }))
    );
  };

  // Launch another round
  const handleNextRound = () => {
    setRoundNumber((prev) => prev + 1);
    startNewRound(selectedCategories, numImposters, funModeEnabled);
  };

  const handleNavigate = (targetPhase: GamePhase) => {
    setPhase(targetPhase);
  };

  return (
    <div className="relative min-h-screen bg-cosmic-dark cosmic-grid overflow-hidden flex flex-col justify-center py-6 px-4">
      {/* Dynamic transition effects */}
      <AnimatePresence mode="wait">
        <motion.div
          key={phase}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="relative z-10 w-full"
        >
          {phase === 'menu' && <MainMenu onNavigate={handleNavigate} />}
          {phase === 'about' && <About onNavigate={handleNavigate} />}
          {phase === 'how-to-play' && <HowToPlay onNavigate={handleNavigate} />}
          {phase === 'players' && (
            <PlayersSetup
              initialPlayers={players}
              onSavePlayers={setPlayers}
              onNavigate={handleNavigate}
            />
          )}
          {phase === 'setup' && (
            <GameSetup
              players={players}
              onNavigate={handleNavigate}
              onStartGame={handleStartGameSetup}
            />
          )}
          {phase === 'reveal' && (
            <PassDevice
              players={players}
              currentRevealPlayerIndex={currentRevealPlayerIndex}
              currentWord={currentWord}
              currentHint={currentHint}
              isFunModeActive={isFunModeActive}
              onNextPlayer={handleNextPlayerReveal}
              onRevealComplete={handleRevealComplete}
            />
          )}
          {phase === 'discussion' && (
            <Discussion
              players={players}
              firstDiscussionPlayerId={firstDiscussionPlayerId}
              discussionTimerEnabled={discussionTimerEnabled}
              onNavigate={handleNavigate}
            />
          )}
          {phase === 'voting' && <Voting players={players} onCompleteVotes={handleCompleteVotes} />}
          {phase === 'result' && (
            <Result
              players={players}
              votedOutPlayerId={votedOutPlayerId}
              currentWord={currentWord}
              isFunModeActive={isFunModeActive}
              onNavigate={handleNavigate}
              onDistributeScores={handleDistributeScores}
              votes={votes}
            />
          )}
          {phase === 'leaderboard' && (
            <Leaderboard
              players={players}
              onNextRound={handleNextRound}
              onNavigate={handleNavigate}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
