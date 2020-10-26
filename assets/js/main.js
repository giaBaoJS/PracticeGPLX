var jsond = $('.list-cato .tabs').click(function (e) {
  $('.list-cato .tabs').removeClass('active');
  $(this).addClass('active');
  let id = $(this).attr('data-tab');
  $('.list-items').removeClass('active');
  $('.' + id).addClass('active');
});
$.ajax({
  url: './assets/js/data.json',
  dataType: 'json',
  success: function (data) {
    $.each(data.quest, function (i, q) {
      $('.lythuyet').append(
        `
        <div class="items">
           <div class="title"> 
           <h3>${q.title}</h3>
           </div>
           <div class="describe">${q.description}</div>
        </div>
        `
      );
    });
    $.each(data.practice, function (i, p) {
      $('.thuchanh').append(
        `
        <div class="items">
           <div class="title"><h3>${p.title}</h3></div>
           <div class="describe">${p.description}</div>
        </div>
        `
      );
    });
  },
  error: function (jqXHR, textStatus, errorThrown) {
    console.log('ERROR', textStatus, errorThrown);
  },
});
//Toggle mẹo
$(document).ready(function () {
  $('.list-items .items').click(function () {
    $(this).find('.title').toggleClass('active');
    $(this).find('.describe').toggleClass('active');
  });
});
