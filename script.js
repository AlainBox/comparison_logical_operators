const age = '18'
const isFemale = 'true'
const driverStatus = 'designated'
const firstName = 'Bram' || 'Sarah'
const totalAmount = 15

if (age >= 18){

    console.log("You are old enough to enter.")
} else{

    console.log("You are not old enough to enter, sorry.")
}

if (age >= 18 && age <= 25){

    console.log("You get 50% off!")
} else{

    console.log("We're sorry to inform you, that you're not eligible for our youngster-discount.")
}

if (isFemale){

    console.log("You are allowed inside for ladies night.")
} else{

    console.log("You are not allowed inside because of our ladies night.")
}

if (driverStatus == 'designated'){

    console.log("You can drive home safely.")
} else{

    console.log("We will call you a cab, stay here.")
}

if (firstName === 'Bram' || 'Sarah'){

    console.log("Congratulations, you'll receive a free beer!")
} else{

    console.log("We're sorry, you won't get the free beer tonight")
}

if (totalAmount > 25 && totalAmount < 51){

    console.log("Because of our 50th anniversary, you'll receive free (veggie) bitterballen")
} else if (totalAmount > 50 && totalAmount < 101){

    console.log("Because of our 50th anniversary, you'll receive a free portion of nachos")
} else if (totalAmount > 100){

    console.log("Because of our 50th anniversary, you'll receive a free bottle of champagne")
} else{

    console.log("Sorry, but your bill has to be at least 25eu to be eligible for one of our 50th anniversary festive discounts")
}
