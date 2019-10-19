// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")
require("jquery")

import('./bootstrap_custom.js')

$(document).ready(function(){
  $('input.isCompl').iCheck({
    checkboxClass: 'icheckbox_square-blue'
  });

  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
  })

  $('input.isCompl').on('ifChanged', function(event) {
    var i = $(this).attr('id');
    var j = i.substring(0, i.length - 1);
    $('#' + j).submit();
  });
});



// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

window.jQuery = $;
window.$ = $;
window.changeSelect = function() {
  var e = $('#project_id option:selected').text();
  $('#proj_text').text(e);
};
window.showNew = function() {
  $('#new').fadeIn();
};
window.hideNew = function () {
  $('#new').fadeOut();
};
window.iCheck = {};
