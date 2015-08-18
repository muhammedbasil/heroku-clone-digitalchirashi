// $(document).ready(function(){
// $('#share_button').click(function(e){
// e.preventDefault();
// FB.ui(
// {
// method: 'feed',
// name: 'This is the content of the "name" field.',
// link: ' http://127.0.0.1/heroku-php-bootstrap/public/index.php?title=1&image=2&description=3',
// picture: 'http://www.hyperarts.com/external-xfbml/share-image.gif',
// caption: 'This is the content of the "caption" field.',
// description: 'This is the content of the "description" field, below the caption.',
// message: ''
// });
// });
// });
function escapeHtml(text) {
  var map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
    '/': '%2F',
    ':': '%3A'
  };

  return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

$(document).ready(function(){
$('.share').click(function(e){  
  FB.ui({
    display: 'popup',
    method: 'share_open_graph',
    action_type: 'og.likes',
    action_properties: JSON.stringify({
        object: myData,
    })
  }, function(response){});
});

$('.sharer').click(function(e){
var div = document.getElementById("dom-target");
var myData = div.textContent;
var translatedHTML = escapeHtml(myData);
var seed = "https://www.facebook.com/sharer/sharer.php?app_id=176318562473204&sdk=joey&u=";
var ext = "&display=popup&ref=plugin&src=share_button";
var full = seed.concat(translatedHTML);
var full2 = full.concat(ext);
var fbpopup = window.open(full2, "pop", "width=600, height=400, scrollbars=no");
return false;
});
// https://www.facebook.com/sharer/sharer.php?app_id=176318562473204&sdk=joey&u=http%3A%2F%2Fx%2Fheroku-php-bootstrap%2Fpublic%2Findex.php%3Ftitle%3Dnewtitle%2Bnd%26description%3Ddescriptive%2B%26image%3D4.jpg&display=popup&ref=plugin&src=share_button
//     var fbpopup = window.open("https://www.facebook.com/sharer/sharer.php?app_id=176318562473204&sdk=joey&display=popup&ref=plugin&src=share_button&u=http://stackoverflow.com", "pop", "width=600, height=400, scrollbars=no");
    // return false;
$('share1').click(function(e){
	    var fbpopup = window.open("https://www.facebook.com/sharer/sharer.php?app_id=176318562473204&sdk=joey&display=popup&ref=plugin&src=share_button&u=http://stackoverflow.com", "pop", "width=600, height=400, scrollbars=no");
    return false;
});

});


var first = "https://www.facebook.com/sharer/sharer.php?app_id=176318562473204&sdk=joey&u=http%3A%2F%2Fdigital-chirashi1.herokuapp.com%2Findex.php%3Ftitle%3D333gklfsdkgsdkl%26description%3Dgfisjfoiaj%26image%3D9.jpg&display=popup&ref=plugin&src=share_button";
var second = "https://www.facebook.com/sharer/sharer.php?app_id=176318562473204&sdk=joey&u=http://digital-chirashi1.herokuapp.com/index.php?title=333gklfsdkgsdkl&description=gfisjfoiaj&image=9.jpg&display=popup&ref=plugin&src=share_button";
