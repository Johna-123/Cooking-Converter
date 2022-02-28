function mass() {
  $(".fu1").removeClass("hidden");
  $(".fu2").removeClass("hidden");
  $(".fu3").removeClass("hidden");
  $(".fu4").removeClass("hidden");
  $(".fu5").removeClass("hidden");
  $(".fu6").removeClass("hidden");
  $(".fu7").removeClass("hidden");
  $(".fu8").removeClass("hidden");
  $(".fu1").text("Gram");
  $(".fu2").text("Kilogram");
  $(".fu3").text("Ounce");
  $(".fu4").text("Pound");
  $(".fu5").addClass("hidden");
  $(".fu6").addClass("hidden");
  $(".fu7").addClass("hidden");
  $(".fu8").addClass("hidden");

  //first unit selector if convertion type is mass
  $("#dd1").on("change", function() {
    if(this.value === "1") {
      $("#dd1").addClass("selGVal1");
      $("#dd1").removeClass("selKgVal1");
      $("#dd1").removeClass("selOzVal1");
      $("#dd1").removeClass("selLbVal1");
    }
    else if(this.value === "2") {
      $("#dd1").addClass("selKgVal1");
      $("#dd1").removeClass("selGVal1");
      $("#dd1").removeClass("selOzVal1");
      $("#dd1").removeClass("selLbVal1");
    }
    else if(this.value === "3") {
      $("#dd1").addClass("selOzVal1");
      $("#dd1").removeClass("selKgVal1");
      $("#dd1").removeClass("selGVal1");
      $("#dd1").removeClass("selLbVal1");
    }
    else if(this.value === "4") {
      $("#dd1").addClass("selLbVal1");
      $("#dd1").removeClass("selKgVal1");
      $("#dd1").removeClass("selGVal1");
      $("#dd1").removeClass("selOzVal1");
    }
  });

  //second unit selector if convertion type is mass
  $("#dd2").on("change", function() {
    if(this.value === "1") {
      $("#dd2").addClass("selGVal2");
      $("#dd2").removeClass("selKgVal2");
      $("#dd2").removeClass("selOzVal2");
      $("#dd2").removeClass("selLbVal2");
    }
    else if(this.value === "2") {
      $("#dd2").addClass("selKgVal2");
      $("#dd2").removeClass("selGVal2");
      $("#dd2").removeClass("selOzVal2");
      $("#dd2").removeClass("selLbVal2");
    }
    else if(this.value === "3") {
      $("#dd2").addClass("selOzVal2");
      $("#dd2").removeClass("selKgVal2");
      $("#dd2").removeClass("selGVal2");
      $("#dd2").removeClass("selLbVal2");
    }
    else if(this.value === "4") {
      $("#dd2").addClass("selLbVal2");
      $("#dd2").removeClass("selKgVal2");
      $("#dd2").removeClass("selGVal2");
      $("#dd2").removeClass("selOzVal2");
    }
  });

  //when [ENTER] is pressed, run convertUnits()
  document.onkeyup = function() {
      convertUnits();
  };

  //redirect to a function depending on first unit
  function convertUnits() {
    if( $("#dd1").hasClass("selGVal1")) {
      gToSUnit()
    }
    else if( $("#dd1").hasClass("selKgVal1")) {
      kgToSUnit()
    }
    else if( $("#dd1").hasClass("selOzVal1")) {
      ozToSUnit()
    }
    else if( $("#dd1").hasClass("selLbVal1")) {
      lbToSUnit()
    }
    else {
      gToSUnit()
    }
  };

   //if first unit is g
  function gToSUnit() {
    if( $("#dd2").hasClass("selGVal2")) {
      var w = document.getElementById("textFrom").value;
      var x = 1;
      var y = w*x;
      var z = eval(y);
      document.getElementById("textTo").value = z
    }
    else if( $("#dd2").hasClass("selKgVal2")) {
      var w = document.getElementById("textFrom").value;
      var x = 1000;
      var y = w/x;
      var z = eval(y);
      document.getElementById("textTo").value = z
    }
    else if( $("#dd2").hasClass("selOzVal2")) {
      var w = document.getElementById("textFrom").value;
      var x = 28.3495231;
      var y = w/x;
      var z = eval(y);
      document.getElementById("textTo").value = z
    }
    else if( $("#dd2").hasClass("selLbVal2")) {
      var w = document.getElementById("textFrom").value;
      var x = 453.59237;
      var y = w/x;
      var z = eval(y);
      document.getElementById("textTo").value = z
    }
    else {
      var w = document.getElementById("textFrom").value;
      var x = 1000;
      var y = w/x;
      var z = eval(y);
      document.getElementById("textTo").value = z
    }
  };

  //is first unit is kg
  function kgToSUnit() {
    if( $("#dd2").hasClass("selGVal2")) {
      var w = document.getElementById("textFrom").value;
      var x = 1000;
      var y = w*x;
      var z = eval(y);
      document.getElementById("textTo").value = z
    }
    else if( $("#dd2").hasClass("selKgVal2")) {
      var w = document.getElementById("textFrom").value;
      var x = 1;
      var y = w*x;
      var z = eval(y);
      document.getElementById("textTo").value = z
    }
    else if( $("#dd2").hasClass("selOzVal2")) {
      var w = document.getElementById("textFrom").value;
      var x = 35.273962;
      var y = w*x;
      var z = eval(y);
      document.getElementById("textTo").value = z
    }
    else if( $("#dd2").hasClass("selLbVal2")) {
      var w = document.getElementById("textFrom").value;
      var x = 2.20462262;
      var y = w*x;
      var z = eval(y);
      document.getElementById("textTo").value = z
    }
    else {
      var w = document.getElementById("textFrom").value;
      var x = 1;
      var y = w*x;
      var z = eval(y);
      document.getElementById("textTo").value = z
    }
  };

  //if first unit is ounce
  function ozToSUnit() {
    if( $("#dd2").hasClass("selGVal2")) {
      var w = document.getElementById("textFrom").value;
      var x = 28.3495231;
      var y = w*x;
      var z = eval(y);
      document.getElementById("textTo").value = z
    }
    else if( $("#dd2").hasClass("selKgVal2")) {
      var w = document.getElementById("textFrom").value;
      var x = 35.273962;
      var y = w/x;
      var z = eval(y);
      document.getElementById("textTo").value = z
    }
    else if( $("#dd2").hasClass("selOzVal2")) {
      var w = document.getElementById("textFrom").value;
      var x = 1;
      var y = w*x;
      var z = eval(y);
      document.getElementById("textTo").value = z
    }
    else if( $("#dd2").hasClass("selLbVal2")) {
      var w = document.getElementById("textFrom").value;
      var x = 16;
      var y = w/x;
      var z = eval(y);
      document.getElementById("textTo").value = z
    }
    else {
      var w = document.getElementById("textFrom").value;
      var x = 35.273962;
      var y = w*x;
      var z = eval(y);
      document.getElementById("textTo").value = z
    }
  };

  //if first unit is pound
  function lbToSUnit() {
    if( $("#dd2").hasClass("selGVal2")) {
      var w = document.getElementById("textFrom").value;
      var x = 453.59237;
      var y = w*x;
      var z = eval(y);
      document.getElementById("textTo").value = z
    }
    else if( $("#dd2").hasClass("selKgVal2")) {
      var w = document.getElementById("textFrom").value;
      var x = 2.20462262;
      var y = w/x;
      var z = eval(y);
      document.getElementById("textTo").value = z
    }
    else if( $("#dd2").hasClass("selOzVal2")) {
      var w = document.getElementById("textFrom").value;
      var x = 16;
      var y = w*x;
      var z = eval(y);
      document.getElementById("textTo").value = z
    }
    else if( $("#dd2").hasClass("selLbVal2")) {
      var w = document.getElementById("textFrom").value;
      var x = 1;
      var y = w*x;
      var z = eval(y);
      document.getElementById("textTo").value = z
    }
    else {
      var w = document.getElementById("textFrom").value;
      var x = 2.20462262;
      var y = w*x;
      var z = eval(y);
      document.getElementById("textTo").value = z
    }
  };
};