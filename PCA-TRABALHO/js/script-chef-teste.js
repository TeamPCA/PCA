
$('.filter-btn').on('click', function(){

    let type = $(this).attr('id');
    let boxes = $('.project-box');
    
    $('.main-btn').removeClass('active');
    $(this).addClass('active');

    if(type == 'mg-btn') {
        eachBoxes('mg', boxes);
      } else if(type == 'sp-btn') {
        eachBoxes('sp', boxes);
      } else if(type == 'rj-btn') {
        eachBoxes('rj', boxes);
      } else {
        eachBoxes('all', boxes);
      }
});

function eachBoxes(type, boxes) {

    if(type == 'all') {
      $(boxes).fadeIn();
    } else {
      $(boxes).each(function() {
        if(!$(this).hasClass(type)) {
          $(this).fadeOut('slow');
        } else {
          $(this).fadeIn();
        }
      });
    }
  }