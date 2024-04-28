// script.js
// JavaScript function to show the popup
function showPopup(title, content) {
    var popup = document.getElementById('popup');
    var popupTitle = document.getElementById('popupTitle');
    var popupContent = document.getElementById('popupContent');

    popupTitle.textContent = title;
    popupContent.textContent = content;
    popup.style.display = 'block';
}

// JavaScript function to close the popup
function closePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
}
document.getElementById('calculate-total').addEventListener('click', function() {
    // Get input values
    var hotelCost = parseFloat(document.getElementById('hotel-cost').value) || 0;
    var foodCost = parseFloat(document.getElementById('food-cost').value) || 0;
    var travelCost = parseFloat(document.getElementById('travel-cost').value) || 0;

    // Calculate total cost
    var totalCost = hotelCost + foodCost + travelCost;

    // Display total cost
    document.getElementById('total-cost').textContent = "Total Cost: Rs " + totalCost.toFixed(2);
})
previewBox.forEach(close =>{
    close.querySelector('.fa-times').onclick = () =>{
      close.classList.remove('active');
      preveiwContainer.style.display = 'none';
    };
  
    document.getElementById('calculate-total').addEventListener('click', function() {
      // Get input values
      var hotelCost = parseFloat(document.getElementById('hotel-cost').value) || 0;
      var foodCost = parseFloat(document.getElementById('food-cost').value) || 0;
      var travelCost = parseFloat(document.getElementById('travel-cost').value) || 0;
  
      // Calculate total cost
      var totalCost = hotelCost + foodCost + travelCost;
  
      // Display total cost
      document.getElementById('total-cost').textContent = "Total Cost: Rs " + totalCost.toFixed(2);
  });
});

