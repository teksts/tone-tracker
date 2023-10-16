import { useContext } from "react";
import wordContext from "../context/wordContext";
import RecordButton from "./RecordButton"
import SearchBar from "./SearchBar"
import WordInfoContainer from "./WordInfoContainer"

const SidePanel = () => {
  const { word, setWord } = useContext(wordContext);

  return (
       <div className="fixed right-0 w-1/3 h-screen mt-16 flex flex-col align-middl items-center bg-slate-500 text-white shadow-lg">
          <SearchBar props={setWord}/>
          <WordInfoContainer props={word}/>
          <RecordButton props={word}/>
       </div>
  )
}

export default SidePanel