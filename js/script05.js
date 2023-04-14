// Task#4
/*Створіть массив і розмістіть в ньому створені обєкти фільмів, далі за допомогою синтаксису деструктирізації
переберіть масив  і виведіть значення по року випуску.
*/

const watchFilm=[
    {year:2012, genre:'melodrama', name:'Titanic', views:1000},
    {year:2009, genre:'fantasy', name:'Avatar', views:2000},
    {year:2022, genre:'adventures', name:'MAVKA', views:600},
    {year:2021, genre:'historical', name:'Szczedryk', views:900},
]
for (const {year,name} of watchFilm) {
    console.log(year,name)

}
