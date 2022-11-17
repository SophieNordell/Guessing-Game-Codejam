let msg1 = document.getElementById('message1');
let msg2 = document.getElementById('message2');
let msg3 = document.getElementById('message3');


let answer = Math.floor(Math.random()* 100) + 1;
let no_of_guesses = 0;
let guessed_nums = [];

element.addEventListener('click', play);

function play(){
    let user_guess = document.getElementById("guess").value;

    // IF under 10

    if(no_of_guesses < 10){

    if( user_guess < 1 || user_guess > 100){
        alert(" Please enter a number between 1 and 100");

    }
    else{
        guessed_nums.push(user_guess);
        no_of_guesses += 1;
        
        if(user_guess < answer){
            msg1. textContent ="Your guess is to low.";
            msg2.textContent = "Number of guesses:" + no_of_guesses;
            msg3.textContent = "Guessed numbers are:" + guessed_nums;
        }
        else if( user_guess > answer){
            msg1. textContent ="Your guess is to High.";
            msg2.textContent = "Number of guesses:" + no_of_guesses;
            msg3.textContent = "Guessed numbers are:" + guesses_nums;
        }
        else if (user_guess == answer){
            msg1.textContent = " Yippie you win"
            msg2.textContent = " The number was " + answer;
            msg3.textContent = " You guessed it in " + no_of_guesses + " guesses";
            document.getElementById ('my_btn').disabled = true;

        }
        } 
    }else{
        print = 'Game Over!!'
    }
    
    }
