// @desc    get 404 page
// @route   Get /localhost:3000/errorHandling
// @access  Public
exports.errorHandling = (req, res) => {
  res.status(404).render(`404`);
};