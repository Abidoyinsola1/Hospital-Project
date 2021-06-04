document.querySelector(".details").style.display = "none"

document.getElementById("profile").addEventListener('click', function () {
    const userName = prompt("Welcome, what's your name?")
    this.textContent = `${userName}`
})

document.getElementById("calcBill").addEventListener('click', function () {
    document.getElementById("header").style.display = "none"
    document.querySelector(".details").style.display = "block"

})

document.getElementById("home").addEventListener('click', function () {
    document.getElementById("header").style.display = "block"

})

document.getElementById("submit-button").addEventListener('click', function () {
    
    calcMiscCharges = (x, y, z) => {
        return miscCharges = Number(x) + Number(y) + Number(z)
    }


    calcMealCharges = (numberOfMeal) => {
        let i = 1
        let mealChrgs = 0
        while (i <= numberOfMeal) {
            if (i % 6 == 0) {
                mealChrgs = mealChrgs
            }
            else {
                mealChrgs += 1300
            }
            i++
        }
        return mealChrgs
    }

    calcStayCharges = (daysStayed) => {
        if (daysStayed < 11) {
            admissionChrgs = daysStayed * 5000
            return admissionChrgs
        } else {
            discount = (daysStayed * 5000) * 1 / 20
            admissionChrgs = (daysStayed * 5000) - discount
            return admissionChrgs
        }

    }

    totalChrgs = (a, b, c) => {
        let total = parseInt(a) + parseInt(b) + parseInt(c)
        return total
    }


    const daysOnAdmission = document.getElementById('daysOnAdmission').value;
    const medicationChrgs = document.getElementById('daysOnAdmission').value;
    const surgicalChrgs = document.getElementById('daysOnAdmission').value;
    const labFees = document.getElementById('daysOnAdmission').value;
    const mealsBought = document.getElementById('daysOnAdmission').value;

    `Misc Charge: ${calcMiscCharges(medicationChrgs, surgicalChrgs, labFees)}`

    `Meal Charge: ${calcMealCharges(mealsBought)}`
    `Admission Charges: ${calcStayCharges(daysOnAdmission)}`

    `Total Charge: ${totalChrgs(calcMiscCharges(medicationChrgs, surgicalChrgs, labFees), calcMealCharges(mealsBought), calcStayCharges(daysOnAdmission))}`
})
