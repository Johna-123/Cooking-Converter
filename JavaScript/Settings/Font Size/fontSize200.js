function fontH200() {
  $(".settingsH").addClass("sHFontSize200");
  $(".dropdown").addClass("cHFontSize200");
  $(".dMode, #dd1, #dd2, .notepadH").addClass("sMT200");
  $(".saveB").addClass("sB200");
  $("h1").addClass("e200");
  $(".dropdown").addClass("t200");
  $(".notepadH").addClass("nh200");
  $("h1").removeClass("e50");
  $(".dropdown").removeClass("t150");
  $(".notepadH").removeClass("nh150");
  $(".saveB").removeClass("sB100");
  $(".saveB").removeClass("sB150");
  $(".saveB").removeClass("sB50");
  $(".dMode, #dd1, #dd2, .notepadH").removeClass("sMT100");
  $(".dMode, #dd1, #dd2, .notepadH").removeClass("sMT150");
  $(".dMode, #dd1, #dd2, .notepadH").removeClass("sMT50");
  $(".settingsH").removeClass("sHFontSize100");
  $(".dropdown").removeClass("cHFontSize100");
  $(".settingsH").removeClass("sHFontSize150");
  $(".dropdown").removeClass("cHFontSize150");
  $(".settingsH").removeClass("sHFontSize50");
  $(".dropdown").removeClass("cHFontSize50");
  localStorage.setItem("hFontSize", "200")
}