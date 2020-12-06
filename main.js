// Criar arquivo novo pro timer
// https://github.com/Marco-Andre90/projeto-quiz
// Procurar algo do Vue ou lib js pra fazer mecanica de passagem de tempo

const MINUTE = 60

var app = new Vue({
    el: '#app',
    data: {
        statusMessage: "",
        remainingTime: 0,
        activeInterval: false
    },
    methods: {
        startTimer: function (seccondsToAlarm, waitMessage, finishMessage) {
            if (this.activeInterval != undefined) this.stopTimer();
            this.statusMessage = waitMessage;
            this.remainingTime = seccondsToAlarm;
            this.activeInterval = setInterval(() => {
                this.remainingTime -= 1;
                if (this.remainingTime <= 0) {
                    this.stopTimer();
                    this.statusMessage = finishMessage;
                }
            }, 1000);
        },
        stopTimer: function () {
            clearTimeout(this.activeInterval);
            this.activeInterval = false;
        },
        startActivity: function () {
            this.startTimer(25 * MINUTE, "Atividade iniciada", "Atividade chegou ao fim.");
            //this.startTimer(3, "Atividade iniciada", "Atividade chegou ao fim");
        },
        startShortBreak: function() {
            this.startTimer(5 * MINUTE, "Descanso iniciado", "Vai trabalhaaar vagabundo");
            //this.startTimer(3, "Descanso iniciado", "Vai trabalhaaar vagabundo");
        },
        startLongBreak: function() {
            this.startTimer(30 * MINUTE, "Descanso longo iniciado", "Descanso longo chegou ao fim");
            //this.startTimer(3, "Descanso longo iniciado", "Descanso longo chegou ao fim");
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
