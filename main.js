// Scrivi un programma che stampi in console i numeri da 1 a 100.

// MILESTONE 1
// Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// 1. Creo lista da 1 a 100
// SE sono multipli di 3 E multippli di 5, stampo FizzBuzz
// ALTRIMENTI SE sono solo multipli di 3 stampo Fizz
// ALTRIMENTI SE sono solo multipli di 5 stampo Buzz
// ALTRIMENTI stampo il numero
const list = document.querySelector(".list");
for (i = 1; i < 100; i++) {
   //creo element lista
   const element = document.createElement('li');
   element.classList.add("item");
   element.innerHTML = i;
   list.append(element);
   console.log(element)
}
