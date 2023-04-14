// Task#4
/*  В классі створити метод який визначає рейтинг в залежності від року випуску і кількості переглядів
(кількість переглядів поділена на різницю між сьогоднішнім роком і роком випуску )
*/
class FilmClass {
    constructor(year, genre, name, views) {
        this.year = year;
        this.genre = genre;
        this.name = name;
        this.views = views;
    }

    getRating() {
        return Math.round(this.views/(new Date().getFullYear()-this.year))
    }
}

let filmInfo = new FilmClass(2012, "melodrama", "Titanic", 1000)
console.log(filmInfo.getRating())


