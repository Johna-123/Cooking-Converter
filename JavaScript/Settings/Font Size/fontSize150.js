function fontH150() {
  $(".settingsH").addClass("sHFontSize150");
  $(".dropdown").addClass("cHFontSize150");
  $(".dMode, #dd1, #dd2, .notepadH").addClass("sMT150");
  $(".saveB").addClass("sB150");
  $(".dropdown").addClass("t150");
  $(".notepadH").addClass("nh150");
  $("h1").removeClass("e50");
  $("h1").removeClass("e200");
  $(".dropdown").removeClass("t200");
  $(".notepadH").removeClass("nh200");
  $(".saveB").removeClass("sB100");
  $(".saveB").removeClass("sB50");
  $(".saveB").removeClass("sB200");
  $(".dMode, #dd1, #dd2, .notepadH").removeClass("sMT100");
  $(".dMode, #dd1, #dd2, .notepadH").removeClass("sMT50");
  $(".dMode, #dd1, #dd2, .notepadH").removeClass("sMT200");
  $(".settingsH").removeClass("sHFontSize100");
  $(".dropdown").removeClass("cHFontSize100");
  $(".settingsH").removeClass("sHFontSize50");
  $(".dropdown").removeClass("cHFontSize50");
  $(".settingsH").removeClass("sHFontSize200");
  $(".dropdown").removeClass("cHFontSize200");
  localStorage.setItem("hFontSize", "150")
};