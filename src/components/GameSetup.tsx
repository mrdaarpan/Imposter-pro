/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, HelpCircle, Plus, Minus, Info, Sparkles, Check } from 'lucide-react';
import { Player, GamePhase } from '../types';
import { categoriesData } from '../wordsData';

interface GameSetupProps {
  players: Player[];
  onStartGame: (settings: {
    selectedCategories: string[];
    numImposters: number;
    funModeEnabled: boolean;
    discussionTimerEnabled: boolean;
  }) => void;
  onNavigate: (phase: GamePhase) => void;
}

export default function GameSetup({ players, onStartGame, onNavigate }: GameSetupProps) {
  const [numImposters, setNumImposters] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['animals', 'food']);
  const [funModeEnabled, setFunModeEnabled] = useState(false);
  const [discussionTimerEnabled, setDiscussionTimerEnabled] = useState(true);

  // Maximum imposters allowed is players.length - 2
  const maxImposters = Math.max(1, players.length - 2);

  const handleIncrementImposters = () => {
    if (numImposters < maxImposters) {
      setNumImposters(numImposters + 1);
    }
  };

  const handleDecrementImposters = () => {
    if (numImposters > 1) {
      setNumImposters(numImposters - 1);
    }
  };

  const toggleCategory = (id: string) => {
    if (selectedCategories.includes(id)) {
      // Don't allow deselecting all categories
      if (selectedCategories.length > 1) {
        setSelectedCategories(selectedCategories.filter((c) => c !== id));
      }
    } else {
      setSelectedCategories([...selectedCategories, id]);
    }
  };

  const handleToggleSelectAll = () => {
    if (selectedCategories.length === categoriesData.length) {
      // Select just the first one so we don't have empty list
      setSelectedCategories([categoriesData[0].id]);
    } else {
      setSelectedCategories(categoriesData.map((c) => c.id));
    }
  };

  const handleStart = () => {
    if (selectedCategories.length === 0) return;
    onStartGame({
      selectedCategories,
      numImposters,
      funModeEnabled,
      discussionTimerEnabled
    });
  };

  return (
    <div className="max-w-md mx-auto px-4 py-6 flex flex-col justify-between min-h-[85vh]">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <button
              id="setup-back-btn"
              onClick={() => onNavigate('players')}
              className="p-2.5 bg-cosmic-purple/60 border border-cosmic-purple rounded-xl hover:bg-cosmic-purple text-white transition-all cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h2 className="font-display text-2xl font-black uppercase tracking-wider text-white">
              Setup
            </h2>
          </div>

          <button
            id="setup-help-btn"
            onClick={() => onNavigate('how-to-play')}
            className="p-2.5 bg-cosmic-purple/40 border border-cosmic-purple/60 rounded-xl hover:bg-cosmic-purple/80 hover:border-gray-500 text-gray-300 hover:text-white transition-all cursor-pointer"
          >
            <HelpCircle className="w-5 h-5" />
          </button>
        </div>

        {/* Number of Imposters Card */}
        <div className="bg-cosmic-purple/20 border border-cosmic-purple/40 rounded-3xl p-5 text-center mb-6 space-y-3">
          <h3 className="font-display font-bold text-xs uppercase tracking-widest text-gray-400">
            Number of Imposters
          </h3>

          <div className="flex items-center justify-center gap-6">
            <button
              id="imposters-minus"
              onClick={handleDecrementImposters}
              disabled={numImposters <= 1}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${
                numImposters <= 1
                  ? 'border-cosmic-purple text-gray-600 cursor-not-allowed opacity-30'
                  : 'border-imposter-pink/40 text-imposter-pink bg-imposter-pink/10 hover:bg-imposter-pink/20 hover:border-imposter-pink cursor-pointer'
              }`}
            >
              <Minus className="w-5 h-5" />
            </button>

            <span className="font-display text-5xl font-black text-white w-14">
              {numImposters}
            </span>

            <button
              id="imposters-plus"
              onClick={handleIncrementImposters}
              disabled={numImposters >= maxImposters}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${
                numImposters >= maxImposters
                  ? 'border-cosmic-purple text-gray-600 cursor-not-allowed opacity-30'
                  : 'border-imposter-cyan/40 text-imposter-cyan bg-imposter-cyan/10 hover:bg-imposter-cyan/20 hover:border-imposter-cyan cursor-pointer'
              }`}
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>

          <p className="text-[11px] font-mono text-gray-400">
            1 to {maxImposters} imposters allowed (based on {players.length} players)
          </p>
        </div>

        {/* Categories Section */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between px-1">
            <h3 className="font-display font-bold text-xs uppercase tracking-widest text-gray-400">
              Category Selection
            </h3>
            <button
              id="toggle-all-categories"
              onClick={handleToggleSelectAll}
              className="text-xs font-semibold text-imposter-cyan hover:underline cursor-pointer"
            >
              {selectedCategories.length === categoriesData.length ? 'Deselect All' : 'Select All'}
            </button>
          </div>

          {/* Grid of categories */}
          <div className="grid grid-cols-2 gap-2.5 max-h-[30vh] overflow-y-auto pr-1 custom-scrollbar">
            {categoriesData.map((cat) => {
              const isSelected = selectedCategories.includes(cat.id);
              return (
                <button
                  key={cat.id}
                  id={`cat-card-${cat.id}`}
                  onClick={() => toggleCategory(cat.id)}
                  className={`relative p-3.5 rounded-2xl border text-left flex flex-col justify-between transition-all cursor-pointer h-24 ${
                    isSelected
                      ? 'border-imposter-cyan bg-imposter-cyan/10 glow-cyan'
                      : 'border-cosmic-purple/60 bg-cosmic-purple/35 hover:border-gray-600'
                  }`}
                >
                  <span className="text-2xl">{cat.icon}</span>
                  <div>
                    <h4 className="font-display font-bold text-sm text-white leading-tight">
                      {cat.name.replace(/\s\p{Emoji}/u, '')}
                    </h4>
                    <p className="text-[10px] text-gray-400 font-mono mt-0.5">
                      {cat.words.length} words
                    </p>
                  </div>

                  {isSelected && (
                    <span className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-imposter-cyan flex items-center justify-center text-cosmic-dark">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Special Modes */}
        <div className="space-y-3">
          <h3 className="font-display font-bold text-xs uppercase tracking-widest text-gray-400 px-1">
            Special Modes
          </h3>

          <div className="space-y-2.5">
            {/* Fun Mode Card */}
            <div className="bg-cosmic-purple/20 border border-cosmic-purple/40 rounded-2xl p-4 flex items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-imposter-pink" />
                  <h4 className="font-display font-bold text-sm text-white">Fun Mode</h4>
                </div>
                <p className="text-xs text-gray-400 leading-normal max-w-xs">
                  At random rounds (7+ rounds in), EVERYONE becomes the imposter! Pure chaos!
                </p>
              </div>

              {/* Toggle Switch */}
              <button
                id="toggle-fun-mode"
                onClick={() => setFunModeEnabled(!funModeEnabled)}
                className={`w-12 h-6.5 rounded-full p-0.5 transition-colors cursor-pointer shrink-0 ${
                  funModeEnabled ? 'bg-imposter-pink' : 'bg-cosmic-purple'
                }`}
              >
                <div
                  className={`w-5.5 h-5.5 rounded-full bg-white transition-transform ${
                    funModeEnabled ? 'translate-x-5.5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* Discussion Timer Card */}
            <div className="bg-cosmic-purple/20 border border-cosmic-purple/40 rounded-2xl p-4 flex items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-imposter-yellow">⏱️</span>
                  <h4 className="font-display font-bold text-sm text-white">Discussion Timer</h4>
                </div>
                <p className="text-xs text-gray-400 leading-normal max-w-xs">
                  Adds an interactive countdown timer after everyone sees their word.
                </p>
              </div>

              {/* Toggle Switch */}
              <button
                id="toggle-discussion-timer"
                onClick={() => setDiscussionTimerEnabled(!discussionTimerEnabled)}
                className={`w-12 h-6.5 rounded-full p-0.5 transition-colors cursor-pointer shrink-0 ${
                  discussionTimerEnabled ? 'bg-imposter-cyan' : 'bg-cosmic-purple'
                }`}
              >
                <div
                  className={`w-5.5 h-5.5 rounded-full bg-white transition-transform ${
                    discussionTimerEnabled ? 'translate-x-5.5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Start Button */}
      <motion.button
        id="setup-start-btn"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={handleStart}
        className="w-full mt-8 bg-gradient-to-r from-imposter-pink to-imposter-orange text-white font-display font-black text-lg py-4 px-6 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-transform duration-100 glow-pink cursor-pointer"
      >
        START GAME 🚀
      </motion.button>
    </div>
  );
}
