export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!;

export const WIN_MESSAGES = [
  "You're a killer queen!",
  "No herbs here, good work!",
  "You put your whole bleachussy into that one!",
  "You didn't take the money!",
  "Bad bad Bleachordle players don't live in our house!",
];
export const GAME_COPIED_MESSAGE = "Bleachers Wordle copied to clipboard!";
export const NOT_ENOUGH_LETTERS_MESSAGE =
  "Play Bleachordle like you mean it! Not enough letters!";
export const WORD_NOT_FOUND_MESSAGE = "That's not a word, herb!";
export const HARD_MODE_ALERT_MESSAGE =
  "Hard Mode can only be enabled at the start!";
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `You're gonna wanna get better, the word was ${solution}`;
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Must use ${guess} in position ${position}`;
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Guess must contain ${letter}`;
export const ENTER_TEXT = "Enter";
export const DELETE_TEXT = "Delete";
export const STATISTICS_TITLE = "Statistics";
export const GUESS_DISTRIBUTION_TEXT = "Guess Distribution";
export const NEW_WORD_TEXT = "How dare you want more! New word in";
export const SHARE_TEXT = "Share";
export const TOTAL_TRIES_TEXT = "Total tries";
export const SUCCESS_RATE_TEXT = "Success rate";
export const CURRENT_STREAK_TEXT = "Current streak";
export const BEST_STREAK_TEXT = "Best streak";
