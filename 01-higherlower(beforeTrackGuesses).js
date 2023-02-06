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
    number_pass = num;
    console.log(`The value of "upper_range" variable at line 32: ${upper_range} the type is ${typeof(upper_range)}`);
    // let upper_range_pass;
    // upper_range_pass = upper_range;
    // console.log(`The value of "upper_range_pass" variable at line 34: ${upper_range_pass} the type is ${typeof(upper_range_pass)}`);

}



function do_guess() {
    
    // console.log(`The value of "number_pass" variable at line 36: ${number_pass.value}`)

    let guess = document.getElementById("guess").value;
    let guess_number = Number(document.getElementById("guess").value);
    let range_message2 = document.getElementById("range_message2");
    
    
    
    console.log(`The value of "guess" variable at line 40: ${guess}`);
    console.log(`The value of "upper_range.value" variable at line 40: ${upper_range.value}`);
    console.log(`The value of "guess_number" variable at line 40: ${guess_number}`);
    // console.log(`The value of "upper_range" variable at line 40: ${upper_range}`);
    let message = document.getElementById("message");
    let upper_range_pass = document.getElementById("upper_range").value;

    if (isNaN(guess)) {
        
        range_success_message.innerHTML = `"${guess}" is not a number. Please try again`
    }

    else if (guess_number > upper_range_pass | guess_number < 1) {
        range_message2.innerHTML = `Please enter a number that is within the 1-${upper_range_pass} range that you established above.`
        range_success_message.remove()
    }

    else if (guess_number == number_pass) {  //guessed correctly
            message.innerHTML = "<span style = 'color: green'>That is the correct answer!</span>"
            range_success_message.remove()
        }
    else if (guess_number > number_pass) { //guessed too high
        range_success_message.innerHTML = `${guess_number} is too high. Try a lower number.`
        // range_success_message.remove()
    }
    
    else { //guessed too low
        range_success_message.innerHTML = `${guess_number} is too low. Try a higher number.`
        
    }
}
// "<span style='font-size:40px'>John Doe</span>"




