function fontH50() {
  $(".settingsH").addClass("sHFontSize50");
  $(".dropdown").addClass("cHFontSize50");
  $(".dMode, #dd1, #dd2, .notepadH").addClass("sMT50");
  $(".saveB").addClass("sB50");
  $("h1").addClass("e50");
  $(".dropdown").removeClass("t150");
  $(".notepadH").removeClass("nh150");
  $("h1").removeClass("e200");
  $(".dropdown").removeClass("t200");
  $(".notepadH").removeClass("nh200");
  $(".saveB").removeClass("sB100");
  $(".saveB").removeClass("sB150");
  $(".saveB").removeClass("sB200");
  $(".settingsH").removeClass("sHFontSize100");
  $(".dropdown").removeClass("cHFontSize100");
  $(".settingsH").removeClass("sHFontSize150");
  $(".dropdown").removeClass("cHFontSize150");
  $(".settingsH").removeClass("sHFontSize200");
  $(".dropdown").removeClass("cHFontSize200");
  $(".dMode, #dd1, #dd2, .notepadH").removeClass("sMT100");
  $(".dMode, #dd1, #dd2, .notepadH").removeClass("sMT150");
  $(".dMode, #dd1, #dd2, .notepadH").removeClass("sMT200");
  localStorage.setItem("hFontSize", "50")
};