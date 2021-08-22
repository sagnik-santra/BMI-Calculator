function bmi() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let bmi = Math.round(weight / (height * height));
    let total = bmi;

    if (bmi < 18) {
        document.getElementById("result").innerHTML = "Your BMI is " + total + ", you're currently underweihgt. Eat Helathy and start exercising";

    } else if (bmi > 25) {
        document.getElementById("result").innerHTML = "Your BMI is " + total + ", you're currently Overweihgt. Consume less calories and start exercising";

    } else {
        document.getElementById("result").innerHTML = "Your BMI is " + total + ", Well done! You're completely healthy!!!"
    }

}