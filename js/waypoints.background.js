$('section').waypoint(function() {
  console.log ("esta en el slide numero ", this.id)
        $("body").removeClass('background1');
        $("body").addClass('background2');
});