/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Play, BookOpen, Info, Eye } from 'lucide-react';
import { GamePhase } from '../types';

interface MainMenuProps {
  onNavigate: (phase: GamePhase) => void;
}

export default function MainMenu({ onNavigate }: MainMenuProps) {
  return (
    <div className="flex flex-col items-center justify-between min-h-[85vh] text-center px-4 py-8">
      {/* Spacer */}
      <div />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex flex-col items-center"
      >
        {/* Glowing Eye Icon container */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-[#00f0b5] opacity-20 blur-2xl rounded-full w-24 h-24 -left-2 -top-2 animate-pulse" />
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 2, -2, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="relative flex items-center justify-center w-24 h-24 bg-gradient-to-b from-cosmic-purple to-cosmic-deep border border-cosmic-purple rounded-full shadow-2xl"
          >
            <Eye className="w-12 h-12 text-imposter-cyan glow-text-cyan" />
          </motion.div>
        </div>

        {/* Title */}
        <h1 className="font-display text-4xl sm:text-5xl font-black tracking-wider uppercase mb-1">
          <span className="text-white">Imposter</span>
          <br />
          <span className="text-imposter-orange bg-clip-text text-transparent bg-gradient-to-r from-imposter-orange to-imposter-yellow font-black">
            Who?
          </span>
        </h1>
        <p className="font-sans text-xs sm:text-sm tracking-widest text-gray-400 font-medium uppercase">
          Find the Fake • Word Game
        </p>
      </motion.div>

      {/* Buttons Block */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        className="w-full max-w-sm space-y-4"
      >
        <button
          id="btn-play"
          onClick={() => onNavigate('players')}
          className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-imposter-cyan to-emerald-400 text-cosmic-dark font-display font-bold text-lg py-4 px-6 rounded-2xl shadow-lg shadow-emerald-900/30 hover:scale-[1.02] active:scale-[0.98] transition-transform duration-100 glow-cyan cursor-pointer"
        >
          <Play className="w-5 h-5 fill-cosmic-dark" />
          <span>PLAY GAME</span>
        </button>

        <button
          id="btn-how-to-play"
          onClick={() => onNavigate('how-to-play')}
          className="w-full flex items-center justify-center gap-3 bg-cosmic-purple/60 hover:bg-cosmic-purple/80 text-white border border-cosmic-purple font-display font-medium py-3.5 px-6 rounded-2xl transition-all hover:border-gray-500 hover:scale-[1.01] cursor-pointer"
        >
          <BookOpen className="w-5 h-5 text-imposter-yellow" />
          <span>How to Play</span>
        </button>

        <button
          id="btn-about"
          onClick={() => onNavigate('about')}
          className="w-full flex items-center justify-center gap-3 bg-cosmic-purple/30 hover:bg-cosmic-purple/50 text-gray-300 border border-cosmic-purple/40 font-display font-medium py-3.5 px-6 rounded-2xl transition-all hover:scale-[1.01] cursor-pointer"
        >
          <Info className="w-5 h-5 text-gray-400" />
          <span>About Game</span>
        </button>
      </motion.div>

      {/* Bottom info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-[11px] font-mono text-gray-500 tracking-wider mt-8"
      >
        Offline • No internet needed • v1.4.90
      </motion.div>
    </div>
  );
}
