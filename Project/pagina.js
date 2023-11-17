
const navbar= document.querySelector('#navbar');
const THRESHOLD= 80;

function handleScroll(){
let scrollY = window.scrollY;

if(scrollY > THRESHOLD){
   navbar.classlist.add('scrolled');	

}else{
	navbar.classlist.remove('scrolled');

}
}
document.addeventListener('scroll', handleScroll);