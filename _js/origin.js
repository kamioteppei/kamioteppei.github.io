var $ = require('jquery');
var tocjs = require('tocjs');
var smooziee = require('smooziee.js');
var precode = require('precode.js');
var motiv = require('motiv.scss');

$(function(){
  $('.toc-src').tocjs({
    min: 2
  });

  $('pre').precode();
  $.smooziee();
});
