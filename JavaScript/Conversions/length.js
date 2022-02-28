function length() {
  $(".fu1").removeClass("hidden");
  $(".fu2").removeClass("hidden");
  $(".fu3").removeClass("hidden");
  $(".fu4").removeClass("hidden");
  $(".fu5").removeClass("hidden");
  $(".fu6").removeClass("hidden");
  $(".fu7").removeClass("hidden");
  $(".fu8").removeClass("hidden");
  $(".fu1").text("Millimetre");
  $(".fu2").text("Centimetre");
  $(".fu3").text("Inch");
  $(".fu4").addClass("hidden");
  $(".fu5").addClass("hidden");
  $(".fu6").addClass("hidden");
  $(".fu7").addClass("hidden");
  $(".fu8").addClass("hidden");

  //first unit selector if convertion type is length
  $("#dd1").on("change", function() {
    if(this.value === "1") {
      $("#dd1").addClass("selMmVal1");
      $("#dd1").removeClass("selCmVal1");
      $("#dd1").removeClass("selInchVal1");
    }
    else if(this.value === "2") {
      $("#dd1").addClass("selCmVal1");
      $("#dd1").removeClass("selMmVal1");
      $("#dd1").removeClass("selInchVal1");
    }
    else if(this.value === "3") {
      $("#dd1").addClass("selInchVal1");
      $("#dd1").removeClass("selMmVal1");
      $("#dd1").removeClass("selCmVal1");
    }
  });

  //second unit selector if convertion type is length
  $("#dd2").on("change", function() {
    if(this.value === "1") {
      $("#dd2").addClass("selMmVal2");
      $("#dd2").removeClass("selCmVal2");
      $("#dd2").removeClass("selInchVal2");
    }
    else if(this.value === "2") {
      $("#dd2").addClass("selCmVal2");
      $("#dd2").removeClass("selMmVal2");
      $("#dd2").removeClass("selInchVal2");
    }
    else if(this.value === "3") {
      $("#dd2").addClass("selInchVal2");
      $("#dd2").removeClass("selMmVal2");
      $("#dd2").removeClass("selCmVal2");
    }
  });

  //when [ENTER] is pressed, run convertUnits()
  document.onkeyup = function() {
      convertUnits();
  };

  //redirect to a function depending on first unit
  function convertUnits() {
    if( $("#dd1").hasClass("selMmVal1")) {
      mmToSUnit()
    }
    else if( $("#dd1").hasClass("selCmVal1")) {
      cmToSUnit()
    }
    else if( $("#dd1").hasClass("selInchVal1")) {
      inchToSUnit()
    }
    else {
      mmToSUnit()
    }
  };

   //if first unit is mm
  function mmToSUnit() {
    if( $("#dd2").hasClass("selMmVal2")) {
      var w = document.getElementById("textFrom").value;
      var x = 1;
      var y = w*x;
      var z = eval(y);
      document.getElementById("textTo").value = z
    }
    else if( $("#dd2").hasClass("selCmVal2")) {
      var w = document.getElementById("textFrom").value;
      var x = 10;
      var y = w/x;
      var z = eval(y);
      document.getElementById("textTo").value = z
    }
    else if( $("#dd2").hasClass("selInchVal2")) {
      var w = document.getElementById("textFrom").value;
      var x = 25.4;
      var y = w/x;
      var z = eval(y);
      document.getElementById("textTo").value = z
    }
    else {
      var w = document.getElementById("textFrom").value;
      var x = 10;
      var y = w/x;
      var z = eval(y);
      document.getElementById("textTo").value = z
    }
  };

  //is first unit is cm
  function cmToSUnit() {
    if( $("#dd2").hasClass("selMmVal2")) {
      var w = document.getElementById("textFrom").value;
      var x = 10;
      var y = w*x;
      var z = eval(y);
      document.getElementById("textTo").value = z
    }
    else if( $("#dd2").hasClass("selCmVal2")) {
      var w = document.getElementById("textFrom").value;
      var x = 1;
      var y = w*x;
      var z = eval(y);
      document.getElementById("textTo").value = z
    }
    else if( $("#dd2").hasClass("selInchVal2")) {
      var w = document.getElementById("textFrom").value;
      var x = 2.54;
      var y = w/x;
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

  //if first unit is inches
  function inchToSUnit() {
    if( $("#dd2").hasClass("selMmVal2")) {
      var w = document.getElementById("textFrom").value;
      var x = 25.4;
      var y = w*x;
      var z = eval(y);
      document.getElementById("textTo").value = z
    }
    else if( $("#dd2").hasClass("selCmVal2")) {
      var w = document.getElementById("textFrom").value;
      var x = 2.54;
      var y = w*x;
      var z = eval(y);
      document.getElementById("textTo").value = z
    }
    else if( $("#dd2").hasClass("selInchVal2")) {
      var w = document.getElementById("textFrom").value;
      var x = 1;
      var y = w*x;
      var z = eval(y);
      document.getElementById("textTo").value = z
    }
    else {
      var w = document.getElementById("textFrom").value;
      var x = 2.54;
      var y = w*x;
      var z = eval(y);
      document.getElementById("textTo").value = z
    }
  };
};