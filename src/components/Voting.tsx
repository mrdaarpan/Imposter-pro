/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, Check, ArrowRight, User, Lock, HelpCircle } from 'lucide-react';
import { Player } from '../types';

interface VotingProps {
  players: Player[];
  onCompleteVotes: (votedPlayerId: string, votes: Record<string, string>) => void;
}

export default function Voting({ players, onCompleteVotes }: VotingProps) {
  const [currentVoterIndex, setCurrentVoterIndex] = useState(0);
  const [isSecretConfirmPhase, setIsSecretConfirmPhase] = useState(true);
  const [selectedTargetId, setSelectedTargetId] = useState('');
  const [votes, setVotes] = useState<Record<string, string>>({});

  const currentVoter = players[currentVoterIndex];

  const handleCastVote = () => {
    if (!selectedTargetId) return;

    const updatedVotes = {
      ...votes,
      [currentVoter.id]: selectedTargetId
    };
    setVotes(updatedVotes);

    if (currentVoterIndex < players.length - 1) {
      setCurrentVoterIndex((prev) => prev + 1);
      setIsSecretConfirmPhase(true);
      setSelectedTargetId('');
    } else {
      // All players have voted! Calculate the final highest-voted suspect.
      const tally: Record<string, number> = {};
      players.forEach((p) => {
        tally[p.id] = 0;
      });

      Object.keys(updatedVotes).forEach((voterId) => {
        const targetId = updatedVotes[voterId];
        if (targetId && tally[targetId] !== undefined) {
          tally[targetId]++;
        }
      });

      let maxVotes = -1;
      let suspectId = '';
      let candidates: string[] = [];

      players.forEach((p) => {
        const count = tally[p.id] || 0;
        if (count > maxVotes) {
          maxVotes = count;
          suspectId = p.id;
          candidates = [p.id];
        } else if (count === maxVotes) {
          candidates.push(p.id);
        }
      });

      // In case of a tie, let's pick the first candidate
      const finalSuspectId = candidates.length > 0 ? candidates[0] : suspectId;

      onCompleteVotes(finalSuspectId, updatedVotes);
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-6 flex flex-col justify-between min-h-[85vh] text-center">
      {isSecretConfirmPhase ? (
        /* Secret Transition Screen (Pass Device) */
        <div className="flex flex-col justify-between flex-1">
          <div>
            <span className="font-display font-black text-xs uppercase tracking-widest text-imposter-pink bg-imposter-pink/10 px-4 py-1.5 rounded-full border border-imposter-pink/25">
              Step 3 of 4: Secret Voting
            </span>
            <div className="w-20 h-20 rounded-3xl bg-cosmic-purple/40 border border-cosmic-purple/80 flex items-center justify-center mx-auto mt-12 mb-6">
              <Lock className="w-10 h-10 text-imposter-pink animate-pulse" />
            </div>
            <h2 className="font-display text-3xl font-black uppercase text-white tracking-wide">
              Pass the Device
            </h2>
            <p className="text-sm text-gray-300 mt-4 max-w-xs mx-auto leading-relaxed">
              It is now <span className="text-imposter-cyan font-bold">{currentVoter.name}</span>'s turn to vote.
            </p>
            <p className="text-xs text-red-400 mt-2 font-medium">
              Keep the screen private! No peeking! 🤫
            </p>
          </div>

          <div className="mt-8">
            <motion.button
              id={`btn-start-vote-${currentVoter.id}`}
              onClick={() => setIsSecretConfirmPhase(false)}
              className="w-full bg-gradient-to-r from-imposter-pink to-imposter-orange text-white font-display font-black text-lg py-4 px-6 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-transform duration-100 cursor-pointer glow-pink flex items-center justify-center gap-2"
            >
              <span>I am {currentVoter.name} (Start Vote)</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      ) : (
        /* Voting Input Screen */
        <div className="flex flex-col justify-between flex-1">
          <div>
            <span className="font-display font-black text-xs uppercase tracking-widest text-imposter-cyan bg-imposter-cyan/10 px-4 py-1.5 rounded-full border border-imposter-cyan/25">
              Voter {currentVoterIndex + 1} of {players.length}
            </span>
            <h2 className="font-display text-2xl font-black uppercase text-white mt-6 tracking-wide">
              Who is the Imposter?
            </h2>
            <p className="text-xs text-gray-400 mt-1">
              <span className="text-imposter-cyan font-semibold">{currentVoter.name}</span>, cast your secret vote.
            </p>
          </div>

          {/* Main Player Selection List */}
          <div className="my-6">
            <div className="grid grid-cols-1 gap-3 max-h-[48vh] overflow-y-auto pr-1 custom-scrollbar">
              {players
                .filter((p) => p.id !== currentVoter.id) // Can't vote for self
                .map((player) => {
                  const isSelected = selectedTargetId === player.id;
                  return (
                    <button
                      key={player.id}
                      id={`vote-target-${player.id}`}
                      onClick={() => setSelectedTargetId(player.id)}
                      className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'border-imposter-pink bg-imposter-pink/10 glow-pink'
                          : 'border-cosmic-purple bg-cosmic-purple/45 hover:bg-cosmic-purple/65'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          isSelected ? 'bg-imposter-pink/20 text-imposter-pink' : 'bg-cosmic-purple/80 text-gray-400'
                        }`}>
                          <User className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-base text-white">
                            {player.name}
                          </h4>
                          <p className="text-[10px] text-gray-400 font-mono mt-0.5">
                            Suspect {isSelected ? 'Selected' : 'Candidate'}
                          </p>
                        </div>
                      </div>

                      {isSelected && (
                        <div className="w-6 h-6 rounded-full bg-imposter-pink flex items-center justify-center text-white">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      )}
                    </button>
                  );
                })}
            </div>
          </div>

          {/* Action Footer */}
          <div className="space-y-4">
            {!selectedTargetId && (
              <div className="flex items-center justify-center gap-2 text-xs text-imposter-orange bg-imposter-orange/10 p-3 rounded-xl border border-imposter-orange/20 max-w-sm mx-auto animate-pulse">
                <HelpCircle className="w-4 h-4 shrink-0" />
                <p className="text-left font-medium">Please select a suspect to cast your vote.</p>
              </div>
            )}

            <motion.button
              id="btn-cast-vote"
              disabled={!selectedTargetId}
              onClick={handleCastVote}
              className={`w-full flex items-center justify-center gap-2 font-display font-black text-lg py-4 px-6 rounded-2xl transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-lg ${
                !selectedTargetId
                  ? 'bg-gray-700 text-gray-400 opacity-50 cursor-not-allowed border border-gray-600'
                  : 'bg-gradient-to-r from-imposter-cyan to-emerald-400 text-cosmic-dark glow-cyan'
              }`}
            >
              <span>{currentVoterIndex === players.length - 1 ? 'SUBMIT ALL VOTES 🗳' : 'CONFIRM VOTE 🗳'}</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      )}
    </div>
  );
}
