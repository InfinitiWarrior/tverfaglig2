$(document).ready(function(){
    // Set a higher z-index for the navbar
    $('.navbar').css('z-index', 10); // Adjust the value as needed

    // Your existing slideshow initialization code
    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    // Handle click on podcast items
    $('.podcast').on('click', function() {
        var url = $(this).find('a').attr('href');
        window.location.href = url;
    });

    // Handle click on article items
    $('.article').on('click', function() {
        var url = $(this).find('a').attr('href');
        window.location.href = url;
    });
});
