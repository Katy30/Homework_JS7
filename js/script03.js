// Task#3
/*  Створіть класс по додаваню фільма який має такі значення(рік випуску, жанр, назву, кількість переглядів)
*/
class FilmClass {
    constructor(year, genre, name, views) {
        this.year = year;
        this.genre = genre;
        this.name = name;
        this.views = views;
    }

    info() {
        console.log(`In ${this.year} year the film ${this.name} of the ${this.genre} was released, 
    which gained ${this.views} views`)
    }
}

let filmInfo = new FilmClass(2012, "melodrama", "Titanic", 1000)
console.log(filmInfo)
filmInfo.info()
