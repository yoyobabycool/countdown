document.addEventListener('DOMContentLoaded', function () {
    const targetDate = new Date('2024-01-08T16:05:00').getTime();

    function updateTimer() {
        const currentDate = new Date().getTime();
        const timeDifference = targetDate - currentDate;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById('timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    updateTimer(); // Initial call to display timer immediately

    // Update the timer every second
    setInterval(updateTimer, 1000);
});
