//btn-menu
$(".btn-menu").on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(".sidebar-wrap").toggleClass('show-menu');
    $("body").toggleClass('overflow-hidden');
});

//tabs
// $( function() {
//     $( "#tabs" ).tabs();
// } );

// //close/open select terminal
// $(document).ready(function(){
//     $("option#public").change(function(){
//         if ($(this).prop('checked')) {
//             $('#hide').fadeIn().show();
//
//         } else {
//             $('#hide').fadeOut(300);
//         }
//     });
// })
//
//
// $( ".close-block-btn" ).click(function() {
//     $( ".close-block" ).hide( "slow" );
// });
// //end

//custom-select
(function($) {
    $(document).ready(function() {
        var customSelect = $(".custom-select");

        customSelect.each(function() {
            var thisCustomSelect = $(this),
                options = thisCustomSelect.find("option"),
                firstOptionText = options.first().text();

            var selectedItem = $("<div></div>", {
                class: "selected-item"
            })
                .appendTo(thisCustomSelect)
                .text(firstOptionText);

            var allItems = $("<div></div>", {
                class: "all-items all-items-hide"
            }).appendTo(thisCustomSelect);

            options.each(function() {
                var that = $(this),
                    optionText = that.text();

                var item = $("<div></div>", {
                    class: "item",
                    on: {
                        click: function() {
                            var selectedOptionText = that.text();
                            selectedItem.text(selectedOptionText).removeClass("arrowanim");
                            allItems.addClass("all-items-hide");
                        }
                    }
                })
                    .appendTo(allItems)
                    .text(optionText);
            });
        });

        var selectedItem = $(".selected-item"),
            allItems = $(".all-items");

        selectedItem.on("click", function(e) {
            var currentSelectedItem = $(this),
                currentAllItems = currentSelectedItem.next(".all-items");

            allItems.not(currentAllItems).addClass("all-items-hide");
            selectedItem.not(currentSelectedItem).removeClass("arrowanim");

            currentAllItems.toggleClass("all-items-hide");
            currentSelectedItem.toggleClass("arrowanim");

            e.stopPropagation();
        });

        $(document).on("click", function() {
            var opened = $(".all-items:not(.all-items-hide)"),
                index = opened.parent().index();

            customSelect
                .eq(index)
                .find(".all-items")
                .addClass("all-items-hide");
            customSelect
                .eq(index)
                .find(".selected-item")
                .removeClass("arrowanim");
        });
    });
})(jQuery);
//end

// //toggle password
// document.addEventListener('DOMContentLoaded', function () {
//     const passwordEle = document.getElementById('сonfirm-password');
//     const toggleEle = document.getElementById('toggle');
//
//     toggleEle.addEventListener('click', function () {
//         const type = passwordEle.getAttribute('type');
//         passwordEle.setAttribute('type', type === 'password' ? 'text' : 'password');
//     });
// });
// //end

let accordion = document.querySelector('.sidebar-mobile');

function accordionOpener(node) {
    if (node) {
        for (let i = 0; i < node.children.length; i++) {
            node.children[i].addEventListener("click", function(e) {
                e.preventDefault();
                node.children[i].classList.toggle("active-item");
            });
        }
    }
}

accordionOpener(accordion)






