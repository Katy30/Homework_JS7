// Task#1
/*  Створити html документ, в якому є теги header, footer, nav, ul список на 5 елементів li ,
отримати доступ до ціх елементів і змінити там текст за допомогою innerHtml
*/
window.onload = () => {
    let [...listItem] = document.querySelectorAll("a")
    console.log(listItem);
    for (let item of listItem) {
        item.innerHTML = "Home"
    }

    let [...divEl]=document.getElementsByClassName("text-first");
    console.log(divEl);
    divEl[0].innerHTML="Ласкаво просимо!"

    let divEl2=document.querySelector(".footer-paragraph .text-second")
    console.log(divEl2);
    divEl2.innerHTML="м.Київ , вул. Соборна2"

}