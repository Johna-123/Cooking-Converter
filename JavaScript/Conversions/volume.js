  function volume() {
    $(".fu1").removeClass("hidden");
    $(".fu2").removeClass("hidden");
    $(".fu3").removeClass("hidden");
    $(".fu4").removeClass("hidden");
    $(".fu5").removeClass("hidden");
    $(".fu6").removeClass("hidden");
    $(".fu7").removeClass("hidden");
    $(".fu8").removeClass("hidden");
    $(".fu1").text("Millilitre");
    $(".fu2").text("Litre");
    $(".fu3").text("Cup (Metric)");
    $(".fu4").text("Cup (US)");
    $(".fu5").text("Fluid Ounce (US)");
    $(".fu6").text("Pint (US)");
    $(".fu7").text("Teaspoon (Metric)");
    $(".fu8").text("Tablespoon (Metric)");

    //first unit selector if convertion type is volume
    $("#dd1").on("change", function() {
      if(this.value === "1") {
        $("#dd1").addClass("ml");
        $("#dd1").removeClass("l");
        $("#dd1").removeClass("ukc");
        $("#dd1").removeClass("usc");
        $("#dd1").removeClass("floz");
        $("#dd1").removeClass("pt");
        $("#dd1").removeClass("tsp");
        $("#dd1").removeClass("tbsp");
      }
      else if(this.value === "2") {
        $("#dd1").addClass("l");
        $("#dd1").removeClass("ml");
        $("#dd1").removeClass("ukc");
        $("#dd1").removeClass("usc");
        $("#dd1").removeClass("floz");
        $("#dd1").removeClass("pt");
        $("#dd1").removeClass("tsp");
        $("#dd1").removeClass("tbsp");
      }
      else if(this.value === "3") {
        $("#dd1").addClass("ukc");
        $("#dd1").removeClass("l");
        $("#dd1").removeClass("ml");
        $("#dd1").removeClass("usc");
        $("#dd1").removeClass("floz");
        $("#dd1").removeClass("pt");
        $("#dd1").removeClass("tsp");
        $("#dd1").removeClass("tbsp");
      }
      else if(this.value === "4") {
        $("#dd1").addClass("usc");
        $("#dd1").removeClass("l");
        $("#dd1").removeClass("ukc");
        $("#dd1").removeClass("ml");
        $("#dd1").removeClass("floz");
        $("#dd1").removeClass("pt");
        $("#dd1").removeClass("tsp");
        $("#dd1").removeClass("tbsp");
      }
      else if(this.value === "5") {
        $("#dd1").addClass("floz");
        $("#dd1").removeClass("l");
        $("#dd1").removeClass("ukc");
        $("#dd1").removeClass("usc");
        $("#dd1").removeClass("ml");
        $("#dd1").removeClass("pt");
        $("#dd1").removeClass("tsp");
        $("#dd1").removeClass("tbsp");
      }
      else if(this.value === "6") {
        $("#dd1").addClass("pt");
        $("#dd1").removeClass("l");
        $("#dd1").removeClass("ukc");
        $("#dd1").removeClass("usc");
        $("#dd1").removeClass("floz");
        $("#dd1").removeClass("ml");
        $("#dd1").removeClass("tsp");
        $("#dd1").removeClass("tbsp");
      }
      else if(this.value === "7") {
        $("#dd1").addClass("tsp");
        $("#dd1").removeClass("l");
        $("#dd1").removeClass("ukc");
        $("#dd1").removeClass("usc");
        $("#dd1").removeClass("floz");
        $("#dd1").removeClass("pt");
        $("#dd1").removeClass("ml");
        $("#dd1").removeClass("tbsp");
      }
      else if(this.value === "8") {
        $("#dd1").addClass("tbsp");
        $("#dd1").removeClass("l");
        $("#dd1").removeClass("ukc");
        $("#dd1").removeClass("usc");
        $("#dd1").removeClass("floz");
        $("#dd1").removeClass("pt");
        $("#dd1").removeClass("tsp");
        $("#dd1").removeClass("ml");
      }
    });

    //second unit selector if convertion type is volume
    $("#dd2").on("change", function() {
      if(this.value === "1") {
        $("#dd2").addClass("ml2");
        $("#dd2").removeClass("l2");
        $("#dd2").removeClass("ukc2");
        $("#dd2").removeClass("usc2");
        $("#dd2").removeClass("floz2");
        $("#dd2").removeClass("pt2");
        $("#dd2").removeClass("tsp2");
        $("#dd2").removeClass("tbsp2");
      }
      else if(this.value === "2") {
        $("#dd2").addClass("l2");
        $("#dd2").removeClass("ml2");
        $("#dd2").removeClass("ukc2");
        $("#dd2").removeClass("usc2");
        $("#dd2").removeClass("floz2");
        $("#dd2").removeClass("pt2");
        $("#dd2").removeClass("tsp2");
        $("#dd2").removeClass("tbsp2");
      }
      else if(this.value === "3") {
        $("#dd2").addClass("ukc2");
        $("#dd2").removeClass("l2");
        $("#dd2").removeClass("ml2");
        $("#dd2").removeClass("usc2");
        $("#dd2").removeClass("floz2");
        $("#dd2").removeClass("pt2");
        $("#dd2").removeClass("tsp2");
        $("#dd2").removeClass("tbsp2");
      }
      else if(this.value === "4") {
        $("#dd2").addClass("usc2");
        $("#dd2").removeClass("l2");
        $("#dd2").removeClass("ukc2");
        $("#dd2").removeClass("ml2");
        $("#dd2").removeClass("floz2");
        $("#dd2").removeClass("pt2");
        $("#dd2").removeClass("tsp2");
        $("#dd2").removeClass("tbsp2");
      }
      else if(this.value === "5") {
        $("#dd2").addClass("floz2");
        $("#dd2").removeClass("l2");
        $("#dd2").removeClass("ukc2");
        $("#dd2").removeClass("usc2");
        $("#dd2").removeClass("ml2");
        $("#dd2").removeClass("pt2");
        $("#dd2").removeClass("tsp2");
        $("#dd2").removeClass("tbsp2");
      }
      else if(this.value === "6") {
        $("#dd2").addClass("pt2");
        $("#dd2").removeClass("l2");
        $("#dd2").removeClass("ukc2");
        $("#dd2").removeClass("usc2");
        $("#dd2").removeClass("floz2");
        $("#dd2").removeClass("ml2");
        $("#dd2").removeClass("tsp2");
        $("#dd2").removeClass("tbsp2");
      }
      else if(this.value === "7") {
        $("#dd2").addClass("tsp2");
        $("#dd2").removeClass("l2");
        $("#dd2").removeClass("ukc2");
        $("#dd2").removeClass("usc2");
        $("#dd2").removeClass("floz2");
        $("#dd2").removeClass("pt2");
        $("#dd2").removeClass("ml2");
        $("#dd2").removeClass("tbsp2");
      }
      else if(this.value === "8") {
        $("#dd2").addClass("tbsp2");
        $("#dd2").removeClass("l2");
        $("#dd2").removeClass("ukc2");
        $("#dd2").removeClass("usc2");
        $("#dd2").removeClass("floz2");
        $("#dd2").removeClass("pt2");
        $("#dd2").removeClass("tsp2");
        $("#dd2").removeClass("ml2");
      }
    });

    //when [ENTER] is pressed, run convertUnits()
    document.onkeyup = function() {
        convertUnits();
    };

    //redirect to a function depending on first unit
    function convertUnits() {
      if( $("#dd1").hasClass("ml")) {
        ml()
      }
      else if( $("#dd1").hasClass("l")) {
        l()
      }
      else if( $("#dd1").hasClass("ukc")) {
        ukc()
      }
      else if( $("#dd1").hasClass("usc")) {
        usc()
      }
      else if( $("#dd1").hasClass("floz")) {
        floz()
      }
      else if( $("#dd1").hasClass("pt")) {
        pt()
      }
      else if( $("#dd1").hasClass("tsp")) {
        tsp()
      }
      else if( $("#dd1").hasClass("tbsp")) {
        tbsp()
      }
      else {
        ml()
      }
    };

    //if first unit is ml
    function ml() {
      if( $("#dd2").hasClass("ml2")) {
        var w = document.getElementById("textFrom").value;
        var x = 1;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z
      }
      else if( $("#dd2").hasClass("l2")) {
        var w = document.getElementById("textFrom").value;
        var x = 1000;
        var y = w/x;
        var z = eval(y);
        document.getElementById("textTo").value = z
      }
      else if( $("#dd2").hasClass("ukc2")) {
        var w = document.getElementById("textFrom").value;
        var x = 0.004;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z
      }
      else if( $("#dd2").hasClass("usc2")) {
        var w = document.getElementById("textFrom").value;
        var x = 236.588236;
        var y = w/x;
        var z = eval(y);
        document.getElementById("textTo").value = z
      }
      else if( $("#dd2").hasClass("floz2")) {
        var w = document.getElementById("textFrom").value;
        var x = 29.5735295;
        var y = w/x;
        var z = eval(y);
        document.getElementById("textTo").value = z
      }
      else if( $("#dd2").hasClass("pt2")) {
        var w = document.getElementById("textFrom").value;
        var x = 473.176472;
        var y = w/x;
        var z = eval(y);
        document.getElementById("textTo").value = z
      }
      else if( $("#dd2").hasClass("tsp2")) {
        var w = document.getElementById("textFrom").value;
        var x = 0.2;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z
      }
      else if( $("#dd2").hasClass("tbsp2")) {
        var w = document.getElementById("textFrom").value;
        var x = 0.0666666666666666667;
        var y = w*x;
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

    //if first unit is l
    function l() {
      if( $("#dd2").hasClass("ml2")) {
        var w = document.getElementById("textFrom").value;
        var x = 1000;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
      else if( $("#dd2").hasClass("l2")) {
        var w = document.getElementById("textFrom").value;
        var x = 1;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
      else if( $("#dd2").hasClass("ukc2")) {
        var w = document.getElementById("textFrom").value;
        var x = 4;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
      else if( $("#dd2").hasClass("usc2")) {
        var w = document.getElementById("textFrom").value;
        var x = 4.2267528377;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
      else if( $("#dd2").hasClass("floz2")) {
        var w = document.getElementById("textFrom").value;
        var x = 33.8140227;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
      else if( $("#dd2").hasClass("pt2")) {
        var w = document.getElementById("textFrom").value;
        var x = 2.11337642;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
      else if( $("#dd2").hasClass("tsp2")) {
        var w = document.getElementById("textFrom").value;
        var x = 200;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
      else if( $("#dd2").hasClass("tbsp2")) {
        var w = document.getElementById("textFrom").value;
        var x = 66.666666666666666667;
        var y = w*x;
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

    //if first unit is ukc
    function ukc() {
      if( $("#dd2").hasClass("ml2")) {
        var w = document.getElementById("textFrom").value;
        var x = 250;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z
      }
      else if( $("#dd2").hasClass("l2")) {
        var w = document.getElementById("textFrom").value;
        var x = 0.25;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
      else if( $("#dd2").hasClass("ukc2")) {
        var w = document.getElementById("textFrom").value;
        var x = 1;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
      else if( $("#dd2").hasClass("usc2")) {
        var w = document.getElementById("textFrom").value;
        var x = 1.0566882094;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
      else if( $("#dd2").hasClass("floz2")) {
        var w = document.getElementById("textFrom").value;
        var x = 8.4535056755;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
      else if( $("#dd2").hasClass("pt2")) {
        var w = document.getElementById("textFrom").value;
        var x = 0.5283441047;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
      else if( $("#dd2").hasClass("tsp2")) {
        var w = document.getElementById("textFrom").value;
        var x = 50;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
      else if( $("#dd2").hasClass("tbsp2")) {
        var w = document.getElementById("textFrom").value;
        var x = 16.666666666666666667;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
      else {
        var w = document.getElementById("textFrom").value;
        var x = 0.25;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
    };

    //if first unit is usc
    function usc() {
      if( $("#dd2").hasClass("ml2")) {
        var w = document.getElementById("textFrom").value;
        var x = 236.5882365;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
      else if( $("#dd2").hasClass("l2")) {
        var w = document.getElementById("textFrom").value;
        var x = 0.2365882365;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
      else if( $("#dd2").hasClass("ukc2")) {
        var w = document.getElementById("textFrom").value;
        var x = 0.946352946;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
      else if( $("#dd2").hasClass("usc2")) {
        var w = document.getElementById("textFrom").value;
        var x = 1;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
      else if( $("#dd2").hasClass("floz2")) {
        var w = document.getElementById("textFrom").value;
        var x = 8;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
      else if( $("#dd2").hasClass("pt2")) {
        var w = document.getElementById("textFrom").value;
        var x = 0.5;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
      else if( $("#dd2").hasClass("tsp2")) {
        var w = document.getElementById("textFrom").value;
        var x = 47.3176473;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
      else if( $("#dd2").hasClass("tbsp2")) {
        var w = document.getElementById("textFrom").value;
        var x = 15.7725491;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
      else {
        var w = document.getElementById("textFrom").value;
        var x = 15.7725491;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
    };

    //if first unit is floz
    function floz() {
      if( $("#dd2").hasClass("ml2")) {
        var w = document.getElementById("textFrom").value;
        var x = 29.573529562;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
      else if( $("#dd2").hasClass("l2")) {
        var w = document.getElementById("textFrom").value;
        var x = 0.0295735296;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
      else if( $("#dd2").hasClass("ukc2")) {
        var w = document.getElementById("textFrom").value;
        var x = 0.1182941183;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
      else if( $("#dd2").hasClass("usc2")) {
        var w = document.getElementById("textFrom").value;
        var x = 0.125;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
      else if( $("#dd2").hasClass("floz2")) {
        var w = document.getElementById("textFrom").value;
        var x = 1;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
      else if( $("#dd2").hasClass("pt2")) {
        var w = document.getElementById("textFrom").value;
        var x = 0.0625;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
      else if( $("#dd2").hasClass("tsp2")) {
        var w = document.getElementById("textFrom").value;
        var x = 5.9147059125;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
      else if( $("#dd2").hasClass("tbsp2")) {
        var w = document.getElementById("textFrom").value;
        var x = 1.9715686375;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
      else {
        var w = document.getElementById("textFrom").value;
        var x = 0.0295735296;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
    };

    //if first unit is pt
    function pt() {
      if( $("#dd2").hasClass("ml2")) {
        var w = document.getElementById("textFrom").value;
        var x = 473.176473;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
      else if( $("#dd2").hasClass("l2")) {
        var w = document.getElementById("textFrom").value;
        var x = 0.473176473;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
      else if( $("#dd2").hasClass("ukc2")) {
        var w = document.getElementById("textFrom").value;
        var x = 28.3495231;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
      else if( $("#dd2").hasClass("usc2")) {
        var w = document.getElementById("textFrom").value;
        var x = 2;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
      else if( $("#dd2").hasClass("floz2")) {
        var w = document.getElementById("textFrom").value;
        var x = 16;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
      else if( $("#dd2").hasClass("pt2")) {
        var w = document.getElementById("textFrom").value;
        var x = 1;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
      else if( $("#dd2").hasClass("tsp2")) {
        var w = document.getElementById("textFrom").value;
        var x = 94.6352946;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
      else if( $("#dd2").hasClass("tbsp2")) {
        var w = document.getElementById("textFrom").value;
        var x = 31.5450982;
        var y = w/x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
      else {
        var w = document.getElementById("textFrom").value;
        var x = 0.473176473;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
    };

    //if first unit is tsp
    function tsp() {
      if( $("#dd2").hasClass("ml2")) {
        var w = document.getElementById("textFrom").value;
        var x = 5;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z
      }
      else if( $("#dd2").hasClass("l2")) {
        var w = document.getElementById("textFrom").value;
        var x = 0.005;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z
      }
      else if( $("#dd2").hasClass("ukc2")) {
        var w = document.getElementById("textFrom").value;
        var x = 0.02;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z
      }
      else if( $("#dd2").hasClass("usc2")) {
        var w = document.getElementById("textFrom").value;
        var x = 0.0211337642;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z
      }
      else if( $("#dd2").hasClass("floz2")) {
        var w = document.getElementById("textFrom").value;
        var x = 0.1690701135;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z
      }
      else if( $("#dd2").hasClass("pt2")) {
        var w = document.getElementById("textFrom").value;
        var x = 0.0105668821;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z
      }
      else if( $("#dd2").hasClass("tsp2")) {
        var w = document.getElementById("textFrom").value;
        var x = 1;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z
      }
      else if( $("#dd2").hasClass("tbsp2")) {
        var w = document.getElementById("textFrom").value;
        var x = 0.3333333333;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z
      }
      else {
        var w = document.getElementById("textFrom").value;
        var x = 0.005;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z
      }
    };

    //if first unit is tbsp
    function tbsp() {
      if( $("#dd2").hasClass("ml2")) {
        var w = document.getElementById("textFrom").value;
        var x = 15;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
      else if( $("#dd2").hasClass("l2")) {
        var w = document.getElementById("textFrom").value;
        var x = 0.015;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
      else if( $("#dd2").hasClass("ukc2")) {
        var w = document.getElementById("textFrom").value;
        var x = 0.06;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
      else if( $("#dd2").hasClass("usc2")) {
        var w = document.getElementById("textFrom").value;
        var x = 0.0634012926;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
      else if( $("#dd2").hasClass("floz2")) {
        var w = document.getElementById("textFrom").value;
        var x = 0.5072103405;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
      else if( $("#dd2").hasClass("pt2")) {
        var w = document.getElementById("textFrom").value;
        var x = 0.0317006463;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
      else if( $("#dd2").hasClass("tsp2")) {
        var w = document.getElementById("textFrom").value;
        var x = 3;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
      else if( $("#dd2").hasClass("tbsp2")) {
        var w = document.getElementById("textFrom").value;
        var x = 1;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
      else {
        var w = document.getElementById("textFrom").value;
        var x = 1000;
        var y = w*x;
        var z = eval(y);
        document.getElementById("textTo").value = z;
      }
    };
  };