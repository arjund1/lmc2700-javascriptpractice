let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    allMovies.push(movie);
    document.getElementById("consoleOutput").innerHTML += 'A new movie is added <br>';
}

//iterate through all elements of allMovies array
//Display the total number of movies in allMovies array
let printMovies = () => {
    document.getElementById("consoleOutput").innerHTML += "Printing all movies....<br>";
    for (let i = 0; i < allMovies.length; i++) {
        document.getElementById("consoleOutput").innerHTML += `${allMovies[i].title}, rating of ${allMovies[i].rating}, havewatched: ${allMovies[i].haveWatched}<br>`;
    }
    document.getElementById("consoleOutput").innerHTML += "<br>";
    document.getElementById("consoleOutput").innerHTML += (`You have ${allMovies.length} movies in total<br>`);
}


//Display only the movies that has a rating higher than rating(argument)
//Display the total number of matches
let highRatings = (rating) => {
    document.getElementById("consoleOutput").innerHTML += `printing movie that has a rating higher than ${rating}<br>`;
    let count = 0;
    for (let i = 0; i < allMovies.length; i++) {
        if (allMovies[i].rating > rating) {
            document.getElementById("consoleOutput").innerHTML += `${allMovies[i].title} has a rating of ${allMovies[i].rating}<br>`;
            count++;
        }
    }
    document.getElementById("consoleOutput").innerHTML += "<br>";
    document.getElementById("consoleOutput").innerHTML += `In total, there are ${count} matches<br>`;
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    document.getElementById("consoleOutput").innerHTML += 'changing the status of the movie....<br>';
    for (let i = 0; i < allMovies.length; i++) {
        if (allMovies[i].title === title) {
            allMovies[i].haveWatched = !allMovies[i].haveWatched
        }
    }
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

/*replace console.log with display on web page*/
document.getElementById("consoleOutput").innerHTML += "----------------<br>";
document.getElementById("consoleOutput").innerHTML += "running program......<br>";
document.getElementById("consoleOutput").innerHTML += "----------------<br>";
printMovies();


let movie1 = new Movie("Parasite", 2, false);

/*replace console.log with display on web page*/
document.getElementById("consoleOutput").innerHTML += "----------------<br>";
addMovie(movie1);
document.getElementById("consoleOutput").innerHTML += "----------------<br>";



changeWatched("Spiderman");
/*replace console.log with display on web page*/
document.getElementById("consoleOutput").innerHTML += "----------------<br>";

printMovies();

/*replace console.log with display on web page*/
document.getElementById("consoleOutput").innerHTML += "----------------<br>";

changeWatched("Spiderman");
/*replace console.log with display on web page*/
document.getElementById("consoleOutput").innerHTML += "----------------<br>";

printMovies();
/*replace console.log with display on web page*/
document.getElementById("consoleOutput").innerHTML += "----------------<br>";

highRatings(3.5);