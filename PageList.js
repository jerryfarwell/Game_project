let inserts = document.getElementById("lists");
let fucks = document.getElementById("names");
let counters = 0;

function searching() {
  input = document.getElementById("myInput").value;
  apikey(input);
}

function apikey(input) {
  let url = "https://api.rawg.io=" + encodeURI(input) + "&apikey=8240f77a189d4a84a4252ccdf4314e5d";
  fetching(url);
}

function fetching(url) {
  fetch(url)
    .then((response) => (data = response.json()))
    .then((data) => {
      console.log(data.Search);
      for (let i = 0; i < data.Search.length; i++) {
        let id = data.Search[i].imdbID;
        resultById(id);
      }
    })
    .catch((error) => console.error("error:", error));
}

function resultById(id) {
  let urlbyid = "https://api.rawg.io=" + encodeURI(id) + "&apikey=8240f77a189d4a84a4252ccdf4314e5d";
  fetchingById(urlbyid);
}

function fetchingById(urlbyid) {
  fetch(urlbyid)
    .then((response) => (data = response.json()))
    .then((data) => {
      console.log(data);
      let name = data.Title;
      let year = data.Released;
      let poster = data.Poster;
      let plot = data.Plot;
      results(name, year, poster);
      result(name, year, poster, plot);
    })
    .catch((error) => console.error("error:", error));
}

function results(name, year, poster) {
  inserts.innerHTML += `
  <div class="col-6 col-sm-6 col-md-3">
    <div class="card">
      <div class="card-img">
        <img src="${poster}" alt="">
      </div>
      <div class="card-body">
        <h1>${year}</h1>
        <p id="names">${name}</p>
        <div id="info" class="row"></div>
        <button onclick="myFunction()">Read more</button>
        </div>
    </div>
  </div>`;
}


function myFunction() {
    document.getElementById("info").innerHTML += "not done yet ";       
         }  