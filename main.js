// Criar arquivo novo pro timer
// https://github.com/Marco-Andre90/projeto-quiz
// Procurar algo do Vue ou lib js pra fazer mecanica de passagem de tempo
class Timer {
    startTimer = (seccondsToAlarm, waitMessage, finishMessage) => {
        this.statusMessage = waitMessage;
        this.remainingTime = seccondsToAlarm;
        this.timerActiveInterval = setInterval(() => {
            this.remainingTime -= 1;
            if (this.remainingTime <= 0) {
                this.stopTimer();
                this.statusMessage = finishMessage;
            }
        }, 1000);
    }

    stopTimer = () => {
        clearTimeout(this.timerActiveInterval);
    }

    startActivity = () => {
        //this.startTimer(25 * 60, "Relogio Iniciado", "Relogio Terminado");
        this.startTimer(3, "Relogio Iniciado", "Relogio Terminado");
    
    }

    constructor(minutes) {
        this.statusMessage = "";
        //this.startActivity();
    }
}

var app = new Vue({
    el: '#app',
    data: {
        timer: new Timer()
    }
});

