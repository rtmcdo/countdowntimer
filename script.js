// Set the target date (replace with your desired date)
const targetDate = new Date('May 1, 2024 00:00:00');

// Function to update the countdown timer
function updateCountdown() {
  const currentDate = new Date();
  const timeDifference = targetDate.getTime() - currentDate.getTime();

  // Calculate days, hours, and minutes remaining
  const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hoursRemaining = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesRemaining = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

  // Update the flip display
  updateFlipDisplay('days', daysRemaining);
  updateFlipDisplay('hours', hoursRemaining);
  updateFlipDisplay('minutes', minutesRemaining);
}

// Function to update the flip display for a specific time section
function updateFlipDisplay(section, value) {
  const digits = value.toString().padStart(2, '0').split('');
  const flipCards = document.querySelectorAll(`#${section} .flip-card`);

  digits.forEach((digit, index) => {
    const topHalf = flipCards[index].querySelector('.top');
    const bottomHalf = flipCards[index].querySelector('.bottom');

    if (topHalf.textContent !== digit) {
      topHalf.dataset.value = digit;
      bottomHalf.dataset.value = digit;

      topHalf.classList.add('flip');
      bottomHalf.classList.remove('flip');

      setTimeout(() => {
        topHalf.textContent = digit;
        topHalf.classList.remove('flip');
      }, 500);

      setTimeout(() => {
        bottomHalf.textContent = digit;
        bottomHalf.classList.add('flip');
      }, 500);
    }
  });
}

// Initial update of the countdown timer
updateCountdown();

// Update the countdown timer every second
setInterval(updateCountdown, 1000);
