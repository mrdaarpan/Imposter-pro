/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Trophy, RefreshCw, Home, Award, Star } from 'lucide-react';
import { Player, GamePhase } from '../types';

interface LeaderboardProps {
  players: Player[];
  onNextRound: () => void;
  onNavigate: (phase: GamePhase) => void;
}

export default function Leaderboard({ players, onNextRound, onNavigate }: LeaderboardProps) {
  // Sort players by score
  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

  // Top 3 for podium
  const firstPlace = sortedPlayers[0];
  const secondPlace = sortedPlayers[1];
  const thirdPlace = sortedPlayers[2];

  // Helper colors for rank highlights
  const getRankBadgeClass = (rank: number) => {
    switch (rank) {
      case 0:
        return 'bg-imposter-yellow text-cosmic-dark font-black';
      case 1:
        return 'bg-slate-300 text-cosmic-dark font-black';
      case 2:
        return 'bg-amber-600 text-white font-black';
      default:
        return 'bg-cosmic-purple text-gray-400';
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-6 flex flex-col justify-between min-h-[85vh] text-center">
      {/* Title */}
      <div>
        <span className="font-display font-black text-xs uppercase tracking-widest text-imposter-cyan bg-imposter-cyan/10 px-4 py-1.5 rounded-full border border-imposter-cyan/25">
          Leaderboard
        </span>
        <h2 className="font-display text-4xl font-black uppercase text-white mt-8 tracking-wide">
          Standings
        </h2>
      </div>

      {/* Podium Block (only if we have at least 3 players) */}
      <div className="my-6 space-y-6">
        {players.length >= 3 && (
          <div className="flex justify-center items-end gap-3.5 h-36 pt-6 relative px-4">
            {/* 2nd Place Podium */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex-1 flex flex-col items-center justify-end"
            >
              <span className="text-slate-300 font-display font-bold text-xs mb-1 truncate max-w-[90px]">
                {secondPlace?.name}
              </span>
              <div className="w-full bg-slate-300/10 border-t-2 border-x border-slate-300/40 rounded-t-xl h-14 flex flex-col justify-center items-center">
                <span className="text-slate-300 text-lg font-bold">2nd</span>
                <span className="text-[11px] font-mono text-gray-400 font-medium">
                  {secondPlace?.score} pts
                </span>
              </div>
            </motion.div>

            {/* 1st Place Podium (Middle, Taller) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex-1 flex flex-col items-center justify-end relative"
            >
              {/* Crown Icon */}
              <motion.div
                animate={{ rotate: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-7 text-imposter-yellow drop-shadow-lg"
              >
                👑
              </motion.div>
              <span className="text-imposter-yellow font-display font-black text-sm mb-1 truncate max-w-[90px] tracking-wide">
                {firstPlace?.name}
              </span>
              <div className="w-full bg-imposter-yellow/15 border-t-2 border-x border-imposter-yellow/40 rounded-t-2xl h-22 flex flex-col justify-center items-center shadow-lg shadow-imposter-yellow/5">
                <span className="text-imposter-yellow text-xl font-black">1st</span>
                <span className="text-xs font-mono text-white font-bold">
                  {firstPlace?.score} pts
                </span>
              </div>
            </motion.div>

            {/* 3rd Place Podium */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex-1 flex flex-col items-center justify-end"
            >
              <span className="text-amber-600 font-display font-bold text-xs mb-1 truncate max-w-[90px]">
                {thirdPlace?.name}
              </span>
              <div className="w-full bg-amber-600/10 border-t-2 border-x border-amber-600/40 rounded-t-xl h-10 flex flex-col justify-center items-center">
                <span className="text-amber-600 text-base font-bold">3rd</span>
                <span className="text-[10px] font-mono text-gray-400 font-medium">
                  {thirdPlace?.score} pts
                </span>
              </div>
            </motion.div>
          </div>
        )}

        {/* Full scrollable rankings table */}
        <div className="bg-cosmic-purple/20 border border-cosmic-purple/40 rounded-3xl p-4">
          <div className="max-h-[22vh] overflow-y-auto pr-1 custom-scrollbar space-y-2">
            {sortedPlayers.map((player, idx) => (
              <div
                key={player.id}
                className="flex items-center justify-between bg-cosmic-purple/35 border border-cosmic-purple/50 rounded-xl p-2.5 gap-4"
              >
                {/* Left: rank number and name */}
                <div className="flex items-center gap-3">
                  <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs ${getRankBadgeClass(idx)}`}>
                    {idx + 1}
                  </span>
                  <span className="font-sans font-bold text-sm text-white truncate max-w-[150px]">
                    {player.name}
                  </span>
                </div>

                {/* Right: Score */}
                <span className="font-mono text-sm text-imposter-cyan font-bold">
                  {player.score} pts
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leaderboard Action Controls */}
      <div className="grid grid-cols-2 gap-3.5 mt-4">
        <button
          id="btn-next-round"
          onClick={onNextRound}
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-imposter-cyan to-emerald-400 text-cosmic-dark font-display font-bold text-base py-4 px-4 rounded-2xl shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-transform duration-100 glow-cyan cursor-pointer"
        >
          <RefreshCw className="w-4 h-4 animate-spin-slow" />
          <span>Next Round</span>
        </button>

        <button
          id="btn-main-menu"
          onClick={() => onNavigate('menu')}
          className="flex items-center justify-center gap-2 bg-cosmic-purple hover:bg-cosmic-purple/80 text-white border border-cosmic-purple/60 font-display font-bold text-base py-4 px-4 rounded-2xl hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
        >
          <Home className="w-4 h-4 text-imposter-pink" />
          <span>Exit Menu</span>
        </button>
      </div>
    </div>
  );
}
