// listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e){

    //hide results
    document.getElementById('results').style.display = 'none';

    //show loader
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResults, 2000);

    e.preventDefault();
});

// calculate results function

function calculateResults(){

   //grab UI variables
   const amount = document.getElementById('amount');
   const interest = document.getElementById('interest');
   const years = document.getElementById('years');
   const monthlyPayment = document.getElementById('monthly-payment');
   const totalPayment = document.getElementById('total-payment');
   const totalInterest = document.getElementById('total-interest');

   // turn all input values into decimals.
   const principle = parseFloat(amount.value);
   const calculatedInterest = parseFloat(interest.value) / 100 / 12;
   const calculatedPayment = parseFloat(years.value) * 12;
   
   // compute monthly payments
   const x = Math.pow(1 + calculatedInterest, calculatedPayment);
   const monthly = (principle*x*calculatedInterest)/(x-1);

   // check to see if the number is finite
   if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayment).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayment)-principle).toFixed(2);

    // display results
    document.getElementById('results').style.display = 'block';

    // hide spinner
    document.getElementById('loading').style.display='none';

   } else {
       showError('Please check your numbers.')
   }

}

// error handler
function showError(error){

        // display results
        document.getElementById('results').style.display = 'none';

        // hide spinner
        document.getElementById('loading').style.display='none';
    

    // create a div
    const errorDiv = document.createElement('div');

    //get elements for inserting new div
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // add class
    errorDiv.className = 'alert alert-danger';

    // add text node and append to the div
    errorDiv.appendChild(document.createTextNode(error));

    // insert the error div above the heading
    card.insertBefore(errorDiv, heading);

    // clear error after 5 seconds
    setTimeout(clearError, 3000);
}

function clearError(){
    document.querySelector('.alert').remove();
}