function startCountdown() {
    const timerElement = document.getElementById("timer");

    // 자정 기준 초기화
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0); // 오늘 자정 시간

    // 타이머 업데이트 함수
    function updateTimer() {
        const currentTime = new Date();
        const timeLeft = midnight - currentTime; // 남은 시간 계산 (밀리초)

        if (timeLeft <= 0) {
            // 자정이 되면 타이머 초기화
            midnight.setDate(midnight.getDate() + 1);
        }

        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // 타이머 형식으로 출력
        timerElement.textContent = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }

    // 매초마다 업데이트
    updateTimer();
    setInterval(updateTimer, 1000);
}

// 타이머 실행
startCountdown();
