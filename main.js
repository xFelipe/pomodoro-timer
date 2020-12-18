// Criar arquivo novo pro timer
// https://github.com/Marco-Andre90/projeto-quiz
// Procurar algo do Vue ou lib js pra fazer mecanica de passagem de tempo
// contador/timer em pausa

const MINUTE = 60
const ACTIVITY = {
    time: 25 * MINUTE,
    waitMessage: "Atividade iniciada",
    finishMessage: "Atividade chegou ao fim",
    name: "Atividade"
}
const SHORT_BREAK = {
    time: 5 * MINUTE,
    waitMessage: "Descanso iniciado",
    finishMessage: "Vai trabalhaaar vagabundo",
    name: "Descanso"
}
const LONG_BREAK = {
    time: 30 * MINUTE,
    waitMessage: "Descanso longo iniciado",
    finishMessage: "Descanso longo chegou ao fim",
    name: "Descanso longo"
}

var app = new Vue({
    el: '#app',
    data: {
        statusMessage: "",
        currentTimerOption: ACTIVITY,
        remainingTime: ACTIVITY.time,
        activeInterval: false
    },

    methods: {
        startTimer: function (timerMode) {
            if (this.activeInterval) this.stopTimer();
            this.currentTimerOption = timerMode;
            this.remainingTime = timerMode.time;
            this.resumeTimer();
        },
        stopTimer: function() {
            clearTimeout(this.activeInterval);
            this.activeInterval = false;
            this.updateMessage();
        },
        resumeTimer: function() {
            if (this.remainingTime <= 0 ) return;
            this.activeInterval = setInterval(() => {
                this.remainingTime -= 1;
                if (this.remainingTime <= 0) {
                    this.stopTimer();
                    audio = new Audio("alarm_sound.mp3")
                    audio.play();
                }
            }, 1000);
            this.updateMessage();
        },
        updateMessage: function() {
            if (this.activeInterval) {
                this.statusMessage = this.currentTimerOption.waitMessage;
            } else if (this.remainingTime > 0) {
                this.statusMessage = this.currentTimerOption.name + " em pausa"
            } else {
                this.statusMessage = this.currentTimerOption.finishMessage;
            }
        },
        startActivity: function () {
            this.startTimer(ACTIVITY);
        },
        startShortBreak: function() {
            this.startTimer(SHORT_BREAK);
        },
        startLongBreak: function() {
            this.startTimer(LONG_BREAK);
        }
    },

    filters: {
        seccondsToTimer: function(secconds) {
            let mins = Math.floor(secconds / MINUTE).toString();
            let secs = Math.floor(secconds % MINUTE).toString();
            if (mins.length == 1) mins = '0'+mins;
            if (secs.length == 1) secs = '0'+secs;
            return mins + ':' + secs;
        }
    }
});
