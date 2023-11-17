var numeroSecreto = parseInt(Math.random() * 1001);
var tentativas = 10;
var palavraTentativas;

while(chute != numeroSecreto && tentativas != 0){
    palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa";
    var chute = prompt(`Digite um número entre 1 e 100, você tem ${tentativas} ${palavraTentativas}.`);
    if(numeroSecreto == chute){
      alert(`Acertou! O número é ${numeroSecreto}`);
    } else if(numeroSecreto > chute){
      alert(`o número secreto é maior`);
    } else {
      alert(`o número secreto é menor`);
    }
    tentativas --;
}