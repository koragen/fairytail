function open_window_enter() {
  document.getElementById('contain').classList.remove("hide");
};

function open_window_reg() {
  document.getElementById('containForReg').classList.remove("hide");
};

function close_window() {
  document.getElementById("contain").classList.add("hide");
  document.getElementById("containForReg").classList.add("hide");
};
