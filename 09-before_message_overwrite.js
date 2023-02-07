function create_range() {
    let upper_range = document.getElementById("upper_range").value;
    
    console.log(`this is the value of "upper_range" on line 2 ${upper_range}`)

    let range_message = document.getElementById("range_message");
    let range_success_message = document.getElementById("range_success_message");

    if (isNaN(upper_range)) {
        console.log('we hit line 10');
        range_message.innerHTML = `"${upper_range}" is not a number. Please try again.`;
        // if (range_success_message){
        //     range_success_message.remove()
        // }
    }

    else {
        console.log('we hit line 18');
        upper_range = Math.round(Number(upper_range))
        console.log(`value of upper_range rounded is ${upper_range}`)
        if (upper_range <= 10) {
            console.log('we hit line 22');
            range_message.innerHTML = `Please enter a number that is higher than 10`;
            // if (range_success_message){
            //     range_success_message.remove()
            // }
        }

        else {
            console.log('we hit line 30');
            range_success_message.innerHTML = `Excellent! Now enter a number from 1 to ${upper_range} below`
            if (range_message){
                range_message.remove()
            }
        }

    }

    let num = Math.floor(Math.random() * upper_range) +1;
    
    console.log(`The value of "num" at line 32 ${num}`)
    number_pass = num;
    // console.log(`The value of "upper_range" variable at line 32: ${upper_range} the type is ${typeof(upper_range)}`);

}

let range_success_message = document.getElementById("range_success_message");
let guess_list = []



function do_guess() {
    
    range_success_message.remove();
    let guess = document.getElementById("guess").value;
    let guess_number = Number(document.getElementById("guess").value);
    let range_message2 = document.getElementById("range_message2");
    // let message = document.getElementById("message");
    let message_green = document.getElementById("message_green");
    let upper_range_pass = document.getElementById("upper_range").value;
    let range_success_message3 = document.getElementById("range_success_message3");
    let range_success_message4 = document.getElementById("range_success_message4");
    let range_success_message5 = document.getElementById("range_success_message5");

    console.log(`This is the guess at line 65:  ${guess}`)

    
    //console.log beginning
 
    // console.log(`The value of "guess" variable at line 40: ${guess}`);
    // console.log(`The value of "upper_range.value" variable at line 40: ${upper_range.value}`);
    // console.log(`The value of "guess_number" variable at line 40: ${guess_number}`);
    // console.log(`The value of "guess_number" variable at line 40: ${number_pass}`);
    // console.log--end;


    
    if (isNaN(guess)) { 
        console.log('we hit line 79');
        range_success_message4.innerHTML = `"${guess}" is not a number. Please try again`

        // if (range_message2) {
        //     range_message2.remove()
        // }
        // if (range_success_message4){
        //     range_success_message4.remove()
        // }
        // if (range_success_message5){
        //     range_success_message5.remove()
        //     }
    }
    

    
    else if (guess_number > upper_range_pass | guess_number < 1) {
        console.log('we hit line 96');
        // let range_message2 = document.getElementById("range_message2");
        range_success_message4.innerHTML = `Please enter a number that is within the 1-${Math.round(upper_range_pass)} range that you established above.`;

        // if (range_success_message3){
        //     range_success_message3.remove()
        // }
        // if (range_success_message4){
        //     range_success_message4.remove();

        // }
        // if (range_success_message5){
        //     range_success_message5.remove()
        //     }
    }

    else if (guess_number == number_pass) {  //guessed correctly
        console.log('we hit line 113');
        guess_list.push(guess); 
        message_green.innerHTML = `That is the correct answer! It took you ${guess_list.length} tries, and your guesses were ${guess_list}.`
        // if (range_message2) {
        //     range_message2.remove()
        // }
        // if (range_success_message3){
        //     range_success_message3.remove()
        // }
        // if (range_success_message4){
        //     range_success_message4.remove()
        // }
        // if (range_success_message5){
        //     range_success_message5.remove()
        //     }
        }

    //working to here

    else if (guess_number > number_pass) { //guessed too high

        console.log(`we hit line 134 and guess_list = ${guess_list}`)
        // console.log(guess_list_set_check)
        // console.log(guess_list_set_check.length)
        // console.log(guess_list_set_check.length != guess_list.length)

        // let flag = false


        if (guess_list.length > 0) { 
            // let check = guess_list.length
            
                if(guess_list.includes(guess)){
                    console.log(`we hit line 146 and guess_list = ${guess_list}`)

                    console.log(`we hit line 148 and guess_number = ${guess_number}`)
                    range_success_message4.innerHTML = `You already guessed ${guess_number}. Try a new number.`;
                }

                else {
                    console.log('we hit line 153');
                    guess_list.push(guess);
                    console.log(`we hit line 155 and guess_list = ${guess_list}`)
                    range_success_message4.innerHTML = `${guess_number} is too high. Try a lower number.`;
                }
            }
            // console.log(`we hit line 207 and did not find a duplicate`) 
            // console.log(`we hit line 208 and length of guess_list = ${guess_list.length}`)


        else if (guess_list.length == 0){
            console.log('the length of guestlist is 0 at 164')
            guess_list.push(guess);
            console.log(`now this is the guest_list ${guess_list} at 166`);
            console.log(`we hit line 167 and gguess = ${guess}`)
            range_success_message4.innerHTML = `${guess_number} is too high. Try a lower number.`;
        }
        }

        
           

        
    else if (guess_number < number_pass) { //guessed too low

        console.log(`we hit line 178 and guess_list = ${guess_list}`)
        // console.log(guess_list_set_check)
        // console.log(guess_list_set_check.length)
        // console.log(guess_list_set_check.length != guess_list.length)

        // let flag = false


        if (guess_list.length > 0) {
            // let check = guess_list.length
            
                if(guess_list.includes(guess)){
                    console.log(`we hit line 190 and guess_list = ${guess_list}`)

                    console.log(`we hit line 192 and guess_number = ${guess_number}`)
                    range_success_message4.innerHTML = `You already guessed ${guess_number}. Try a new number.`;
                }

                else {
                    console.log('we hit line 197');
                    guess_list.push(guess);
                    console.log(`we hit line 199 and guess_list = ${guess_list}`)
                    range_success_message4.innerHTML = `${guess_number} is too low. Try a higher number.`;
                }
            }
            // console.log(`we hit line 207 and did not find a duplicate`) 
            // console.log(`we hit line 208 and length of guess_list = ${guess_list.length}`)


        else if (guess_list.length == 0){
            console.log('the length of guestlist is 0 at 208')
            guess_list.push(guess);
            console.log(`now this is the guest_list ${guess_list} at 210`);
            console.log(`we hit line 211 and gguess = ${guess}`)
            range_success_message4.innerHTML = `${guess_number} is too low. Try a higher number.`;
        }
        }

        

          
        


    console.log(guess_list);

}

// "<span style='font-size:40px'>John Doe</span>"
