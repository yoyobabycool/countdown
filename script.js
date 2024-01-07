document.addEventListener('DOMContentLoaded', function () {
    const targetDate = new Date('2024-01-08T16:05:00').getTime();
    const timerContainer = document.getElementById('timer-container');

    function createTimerCard(value) {
        const timerCard = document.createElement('div');
        timerCard.classList.add('timer-card');
        
        const frontFace = document.createElement('div');
        frontFace.classList.add('timer-face');
        frontFace.textContent = value;

        const backFace = document.createElement('div');
        backFace.classList.add('timer-face');
        backFace.textContent = value;

        timerCard.appendChild(frontFace);
        timerCard.appendChild(backFace);
        timerContainer.appendChild(timerCard);

        return timerCard;
    }

    function updateTimer() {
        const currentDate = new Date().getTime();
        const timeDifference = targetDate - currentDate;

        const days = String(Math.floor(timeDifference / (1000 * 60 * 60 * 24)));
        const hours = String(Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const minutes = String(Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)));
        const seconds = String(Math.floor((timeDifference % (1000 * 60)) / 1000));

        const timeValues = [days, hours, minutes, seconds];

        timeValues.forEach((value, index) => {
            const timerCard = timerContainer.children[index];
            if (!timerCard) {
                createTimerCard(value);
            } else {
                const frontFace = timerCard.children[0];
                const backFace = timerCard.children[1];

                if (frontFace.textContent !== value) {
                    timerCard.classList.add('flip');
                    setTimeout(() => {
                        frontFace.textContent = value;
                        backFace.textContent = value;
                        timerCard.classList.remove('flip');
                    }, 250);
                }
            }
        });
    }

    updateTimer(); // Initial call to display timer immediately

    // Update the timer every second
    setInterval(updateTimer, 1000);
});
