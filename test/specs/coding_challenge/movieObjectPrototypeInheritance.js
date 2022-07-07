// function movie(title,director,genre,releaseYear,rating) {
//     this.title=title;
//     this.director=director;
//     this.genre=genre;
//     this.releaseYear=releaseYear;
//     this.rating=rating;
// }

// movie.prototype.review=function() {
//     return `${this.title}, a ${this.genre} film directed by 
//     ${this.director} was released in the ${this.releaseYear}. 
//     it recieved a rating of ${this.rating}`
// }

// let m1=new movie("AB","xyz","drama","2022","***")

// console.log(m1.review());

class Movie{
    constructor(title,director,genre,releaseYear,rating) {
        this.title=title;
        this.director=director;
        this.genre=genre;
        this.releaseYear=releaseYear;
        this.rating=rating;
    }
   
    getreview() {
        return `${this.title}, a ${this.genre} film directed by 
        ${this.director} was released in the ${this.releaseYear}. 
        it recieved a rating of ${this.rating}`
    }
}
    
    let m1=new Movie("AB","xyz","drama","2022","***")
    
    console.log(m1.getreview());
