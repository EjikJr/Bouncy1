// let clicked = document.addEventListener('click',e => console.log(e.target))
// if ($(clicked).hasClass("active--dot")) {
//     clicked.classList.toggle("active--dot dot")
//     console.log('Ya!')
// }

// $(document).ready(function () {

//     $('.dots').click(function (e) {

//         let $decide = $(e.target).attr('class');
//         //here I want to know what was the class of the element that was clicked
//         alert(decide);

//         if (decide == 'active--dot dot') {
//             $(decide).toggle(".active--dot");
//         } else {
//             decide.classList.toggle('active--dot')
//         }
//     });

// });

$(document).ready(function(){
        $(".nav").on("click","a", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();
            //забираем идентификатор бока с атрибута href
            var id  = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;
            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });
    