/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Play, Pause, RotateCcw, AlertCircle, ArrowRight, MessageCircle } from 'lucide-react';
import { Player, GamePhase } from '../types';

interface DiscussionProps {
  players: Player[];
  firstDiscussionPlayerId: string;
  discussionTimerEnabled: boolean;
  onNavigate: (phase: GamePhase) => void;
}

export default function Discussion({
  players,
  firstDiscussionPlayerId,
  discussionTimerEnabled,
  onNavigate
}: DiscussionProps) {
  const [timeLeft, setTimeLeft] = useState(60);
  const [isActive, setIsActive] = useState(true);

  const speaker = players.find((p) => p.id === firstDiscussionPlayerId) || players[0];

  // Timer Tick
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (discussionTimerEnabled && isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft, discussionTimerEnabled]);

  const handleToggleTimer = () => {
    setIsActive(!isActive);
  };

  const handleResetTimer = () => {
    setTimeLeft(60);
    setIsActive(true);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Circular timer details
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (timeLeft / 60) * circumference;

  return (
    <div className="max-w-md mx-auto px-4 py-6 flex flex-col justify-between min-h-[85vh] text-center">
      {/* Title */}
      <div>
        <span className="font-display font-black text-xs uppercase tracking-widest text-imposter-cyan bg-imposter-cyan/10 px-4 py-1.5 rounded-full border border-imposter-cyan/25">
          Step 2 of 4
        </span>
        <h2 className="font-display text-4xl font-black uppercase text-white mt-8 tracking-wide">
          Discuss
        </h2>
      </div>

      {/* Main Box containing First Speaker and optional Timer */}
      <div className="my-6 space-y-6">
        {/* First Speaker Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-cosmic-purple/40 to-cosmic-deep border border-cosmic-purple rounded-3xl p-6 relative overflow-hidden"
        >
          {/* Accent light decoration */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-imposter-cyan via-purple-500 to-imposter-pink" />

          <MessageCircle className="w-10 h-10 text-imposter-cyan mx-auto mb-3" />
          <p className="text-xs uppercase font-mono tracking-widest text-gray-400">
            Discussion Starter:
          </p>
          <h3 className="font-display font-black text-2xl text-imposter-cyan uppercase tracking-wide mt-1.5 glow-text-cyan">
            {speaker?.name}
          </h3>
          <p className="text-xs text-gray-300 max-w-xs mx-auto leading-relaxed mt-2.5">
            Starts the first speech! Describe your word carefully to prove you know it, but do not say the word itself.
          </p>
        </motion.div>

        {/* Discussion Timer Card */}
        {discussionTimerEnabled && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-cosmic-purple/20 border border-cosmic-purple/40 rounded-3xl p-6 flex flex-col items-center justify-center gap-4"
          >
            {/* Visual Circular Timer */}
            <div className="relative w-28 h-28">
              <svg className="w-full h-full transform -rotate-90">
                {/* Background Track */}
                <circle
                  cx="56"
                  cy="56"
                  r={radius}
                  className="stroke-cosmic-purple/40 fill-none"
                  strokeWidth="8"
                />
                {/* Progress bar */}
                <circle
                  cx="56"
                  cy="56"
                  r={radius}
                  className={`fill-none transition-all duration-1000 ${
                    timeLeft <= 10 ? 'stroke-imposter-pink' : 'stroke-imposter-cyan'
                  }`}
                  strokeWidth="8"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                />
              </svg>
              {/* Digital Time Center */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className={`font-mono text-xl font-bold ${timeLeft <= 10 ? 'text-imposter-pink text-xl font-black animate-pulse' : 'text-white'}`}>
                  {formatTime(timeLeft)}
                </span>
                <span className="text-[9px] text-gray-400 font-mono tracking-wider uppercase">
                  Remaining
                </span>
              </div>
            </div>

            {/* Timer Controls */}
            <div className="flex items-center gap-4">
              <button
                id="timer-reset"
                onClick={handleResetTimer}
                className="p-3 bg-cosmic-purple/50 rounded-full border border-cosmic-purple/80 hover:border-gray-500 text-white transition-all cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                id="timer-play-pause"
                onClick={handleToggleTimer}
                className={`p-4 rounded-full flex items-center justify-center text-cosmic-dark transition-all cursor-pointer shadow-md ${
                  timeLeft === 0
                    ? 'bg-gray-600 cursor-not-allowed text-gray-400'
                    : isActive
                    ? 'bg-imposter-pink hover:bg-imposter-pink/90 glow-pink'
                    : 'bg-imposter-cyan hover:bg-imposter-cyan/90 glow-cyan'
                }`}
                disabled={timeLeft === 0}
              >
                {isActive ? <Pause className="w-5 h-5 fill-cosmic-dark" /> : <Play className="w-5 h-5 fill-cosmic-dark" />}
              </button>
            </div>
          </motion.div>
        )}

        {/* Tip Banner */}
        <div className="bg-cosmic-purple/10 border border-cosmic-purple/20 rounded-2xl p-4 flex items-start gap-3 text-left max-w-sm mx-auto">
          <AlertCircle className="w-5 h-5 text-imposter-yellow shrink-0 mt-0.5" />
          <p className="text-xs text-gray-400 leading-normal">
            <span className="text-white font-semibold block mb-0.5">Advice for Civilians:</span>
            Look for hesitant behavior. Anyone whose hints are slightly generic could be an Imposter!
          </p>
        </div>
      </div>

      {/* Proceed to Vote Button */}
      <motion.button
        id="btn-discussion-vote"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => onNavigate('voting')}
        className="w-full bg-gradient-to-r from-imposter-pink to-imposter-orange text-white font-display font-black text-lg py-4 px-6 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-transform duration-100 glow-pink cursor-pointer flex items-center justify-center gap-2"
      >
        <span>Proceed to Vote 🗳️</span>
        <ArrowRight className="w-5 h-5" />
      </motion.button>
    </div>
  );
}
