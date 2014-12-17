$('section').waypoint(function(dir) {

    if (dir === "down") {
        var fondo = "background" + this.dataset.scrollIndex;
        var fondoA = "background" + (parseInt(this.dataset.scrollIndex) + 1);
        var fondoB = "background" + (parseInt(this.dataset.scrollIndex) - 1);
    } else {
        var fondo = "background" + (parseInt(this.dataset.scrollIndex) - 1);
        var fondoA = "background" + (parseInt(this.dataset.scrollIndex));
        var fondoB = "background" + (parseInt(this.dataset.scrollIndex) + 1);

    }
    $("body").addClass(fondo);
    $("body").removeClass(fondoB);
    $("body").removeClass(fondoA);
});
