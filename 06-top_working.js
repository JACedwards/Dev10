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
        console.log('we hit line 15');
        upper_range = Math.round(Number(upper_range))
        console.log(`value of upper_range rounded is ${upper_range}`)
        if (upper_range <= 10) {
            console.log('we hit line 19');
            range_message.innerHTML = `Please enter a number that is higher than 10`;
            // if (range_success_message){
            //     range_success_message.remove()
            // }
        }

        else {
            console.log('we hit line 25');
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

    console.log(`This is the guess:  ${guess}`)



    
    
    //console.log beginning
 
    // console.log(`The value of "guess" variable at line 40: ${guess}`);
    // console.log(`The value of "upper_range.value" variable at line 40: ${upper_range.value}`);
    // console.log(`The value of "guess_number" variable at line 40: ${guess_number}`);
    // console.log(`The value of "guess_number" variable at line 40: ${number_pass}`);
    // console.log--end;


    
    if (isNaN(guess)) { 
        console.log('we hit line 71');
        range_success_message3.innerHTML = `"${guess}" is not a number. Please try again`

        if (range_message2) {
            range_message2.remove()
        }
        else if (range_success_message4){
            range_success_message3.remove()
        }
        else if (range_success_message5){
            range_success_message3.remove()
            }
    }
    

    
    else if (guess_number > upper_range_pass | guess_number < 1) {
        console.log('we hit line 74');
        range_message2.innerHTML = `Please enter a number that is within the 1-${Math.round(upper_range_pass)} range that you established above.`;

        if (range_success_message3){
            range_success_message3.remove()
        }
        if (range_success_message4){
            range_success_message3.remove()
        }
        if (range_success_message5){
            range_success_message3.remove()
            }
    }

    else if (guess_number == number_pass) {  //guessed correctly
        console.log('we hit line 80');
        guess_list.push(guess); 
        message_green.innerHTML = `That is the correct answer! It took you ${guess_list.length} tries, and your guesses were ${guess_list}.`
        if (range_message2) {
            range_message2.remove()
        }
        if (range_success_message3){
            range_success_message3.remove()
        }
        if (range_success_message4){
            range_success_message3.remove()
        }
        if (range_success_message5){
            range_success_message3.remove()
            }
        }

    //working to here

    else if (guess_number > number_pass) { //guessed too high

        console.log('we hit line 90');
        // console.log(guess_list_set_check)
        // console.log(guess_list_set_check.length)
        // console.log(guess_list_set_check.length != guess_list.length)

        let flag = false

        for (let i = 0; i < guess_list.length; i++) {
            console.log('we hit line 98');
            if (guess_list[i] == guess_number) {
                flag = true;
            }
        }

        if (flag == true) {
            console.log('we hit line 105');
            range_success_message5.innerHTML = `You already guessed ${guess_number}. Try a new number.`;
            if (range_message2) {
                range_message2.remove()
            }
            if (range_success_message3){
                range_success_message3.remove()
            }
            if (range_success_message4){
                range_success_message3.remove()
            }

            }
            

        else {
            console.log('we hit line 110');
            guess_list.push(guess);
            range_success_message5.innerHTML = `${guess_number} is too high. Try a lower number.`;
            if (range_message2) {
                range_message2.remove()
            }
            if (range_success_message3){
                range_success_message3.remove()
            }
            if (range_success_message4){
                range_success_message3.remove()
            }
        }
            
    }
        
           

        
    else if (guess_number < number_pass) { //guessed too low

        console.log('we hit line 120')
        // console.log(guess_list_set_check)
        // console.log(guess_list_set_check.length)
        // console.log(guess_list_set_check.length != guess_list.length)

        let flag = false

        for (let i = 0; i < guess_list.length; i++) {
            if (guess_list[i] == guess_number) {
                console.log('we hit line 129');
                flag = true;
            }
        }

        if (flag == true) {
            console.log('we hit line 135');
            range_success_message4.innerHTML = `You already guessed ${guess_number}. Try a new number.`;
            if (range_message2) {
                range_message2.remove()
            }
            if (range_success_message3){
                range_success_message3.remove()
            }

            if (range_success_message5){
                range_success_message3.remove()
                }
            }
        }    

        else {
            console.log('we hit line 140');
            guess_list.push(guess);
            range_success_message4.innerHTML = `${guess_number} is too low. Try a higher number.`;
            if (range_message2) {
                range_message2.remove()
            }
            if (range_success_message3){
                range_success_message3.remove()
            }

            
            if (range_success_message5){
                range_success_message3.remove()
                }
            }
            
        

    // else if (guess_number < number_pass) { //guessed too high

    //         guess_list.push(guess);
    //         range_success_message.innerHTML = `${guess_number} is too low. Try a higher number.`;
    //     // range_success_message.remove()
    //     }

    //     // else {
    //     //     range_success_message.innerHTML = `${guess_number} is too low. Try a higher number.`;
    //     // }
    // // }
       
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
