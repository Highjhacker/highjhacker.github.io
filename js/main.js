$(function() {
    // Initialize collapse button
    $(".button-collapse").sideNav();
    // Initialize collapsible (uncomment the line below if you use the dropdown variation)
    //$('.collapsible').collapsible();
    $('.carousel.carousel-slider').carousel({fullWidth: true});

    $('.skill-icons-prog').children('.active').each(function(i) {
        var row = $(this);
        row.css('background','#0082c8');
    });

    $('.skill-icons-web').children('.active').each(function(i) {
        var row = $(this);
        row.css('background','#45a247');
    });

    $('.skill-icons-tools').children('.active').each(function(i) {
        var row = $(this);
        row.css('background','#c0392b');
    });
});