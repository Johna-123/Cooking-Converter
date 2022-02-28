function fontH100() {
  $(".settingsH").addClass("sHFontSize100");
  $(".dropdown").addClass("cHFontSize100");
  $(".dMode, #dd1, #dd2, .notepadH").addClass("sMT100");
  $(".saveB").addClass("sB10");
  $(".dropdown").removeClass("t150");
  $(".notepadH").removeClass("nh150");
  $("h1").removeClass("e50");
  $("h1").removeClass("e200");
  $(".dropdown").removeClass("t200");
  $(".notepadH").removeClass("nh200");
  $(".saveB").removeClass("sB50");
  $(".saveB").removeClass("sB150");
  $(".saveB").removeClass("sB200");
  $(".dMode, #dd1, #dd2, .notepadH").removeClass("sMT50");
  $(".dMode, #dd1, #dd2, .notepadH").removeClass("sMT150");
  $(".dMode, #dd1, #dd2, .notepadH").removeClass("sMT200");
  $(".settingsH").removeClass("sHFontSize50");
  $(".dropdown").removeClass("cHFontSize50");
  $(".settingsH").removeClass("sHFontSize150");
  $(".dropdown").removeClass("cHFontSize150");
  $(".settingsH").removeClass("sHFontSize200");
  $(".dropdown").removeClass("cHFontSize200");
  localStorage.setItem("hFontSize", "100")
};