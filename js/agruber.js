$(document).ready(function() {

$("a[rel='external']").attr('target','_blank');	 //automatically open external links open in new window/tab

// horizontal scrollables. each one is circular and has its own navigator instance
var horizontal = $(".scrollable").scrollable({ circular: true }).navigator(".navi");

// when page loads setup keyboard focus on the first horzontal scrollable
horizontal.eq(0).data("scrollable").focus();

// fancybox - custom title like lightbox //
function formatTitle(title, currentArray, currentIndex, currentOpts) {
    return '<div id="fzoom-title"><span><a href="javascript:;" onclick="$.fancybox.close();"><img src="images/closelabel.gif" /></a></span>' + (title && title.length ? '<b>' + title + '</b>' : '' ) + 'Image ' + (currentIndex + 1) + ' of ' + currentArray.length + '</div>';
}

$("a.fzoom-lbox").fancybox({
	'titlePosition':'inside',
	'titleFormat': formatTitle,
	'autoScale':true
});

$("a.fzoom").fancybox({
	'titlePosition':'over',
	'overlayColor':'#e6e5d8',
	'overlayOpacity':1
});

$("a#fform").fancybox({
	//'autoDimensions': true,
	'type':'iframe',
	'width':350,
	'padding':0
});

$("a#vimeo").fancybox({
	'titlePosition':'over',
	'overlayColor':'#e6e5d8',
	'overlayOpacity':1,
	'padding'		: 0,
	'autoScale'		: false,
	'width'			: 640,
	'height'		: 360,
	'type'			: 'iframe'
});

$("a#wcsbanner1").fancybox({
	'titlePosition':'over',
	'overlayColor':'#e6e5d8',
	'overlayOpacity':1,
	'padding'		: 0,
	'autoScale'		: false,
	'width'			: 728,
	'height'		: 90,
	'type'			: 'swf'
});

$("a#wcsbanner2").fancybox({
	'titlePosition':'over',
	'overlayColor':'#e6e5d8',
	'overlayOpacity':1,
	'padding'		: 0,
	'autoScale'		: false,
	'width'			: 300,
	'height'		: 250,
	'type'			: 'swf'
});

$("a#wcsbanner3").fancybox({
	'titlePosition':'over',
	'overlayColor':'#e6e5d8',
	'overlayOpacity':1,
	'padding'		: 0,
	'autoScale'		: false,
	'width'			: 160,
	'height'		: 600,
	'type'			: 'swf'
});

$("a#code").fancybox({
	'titlePosition':'over',
	'overlayColor':'#000',
	'overlayOpacity':.2,
	'opacity'		: false,
	'padding'		: 0,
	'margin'		: 10,
	'autoScale'		: false,
	'type'			: 'inline'
});

//hover fade
var oldOpacity = "0";
    $(".hovFade").hover(
        function () {
            //oldOpacity = $(this).css("opacity");        
        $(this).animate({opacity: '1'},{"duration":200});
    },
    function () {
        $(this).animate({opacity: oldOpacity},{"duration":200});
    }
    );
});

//This function displays the Google Reader feed nicely in the What I'm Reading section//
function buildContent (blog) {
  if (!blog || !blog.items) return;
  var container=document.getElementById("googleFeed");
  var code="";
  for (var i = 0; i < blog.items.length; i++) {
    var item = blog.items[i];
    code=code+"<li><a class='title' href='"+item.alternate.href+"' target='_blank'>"+item.title+"</a> &mdash; "+item.origin.title+"</li>";
  }
  container.innerHTML=code;
}
