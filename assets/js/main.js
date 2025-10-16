console.log('it work')

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
          let answerEl= document.getElementById('answer')
    if(result.includes(Number(inputEl[0].value)) && result.includes(Number(inputEl[1].value))  && result.includes(Number(inputEl[2].value))   && result.includes(Number(inputEl[3].value))   && result.includes(Number(inputEl[4].value))  )
        {

       answerEl.innerHTML= 'COMPLIMENTI HAI VINTO'
    }else{
        answerEl.innerHTML= 'PECCATO HAI PERSO'
    }
   
 console.log(inputEl[0].value,inputEl[1].value, inputEl[2].value , inputEl[3].value, inputEl[4].value)
})
