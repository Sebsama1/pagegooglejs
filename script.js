$(document).ready(function(){
    $("#bouton").click(function(){
        $('#groupe').removeClass('desactive');
      });
    $(document).on('click', '#bouton', function() {
          $(this).remove();
      });
});
