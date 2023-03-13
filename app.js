// Add new class 
let trainedStaffCard = document.querySelectorAll(".staff-card");

trainedStaffCard.forEach((item) =>
  item.addEventListener("click", function(){
    item.classList.toggle("staff-card-active");
  }))

// Slider
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
