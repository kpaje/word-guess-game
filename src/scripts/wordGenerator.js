import { WORD_LIST } from "../common/constants";

export const randomWord = () => {
  const randomNumber = Math.random() * WORD_LIST.length;
  const randomInteger = Math.floor(randomNumber);
  const randomWord = WORD_LIST[randomInteger];
  return randomWord;
};
