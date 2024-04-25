// Function to calculate the total cost based on inputs
function calculateTotal() {
    // Get the input values
    const hotelCost = parseFloat(document.getElementById('hotelCost').value);
    const foodCost = parseFloat(document.getElementById('foodCost').value);
    const transportCost = parseFloat(document.getElementById('transportCost').value);

    // Calculate the total cost
    const totalCost = hotelCost + foodCost + transportCost;

    // Display the total cost
    const totalCostElement = document.getElementById('totalCost');
    totalCostElement.textContent = `Total Cost: Rs${totalCost.toFixed(2)}`;
}
