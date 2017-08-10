$(document).ready(function() {
    var titles = ['The Right Stuff', 'Artsy-Craftsy', 'Crackerjack Creatives', 'Pragmatic Programmer', 'The Cat\'s Pajamas'];
    var i = Math.floor((Math.random()*titles.length));
    $('#headline div h1').text(titles[i]);
});
