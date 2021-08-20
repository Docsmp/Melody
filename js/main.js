$(document).ready(function () {
    var currentFloor = 2;
    var floorPath = $('.home-image path');
    var flatsPath = $(".flats path");
    var flatLink = $(".flat-link");
    var counterUp = $(".counter-up");
    var counterDown = $(".counter-down");
    var modal = $(".modal");
    var modalCloseBtn = $(".modal-close-button")
    var viewFlatsBtn = $(".view-flats")
   
    floorPath.on("mouseover", function(){
        currentFloor = $(this).attr("data-floor");
        floorPath.removeClass("current-floor");
        $(".counter").text(currentFloor);
    }); 

    flatLink.on("mouseover", function() {
        currentFlat = $(this).attr("data-flat-link");
        flatsPath.removeClass("current-flat");
        $(`[data-flat=${currentFlat}]`).toggleClass("current-flat");
    });

    flatsPath.on("mouseover", function() {
        currentFlat = $(this).attr("data-flat");
        flatLink.removeClass("current-flat-link");
        $(`[data-flat-link=${currentFlat}]`).toggleClass("current-flat-link");
    });

    flatLink.on("mouseout", function() {
        currentFlat = $(this).attr("data-flat-link");
        flatsPath.removeClass("current-flat"); 
    });

    flatsPath.on("mouseout", function() {
        currentFlat = $(this).attr("data-flat");
        flatLink.removeClass("current-flat-link");
    });


    floorPath.on('click', toggleModal);
    modalCloseBtn.on('click', toggleModal);
    viewFlatsBtn.on('click', toggleModal);

    counterUp.on("click", function(){
        if (currentFloor < 18 ) {
            currentFloor++;
        usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, 
            useGrouping: false});
        $(".counter").text(usCurrentFloor);
        floorPath.removeClass("current-floor");
        $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    });

    counterDown.on("click", function(){
        if (currentFloor > 2 ) {
            currentFloor--;
        usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, 
            useGrouping: false});
        $(".counter").text(usCurrentFloor);
        floorPath.removeClass("current-floor");
        $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    });

     function  toggleModal () {
        modal.toggleClass("is-open");
    }
});

