//btn-menu
$(".btn-menu").on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(".menu-navigation-wrap").toggleClass('show-menu');
    $("body").toggleClass('overflow-hidden');
    $("body").toggleClass('background');
});

// When the user clicks on div, open the popup
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

//accordion
$(function() {

    //BEGIN
    $(".accordion__title").on("click", function(e) {

        e.preventDefault();
        var $this = $(this);

        if (!$this.hasClass("accordion-active")) {
            $(".accordion__content").slideUp(400);
            $(".accordion__title").removeClass("accordion-active");
        }

        $this.toggleClass("accordion-active");
        $this.next().slideToggle();
    });
    //END

});

//accordion replacement//

// $( function() {
//     $.widget( "custom.iconselectmenu", $.ui.selectmenu, {
//         _renderItem: function( ul, item ) {
//             var li = $( "<li>" ),
//                 wrapper = $( "<div>", { text: item.label } );
//
//             if ( item.disabled ) {
//                 li.addClass( "ui-state-disabled" );
//             }
//
//             $( "<span>", {
//                 style: item.element.attr( "data-style" ),
//                 "class": "ui-icon " + item.element.attr( "data-class" )
//             })
//                 .appendTo( wrapper );
//
//             return li.append( wrapper ).appendTo( ul );
//         }
//     });
//
//     $( "#filesB" )
//         .iconselectmenu()
//         .iconselectmenu( "menuWidget" )
//         .addClass( "ui-menu-icons customicons" );
// } );
