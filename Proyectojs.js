$(document).ready(function(){


// Slider

if (window.location.href.indexOf("index")>-1) {

	
 	 $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 1200,
    responsive: true,

  });

}



// Post

if (window.location.href.indexOf("index")>-1) {
var posts = [
{
	title: "Titulo 1",
	date:"publicado el dia " + moment().date() +" de "+moment().format("MMMM")+" del "+moment().format("YYYY"),
	content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, animi fuga nobis accusantium ducimus quo perspiciatis explicabo iste nesciunt rem, dolores, eveniet cum doloremque! Porro a, dolores odio aliquam molestias?",
},
{
	title: "Titulo 2",
	date:"publicado el dia " + moment().date() +" de "+moment().format("MMMM")+" del "+moment().format("YYYY"),
	
	content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, animi fuga nobis accusantium ducimus quo perspiciatis explicabo iste nesciunt rem, dolores, eveniet cum doloremque! Porro a, dolores odio aliquam molestias?",
},
{
	title: "Titulo 3",
	date:"publicado el dia " + moment().date() +" de "+moment().format("MMMM")+" del "+moment().format("YYYY"),
	
	content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, animi fuga nobis accusantium ducimus quo perspiciatis explicabo iste nesciunt rem, dolores, eveniet cum doloremque! Porro a, dolores odio aliquam molestias?",
},
{
	title: "Titulo 4",
	date:"publicado el dia " + moment().date() +" de "+moment().format("MMMM")+" del "+moment().format("YYYY"),
	
	content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, animi fuga nobis accusantium ducimus quo perspiciatis explicabo iste nesciunt rem, dolores, eveniet cum doloremque! Porro a, dolores odio aliquam molestias?",
},
{
	title: "Titulo 5",
	date:"publicado el dia " + moment().date() +" de "+moment().format("MMMM")+" del "+moment().format("YYYY"),
	
	content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, animi fuga nobis accusantium ducimus quo perspiciatis explicabo iste nesciunt rem, dolores, eveniet cum doloremque! Porro a, dolores odio aliquam molestias?",
},

];

posts.forEach((item, index)=>{
	var post =`
			<article class="post">
			<h2>${item.title}</h2>
			<span class="date">${item.date}</span>
			<p>${item.content}</p>
			<a href="" class="buttonmore">Leer mas</a>
		</article>

`;

$("#posts").append(post);

});

};

// selector de temas

var theme = $("#theme");

$("#togreen").click(function(){
	theme.attr("href","green.css");

});

$("#tored").click(function(){
	theme.attr("href","red.css");

});
$("#toblue").click(function(){
	theme.attr("href","blue.css");

});

// scroll ir arriba

$(".subir").click(function(e){
	e.preventDefault();
	$("html,body").animate({
		scrollTop:0
	},500);
	return false;
});

// login falso

$("#login form").submit(function(){
	var formname = $("#formname").val();
	localStorage.setItem("formname",formname);
});

var formname =localStorage.getItem("formname");

if (formname != null && formname != "undefined") {
	var aboutparrafo = $("#about p");
	aboutparrafo.html("<br><strong>Bienvenido " + formname + " </strong>");
	
	aboutparrafo.append('<a href="#" id="logout"> Cerrar Sesion</a>');


	$("#login").hide();
	$("#logout").click(function(){
		localStorage.clear();
		location.reload();
	});
};


// acordeon about

if (window.location.href.indexOf("about")>-1) {

$("#acordeon").accordion();

};

// reloj

if (window.location.href.indexOf("reloj")>-1) {


setInterval(function(){

		var reloj = moment().format("hh:mm:ss");

		$("#reloj").html(reloj);

		},1000);



};


// validacion formulario

if (window.location.href.indexOf("contacto")>-1) {

	$("#date").datepicker({

		dateFormat:'dd-mm-yy'
	});
	 $.validate({
	    lang: 'es',
	    errorMessagePosition: "top",
	    scrollToToOnError: true
	  });

};








});