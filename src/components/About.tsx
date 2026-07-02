/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Mail, Code, HelpCircle, ShieldAlert, WifiOff } from 'lucide-react';
import { GamePhase } from '../types';

interface AboutProps {
  onNavigate: (phase: GamePhase) => void;
}

export default function About({ onNavigate }: AboutProps) {
  return (
    <div className="max-w-md mx-auto px-4 py-6 flex flex-col justify-between min-h-[85vh]">
      <div>
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <button
            id="about-back-btn"
            onClick={() => onNavigate('menu')}
            className="p-2.5 bg-cosmic-purple/60 border border-cosmic-purple rounded-xl hover:bg-cosmic-purple text-white transition-all cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className="font-display text-2xl font-bold uppercase tracking-wider text-white">
            About Game
          </h2>
        </div>

        {/* Content Cards */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          {/* Main Info Card */}
          <div className="bg-cosmic-purple/40 border border-cosmic-purple/60 rounded-2xl p-5 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-imposter-cyan to-emerald-400 flex items-center justify-center text-cosmic-dark font-display font-black text-xl">
                I?W
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white">IMPOSTER WHO?</h3>
                <p className="text-xs text-gray-400">Offline Social Deduction Word Game</p>
              </div>
            </div>

            <div className="border-t border-cosmic-purple/60 pt-4 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400 flex items-center gap-2">
                  <Code className="w-4 h-4 text-imposter-cyan" />
                  Developer
                </span>
                <span className="text-white font-semibold">Darpan Bimali</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-imposter-pink" />
                  Contact Email
                </span>
                <a
                  href="mailto:darpanbimali30@gmail.com"
                  className="text-imposter-cyan hover:underline font-medium"
                >
                  darpanbimali30@gmail.com
                </a>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-imposter-yellow" />
                  App Version
                </span>
                <span className="font-mono text-imposter-yellow bg-imposter-yellow/10 px-2 py-0.5 rounded text-xs font-bold">
                  v1.4.90
                </span>
              </div>
            </div>
          </div>

          {/* Features highlight */}
          <div className="bg-cosmic-purple/20 border border-cosmic-purple/30 rounded-2xl p-5 space-y-3">
            <h4 className="font-display font-semibold text-sm uppercase text-gray-300 tracking-wider">
              Game Specifications
            </h4>
            
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-cosmic-purple/40 border border-cosmic-purple/40 flex flex-col gap-1.5">
                <WifiOff className="w-5 h-5 text-imposter-cyan" />
                <span className="text-white font-medium">100% Offline</span>
                <span className="text-gray-400 leading-tight">No internet connection required. Pure local multiplayer fun.</span>
              </div>

              <div className="p-3 rounded-xl bg-cosmic-purple/40 border border-cosmic-purple/40 flex flex-col gap-1.5">
                <ShieldAlert className="w-5 h-5 text-imposter-pink" />
                <span className="text-white font-medium">Privacy Reveal</span>
                <span className="text-gray-400 leading-tight">Hold-to-reveal mechanisms prevent surrounding players peeking.</span>
              </div>
            </div>
          </div>

          {/* A short note of appreciation */}
          <p className="text-xs text-gray-500 text-center leading-relaxed italic px-2">
            "Designed to bring people together, test your vocabulary, and spark hilarious arguments. Thank you for playing!"
          </p>
        </motion.div>
      </div>

      <motion.button
        id="about-back-to-menu"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        onClick={() => onNavigate('menu')}
        className="w-full mt-6 bg-cosmic-purple hover:bg-cosmic-purple/80 text-white border border-cosmic-purple font-display font-semibold py-3.5 px-6 rounded-2xl transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
      >
        Back to Main Menu
      </motion.button>
    </div>
  );
}
