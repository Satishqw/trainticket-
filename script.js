document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const movieSelect = document.getElementById('movie');
    const seatsInput = document.getElementById('seats');
    const summaryText = document.getElementById('summary-text');
    
    const movie = movieSelect.options[movieSelect.selectedIndex].text;
    const seats = seatsInput.value;
    const ticketPrice = 10; // Assume each ticket costs $10
    const totalPrice = seats * ticketPrice;
    
    summaryText.textContent = `You have booked ${seats} seat(s) for "${movie}". Total price: $${totalPrice}.`;
});
