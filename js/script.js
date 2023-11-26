
let a = document.getElementsByClassName("tab-link");
let b = document.getElementsByClassName("tab-contant");

const opentab = (tabname) => {
  for (tab of a) {
    tab.classList.remove("active-link");
  }
  for (bavc of b) {
    bavc.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
};



