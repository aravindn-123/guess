let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');

let number = [Math.floor(Math.random() * 100)]

btn.addEventListener('click', function(){
    let input = document.getElementById('userInput').value;
    if(input == number){
        output.innerHTML = 'YOUR GUESS IS CORRECT'
  }
    else if (input < number){
        output.innerHTML ="YOUR GUESS IS TOO LOW"
    };
    if  (input > number){
        output.innerHTML = "YOUR GUESS IS TOO HIGH"
    }
});