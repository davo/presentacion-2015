$('section').waypoint(function(dir) {
    var fondo = "background" + this.dataset.scrollIndex;
    $("body").switchClass( $('body').attr('class') , fondo );
});