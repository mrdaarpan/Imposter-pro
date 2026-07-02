/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, BookOpen, Users, HelpCircle, Flame, MessageSquare, Award } from 'lucide-react';
import { GamePhase } from '../types';

interface HowToPlayProps {
  onNavigate: (phase: GamePhase) => void;
}

export default function HowToPlay({ onNavigate }: HowToPlayProps) {
  const steps = [
    {
      icon: <Users className="w-5 h-5 text-imposter-cyan" />,
      title: '1. Gather Players',
      text: 'Add 3 to 49 players on the setup screen. Assign custom names for your friends.'
    },
    {
      icon: <HelpCircle className="w-5 h-5 text-imposter-yellow" />,
      title: '2. Pass the Phone privately',
      text: 'Each player takes the phone and holds down the "Reveal Role" lock. Keep the screen private! Civilians get a word (e.g., LION); Imposters get a broad hint (e.g., "A powerful apex predator").'
    },
    {
      icon: <Flame className="w-5 h-5 text-imposter-pink" />,
      title: '3. Watch out for FUN MODE!',
      text: 'If Fun Mode is enabled, there is a chance that in any random round, EVERY SINGLE PLAYER is assigned the Imposter role with a hint. Absolute chaos!'
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-emerald-400" />,
      title: '4. Describe & Discuss',
      text: 'Speak in turns to describe your secret word. Civilians must be specific enough to prove their identity, but vague enough so Imposters don\'t guess the word. Imposters must bluff to fit in!'
    },
    {
      icon: <Award className="w-5 h-5 text-imposter-orange" />,
      title: '5. Vote and Score',
      text: 'After discussion, vote on who the Imposter is. Tally the votes. Caught imposters lose points, while surviving imposters or correct civilians gain points!'
    }
  ];

  return (
    <div className="max-w-md mx-auto px-4 py-6 flex flex-col justify-between min-h-[85vh]">
      <div>
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <button
            id="howtoplay-back-btn"
            onClick={() => onNavigate('menu')}
            className="p-2.5 bg-cosmic-purple/60 border border-cosmic-purple rounded-xl hover:bg-cosmic-purple text-white transition-all cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className="font-display text-2xl font-bold uppercase tracking-wider text-white">
            How To Play
          </h2>
        </div>

        {/* List of steps */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-cosmic-purple/40 border border-cosmic-purple/50 rounded-2xl p-4 flex gap-4 items-start"
            >
              <div className="p-2.5 rounded-xl bg-cosmic-deep border border-cosmic-purple shrink-0 mt-0.5">
                {step.icon}
              </div>
              <div className="space-y-1">
                <h3 className="font-display font-semibold text-white text-base">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.button
        id="howtoplay-back-to-menu"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        onClick={() => onNavigate('menu')}
        className="w-full mt-6 bg-cosmic-purple hover:bg-cosmic-purple/80 text-white border border-cosmic-purple font-display font-semibold py-3.5 px-6 rounded-2xl transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
      >
        I'm Ready to Play!
      </motion.button>
    </div>
  );
}
