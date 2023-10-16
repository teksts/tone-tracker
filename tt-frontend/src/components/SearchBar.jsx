import { useState, useContext } from "react";
import searchWord from "../api/searchWord";
import WordContext from "../context/WordContext";

const SearchBar = (props) => {
  const { word, setWord } = useContext(WordContext);
  const [searchValue, setSearchValue] = useState('');
  const handleChange = (e) => {
    setSearchValue(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const searchValue = Object.fromEntries(form.entries()).search
    const searchResult = await searchWord(searchValue);
    if (searchResult) {
      setWord(searchResult);
      console.log(word)
    }
  };

  return (
    <form
      className="p-4 w-full"
      method="get"
      onSubmit={handleSubmit}
    >
      <label htmlFor="word-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        </div>
        <input
          type="search"
          name="search"
          className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          id="default-search"
          placeholder="Find a word..."
          onChange={handleChange}
        />
        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
      </div>
    </form>

  );
}

export default SearchBar;