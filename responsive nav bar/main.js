function showSidebar() {
  console.log("hello");
  document.getElementById('hamburger-bar').style.width = '75%' ;
  document.getElementById('main-body').style.backgroundColor = 'rgba(0,0,0,0.8' ;
}
function closeSidebar() {
  console.log("in close");
  console.log("hello");
  document.getElementById('hamburger-bar').style.width = '0%' ;
  document.getElementById('main-body').style.backgroundColor = 'rgba(0,0,0,0.0' ;
}