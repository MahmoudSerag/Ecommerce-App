module.exports = (req, res, next) => {
  if (!req.session.isLoggedIn) {
    return res.status(300).redirect(`/`);
  }
  next();
}