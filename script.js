$(document).ready(function(){
    $("#bouton").click(function(){
        $('#groupe').removeClass('desactive');
      });
    $(document).on('click', '#bouton', function() {
          $(this).remove();
      });

    $('#rech').click(function(){
var test = document.getElementById('bar').value;
        window.open('https://www.google.fr/#q='+test.replace(' ','+'));
    })
})
