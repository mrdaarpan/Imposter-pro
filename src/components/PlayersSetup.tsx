/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, RotateCcw, Plus, X, User } from 'lucide-react';
import { Player, GamePhase } from '../types';

interface PlayersSetupProps {
  initialPlayers: Player[];
  onSavePlayers: (players: Player[]) => void;
  onNavigate: (phase: GamePhase) => void;
}

export default function PlayersSetup({
  initialPlayers,
  onSavePlayers,
  onNavigate
}: PlayersSetupProps) {
  // Use state to manage current list
  const [players, setPlayers] = useState<Player[]>(() => {
    if (initialPlayers.length >= 3) return initialPlayers;
    return [
      { id: '1', name: 'Player 1', score: 0, role: 'civilian', isAlive: true, votesReceived: 0 },
      { id: '2', name: 'Player 2', score: 0, role: 'civilian', isAlive: true, votesReceived: 0 },
      { id: '3', name: 'Player 3', score: 0, role: 'civilian', isAlive: true, votesReceived: 0 }
    ];
  });

  const listEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when adding new player
  const [shouldScroll, setShouldScroll] = useState(false);
  useEffect(() => {
    if (shouldScroll && listEndRef.current) {
      listEndRef.current.scrollIntoView({ behavior: 'smooth' });
      setShouldScroll(false);
    }
  }, [players.length, shouldScroll]);

  const handleAddPlayer = () => {
    if (players.length >= 49) return;
    const nextNum = players.length + 1;
    const newPlayer: Player = {
      id: Math.random().toString(36).substring(2, 9),
      name: `Player ${nextNum}`,
      score: 0,
      role: 'civilian',
      isAlive: true,
      votesReceived: 0
    };
    setPlayers([...players, newPlayer]);
    setShouldScroll(true);
  };

  const handleRemovePlayer = (id: string) => {
    if (players.length <= 3) return; // Keep minimum of 3
    setPlayers(players.filter((p) => p.id !== id));
  };

  const handleNameChange = (id: string, newName: string) => {
    setPlayers(
      players.map((p) => (p.id === id ? { ...p, name: newName } : p))
    );
  };

  const handleReset = () => {
    setPlayers([
      { id: '1', name: 'Player 1', score: 0, role: 'civilian', isAlive: true, votesReceived: 0 },
      { id: '2', name: 'Player 2', score: 0, role: 'civilian', isAlive: true, votesReceived: 0 },
      { id: '3', name: 'Player 3', score: 0, role: 'civilian', isAlive: true, votesReceived: 0 }
    ]);
  };

  const handleContinue = () => {
    if (players.length < 3) return;
    // Strip empty names and save
    const sanitized = players.map((p, idx) => ({
      ...p,
      name: p.name.trim() || `Player ${idx + 1}`
    }));
    onSavePlayers(sanitized);
    onNavigate('setup');
  };

  // Helper colors for player icons
  const iconColors = [
    'bg-imposter-cyan text-cosmic-dark',
    'bg-imposter-pink text-white',
    'bg-imposter-yellow text-cosmic-dark',
    'bg-imposter-orange text-white',
    'bg-purple-500 text-white',
    'bg-indigo-500 text-white',
    'bg-emerald-500 text-white',
    'bg-amber-500 text-cosmic-dark'
  ];

  return (
    <div className="max-w-md mx-auto px-4 py-6 flex flex-col justify-between min-h-[85vh]">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <button
              id="players-back-btn"
              onClick={() => onNavigate('menu')}
              className="p-2.5 bg-cosmic-purple/60 border border-cosmic-purple rounded-xl hover:bg-cosmic-purple text-white transition-all cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h2 className="font-display text-2xl font-black uppercase tracking-wider text-white">
              Players
            </h2>
          </div>

          <button
            id="players-reset-btn"
            onClick={handleReset}
            title="Reset Players"
            className="p-2.5 bg-cosmic-purple/40 border border-cosmic-purple/60 rounded-xl hover:bg-cosmic-purple/80 hover:border-gray-500 text-gray-300 hover:text-white transition-all cursor-pointer"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-gray-400 font-display font-medium uppercase tracking-wider mb-6">
          Add Players (3-49)
        </p>

        {/* Players List Container */}
        <div className="max-h-[50vh] overflow-y-auto pr-1 space-y-3 custom-scrollbar scroll-smooth">
          <AnimatePresence initial={false}>
            {players.map((player, idx) => {
              const colorClass = iconColors[idx % iconColors.length];
              return (
                <motion.div
                  key={player.id}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, x: -30 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-between bg-cosmic-purple/40 border border-cosmic-purple/60 rounded-2xl p-3 gap-3 hover:border-cosmic-purple transition-colors"
                >
                  {/* Left avatar badge */}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-display font-black text-lg shrink-0 ${colorClass}`}>
                    {player.name.trim() ? player.name.trim().charAt(0).toUpperCase() : <User className="w-5 h-5" />}
                  </div>

                  {/* Name Input field */}
                  <input
                    type="text"
                    value={player.name}
                    onChange={(e) => handleNameChange(player.id, e.target.value)}
                    placeholder="Player name"
                    maxLength={16}
                    className="w-full bg-transparent border-b border-transparent focus:border-imposter-cyan/60 py-1 text-white font-sans text-base font-semibold placeholder-gray-500 focus:outline-none transition-colors"
                  />

                  {/* Remove Button */}
                  <button
                    onClick={() => handleRemovePlayer(player.id)}
                    disabled={players.length <= 3}
                    className={`p-2 rounded-xl transition-all ${
                      players.length <= 3
                        ? 'opacity-30 cursor-not-allowed text-gray-600'
                        : 'text-gray-400 hover:text-imposter-pink hover:bg-imposter-pink/10 cursor-pointer'
                    }`}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </motion.div>
              );
            })}
          </AnimatePresence>
          <div ref={listEndRef} />
        </div>

        {/* Add Player Box */}
        {players.length < 49 && (
          <button
            id="players-add-btn"
            onClick={handleAddPlayer}
            className="w-full flex items-center justify-center gap-2 mt-4 bg-cosmic-purple/20 hover:bg-cosmic-purple/40 border-2 border-dashed border-cosmic-purple/60 rounded-2xl py-4 text-sm text-gray-300 font-semibold transition-all cursor-pointer hover:border-imposter-cyan/40 hover:text-white"
          >
            <Plus className="w-5 h-5 text-imposter-cyan" />
            <span>Add Player</span>
          </button>
        )}
      </div>

      {/* Footer controls */}
      <div className="mt-8 space-y-4">
        <div className="text-center text-xs font-medium font-sans text-gray-400">
          {players.length} / 49 players • minimum 3 to play
        </div>

        <button
          id="players-continue-btn"
          onClick={handleContinue}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-imposter-cyan to-emerald-400 text-cosmic-dark font-display font-bold text-lg py-4 px-6 rounded-2xl transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-lg shadow-emerald-900/20 glow-cyan"
        >
          <span>Continue</span>
          <ArrowLeft className="w-5 h-5 rotate-180" />
        </button>
      </div>
    </div>
  );
}
