const index = async (req, res) => {
  return res.status(200).json({ message: `Woking as expected 2.` })
}

module.exports = {
  index,
}
