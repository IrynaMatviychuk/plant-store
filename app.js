// Add new class 
let trainedStaffCard = document.querySelectorAll(".staff-card");

trainedStaffCard.forEach((item) =>
  item.addEventListener("click", function(){
    item.classList.toggle("staff-card-active");
  }))

// Slider-1
$('.trained-staff-cards').slick({
    dots: false,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          autoplay: true,
          slidesToShow: 2,
          dots: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          autoplay: true,
          slidesToShow: 1,
          dots: true,
        }
      }
    ]
  });
// Slider-2
$('.clients-saying-cards').slick({
  slidesToShow: 2,
  responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        autoplay: true,
        slidesToShow: 1,
        dots: true,
      }
    }
  ]
});
