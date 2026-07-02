/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, Unlock, Eye, ShieldAlert, Check, Smartphone, ArrowRight, Shield } from 'lucide-react';
import { Player } from '../types';

interface PassDeviceProps {
  players: Player[];
  currentRevealPlayerIndex: number;
  currentWord: string;
  currentHint: string;
  isFunModeActive: boolean;
  onRevealComplete: () => void;
  onNextPlayer: () => void;
}

export default function PassDevice({
  players,
  currentRevealPlayerIndex,
  currentWord,
  currentHint,
  isFunModeActive,
  onRevealComplete,
  onNextPlayer
}: PassDeviceProps) {
  const [screen, setScreen] = useState<'pass' | 'reveal'>('pass');
  const [isRevealed, setIsRevealed] = useState(false);

  const player = players[currentRevealPlayerIndex];
  const isLastPlayer = currentRevealPlayerIndex === players.length - 1;

  const handleStartReveal = () => {
    setScreen('reveal');
    setIsRevealed(false);
  };

  const handleNext = () => {
    setScreen('pass');
    setIsRevealed(false);
    if (isLastPlayer) {
      onRevealComplete();
    } else {
      onNextPlayer();
    }
  };

  // Touch handlers to support holding to reveal
  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    e.preventDefault();
    setIsRevealed(true);
  };

  const handleTouchEnd = () => {
    setIsRevealed(false);
  };

  // Toggle fallback for click users
  const handleToggleReveal = () => {
    setIsRevealed(!isRevealed);
  };

  return (
    <div className="max-w-md mx-auto px-4 py-6 flex flex-col justify-between min-h-[85vh] text-center">
      <AnimatePresence mode="wait">
        {screen === 'pass' ? (
          /* Step 1: Pass the Phone */
          <motion.div
            key="pass-screen"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="flex-1 flex flex-col justify-between py-8"
          >
            {/* Title / Header */}
            <div>
              <span className="font-display font-black text-xs uppercase tracking-widest text-imposter-cyan bg-imposter-cyan/10 px-4 py-1.5 rounded-full border border-imposter-cyan/25">
                Pass Phone
              </span>
              <h2 className="font-display text-4xl font-black uppercase text-white mt-8 tracking-wide">
                Pass the Phone
              </h2>
            </div>

            {/* Graphic Container */}
            <div className="my-8 flex flex-col items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-imposter-cyan/10 blur-2xl rounded-full w-32 h-32 -left-4" />
                <motion.div
                  animate={{
                    x: [-8, 8, -8],
                    rotate: [-3, 3, -3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  className="relative flex items-center justify-center w-32 h-32 bg-cosmic-purple/40 border border-cosmic-purple rounded-3xl"
                >
                  <Smartphone className="w-16 h-16 text-imposter-cyan" />
                  <ArrowRight className="w-8 h-8 text-imposter-cyan absolute -right-6 animate-pulse" />
                </motion.div>
              </div>

              <div className="mt-8 space-y-2 max-w-xs">
                <p className="text-gray-400 font-sans text-sm">Next Player to reveal:</p>
                <h3 className="font-display font-black text-2xl text-white tracking-wide uppercase">
                  {player?.name}
                </h3>
                <p className="text-xs text-gray-400 leading-normal">
                  Make sure no one else can see your screen before tapping "I'm Ready".
                </p>
              </div>
            </div>

            {/* Action */}
            <button
              id="pass-ready-btn"
              onClick={handleStartReveal}
              className="w-full bg-gradient-to-r from-imposter-cyan to-emerald-400 text-cosmic-dark font-display font-bold text-lg py-4 px-6 rounded-2xl transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer glow-cyan shadow-lg shadow-emerald-950/20"
            >
              I'm Ready
            </button>
          </motion.div>
        ) : (
          /* Step 2: Secret Identity Reveal */
          <motion.div
            key="reveal-screen"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="flex-1 flex flex-col justify-between py-6"
          >
            {/* Player Header */}
            <div>
              <span className="font-display font-black text-xs uppercase tracking-widest text-imposter-yellow bg-imposter-yellow/10 px-4 py-1.5 rounded-full border border-imposter-yellow/25">
                Player {currentRevealPlayerIndex + 1} of {players.length}
              </span>
              <h2 className="font-display text-4xl font-black uppercase text-white mt-8 tracking-wide">
                {player?.name}
              </h2>
            </div>

            {/* Identity Card and Press-To-Reveal Box */}
            <div className="my-6">
              <div className="bg-cosmic-purple/30 border border-cosmic-purple/60 rounded-3xl p-6 relative overflow-hidden min-h-[250px] flex flex-col items-center justify-center">
                {/* Visual scanned grid overlay when revealed */}
                {isRevealed && (
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-imposter-cyan/5 to-transparent h-1/2 w-full top-0 animate-[bounce_3s_infinite]" />
                )}

                <AnimatePresence mode="wait">
                  {!isRevealed ? (
                    /* Locked Face of Card */
                    <motion.div
                      key="locked"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="flex flex-col items-center gap-4"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-cosmic-deep border border-cosmic-purple/80 flex items-center justify-center">
                        <Lock className="w-8 h-8 text-imposter-pink animate-pulse" />
                      </div>
                      <p className="font-display text-lg font-bold text-gray-300">
                        Identity Secured
                      </p>
                      <p className="text-xs text-gray-400 max-w-xs leading-normal">
                        Press & hold the button below to see your secret role. Release to hide it instantly.
                      </p>
                    </motion.div>
                  ) : (
                    /* Unlocked / Revealed Face of Card */
                    <motion.div
                      key="unlocked"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex flex-col items-center gap-4"
                    >
                      {/* Badge */}
                      {player?.role === 'imposter' ? (
                        <div className="flex items-center gap-1.5 bg-imposter-pink/15 text-imposter-pink border border-imposter-pink/30 px-3.5 py-1.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider glow-pink">
                          <Eye className="w-4 h-4 fill-imposter-pink/10" />
                          <span>Imposter</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5 bg-imposter-cyan/15 text-imposter-cyan border border-imposter-cyan/30 px-3.5 py-1.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider glow-cyan">
                          <Shield className="w-4 h-4" />
                          <span>Civilian</span>
                        </div>
                      )}

                      {/* Secret Word or Hint display */}
                      <div className="space-y-2 max-w-xs mt-2">
                        {player?.role === 'civilian' ? (
                          <>
                            <p className="text-[10px] font-mono uppercase text-gray-400 tracking-widest">
                              Your Secret Word:
                            </p>
                            <h3 className="font-display font-black text-3xl sm:text-4xl text-imposter-cyan tracking-wider uppercase glow-text-cyan">
                              {currentWord}
                            </h3>
                            <p className="text-xs text-gray-300 leading-normal mt-2">
                              Give clever clues to others without saying the actual word.
                            </p>
                          </>
                        ) : (
                          <>
                            <p className="text-[10px] font-mono uppercase text-gray-400 tracking-widest">
                              Your Hint:
                            </p>
                            <div className="bg-imposter-pink/5 border border-imposter-pink/20 rounded-2xl p-4 mt-1">
                              <h3 className="font-sans font-semibold text-sm sm:text-base text-white tracking-wide leading-relaxed">
                                {currentHint}
                              </h3>
                            </div>
                            <p className="text-xs text-imposter-pink leading-normal font-semibold mt-2">
                              You don't know the word! Blend in and guess it from clues.
                            </p>
                          </>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Controls */}
            <div className="space-y-4">
              {/* Press-to-hold reveal button */}
              <button
                id="btn-reveal-hold"
                onMouseDown={handleTouchStart}
                onMouseUp={handleTouchEnd}
                onMouseLeave={handleTouchEnd}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onClick={handleToggleReveal}
                className={`w-full flex items-center justify-center gap-2 font-display font-bold text-base py-4 px-6 rounded-2xl border transition-all cursor-pointer select-none active:scale-[0.98] ${
                  isRevealed
                    ? 'bg-transparent border-imposter-cyan/60 text-imposter-cyan bg-imposter-cyan/5'
                    : 'bg-cosmic-purple border-cosmic-purple/80 hover:border-gray-500 text-white'
                }`}
              >
                {isRevealed ? (
                  <>
                    <Unlock className="w-5 h-5 text-imposter-cyan" />
                    <span>RELEASING HIDES IDENTITY</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-5 h-5 text-imposter-pink" />
                    <span>PRESS & HOLD TO REVEAL</span>
                  </>
                )}
              </button>

              {/* Advance Button (only after they know how to interact or click toggle) */}
              <button
                id="btn-reveal-advance"
                onClick={handleNext}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-imposter-pink to-imposter-orange text-white font-display font-bold text-base py-3.5 px-6 rounded-2xl transition-all cursor-pointer shadow-lg hover:scale-[1.01]"
              >
                <span>{isLastPlayer ? 'Go to Discussion' : 'Done, Pass Device'}</span>
                <Check className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
