//-----------HOME PAGE------------
let swiper_home = new Swiper(".slider-home", {
    autoplay: {
        delay: 4000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
});

$(".mid-question").click(function() {
    $(".arrow-slide > i").toggleClass("rotate-numb");
    $(".total-answer").toggleClass("toggle_Answer");
});

//--------choice question------
$(document).ready(function() {
    let pageLoad = JSON.parse(localStorage.getItem("data"));
    if (pageLoad == null) {
        let Arr_Choice = [];
        for (let index = 17; index < 100; index++) {
            Arr_Choice.push({
                page: index,
                tick: false,
                check: 0,
            });
        }
        localStorage.setItem("data", JSON.stringify(Arr_Choice));
    }

});

$(document).on('click', '.each-answer', function() {
    let flag = $(this).data('tick');
    let currentPage = $(this).closest('.wrap-answer-content').data('page');
    $('.content').removeClass('toggle_content_false');
    $('.stt').removeClass('toggle_Stt_false');
    $('.stt').removeClass('toggle_Stt_true');
    $('.content').removeClass('toggle_content_true');
    $('.ct-true-false > .fas').removeClass('fa-check');
    $('.ct-true-false > .fas').removeClass('fa-times');
    let current = JSON.parse(localStorage.getItem("data"));
    // debugger;
    if (flag == true) {
        for (let index = 0; index < current.length; index++) {
            if (current[index].page == currentPage) {
                current[index].tick = flag;
                current[index].check = 1;
            }
        }
        localStorage.setItem("data", JSON.stringify(current));
        AddData();
        $('.answer_for_question').slideToggle();
        $(this).find('.stt').toggleClass('toggle_Stt_true');
        $(this).find('.content').toggleClass('toggle_content_true');
        $(this).find('.ct-true-false > .fas').toggleClass('fa-check');
    } else {
        for (let index = 0; index < current.length; index++) {
            if (current[index].page == currentPage) {
                current[index].tick = flag;
                current[index].check = 1;
            }
        }
        localStorage.setItem("data", JSON.stringify(current));
        AddData();
        $('.answer_for_question').slideUp();
        $(this).find('.stt').toggleClass('toggle_Stt_false');
        $(this).find('.content').toggleClass('toggle_content_false');
        $(this).find('.ct-true-false > .fas').toggleClass('fa-times');

    }
    // debugger;
});

function AddData() {
    let data = JSON.parse(localStorage.getItem("data"));
    $('.append-col').html('');

    if (data != "" && data != null) {
        for (let i = 0; i < data.length; i++) {
            let page = data[i].page;
            let tick = data[i].tick;
            let flag = data[i].check;


            if (tick == false && flag == 1) {

                $('.append-col').append(`<div class="col-md-2">
              <a href="">
                <div>
                    ${page}

                    <span class="tick-false"><i class="fas fa-times"></i></span>
                </div>
                </a>
            </div>`);
            } else if (tick == true && flag == 1) {

                $('.append-col').append(`<div class="col-md-2">
              <a href="">
                <div>
                    ${page}
                    <span class="tick-true"><i class="fas fa-check"></i></span>

                </div>
                </a>
            </div>`);
            } else if (flag == 0) {
                // debugger;
                $('.append-col').append(`<div class="col-md-2">
              <a href="">
                <div>
                    ${page} 
                </div>
                </a>
            </div>`);
            }


        }

    }
    // debugger;

}
AddData();
//-----------HOME PAGE------------

var tablist = $(".list-cato .tabs").click(function(e) {
    $(".list-cato .tabs").removeClass("active");
    $(this).addClass("active");
    let id = $(this).attr("data-tab");
    $(".list-items").removeClass("active");
    $("." + id).addClass("active");
});

var tablist2 = $(".list-cato-b .tab-b").click(function(e) {
    $(".list-cato-b .tab-b").removeClass("active");
    $(this).addClass("active");
    let id = $(this).attr("data-tab");
    $(".tab").removeClass("active");
    $("." + id).addClass("active");
});
//Call data of meo thi
$.ajax({
    url: "./assets/js/data.json",
    dataType: "json",
    success: function(data) {
        $.each(data.quest, function(i, q) {
            $(".lythuyet").append(
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
        $.each(data.practice, function(i, p) {
            $(".thuchanh").append(
                `
        <div class="items">
           <div class="title"><h3>${p.title}</h3></div>
           <div class="describe">${p.description}</div>
        </div>
        `
            );
        });
        $(".list-items .items").click(function() {
            $(this).find(".title").toggleClass("active");
            $(this).find(".describe").toggleClass("active");
        });
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.log("ERROR", textStatus, errorThrown);
    },
});
//Call data bien bao
$.ajax({
    url: "./assets/js/bienbao.json",
    dataType: "json",
    success: function(data) {
        $.each(data.biencam, function(i, c) {
            $(".baocam").append(
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
        $.each(data.bienhieulenh, function(i, h) {
            $(".hieulenh").append(
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
        $.each(data.bienchidan, function(i, h) {
            $(".chidan").append(
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
        $.each(data.biennguyhiem, function(i, h) {
            $(".nguyhiem").append(
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
        $.each(data.bienphu, function(i, h) {
            $(".bienphu").append(
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
    error: function(jqXHR, textStatus, errorThrown) {
        console.log("ERROR", textStatus, errorThrown);
    },
});