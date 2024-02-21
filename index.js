// Modal

// document.addEventListener("DOMContentLoaded", function () {
//     var myModal1 = new bootstrap.Modal(document.getElementById("myModal1"));
//     var myModal2 = new bootstrap.Modal(document.getElementById("myModal2"));

//     var modalTriggers = document.querySelectorAll(
//       '[data-bs-toggle="modal"]'
//     );

//     modalTriggers.forEach(function (trigger) {
//       trigger.addEventListener("click", function () {
//         var targetModalId = this.getAttribute("data-bs-target");
//         if (targetModalId === "#myModal1") {
//           myModal1.show();
//         } else if (targetModalId === "#myModal2") {
//           myModal2.show();
//         } else if (targetModalId === "#myModal3") {
//           myModal3.show();
//         } else if (targetModalId === "#myModal4") {
//           myModal4.show();
//         } else if (targetModalId === "#myModal5") {
//           myModal5.show();
//         } else if (targetModalId === "#myModal6") {
//           myModal6.show();
//         }
//       });
//     });
//   });


  $(".secondNav .nav-link").click(function(){
      $(this).addClass("active-page"); 
});

// $('.secondNav .nav-link').filter(function(){
//   return this.href === location.href;
// }).addClass('active-page');


$(document).ready(function(){
  // Get the current page's URL
  var currentPageUrl = window.location.href;
  
  // Loop through each navigation link
  $('.nav-link').each(function(){
      // Get the URL of the navigation link
      var navLinkUrl = $(this).attr('href');
      
      // Check if the current page's URL matches the navigation link's URL
      if(currentPageUrl === navLinkUrl){
          // Add the 'active-page' class to the navigation link
          // $(this).addClass('active-page');
          $(this).closest('li.nav-item').addClass('active-page');
      }
  });
});

// setTimeout(function(){
//     $(".abc").addClass("active-page");
// },3000);
// setTimeout(function(){
//     $(".acb").removeClass("active-page");
// },3000);


//     $(".acb").delay(3000).addClass("active-page");
// setTimeout(function(){
//     $(".acb").removeClass("active-page");
// },3000);
// $(".abc").addClass("active-page");
// setTimeout(function(){
//     $(".abc").removeClass("active-page");
// },3000);

// $(".abc").addClass("active-page").delay(3000).queue(function(){
//     $(this).removeClass("active-page").dequeue();
// });

// setTimeout(function () {
//     $(".abc").delay(3000).addClass("active-page").removeClass("active-page");
// }, 3000);