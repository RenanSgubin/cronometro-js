

let timerNumber = 10;
let timerSeconds = 60;


function timer(){
     const intervalSeconds = setInterval(timerSeconds--, 60);
     document.getElementsByClassName("seconds")[0].innerHTML = ":"+timerSeconds;

        if(timerSeconds <= 9){
            document.getElementsByClassName("seconds")[0].innerHTML = ":0"+timerSeconds;
        }

        if(timerSeconds <= 0) {
            timerNumber--;

            if(timerNumber === 0){
                clearInterval(interval);
            }
            if(timerNumber <= 9){
                document.getElementsByClassName("timer")[0].innerHTML = "0"+timerNumber;
            }
            timerSeconds = 59;

            document.getElementsByClassName("timer")[0].innerHTML = timerNumber;
        }
}

const interval = setInterval(timer, 20);
