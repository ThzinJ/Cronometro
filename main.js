let segundosInput = document.getElementById("seg");
let minutosInput = document.getElementById("min");
let horasInput = document.getElementById("hor");

// TEXTOS DE NÚMERO
let segundosTxt = document.getElementById("segIndicator");
let minutosTxt = document.getElementById("minIndicator");
let horasTxt = document.getElementById("horIndicator");

// Inteval
let intervalo;

let button = document.getElementById("iniciarBtn");

// Som
const beep = new Audio("https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg");

button.addEventListener("click", () => {
    if (button.classList.contains("ativo")) {
        button.classList.remove("ativo");
        button.classList.add("desativo");
    } else {
        button.classList.remove("desativo");
        button.classList.add("ativo")
    }
})


function eventsInput() {
    segundosInput.addEventListener("focus", () => {
        segundosInput.placehholder = "SEGUNDOS";
    });
    
    segundosInput.addEventListener("blur", () => {
        segundosInput.placeholder = "00";
    });
    
    minutosInput.addEventListener("focus", () => {
        minutosInput.placeholder = "MINUTOS";
    });
    
    minutosInput.addEventListener("blur", () => {
        minutosInput.placeholder = "00";
    });
    
    horasInput.addEventListener("focus", () => {
        horasInput.placeholder = "HORAS";
    })
    
    horasInput.addEventListener("blur", () => {
        horasInput.placeholder = "00";
    })
}
eventsInput();

function rodarCronom() {
    if (button.classList.contains("ativo")) {
        button.innerText = "PARAR"
        
        segundosVal = Number(segundosInput.value);
        minutosVal  = Number(minutosInput.value);
        horasVal    = Number(horasInput.value);
        
        setTimeout (() => {
            segundosTxt.textContent = segundosVal + "s";
            minutosTxt.textContent = minutosVal + "m";
            horasTxt.textContent = horasVal + "h";
        }, 0)
        
        intervalo = setInterval(() => {
            if (segundosVal > 0) {
                segundosVal--;
            
            } else if (minutosVal > 0) {
                segundosVal = 59;
                minutosVal--;
            
            } else if (horasVal > 0) {
                segundosVal = 59;
                minutosVal = 59;
                horasVal--;
            } else {
                segundosTxt.style.color = "red";
                minutosTxt.style.color = "red";
                horasTxt.style.color = "red";
                
                navigator.vibrate([100, 50, 100]);
                
                beep.play();
            }
            
            segundosTxt.textContent = segundosVal + "s";
            minutosTxt.textContent = minutosVal + "m";
            horasTxt.textContent = horasVal + "h";
        }, 1000);
    }
    
    if (button.classList.contains("desativo")) {
        button.innerText = "INICIAR";
        clearInterval(intervalo);
        beep.pause()
        
        segundosTxt.style.color = "#62C2FF";
        minutosTxt.style.color = "#62C2FF";
        horasTxt.style.color = "#62C2FF";
        
        segundosVal = 0;
        minutosVal = 0;
        horasVal = 0;
        
        setTimeout (() => {
            segundosTxt.textContent = segundosVal + "s";
            minutosTxt.textContent = minutosVal + "m";
            horasTxt.textContent = horasVal + "h";
        }, 0)
    }
}
