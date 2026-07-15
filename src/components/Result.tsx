/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Shield, Eye, Trophy, AlertTriangle, ArrowRight, Check } from 'lucide-react';
import { Player, GamePhase } from '../types';

interface ResultProps {
  players: Player[];
  votedOutPlayerId: string;
  currentWord: string;
  isFunModeActive: boolean;
  onNavigate: (phase: GamePhase) => void;
  onDistributeScores: (gains: Record<string, number>) => void;
  votes: Record<string, string>;
}

export default function Result({
  players,
  votedOutPlayerId,
  currentWord,
  isFunModeActive,
  onNavigate,
  onDistributeScores,
  votes
}: ResultProps) {
  const [imposterGuessedRight, setImposterGuessedRight] = useState<boolean | null>(null);
  const [scoresApplied, setScoresApplied] = useState(false);

  const suspect = players.find((p) => p.id === votedOutPlayerId) || players[0];
  const isSuspectImposter = suspect?.role === 'imposter' || isFunModeActive;
  const imposters = players.filter((p) => p.role === 'imposter');

  // Let's build the score distribution logic!
  const applyScoresAndNavigate = () => {
    if (scoresApplied) {
      onNavigate('leaderboard');
      return;
    }

    const scoreGains: Record<string, number> = {};

    players.forEach((player) => {
      scoreGains[player.id] = 0;
    });

    if (isFunModeActive) {
      // Fun Mode: everyone was an Imposter!
      // Everyone gets some points if they survived, or just flat bonus for surviving banishment
      players.forEach((player) => {
        if (player.id !== votedOutPlayerId) {
          scoreGains[player.id] = 15; // survived
        } else {
          scoreGains[player.id] = 5; // caught but participated
        }
      });
    } else {
      // Normal Mode scoring
      // Only players who correctly guessed/voted for the Imposter get points!
      const imposters = players.filter((p) => p.role === 'imposter');
      const imposterIds = imposters.map((p) => p.id);

      players.forEach((player) => {
        if (player.role === 'civilian') {
          const votedId = votes[player.id];
          if (votedId && imposterIds.includes(votedId)) {
            scoreGains[player.id] = 15; // correctly guessed! +15 points
          } else {
            scoreGains[player.id] = 0; // wrong guess!
          }
        } else if (player.role === 'imposter') {
          // If the imposter survived, they win!
          if (player.id !== votedOutPlayerId) {
            scoreGains[player.id] = 20; // +20 points for surviving
          } else {
            scoreGains[player.id] = 0;
          }
        }
      });

      // Did the imposter guess the word correctly?
      if (imposterGuessedRight === true) {
        players.forEach((player) => {
          if (player.role === 'imposter') {
            scoreGains[player.id] += 15; // +15 bonus points
          }
        });
      }
    }

    onDistributeScores(scoreGains);
    setScoresApplied(true);
    onNavigate('leaderboard');
  };

  return (
    <div className="max-w-md mx-auto px-4 py-6 flex flex-col justify-between min-h-[85vh] text-center">
      {/* Title Header */}
      <div>
        <span className="font-display font-black text-xs uppercase tracking-widest text-imposter-yellow bg-imposter-yellow/10 px-4 py-1.5 rounded-full border border-imposter-yellow/25">
          Step 4 of 4
        </span>
        <h2 className="font-display text-4xl font-black uppercase text-white mt-8 tracking-wide">
          Bust Reveal!
        </h2>
      </div>

      {/* Main Verdict Block */}
      <div className="my-6 space-y-6">
        {/* Suspect Verdict Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`border-2 rounded-3xl p-6 relative overflow-hidden ${
            isSuspectImposter
              ? 'border-imposter-cyan bg-imposter-cyan/5 glow-cyan'
              : 'border-imposter-pink bg-imposter-pink/5 glow-pink'
          }`}
        >
          {isSuspectImposter ? (
            <>
              {/* Imposter Caught */}
              <div className="w-16 h-16 rounded-2xl bg-imposter-cyan/15 flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-imposter-cyan fill-imposter-cyan/10" />
              </div>
              <h3 className="font-display font-black text-3xl text-imposter-cyan uppercase tracking-wide glow-text-cyan">
                Imposter Caught!
              </h3>
              <p className="text-gray-300 font-medium mt-2">
                <span className="text-white font-bold">{suspect?.name}</span> was indeed an Imposter!
              </p>
              <p className="text-xs text-gray-400 mt-2">
                {isFunModeActive ? "Wait, actually EVERYONE was an Imposter this round! (Fun Mode Chaos!)" : "The Civilians win this round of questioning!"}
              </p>
            </>
          ) : (
            <>
              {/* Civilian Busted */}
              <div className="w-16 h-16 rounded-2xl bg-imposter-pink/15 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-imposter-pink" />
              </div>
              <h3 className="font-display font-black text-3xl text-imposter-pink uppercase tracking-wide glow-text-pink">
                Civilian Busted!
              </h3>
              <p className="text-gray-300 font-medium mt-2">
                <span className="text-white font-bold">{suspect?.name}</span> was a regular Civilian!
              </p>
              <p className="text-xs text-gray-400 mt-2">
                The actual Imposter has survived the banishment and wins!
              </p>

              <div className="mt-4 p-3.5 rounded-2xl bg-cosmic-dark/60 border border-imposter-pink/20 text-center">
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block">
                  {imposters.length > 1 ? 'The actual Imposters were:' : 'The actual Imposter was:'}
                </span>
                <span className="text-xl font-display font-black text-imposter-cyan uppercase tracking-wide block mt-1 glow-text-cyan">
                  {imposters.map((imp) => imp.name).join(', ')}
                </span>
              </div>
            </>
          )}
        </motion.div>

        {/* Secret Word Revealed */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-cosmic-purple/20 border border-cosmic-purple/40 rounded-2xl p-4"
        >
          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
            The Secret Word Was:
          </span>
          <h4 className="font-display font-black text-2xl text-imposter-cyan uppercase tracking-wider mt-1.5 glow-text-cyan">
            {currentWord}
          </h4>
        </motion.div>

        {/* Individual Guessing Results */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-cosmic-purple/20 border border-cosmic-purple/40 rounded-2xl p-4 text-left space-y-3"
        >
          <div className="flex justify-between items-center border-b border-cosmic-purple/60 pb-2">
            <span className="font-display font-bold text-xs text-white uppercase tracking-wide">
              Who Guessed Correctly?
            </span>
            <span className="text-[10px] font-mono text-gray-400">
              Voter ➔ Suspect
            </span>
          </div>
          <div className="space-y-2 max-h-[22vh] overflow-y-auto pr-1 custom-scrollbar">
            {players.map((voter) => {
              const votedId = votes[voter.id];
              const votedPlayer = players.find((p) => p.id === votedId);
              
              if (!votedPlayer) return null;

              let isGuessCorrect = false;
              if (isFunModeActive) {
                // In Fun Mode, everyone is an imposter
                isGuessCorrect = true;
              } else {
                const imposters = players.filter((p) => p.role === 'imposter');
                const imposterIds = imposters.map((p) => p.id);
                isGuessCorrect = voter.role === 'civilian' && imposterIds.includes(votedPlayer.id);
              }

              return (
                <div key={voter.id} className="flex justify-between items-center text-xs p-2 rounded-xl bg-cosmic-dark/40 border border-cosmic-purple/30">
                  <div className="truncate max-w-[150px]">
                    <span className="font-semibold text-white">{voter.name}</span>
                    <span className="text-gray-500 font-mono text-[10px] block">
                      {voter.role === 'imposter' ? 'Imposter' : 'Civilian'}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 font-medium">➔</span>
                    <span className="font-semibold text-gray-300 truncate max-w-[100px]">{votedPlayer.name}</span>
                    {voter.role === 'civilian' ? (
                      isGuessCorrect ? (
                        <span className="bg-emerald-500/10 text-emerald-400 text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border border-emerald-500/20">
                          +15 pts
                        </span>
                      ) : (
                        <span className="bg-imposter-pink/10 text-imposter-pink text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border border-imposter-pink/20">
                          +0 pts
                        </span>
                      )
                    ) : (
                      <span className="bg-cosmic-purple/60 text-gray-500 text-[10px] font-mono px-1.5 py-0.5 rounded">
                        Blended
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Imposter Bonus Guessing Card (Normal Mode only, when imposter is caught) */}
        {!isFunModeActive && isSuspectImposter && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-cosmic-purple/10 border border-cosmic-purple/20 rounded-2xl p-5 space-y-3 max-w-sm mx-auto"
          >
            <h5 className="font-display font-semibold text-sm text-white">
              Imposter Guessing Bonus
            </h5>
            <p className="text-xs text-gray-400 leading-normal">
              If the caught Imposter guessed the secret word correctly from the discussion, they win bonus points!
            </p>

            <div className="flex gap-3 justify-center pt-1.5">
              <button
                id="imposter-guess-yes"
                onClick={() => setImposterGuessedRight(true)}
                className={`flex-1 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
                  imposterGuessedRight === true
                    ? 'bg-imposter-cyan border-imposter-cyan text-cosmic-dark'
                    : 'bg-cosmic-purple/30 border-cosmic-purple text-gray-400 hover:text-white'
                }`}
              >
                <Check className="w-4 h-4" />
                <span>Yes, Guessed it</span>
              </button>

              <button
                id="imposter-guess-no"
                onClick={() => setImposterGuessedRight(false)}
                className={`flex-1 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
                  imposterGuessedRight === false
                    ? 'bg-imposter-pink border-imposter-pink text-white'
                    : 'bg-cosmic-purple/30 border-cosmic-purple text-gray-400 hover:text-white'
                }`}
              >
                <AlertTriangle className="w-4 h-4" />
                <span>No, Failed</span>
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Action button */}
      <motion.button
        id="btn-verdict-continue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={applyScoresAndNavigate}
        className="w-full bg-gradient-to-r from-imposter-cyan to-emerald-400 text-cosmic-dark font-display font-black text-lg py-4 px-6 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-transform duration-100 glow-cyan cursor-pointer flex items-center justify-center gap-2"
      >
        <span>See Leaderboard & Standings</span>
        <Trophy className="w-5 h-5 fill-cosmic-dark/10 text-cosmic-dark" />
      </motion.button>
    </div>
  );
}
