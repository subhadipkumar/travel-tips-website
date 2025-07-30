document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('trip-cost-form');
  const resultDiv = document.getElementById('result');

  const calculateTotal = () => {
    const tripDays = parseInt(document.getElementById('trip-days').value) || 1;
    const uberToAirport = parseFloat(document.getElementById('uber-to-airport').value) || 0;
    const uberFromAirport = parseFloat(document.getElementById('uber-from-airport').value) || 0;
    const flightCost = parseFloat(document.getElementById('flight-cost').value) || 0;
    const rentalCarCost = parseFloat(document.getElementById('rental-car-cost').value) || 0;
    const dailyHotelCost = parseFloat(document.getElementById('daily-hotel-cost').value) || 0;
    const dailyFoodCost = parseFloat(document.getElementById('daily-food-cost').value) || 0;
    const dailyOtherCost = parseFloat(document.getElementById('daily-other-cost').value) || 0;
    const gasCost = parseFloat(document.getElementById('gas-cost').value) || 0;

    const totalDailyCost = (dailyHotelCost + dailyFoodCost + dailyOtherCost) * tripDays;
    const totalCost = uberToAirport + uberFromAirport + flightCost + rentalCarCost + totalDailyCost + gasCost;

    resultDiv.innerHTML = `
      <h3>Total Trip Cost: $${totalCost.toFixed(2)}</h3>
      <p>Breakdown:</p>
      <ul>
        <li>Number of Trip Days: ${tripDays}</li>
        <li>Home to Airport Uber: $${uberToAirport.toFixed(2)}</li>
        <li>Back to Home Uber: $${uberFromAirport.toFixed(2)}</li>
        <li>Flight Cost: $${flightCost.toFixed(2)}</li>
        <li>Rental Car Cost: $${rentalCarCost.toFixed(2)}</li>
        <li>Daily Hotel Cost (x${tripDays} days): $${(dailyHotelCost * tripDays).toFixed(2)}</li>
        <li>Daily Food Cost (x${tripDays} days): $${(dailyFoodCost * tripDays).toFixed(2)}</li>
        <li>Daily Other Expenses (x${tripDays} days): $${(dailyOtherCost * tripDays).toFixed(2)}</li>
        <li>Gas Cost: $${gasCost.toFixed(2)}</li>
      </ul>
    `;
  };

  // Add input event listeners to all form inputs for real-time calculation
  form.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', calculateTotal);
  });

  // Initial calculation
  calculateTotal();
});