$(document).ready(function(){
   $('.cta-header').on("click",function(){
       alert('hola santi')
   })



var obtenerDato = $('.cta-header').attr('class')

console.log(obtenerDato)

let numeros = [1,23,4,5,8,6,910,15,56]

 $(numeros).each(function(item,index){
     $('.lista').append(`<li>el numero es${index} y su posicion es ${item}</li>`);

    console.log(item)

 });

 const persona = [{
      nombre :'leonel',
      edad:36,
      ocupacion: 'programador'
 },{nombre:'juan',edad:56,ocupacion:'programador'}]

 $(persona).each(function(i,index){
     console.log(i,index)
     $('.persona').append(`<li> el nombre es ${index.nombre} y su posicion es ${i}</li>`);
 })
 
 $('.cta-header').on("click", function(){
     
 })


 

 

  
})