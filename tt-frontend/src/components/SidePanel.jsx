import RecordButton from "./RecordButton"
import SearchBar from "./SearchBar"
import WordInfoContainer from "./WordInfoContainer"

const SidePanel = () => {
  return (
       <div className="fixed right-0 w-1/3 h-screen mt-16 flex flex-col align-middl items-center bg-slate-500 text-white shadow-lg">
          <SearchBar />
          <WordInfoContainer />
          <RecordButton/>
       </div>
  )
}

export default SidePanel