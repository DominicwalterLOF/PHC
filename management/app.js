pages = ["discountCard", "activityCard", "cardWrapper", "accountWrapper", "calView"];

function openPage(page){
  for(i = 0; i < 5; i++){
    console.log(pages[i]);
    document.getElementById(pages[i]).style.display = "none";
  }
  document.getElementById(page).style.display = "block";
}

window.onload = () => {
  openPage("accountWrapper");
}


const counter = document.querySelector(".counter");
let count = 0;
setInterval(() => {
 if(count == 92) {
  clearInterval(count);
 }else {
  count+=1;
  counter.textContent = count + "%";
 }
}, 42);

