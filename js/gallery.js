var pswpElement = document.querySelectorAll('.pswp')[0];
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

// build items array
var items = [
    {
        src: 'https://scontent-los2-1.cdninstagram.com/v/t51.2885-15/e35/s480x480/92481726_1070832279962722_3516649905909800759_n.jpg?_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=110&_nc_ohc=g7UT1X2rWpEAX_ri5lW&oh=6d930be23bf8aa487a0bacdc34dd4f36&oe=5F20A057',
        w: vw/1.5,
        h:vw/1.5
    },
    {
        src: 'https://scontent-los2-1.cdninstagram.com/v/t51.2885-15/e35/s480x480/92481726_1070832279962722_3516649905909800759_n.jpg?_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=110&_nc_ohc=g7UT1X2rWpEAX_ri5lW&oh=6d930be23bf8aa487a0bacdc34dd4f36&oe=5F20A057',
        w:vw/1.5,
        h:vw/1.5
    }
];



// Initializes and opens PhotoSwipe

$('.img').click(function (e) { 
    e.preventDefault();
    console.log('img click')
    index = parseInt($(this).data('picid'));
    // define options (if needed)
    var options = {
        // optionName: 'option value'
        // for example:
        index: index // start at first slide
    };
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    console.log(options.index)
    gallery.init();
});