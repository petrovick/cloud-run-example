const index = async (req, res) => {
  return res.status(200).json({ message: `Woking as expected 3.` })
}

module.exports = {
  index,
}
