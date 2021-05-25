
$('.filter-btn').on('click', function(){

    let type = $(this).attr('id');
    let boxes = $('.project-box');
    
    $('.main-btn').removeClass('active');
    $(this).addClass('active');

    if(type == 'jp-btn') {
        eachBoxes('jp', boxes);
      } else if(type == 'it-btn') {
        eachBoxes('it', boxes);
      } else if(type == 'br-btn') {
        eachBoxes('br', boxes);
      } else if(type == 'ar-btn') {
        eachBoxes('ar', boxes);
      } else if(type == 'yt-btn') {
        eachBoxes('yt', boxes);
      } else if(type == 'ch-btn') {
        eachBoxes('ch', boxes);
      }
      else {
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