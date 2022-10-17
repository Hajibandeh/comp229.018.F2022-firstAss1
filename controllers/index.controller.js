exports.home = function(req, res, next) {
  res.render('index', { title: 'Home' });
};;


exports.projects = function(req, res, next) {
  res.render('Projects', { title: 'Projects' });
};


exports.services = function(req, res, next) {
  res.render('Services', { title: 'Services' });
};

  exports.Aboutme = function(req, res, next) {
    res.render('Aboutme', { title: 'Aboutme' });
  };
  exports.ContactMe =  function(req, res, next) {
    res.render('ContactMe', { title: 'ContactMe' });
  };
  exports.login =  function(req, res, next) {
    res.render('login', { title: 'login' });
  };
  