jQuery(document).ready(function() {


    // scalefix
    var metas = document.getElementsByTagName('meta');
    var i;
    if (navigator.userAgent.match(/iPhone/i)) {
        for (i = 0; i < metas.length; i++) {
            if (metas[i].name == "viewport") {
                metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
            }
        }
        document.addEventListener("gesturestart", gestureStart, false);
    }

    function gestureStart() {
        for (i = 0; i < metas.length; i++) {
            if (metas[i].name == "viewport") {
                metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
            }
        }
    }

    $(".toggle-btn").on("click", function() {
        jQuery(this).parents('.btn-toolbar').find('.toggle-options').toggle();
    });

    $(".calculator").on("click", function() {
        jQuery(this).toggleClass('active');
        $("#calculator").slideToggle("fast", function() {
            // Animation complete.
        });
    });

    var instrumentTextarea = function(textarea) {
        textarea.addEventListener("keyup", function(ev) {
            this.style.height = 'auto';
            this.style.height = this.scrollHeight + 12 + 'px';
        }, 0);
    };

    $(".comment-input").on("focusin", function() {
        jQuery(this).parents('.form-group').find('.comment-buttons').show();
        var textareas = jQuery(this);
        for (var i = 0; i < textareas.length; i++) {
            instrumentTextarea(textareas[i]);
        }
    });

    $(".comment__submit").on("click", function() {
        jQuery(this).parents('.form-group').find('.comment-input').height(18);
        jQuery(this).parents('.form-group').find('.comment-input').val("");
    });

    $("#comments-toggle").on("click", function() {
        jQuery(this).toggleClass('active');
        $(".comments-wrapper").slideToggle("fast", function() {
            // Animation complete.
        });
    });

    $(".card__comment").on("click", function() {
        jQuery(this).toggleClass('active');
        //jQuery(this).parents().eq(2).find('.comments').show();

        jQuery(this).parents().eq(3).find('.comments').slideToggle("fast", function() {
            // Animation complete.
        });
    });
});

function pageImage(event) {
    // use event.originalEvent.clipboard for newer chrome versions
    var items = (event.clipboardData || event.originalEvent.clipboardData).items;
    console.log(JSON.stringify(items)); // will give you the mime types
    // find pasted image among pasted items
    var blob = null;
    var element = document.getElementById("pastedImage");
    var form = document.getElementById("new-post-form");
    for (var i = 0; i < items.length; i++) {
        if (items[i].type.indexOf("image") === 0) {
            blob = items[i].getAsFile();
        }
    }
    // load image if there is a pasted image
    if (blob !== null) {
        var reader = new FileReader();
        reader.onload = function(event) {
            console.log(event.target.result); // data url!
            element.src = event.target.result;
            var scope = angular.element(form).scope();
            scope.isClipboard = true;
            scope.$apply();
        };
        reader.readAsDataURL(blob);
    }
}

window.onload = function() {
    setTimeout(function() {
        $('.navbar').data('size', 'big');
    }, 3000);

    setTimeout(function() {
        board_link_preview = encodeURI($('#board-link-preview').attr('src'));
        $("#board-link-preview").attr('src', 'https://restpack.io/api/screenshot/v2/capture?url=' + board_link_preview + '&ttl=60&access_token=aDBZse59YClhZ1Cb2hdJmtji3buKulJhj5ZrepnPnduMFtkR&thumbnail_width=350&thumbnail_height=200&cached=true');
    }, 1000);
};
