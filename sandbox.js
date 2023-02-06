function guess() {

    let guess = Number(document.getElementById("guess").value);

    let message = document.getElementById("message");


    if (guess == num) {  //guessed correctly
            message.innerHTML = `${guess} is the correct answer!`
        }
    else if (guess > num) { //guessed too high
        message.innerHTML = `${guess} is too high. Try a lower number.`
    }
    
    else { //rolled tails
        message.innerHTML = `${guess} is too low. Try a higher number.`
    }
}



// let num = get_number("Enter the number of rolls.");

// let results = roll_dice(num);

// let table = document.getElementById("results");
// log_results(num, results, table);

// table.classList.remove("hide");