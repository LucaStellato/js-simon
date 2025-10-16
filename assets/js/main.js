console.log('it work')



/*Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input
 in cui l'utente deve inserire i numeri che ha visto precedentemente, 
 nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, 
il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/

let numberRandom = [];
let numberEl = document.getElementById('number')
let inputEl= document.querySelectorAll('#inputTag  input')
let formEl= document.getElementById('formEl')

setInterval(()=>{
    numberEl.style.display= 'none'
    formEl.style.display= 'block'
},3000 );


    let result = [];
   for (let i = 0; i < 5; i++) {
    numberRandom = Math.floor(Math.random() * 100)
    result.push(numberRandom);
    console.log(result)
    numberEl.innerHTML = `<p>i numeri sono ${result}</p>`
    }

    
formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(result)
    console.log(inputEl)
    console.log(result.includes(inputEl[0].value), result.includes(Number(inputEl[0].value)))
   
    if(result.includes(Number(inputEl[0].value)) && result.includes(Number(inputEl[1].value))  && result.includes(Number(inputEl[2].value))   && result.includes(Number(inputEl[3].value))   && result.includes(Number(inputEl[4].value))  )
        {
        console.log('hai indovinato')
    }else{
        console.log('hai sbagliato ritenta')
    }
   
 console.log(inputEl[0].value,inputEl[1].value, inputEl[2].value , inputEl[3].value, inputEl[4].value)
})
