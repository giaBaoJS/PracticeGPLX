//-----------HOME PAGE------------
let swiper_home = new Swiper('.slider-home', {
    autoplay: {
        delay: 4000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
});

$('.mid-question').click(function() {
    $('.arrow-slide > i').toggleClass('rotate-numb');
    $('.total-answer').toggleClass('toggle_Answer');
});


$(document).ready(function() {

    let Arr_Choice = [];
    for (let index = 17; index < 100; index++) {
        Arr_Choice.push({
            page: index,
            tick: false,
        });

    }
    // console.log(Arr_Choice);
    localStorage.setItem("data", JSON.stringify(Arr_Choice));
});

function AddData() {
    let data = JSON.parse(localStorage.getItem("data"));
    if (data.lenght != 0 && data != "" && data != null) {
        for (let i = 17; i < data.length; i++) {
            let check = data[i].tick;
            debugger;
            //     $('.append-col').append(`<div class="col-md-2">
            //     <a href="">
            //       <div>
            //           ${index}
            //           <span class="tick-true"><i class="fas fa-check"></i></span>
            //           <span class="tick-false"><i class="fas fa-times"></i></span>
            //       </div>
            //       </a>
            //   </div>`);
        }

    }
    debugger;

}
AddData();
//--------choice question------
$(document).on('click', '.each-answer', function() {
    let flag = $(this).data('tick');
    $('.content').removeClass('toggle_content_false');
    $('.stt').removeClass('toggle_Stt_false');
    $('.stt').removeClass('toggle_Stt_true');
    $('.content').removeClass('toggle_content_true');
    $('.ct-true-false > .fas').removeClass('fa-check');
    $('.ct-true-false > .fas').removeClass('fa-times');

    if (flag == true) {
        $('.answer_for_question').slideToggle();
        $(this).find('.stt').toggleClass('toggle_Stt_true');
        $(this).find('.content').toggleClass('toggle_content_true');
        $(this).find('.ct-true-false > .fas').toggleClass('fa-check');
    } else {
        $('.answer_for_question').slideUp();
        $(this).find('.stt').toggleClass('toggle_Stt_false');
        $(this).find('.content').toggleClass('toggle_content_false');
        $(this).find('.ct-true-false > .fas').toggleClass('fa-times');
        // $(this).find('.ct-true-false').find('.fas').toggleClass('fa-times');
    }
    // debugger;
});
let drag_El = document.querySelector('.all-number');
drag_El.addEventListener('touchmove', function(e) {
    e.preventDefault();
    let getY = document.querySelector(".total-answer").offsetTop;
    // document.querySelector(".total-answer").style.top = getY + 'px';
    console.log(getY);
    let _this = this;
    // debugger;
    let getTarget = e.target.offsetTop;
    var touch = e;
    console.log(getTarget);
    // debugger;
    // console.log(touch.pageY);
}, false);
//-----------HOME PAGE------------