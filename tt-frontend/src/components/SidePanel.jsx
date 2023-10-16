import { useContext } from "react";
import WordContext from "../context/WordContext";
import RecordButton from "./RecordButton"
import SearchBar from "./SearchBar"
import WordInfoContainer from "./WordInfoContainer"

const SidePanel = () => {
  const { word, setWord } = useContext(WordContext);
  console.log(word)

  return (
       <div className="fixed right-0 w-1/3 h-screen mt-16 flex flex-col align-middl items-center bg-slate-500 text-white shadow-lg">
          <SearchBar setWord={setWord}/>
          {word.traditional && <WordInfoContainer word={word}/>}
          <RecordButton word={word}/>
       </div>
  )
}

export default SidePanel