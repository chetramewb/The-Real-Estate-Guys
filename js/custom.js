$('.slide-blog').slick({
dots: false,
infinite: true,
speed: 300,
slidesToShow: 1,
slidesToScroll: 1,
Autoplay:true,
prevArrow: '<button class="back-arrow"> <img src="./images/previous-arrow.png"> </button>', 
nextArrow: '<button class="next-arrow"><img src="./images/next-arrow.png"> </button>', 
responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]
});