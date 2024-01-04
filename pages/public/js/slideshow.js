$(document).ready(function(){
    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    // Handle click on podcast items
    $('.podcast').on('click', function() {
        // Get the URL from the anchor tag within the clicked podcast item
        var url = $(this).find('a').attr('href');

        // Redirect the current window to the specified URL
        window.location.href = url;
    });

    // Handle click on article items
    $('.article').on('click', function() {
        // Get the URL from the anchor tag within the clicked article item
        var url = $(this).find('a').attr('href');

        // Redirect the current window to the specified URL
        window.location.href = url;
    });
});
