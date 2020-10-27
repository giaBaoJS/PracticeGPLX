var tablist = $('.list-cato .tabs').click(function (e) {
  $('.list-cato .tabs').removeClass('active');
  $(this).addClass('active');
  let id = $(this).attr('data-tab');
  $('.list-items').removeClass('active');
  $('.' + id).addClass('active');
});

var tablist2 = $('.list-cato-b .tab-b').click(function (e) {
  $('.list-cato-b .tab-b').removeClass('active');
  $(this).addClass('active');
  let id = $(this).attr('data-tab');
  $('.tab').removeClass('active');
  $('.' + id).addClass('active');
});
//Call data of meo thi
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
    $('.list-items .items').click(function () {
      $(this).find('.title').toggleClass('active');
      $(this).find('.describe').toggleClass('active');
    });
  },
  error: function (jqXHR, textStatus, errorThrown) {
    console.log('ERROR', textStatus, errorThrown);
  },
});
//Call data bien bao
$.ajax({
  url: './assets/js/bienbao.json',
  dataType: 'json',
  success: function (data) {
    $.each(data.biencam, function (i, c) {
      $('.baocam').append(
        `
        <div class="row">
          <div class="col-4 col">
            <img src="${c.image}" >
          </div>
           <div class="col-8 col"> 
              <h3 class="title">${c.title}</h3>
              <p>${c.description}</p>
           </div>
        </div>
        `
      );
    });
    $.each(data.bienhieulenh, function (i, h) {
      $('.hieulenh').append(
        `
        <div class="row">
          <div class="col-4 col">
            <img src="${h.image}" >
          </div>
           <div class="col-8 col"> 
              <h3 class="title">${h.title}</h3>
              <p>${h.description}</p>
           </div>
        </div>
        `
      );
    });
    $.each(data.bienchidan, function (i, h) {
      $('.chidan').append(
        `
        <div class="row">
          <div class="col-4 col">
            <img src="${h.image}" >
          </div>
           <div class="col-8 col"> 
              <h3 class="title">${h.title}</h3>
              <p>${h.description}</p>
           </div>
        </div>
        `
      );
    });
    $.each(data.biennguyhiem, function (i, h) {
      $('.nguyhiem').append(
        `
        <div class="row">
          <div class="col-4 col">
            <img src="${h.image}" >
          </div>
           <div class="col-8 col"> 
              <h3 class="title">${h.title}</h3>
              <p>${h.description}</p>
           </div>
        </div>
        `
      );
    });
    $.each(data.bienphu, function (i, h) {
      $('.bienphu').append(
        `
        <div class="row">
          <div class="col-4 col">
            <img src="${h.image}" >
          </div>
           <div class="col-8 col"> 
              <h3 class="title">${h.title}</h3>
              <p>${h.description}</p>
           </div>
        </div>
        `
      );
    });
  },
  error: function (jqXHR, textStatus, errorThrown) {
    console.log('ERROR', textStatus, errorThrown);
  },
});
