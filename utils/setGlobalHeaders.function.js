module.exports = app => {
  if (!app) throw new Error(`app not exists`);
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Origin",
      process.env.AccessControlAllowOrigin
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
  });
};
