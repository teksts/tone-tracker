import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophoneLines } from '@fortawesome/free-solid-svg-icons'

const RecordButton = () => {

  return (
    <button className="mt-4 w-32 h-32 bg-pink-500 rounded-3xl">
      <FontAwesomeIcon icon={faMicrophoneLines} size="2xl" />
    </button>
  );
};

export default RecordButton;