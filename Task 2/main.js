let box = document.getElementById("cards");

let API = async () => {
  let response = await fetch("https://reqres.in/api/users?page=1");
  let file = await response.json();
  let info = file.data
    .map((element) => {
      return `<div class="card">
        <div class="profile-image">
            <img src="${element.avatar}" alt="">
        </div>
        <div class="card-content">
            <h3>${element.first_name} ${element.last_name}</h3>
            <h2>${element.email}</h2>
            <h2>User ID: ${element.id}</h2>
        </div>
    </div>`;
    })
    .join("");
  cards.innerHTML = info;
};
let navBtn = document.getElementById("get");
navBtn.addEventListener("click", () => {
    document.getElementById('get').style.backgroundColor = "black";
    document.getElementById('get').style.color = "white";
    document.getElementById('get').style.borderColor = "white";
  cards.innerHTML = `<div class="loader"><h1>
    <span class="let1">L</span>  
    <span class="let2">o</span>  
    <span class="let3">a</span>  
    <span class="let4">d</span>  
    <span class="let5">i</span>  
    <span class="let6">n</span>  
    <span class="let7">g</span>  
  </h1></div>`;
  setTimeout(() => {
    API();
  }, 4000);
});
