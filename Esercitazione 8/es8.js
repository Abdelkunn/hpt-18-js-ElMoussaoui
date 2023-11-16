//Put random color
const randColor = () => {
    return "#" + Math. floor(Math. random()*16777215). toString(16). padStart(6, '0'). toUpperCase();
    }
const uno = document.getElementById("mybutton1");
    uno.addEventListener("click", ()=>{

    par1.style.color = randColor ()
    par2.style.color = randColor ()
    par3.style.color = randColor ()
})

//Change to Bold
const seleziona = document.getElementById("mybutton2");

    mybutton2.addEventListener("click", ()=>{
        par1.style.fontWeight = "bold";
        par2.style.fontWeight = "bold";
        par3.style.fontWeight = "bold";

})

//Make disappear

// function toggleText() {
//     var text = document.querySelectorAll("mybutton3");
//     if (text.style.display === "none") {
//       text.style.display = "block";
//     } else {
//       text.style.display = "none";
//     }
//   }
var tag = document.getElementById('par3');
var button = document.querySelector('button');
button.addEventListener('click', function(){
tag.classList.toggle('par3');
});

//const sparire = document.getElementById("mybutton3");

    mybutton3.addEventListener("onclick", ()=>{
        par1 =toggleText()
        par2 =toggleText()
        par3 =toggleText()
})




