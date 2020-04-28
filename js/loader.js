$(document).ready(function(){
    $('.modal').modal();
    $('.parallax').parallax();
    $('.sidenav').sidenav();
    $('.slider').slider({full_width: true});
    $('.myreviews').carousel({
        numVisible: 7,
        shiftValue: 1,
        padding: 55,
    });
    $('.fixed-action-btn').floatingActionButton();

})


  

function toggleModal(){
    var instance = M.Modal.getInstance($('#modal3'));
    instance.open();
}

