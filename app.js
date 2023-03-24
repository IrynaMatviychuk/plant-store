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


// Accordions
let accordions = document.querySelectorAll(".accordion");

accordions.forEach(item => {
    addQueMarkToEllipsis(item);
  
  window.addEventListener("resize", function () {
      addQueMarkToEllipsis(item);
  });
    
  item.addEventListener("click", function () {
      item.classList.toggle("active");
      let panel = item.nextElementSibling;
      panel.classList.toggle("show");
      addQueMarkToEllipsis(item);
  })
    
});

function addQueMarkToEllipsis(item) {
  let firstChild = item.firstElementChild;
  if (
    firstChild.offsetWidth < firstChild.scrollWidth &&
    !item.classList.contains("active")
  ) {
    item.classList.add("active-ellipsis");
  } else {
    item.classList.remove("active-ellipsis");
  }
}

// Slider-3
$('.insights-and-articles-content').slick({
  slidesToShow: 3,
  dots: true,
  responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        autoplay: true,
        slidesToShow: 1,
      }
    }
  ]
});