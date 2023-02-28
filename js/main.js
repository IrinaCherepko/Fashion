$(document).ready(function () {
    $(".sliders").slick({
        infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow:'<button  class = "slider-btn slider-prev slick-prev"></button>',
  prevArrow:'<button  class = "slider-btn slider-next slick-next"></button>',

  responsive:[
    {
        breakpoint:1101,
        settings:{
            infinite:true,
            slidesToShow:3,
            slidesToScroll:1,
        }
    },
    {
        breakpoint:851,
        settings:{
            infinite:true,
            slidesToShow:2,
            slidesToScroll:1,
            autoplay:true,
            autoplaySpeed:2000,
        }
    },
    {
        breakpoint:551,
        settings:{
            infinite:true,
            slidesToShow:1,
            slidesToScroll:1,
            autoplay:true,
            autoplaySpeed:2000,
        }
    },
    
  ]
    });
    $('.slider-btn').click(function(){
        $('.slider-btn').removeClass("active");
        $(this).addClass("active")
        
    });

    $(".stars").starRating({
        initialRating: 5,
        strokeColor: '#F1B90B',
        rateColor: '#F1B90B',
        starSize: 23,
        readOnly:true,
        strokeWidth: 25,
      });



    $(".mobile-btn").click(function(){
        $(".mobile-btn").toggleClass('active'); 
        $(".header-ul").toggleClass('active');
         $("span").toggleClass('active');
         $(".header-search").toggleClass('active');

        //  $("body").toggleClass('owerlay');
    $(".header-menu").toggleClass('bg-gray');
    
})
  
});