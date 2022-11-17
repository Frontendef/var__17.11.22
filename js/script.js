let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
};



window.onscroll = () =>{
   navbar.classList.remove('active');
}

var swiper = new Swiper(".blogs-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});








// var time = 2,
//   cc = 1;
// $(window).scroll(function() {
//   $('#counter').each(function() {
//     var
//       cPos = $(this).offset().top,
//       topWindow = $(window).scrollTop();
//     if (cPos < topWindow + 200) {
//       if (cc < 2) {
//         $(".number").addClass("viz");
//         $('div').each(function() {
//           var
//             i = 1,
//             num = $(this).data('num'),
//             step = 1000 * time / num,
//             that = $(this),
//             int = setInterval(function() {
//               if (i <= num) {
//                 that.html(i);
//               } else {
//                 cc = cc + 2;
//                 clearInterval(int);
//               }
//               i++;
//             }, step);
//         });
//       }
//     }
//   });
// });









