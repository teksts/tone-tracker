import { useState } from "react";
import WordContext from "./WordContext";

const initialWord = {
	traditional: '',
	simplified: '',
	pinyinMarks: '',
	pinyinNumbers: '',
	english: [],
	toneMarks: [],
	hash: '',
	hsk: -1,
	word_id: -1,
	measureWords: []
}

const WordProvider = ({ children }) => {
  const [word, setWord] = useState(initialWord);

  return (
    <WordContext.Provider value={{ word, setWord }}>
      {children}
    </WordContext.Provider>
  );
};

export default WordProvider;