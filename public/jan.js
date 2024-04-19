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
