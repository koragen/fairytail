function open_window_enter() {
  document.getElementById('enter').classList.remove("hide");
  document.getElementById('dark').classList.remove("hide");
};

function open_window_reg() {
  document.getElementById('dark').classList.remove("hide");
  document.getElementById('reg').classList.remove("hide");
};

function close_window() {
  document.getElementById("enter").classList.add("hide");
  document.getElementById('dark').classList.add("hide");
  document.getElementById("reg").classList.add("hide");
};

function open_event_enter(n){
	var a;
	a='info_event'+n;
	if(document.getElementById(a).hidden == true)
	{
	document.getElementById(a).hidden = false;
	}else{
		document.getElementById(a).hidden = true;
	}	
};
	
