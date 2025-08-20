/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
var cost_per_day
let number_of_days = 0

const dayInput = document.getElementById('days-input');
const calculateButton = document.getElementById('calculate-button');
const totalCostDisplay = document.getElementById('total-cost')




/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

const dayButtons = document.querySelectorAll('.day-button');

function updateTotalCost() {
    const totalCost = numberOfDays * costPerDay;
    if (totalCostDisplay) {
        totalCostDisplay.textContent = `Total Cost: $${totalCost.toFixed(2)}`;
    }
}

dayButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Check if the button is already clicked.
        if (button.classList.contains('clicked')) {
            // If it is, remove the class and decrement the day count.
            button.classList.remove('clicked');
            numberOfDays--;
        } else {
            // If it's not, add the class and increment the day count.
            button.classList.add('clicked');
            numberOfDays++;
        }
        // Update the total cost after the change.
        updateTotalCost();
    });
});





/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
if (clearButton) {
    clearButton.addEventListener('click', () => {
        // Loop through all day buttons to remove the 'clicked' class.
        dayButtons.forEach(button => {
            button.classList.remove('clicked');
        });

        // Reset the number of days to 0.
        numberOfDays = 0;

        // Update the display to show a total cost of 0.
        updateTotalCost();
    });
}

// Add a click event listener to the submit button.
// The code checks if the elements exist to prevent errors.





/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.




// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.





/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


