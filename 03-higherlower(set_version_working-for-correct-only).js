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

}


let guess_list = []
function do_guess() {
    

    let guess = document.getElementById("guess").value;
    let guess_number = Number(document.getElementById("guess").value);
    let range_message2 = document.getElementById("range_message2");
    let message = document.getElementById("message");
    let message_green = document.getElementById("message_green");
    let upper_range_pass = document.getElementById("upper_range").value;



    
    
    //console.log beginning
 
    console.log(`The value of "guess" variable at line 40: ${guess}`);
    console.log(`The value of "upper_range.value" variable at line 40: ${upper_range.value}`);
    console.log(`The value of "guess_number" variable at line 40: ${guess_number}`);
    console.log(`The value of "guess_number" variable at line 40: ${number_pass}`);
    // console.log--end;



    if (isNaN(guess)) { 
        
        range_success_message.innerHTML = `"${guess}" is not a number. Please try again`
    }

    else if (guess_number > upper_range_pass | guess_number < 1) {
        range_message2.innerHTML = `Please enter a number that is within the 1-${upper_range_pass} range that you established above.`
        range_success_message.remove()
    }

    else if (guess_number == number_pass) {  //guessed correctly********
        guess_list.push(guess); 
        let unique_guess_list = [...new Set(guess_list)];   
        message_green.innerHTML = `That is the correct answer! It took you ${unique_guess_list.length} tries, and your guesses were ${unique_guess_list}.`
            range_success_message.remove()
        }

    //working to here

    else if (guess_number > number_pass) { //guessed too high
        // if (guess_list.includes(guess_number == false)){
        //     console.log(`We hit line 81`)
        //     console.log(`This is the value of guess_list ${guess_list} at line 81`)            
        //     console.log(`This is the value of guess_number ${guess_number} at line 81`)
        //     console.log(`This is the value of number_pass ${number_pass} at line 81`)
            guess_list.push(guess);
            // console.log(`This is the value of guess_list ${guess_list} at line 86`)


            range_success_message.innerHTML = `${guess_number} is too high. Try a lower number.`;
        }   
        // else {
        //     range_success_message.innerHTML = `${guess_number} is too high. Try a lower number.`;
        // }
    // }
        
    

    else if (guess_number < number_pass) { //guessed too high

            guess_list.push(guess);
            range_success_message.innerHTML = `${guess_number} is too low. Try a higher number.`;
        // range_success_message.remove()
        }

        // else {
        //     range_success_message.innerHTML = `${guess_number} is too low. Try a higher number.`;
        // }
    // }
       
    // else { //guessed too low
    //     if (guess_list.includes(guess_number) == false){
    //         guess_list.push(guess);
    //         range_success_message.innerHTML = `${guess_number} is too low. Try a higher number.`
    //     // range_success_message.remove()
    //     }       
    // }

    console.log(guess_list);

}
// "<span style='font-size:40px'>John Doe</span>"




