
/**
 * Main
 */

exports.artistic = function(req, res){
  res.render('artistic');
}
/*
 *  discovery objects
 */

exports.intro = function(req, res){
  res.render('intro');
};

exports.index = function(req, res){
  res.render('index');
};

exports.heroes = function(req, res){
  res.render('heroes');
};

exports.whatis = function(req, res){
  res.render('whatis');
};

exports.history = function(req, res){
  res.render('history');
};

exports.timeline = function(req, res){
  res.render('timeline');
};

exports.institutions = function(req, res){
  res.render('institutions');
};

// exploring

exports.exploring = function(req, res){
  res.render('exploring');
};

exports.exploringWhatIs = function(req, res){
  res.render('explore/whatis');
};

// tools

exports.people = function(req, res){
  res.render('people');;
}