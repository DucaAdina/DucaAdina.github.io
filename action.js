

function myFunction() {

    alert("Adresa a fost salvata!Voi reveni in scurt timp cu un mesaj");
  }


// selectați formularul și input-ul de email
var form = document.querySelector('.newslatter form');
var emailInput = document.querySelector('.newslatter input[type="email"]');

// adăugați un eveniment pentru submiterea formularului
form.addEventListener('submit', function(event) {
  event.preventDefault(); // opriți trimiterea formularului
  alert('Emailul tău a fost primit, te vom apela în scurt timp'); // afișați mesajul
});

//////------------
const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");
let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

