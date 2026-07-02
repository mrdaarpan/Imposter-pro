/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Word {
  word: string;
  hints: {
    medium: string;
    hard: string;
  };
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  words: Word[];
}

export interface Player {
  id: string;
  name: string;
  score: number;
  role: 'civilian' | 'imposter';
  isAlive: boolean;
  votesReceived: number;
}

export type GamePhase =
  | 'menu'
  | 'players'
  | 'setup'
  | 'reveal'
  | 'discussion'
  | 'voting'
  | 'result'
  | 'leaderboard'
  | 'about'
  | 'how-to-play';

export interface GameSettings {
  players: Player[];
  selectedCategories: string[]; // Category IDs
  numImposters: number;
  funModeEnabled: boolean;
  discussionTimerEnabled: boolean;
  discussionTimeLimit: number; // in seconds, default e.g. 60
}

export interface CurrentRoundState {
  roundNumber: number;
  currentWord: string;
  currentHint: string;
  hintLevel: 'medium' | 'hard';
  isFunModeActive: boolean; // everyone is an imposter
  firstDiscussionPlayerId: string;
  currentRevealPlayerIndex: number;
  isWordRevealed: boolean;
  votes: Record<string, string>; // voterId -> votedId
  votedOutPlayerId: string | null;
  roundWinner: 'civilians' | 'imposters' | null;
}
