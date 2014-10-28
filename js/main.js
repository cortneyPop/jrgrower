// $('#monitor').html($(window).width());

// $(window).resize(function() {
//     var viewportWidth = $(window).width();
//     $('#monitor').html(viewportWidth);
// });


var showRightPush = document.getElementById( 'showRightPush' ),
    menuRight = document.getElementById( 'cbp-spmenu-s2' ),
    body = document.body;

showRightPush.onclick = function() {
    classie.toggle( this, 'active' );
    classie.toggle( body, 'cbp-spmenu-push-toleft' );
    classie.toggle( menuRight, 'cbp-spmenu-open' );
    disableOther( 'showRightPush' );
};
 
function disableOther( button ) {
    if( button !== 'showRightPush' ) {
        classie.toggle( showRightPush, 'disabled' );
    }
}
