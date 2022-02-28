(function($) {
$.fn.donetyping = function(callback){
    var _this = $(this);
    var x_timer;
    _this.keyup(function (){
        clearTimeout(x_timer);
        x_timer = setTimeout(clear_timer, 0);
    });

    function clear_timer(){
        clearTimeout(x_timer);
        callback.call(_this);
    }
}
})(jQuery);

$(".notepad").donetyping(function (e){
      localStorage.setItem($(this).attr("id"), $(this).val());
});

var _textarea = $(".notepad");
if($.trim( _textarea.val()) == ''){
  var stored_item = localStorage.getItem( _textarea.attr("id"));
  _textarea.val(stored_item);
};