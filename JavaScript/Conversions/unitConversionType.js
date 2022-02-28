  $("#selectConvType").on("change", function() {
    if(this.value === "Food") {
      $("#selectConvType").addClass("food");
      $("#selectConvType").removeClass("length");
      $("#selectConvType").removeClass("mass");
      $("#selectConvType").removeClass("temperature");
      $("#selectConvType").removeClass("volume");
      unitConvType();
    }
    else if(this.value === "Length") {
      $("#selectConvType").addClass("length");
      $("#selectConvType").removeClass("food");
      $("#selectConvType").removeClass("mass");
      $("#selectConvType").removeClass("temperature");
      $("#selectConvType").removeClass("volume");
      unitConvType();
    }
    else if(this.value === "Mass") {
      $("#selectConvType").addClass("mass");
      $("#selectConvType").removeClass("length");
      $("#selectConvType").removeClass("food");
      $("#selectConvType").removeClass("temperature");
      $("#selectConvType").removeClass("volume");
      unitConvType();
    }
    else if(this.value === "Temperature") {
      $("#selectConvType").addClass("temperature");
      $("#selectConvType").removeClass("length");
      $("#selectConvType").removeClass("mass");
      $("#selectConvType").removeClass("food");
      $("#selectConvType").removeClass("volume");
      unitConvType();
    }
    else if(this.value === "Volume") {
      $("#selectConvType").addClass("volume");
      $("#selectConvType").removeClass("length");
      $("#selectConvType").removeClass("mass");
      $("#selectConvType").removeClass("temperature");
      $("#selectConvType").removeClass("food");
      unitConvType();
    }
  });

  function unitConvType() {
    if($("#selectConvType").hasClass("food")) {
      food();
    }
    else if($("#selectConvType").hasClass("length")) {
      length();
    }
    else if($("#selectConvType").hasClass("mass")) {
      mass();
    }
    else if($("#selectConvType").hasClass("temperature")) {
      temperature();
    }
    else if($("#selectConvType").hasClass("volume")) {
      volume();
    }
    else {
      length();
    }
  };

  unitConvType();