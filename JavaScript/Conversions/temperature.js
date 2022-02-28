function temperature() {
  $(".fu1").removeClass("hidden");
  $(".fu2").removeClass("hidden");
  $(".fu3").removeClass("hidden");
  $(".fu4").removeClass("hidden");
  $(".fu5").removeClass("hidden");
  $(".fu6").removeClass("hidden");
  $(".fu7").removeClass("hidden");
  $(".fu8").removeClass("hidden");
  $(".fu1").text("Celsius");
  $(".fu2").text("Fahrenheit");
  $(".fu3").text("Kelvin");
  $(".fu4").addClass("hidden");
  $(".fu5").addClass("hidden");
  $(".fu6").addClass("hidden");
  $(".fu7").addClass("hidden");
  $(".fu8").addClass("hidden");

  //first unit selector if convertion type is length
  $("#dd1").on("change", function() {
    if(this.value === "1") {
      $("#dd1").addClass("selCVal1");
      $("#dd1").removeClass("selFVal1");
      $("#dd1").removeClass("selKVal1");
    }
    else if(this.value === "2") {
      $("#dd1").addClass("selFVal1");
      $("#dd1").removeClass("selCVal1");
      $("#dd1").removeClass("selKVal1");
    }
    else if(this.value === "3") {
      $("#dd1").addClass("selKVal1");
      $("#dd1").removeClass("selCVal1");
      $("#dd1").removeClass("selFVal1");
    }
  });

  //second unit selector if convertion type is length
  $("#dd2").on("change", function() {
    if(this.value === "1") {
      $("#dd2").addClass("selCVal2");
      $("#dd2").removeClass("selFVal2");
      $("#dd2").removeClass("selKVal2");
    }
    else if(this.value === "2") {
      $("#dd2").addClass("selFVal2");
      $("#dd2").removeClass("selCVal2");
      $("#dd2").removeClass("selKVal2");
    }
    else if(this.value === "3") {
      $("#dd2").addClass("selKVal2");
      $("#dd2").removeClass("selCVal2");
      $("#dd2").removeClass("selFVal2");
    }
  });

  //when [ENTER] is pressed, run convertUnits()
  document.onkeyup = function(e) {
      convertUnits();
  };

  //redirect to a function depending on first unit
  function convertUnits() {
    if( $("#dd1").hasClass("selCVal1")) {
      cToSUnit();
    }
    else if( $("#dd1").hasClass("selFVal1")) {
      fToSUnit();
    }
    else if( $("#dd1").hasClass("selKVal1")) {
      kToSUnit();
    }
    else {
      cToSUnit();
    }
  };

   //if first unit is C
  function cToSUnit() {
    if( $("#dd2").hasClass("selCVal2")) {
      var w = document.getElementById("textFrom").value;
      var x = 1;
      var y = w*x;
      var z = eval(y);
      document.getElementById("textTo").value = z;
    }
    else if( $("#dd2").hasClass("selFVal2")) {
      var w = document.getElementById("textFrom").value;
      var x = 1.8;
      var e = 32;
      var y = w*x+e;
      var z = eval(y);
      document.getElementById("textTo").value = z;
    }
    else if( $("#dd2").hasClass("selKVal2")) {
      var w = document.getElementById("textFrom").value;
      var x = 1;
      var e = 273.15;
      var y = w*x+e;
      var z = eval(y);
      document.getElementById("textTo").value = z;
    }
    else {
      var w = document.getElementById("textFrom").value;
      var x = 1.8;
      var e = 32;
      var y = w*x+e;
      var z = eval(y);
      document.getElementById("textTo").value = z;
    }
  };

  //is first unit is F
  function fToSUnit() {
    if( $("#dd2").hasClass("selCVal2")) {
      var w = document.getElementById("textFrom").value;
      var x = 32;
      var e = w-x;
      var ae = 1.8;
      var y = e/ae;
      var z = eval(y);
      document.getElementById("textTo").value = z;
    }
    else if( $("#dd2").hasClass("selFVal2")) {
      var w = document.getElementById("textFrom").value;
      var x = 1;
      var y = w*x;
      var z = eval(y);
      document.getElementById("textTo").value = z;
    }
    else if( $("#dd2").hasClass("selKVal2")) {
      var w = document.getElementById("textFrom").value;
      var x = 0.555555555555555;
      var e = 255.3722222;
      var y = w*x+e;
      var z = eval(y);
      document.getElementById("textTo").value = z;
    }
    else {
      var w = document.getElementById("textFrom").value;
      var x = 1;
      var y = w*x;
      var z = eval(y);
      document.getElementById("textTo").value = z;
    }
  };

  //if first unit is K
  function kToSUnit() {
    if( $("#dd2").hasClass("selCVal2")) {
      var w = document.getElementById("textFrom").value;
      var x = 273.15;
      var y = w-x;
      var z = eval(y);
      document.getElementById("textTo").value = z;
    }
    else if( $("#dd2").hasClass("selFVal2")) {
      var w = document.getElementById("textFrom").value;
      var x = 1.8;
      var e = 459.67;
      var y = w*x-e;
      var z = eval(y);
      document.getElementById("textTo").value = z;
    }
    else if( $("#dd2").hasClass("selKVal2")) {
      var w = document.getElementById("textFrom").value;
      var x = 1;
      var y = w*x;
      var z = eval(y);
      document.getElementById("textTo").value = z;
    }
    else {
      var w = document.getElementById("textFrom").value;
      var x = 1.8;
      var e = 459.67
      var y = w*x-e;
      var z = eval(y);
      document.getElementById("textTo").value = z;
    }
  };
};