function day() {
  var date = new Date();
  myDateList = document.getElementsByClassName('itemList');
  for(let i = 0; i < myDateList.length; i++) {
    if ((myDateList[i].className) == "sunday itemList" && (myDateList[i].innerText || myDateList[i].textContent) == date.getDate()) {
      myDateList[i].className = "sundayActive";
    }
    else if((myDateList[i].innerText || myDateList[i].textContent) == date.getDate()) {
      console.log(myDateList[i].innerText || myDateList[i].textContent)
      console.log(myDateList[i]);
      myDateList[i].className = "active";
    }
  }
}