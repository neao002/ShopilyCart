const checklogin = (req, res, next) => {
  if (!req.session.user) return next();

  res.redirect("/profile");
};

const permission = (req, res, next) => {
  if (req.session.user) {
    return next();
  }
  res.redirect("/");
};

exports.module = { checklogin, permission };
