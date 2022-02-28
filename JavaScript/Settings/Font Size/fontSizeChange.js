$(".hfs").on("change", function() {
  if (this.value === "50") {
    fontH50();
  }
  else if (this.value === "100") {
    fontH100();
  }
  else if (this.value === "150") {
    fontH150();
  }
  else if (this.value === "200") {
    fontH200();
  }
});

if (localStorage.hFontSize === "50") {
  fontH50();
};

if (localStorage.hFontSize === "100") {
  fontH100();
};

if (localStorage.hFontSize === "150") {
  fontH150();
};

if (localStorage.hFontSize === "200") {
  fontH200();
};

var select = document.querySelector(".hfs");
var selectOption = select.options[select.selectedIndex];
var lastSelected = localStorage.getItem('select');

if(lastSelected) {
  select.value = lastSelected;
}

select.onchange = function () {
  lastSelected = select.options[select.selectedIndex].value;
  console.log(lastSelected);
  localStorage.setItem('select', lastSelected);
}