const WordInfoContainer = (props) => {
  const { word } = props;
  return (
    <div className="flex justify-around border-y-2 py-2 w-full border-amber-50/50">
      <div className="px-2">
        <p className="text-xs text-stone-400">Pinyin</p>
        <p className="text-2xl">{word.pinyinMarks}</p>
      </div>
      <div className="pl-2">
        <p className="text-xs text-stone-400">Simplified</p>

        <p className="text-2xl">{word.simplified}</p>
      </div>
      <div className="pl-2">
        <p className="text-xs text-stone-400">English</p>
        <p className="text-2xl">{word.english[0]}</p>
      </div>

    </div>
  )
}

WordInfoContainer.defaultProps = {
  word: {
    traditional: '天氣',
    simplified: '天气',
    pinyinMarks: 'tiān qì',
    pinyinNumbers: 'tian1 qi4',
    english: ['weather'],
    toneMarks: [1, 4],
    hash: '999999999...',
    hsk: 1,
    word_id: 123456,
    measureWords: [
      {
        traditional: '個',
        simplified: '个',
        pinyinMarks: 'gè',
        pinyinNumbers: 'ge4'
      }
    ]
  }
}

export default WordInfoContainer;
