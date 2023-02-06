function create_range() {
    let upper_range = document.getElementById("upper_range").value;
    
    console.log(`this is the value of "upper_range" on line 2 ${upper_range}`)

    let range_message = document.getElementById("range_message");
    let range_success_message = document.getElementById("range_success_message");

    if (isNaN(upper_range)) {
        
        range_message.innerHTML = `"${upper_range}" is not a number. Please try again`
    }

    else {

        upper_range = Math.round(Number(upper_range))
        if (upper_range <= 10) {
            range_message.innerHTML = `Please enter a number that is higher than 10`
        }

        else {
            range_success_message.innerHTML = `Excellent! Now enter a number from 1 to ${upper_range} below`
            range_message.remove()
        }

    }

    let num = Math.floor(Math.random() * upper_range) +1;
    
    console.log(`The value of "num" at line 28 ${num}`)
    number_pass = num
}



function do_guess() {
    
    console.log(`The value of "number_pass" variable at line 36: ${number_pass}`)

    let guess = Number(document.getElementById("guess").value);
    
    console.log(`The value of "guess" variable at line 40: ${guess}`);

    let message = document.getElementById("message");

    if (guess == number_pass) {  //guessed correctly
            message.innerHTML = "<span style = 'color: green'>That is the correct answer!</span>"
            range_success_message.remove()
        }
    else if (guess > number_pass) { //guessed too high
        range_success_message.innerHTML = `${guess} is too high. Try a lower number.`
        // range_success_message.remove()
    }
    
    else { //guessed too low
        range_success_message.innerHTML = `${guess} is too low. Try a higher number.`
        
    }
}
// "<span style='font-size:40px'>John Doe</span>"




