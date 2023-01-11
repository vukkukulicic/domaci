let movies = [
    {
      watched: false,
      title: "Avengers: Infinity War",
      year: 2018,
      country: "United States",
      note: "",
      actors: ["Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"]
    },
    {
      watched: false,
      title: "Avengers: Endgame",
      year: 2019,
      country: "United States",
      note: "",
      actors: ["Chris Evans", "Scarlett Johansson", "Josh Brolin"]
    },
    {
      watched: false,
      title: "Spider-Man: No Way Home",
      year: 2021,
      country: "United States",
      note: "",
      actors: ["Tom Holland", "Andrew Garfield", "Tobey Maguire"]
    }
];

let body = document.querySelector('#myTable tbody');

for(let i = 0; i < movies.length; i++){
    var movie = movies[i];
    var row = document.createElement('tr');

    let watched_ = document.createElement('td');
    let check = document.createElement('input');
    check.type = 'checkbox';
    check.name = 'Checkbox';
    watched_.appendChild(check);
    row.appendChild(watched_);

    let title_ = document.createElement('td');
    title_.textContent = movie.title;
    row.appendChild(title_);

    let year_ = document.createElement('td');
    year_.textContent = movie.year;
    row.appendChild(year_);
    
    let country_ = document.createElement('td');
    country_.textContent = movie.country;
    row.appendChild(country_);

    let note_ = document.createElement('td');
    note_.textContent = movie.note;
    row.appendChild(note_);

    let actors_ = document.createElement('td');
    temp = movie.actors.join(', ');
    actors_.textContent = temp;
    row.appendChild(actors_);

    body.appendChild(row);
}

function isFormValid(_title, _year, _actors) {
    if(_title === "" || (_year < 1930 || _year > 2021) || _actors === ""){
        return false;
    }
    return true;
}

function addMovie() {
    title_ = document.getElementById('inputName').value;
    year_ = document.getElementById('inputYear').value;
    country_ = document.getElementById('inputCountry').value;
    note_ = document.getElementById('inputNote').value;
    actors_ = document.getElementById('inputActors').value;

    if(isFormValid(title_, year_, actors_)){
        var row = document.createElement('tr');

        watched_ = document.createElement('td');
        check = document.createElement('input');
        check.type = 'checkbox';
        check.name = 'Checkbox';
        watched_.appendChild(check);
        row.appendChild(watched_);
        
        let child = document.createElement("td");
        let text = document.createTextNode(title_);
        child.appendChild(text);
        row.appendChild(child);

        child = document.createElement("td");
        text = document.createTextNode(year_);
        child.appendChild(text);
        row.appendChild(child);

        child = document.createElement("td");
        text = document.createTextNode(country_);
        child.appendChild(text);
        row.appendChild(child);

        child = document.createElement("td");
        text = document.createTextNode(note_);
        child.appendChild(text);
        row.appendChild(child);

        child = document.createElement("td");
        text = document.createTextNode(actors_);
        child.appendChild(text);
        row.appendChild(child);

        body.appendChild(row);
        addCheckEvent();
    }
}


let checkboxes = document.querySelectorAll("input[name=Checkbox]");

for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', function() {
        var rowC = this.closest('tr');

        if (this.checked) {
            rowC.style.backgroundColor = '#D1E7DD';
        } else {
            rowC.style.backgroundColor = 'initial';
        }
    });
};

function addCheckEvent(){
    let checkboxes = document.querySelectorAll("input[name=Checkbox]");

    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener('change', function() {
            var rowC = this.closest('tr');
    
            if (this.checked) {
                rowC.style.backgroundColor = '#D1E7DD';
            } else {
                rowC.style.backgroundColor = 'initial';
            }
        });
    }
}