var $ = require('jquery');
var tocjs = require('tocjs');
var smooziee = require('smooziee.js');
var precode = require('precode.js');
var motiv = require('motiv.scss');

var jqxTree = require('jqxTree');


$(function(){
  $('.toc-src').tocjs({
    min: 2
  });

  $('pre').precode();
  $.smooziee();
});

$(function(){
  $('.jqxTree').jqxTree({
      height: '300px',
      width: '300px',
      theme: 'energyblue'

  });
});
