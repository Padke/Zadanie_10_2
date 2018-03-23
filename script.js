$(document).ready(function(){

var span = $("span");

$("span:even").css('color','pink');

var paragraphs = $('p');
paragraphs.each(function(index, element) {

    var button = '<button class="btn" data-tmp="' + index + '">Click me</button>'
    $(element).append(button)

});

$("button").click(function(){
	alert($(this).attr("data-tmp"));
});

$("button:odd").css('background-color','pink');
$("button:even").css({
    'background-color':'gray',
    'color':'white',
});

$("button").css('margin-left', '100px');
});