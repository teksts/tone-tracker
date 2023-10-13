import { useEffect } from "react";
import SVG from "./SVG";
import dictionary from "chinese-dictionary"

const PitchSpace = () => {
  
  useEffect(() => {
    
    dictionary.query('test').then(result => console.log(result));
  }, [])

  return (
    <div className="fixed left-0 w-2/3 h-screen mt-16 bg-gray-900">
      <SVG/>
    </div>
  );
}

export default PitchSpace;