import dictionary from "chinese-dictionary";

const search = async (req, res) => {
  try {
    const entries = await dictionary.query(req.query.word);
    if (entries.length === 0) {
      entries = null;
    }
    res.send(entries);
  } catch (error) {
    res.status(500).send(error);
  }
};

export default { search };