function create_range() {
    let upper_range = document.getElementById("upper_range").value;
    let range_message = document.getElementById("range_message");
    let range_success_message = document.getElementById("range_success_message");

    if (isNaN(upper_range)) {  // invalid: not a number
        range_message.innerHTML = `"${upper_range}" is not a number. Please try again.`;
    }

    else { //invalid: stipulated that top of range must be > 10
        upper_range = Math.round(Number(upper_range))
        if (upper_range <= 10) {
            range_message.innerHTML = `Please enter a number that is higher than 10`;
        }

        else { // valid top of range entry
            range_success_message.innerHTML = `Excellent! Now enter a number from 1 to ${upper_range} below`
            if (range_message){
                range_message.remove()
            }
        }
    }

    let num = Math.floor(Math.random() * upper_range) +1;
    number_pass = num;
    console.log(`This is the random number--i.e. correct guess: ${num}`)
}


let range_success_message = document.getElementById("range_success_message");
let guess_list = []

function do_guess() {
    
    range_success_message.remove();
    let guess = document.getElementById("guess").value;
    let guess_number = Number(document.getElementById("guess").value);
    let message_green = document.getElementById("message_green");
    let upper_range_pass = document.getElementById("upper_range").value;
    let range_success_message3 = document.getElementById("range_success_message3");
    let range_success_message4 = document.getElementById("range_success_message4");
   
    if (isNaN(guess)) { // invalid: not a number
        $("#range_success_message4").hide()
        $("#range_success_message3").show()
        range_success_message3.innerHTML = `"${guess}" is not a number. Please try again`
    }
      
    else if (guess_number > upper_range_pass | guess_number < 1) { //invalid: outside of range
        $("#range_success_message4").hide()
        $("#range_success_message3").show()
        range_success_message3.innerHTML = `Please enter a number that is within the 1-${Math.round(upper_range_pass)} range that you established above.`;
    }

    else if (guess_number == number_pass) {  //guessed correctly
        guess_list.push(guess); 
        $("#range_success_message4").hide()
        $("#range_success_message3").hide()
        message_green.innerHTML = `That is the correct answer! It took you ${guess_list.length} valid attempts, and your guesses were ${guess_list.join(', ')}.`

        }

    else if (guess_number > number_pass) { //guessed too high
        $("#range_success_message3").hide()
        $("#range_success_message4").show()
        let range_success_message4 = document.getElementById("range_success_message4");

        if (guess_list.length > 0) { // invalid: number already used
                if(guess_list.includes(guess)){
                    $("#range_success_message3").hide()
                    $("#range_success_message4").show()
                    range_success_message4.innerHTML = `You already guessed ${guess_number}. Try a new number.`;
                }

                else { // valid but too high
                    guess_list.push(guess);
                    $("#range_success_message3").hide()
                    $("#range_success_message4").show()
                    range_success_message4.innerHTML = `${guess_number} is too high. Try a lower number.`;
                }
            }

        else if (guess_list.length == 0){ //special case for first valid entry when guess array is empty
            guess_list.push(guess);
            $(range_success_message3).hide()
            $(range_success_message4).show()
            range_success_message4.innerHTML = `${guess_number} is too high. Try a lower number.`;
        }
        }
        
    else if (guess_number < number_pass) { //guessed too low

        if (guess_list.length > 0) {
            
                if(guess_list.includes(guess)){ // invalid already used number
                    $("#range_success_message3").hide()
                    $("#range_success_message4").show()
                    range_success_message4.innerHTML = `You already guessed ${guess_number}. Try a new number.`;
                }

                else { // valid, but too low
                    guess_list.push(guess);
                    $("#range_success_message3").hide()
                    $("#range_success_message4").show()
                    range_success_message4.innerHTML = `${guess_number} is too low. Try a higher number.`;
                }
            }
            
        else if (guess_list.length == 0){ //special case when guess array is empty / valid / too low
            guess_list.push(guess);
            $("#range_success_message3").hide()
            $("#range_success_message4").show()
            range_success_message4.innerHTML = `${guess_number} is too low. Try a higher number.`;
        }
    }

    console.log(`This is the current running guest list: ${guess_list}`);

}

