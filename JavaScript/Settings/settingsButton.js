$(".settingsicon").on("click", function() {
  $(".settings").removeClass("hidden");
});

$(".backToMainB").on("click", function() {
  $(".settings").addClass("hidden");
});