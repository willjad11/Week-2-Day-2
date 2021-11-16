var likes = 3;
var likeElement = document.querySelector("#like-text");

function like() {
    likes ++;
    likeElement.innerText = likes + " like(s)"
}