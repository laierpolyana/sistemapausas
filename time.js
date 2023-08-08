const registro = {
    email: '',
    tipoPausa: '',
    comecoPausa: '',
    fimPausa: ''
}


//função chamada ao clicar no botão start
function start() {
    confirmarEnvioStart()
}

//função para confirmação de registro de pausa
function confirmarEnvioStart() {
    let msgInicial;
    let ok = confirm("Confirma esta ação?");
    if (ok == true) {
        msgInicial = "Inicio da pausa registrada!"
        pausaInicial()
    } else {
        msgInicial = "Registro de pausa não efetuado";
    }
    document.getElementById("mensagem").innerHTML = msgInicial;
}

const getDataAtual = function() {
    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();
    let mes = data.getMonth() + 1;
    let dia = data.getDate();

    // zero à esquerda se necessário para visualização
    dia = dia < 10 ? '0' + dia : dia;
    mes = mes < 10 ? '0' + mes : mes;
    hora = hora < 10 ? '0' + hora : hora;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    // resultados
    return  dataFormatada = dia + "/" + mes + "/" + data.getFullYear() + " " + hora + ':' + minutos + ':' + segundos;
}

//função para capturar, organizar e converter os dados para envio
function pausaInicial() {

    // variáveis
    let email = document.querySelector("#email-box").value;
    let pausa = document.querySelector("#pausas-list").value;

    registro.email = email;
    registro.tipoPausa = pausa;
    registro.comecoPausa = getDataAtual()

    console.log(registro)
}

var btnEnd = document.querySelector("#btn-end");

btnEnd.addEventListener("click", function (e) {
    //não realizar o envio do formulário ainda
    e.preventDefault();
}
)

//função chamada ao clicar no botão end
function end() {
    confirmarEnvioEnd()
}

//função para confirmação de registro de final da pausa
function confirmarEnvioEnd() {
    var msgFinal;
    var okFinal = confirm("Confirma esta ação?");
    if (okFinal == true) {
        msgFinal = "Final da pausa registrado!"
        pausaFinal()
    } else {
        msgFinal = "Registro de pausa não efetuado";
    }
    document.getElementById("mensagem").innerHTML = msgFinal;
}

//registro do final da pausa
function pausaFinal(){
    registro.fimPausa = getDataAtual();
    //Enviar pro backend
    console.log(registro)
}

