// Basic, Single Image
 //$(".cards").lightGallery();

// Group Images into a Gallery
$(".cards").lightGallery({
	selector: 'a',
    mode: 'lg-slide',
    preload: 2,
    hideBarsDelay: 1500,
    backDropDuration: 50,
});