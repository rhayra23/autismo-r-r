
function aumentarFonte() {
  document.body.style.fontSize = "larger";
}

function diminuirFonte() {
  document.body.style.fontSize = "smaller";
}

function alternarContraste() {
  document.body.classList.toggle("alto-contraste");
}



function lerTexto(texto) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(texto);
  utterance.lang = 'pt-BR';
  synth.speak(utterance);
}


function mostrarHistoria() {
  const historia = document.getElementById("historia");
  historia.style.display = "block";
  historia.innerHTML = `
    <h2>Minha História</h2>
    <p style="font-size: 1.2rem; line-height: 1.6;">
      Descobrimos recentemente que meu irmão, Rhyan, é autista. Foram 15 anos sem respostas, com muitos momentos de dúvida, dificuldade e superação. 
      <br><br>
      Essa descoberta, embora tardia, trouxe luz a tantas perguntas e iniciou uma nova jornada de entendimento, aceitação e amor. 
      <br><br>
      Criar este site foi a maneira que encontrei de transformar essa dor em empatia, e esse amor em acolhimento. 
      <br><br>
      Para você, meu irmão, que me ensina diariamente sobre coragem, sensibilidade e como o mundo pode ser mais bonito se olharmos com outros olhos.
    </p>
    <img src="https://i.pinimg.com/originals/26/71/93/26719362de41726a5f5f68bba4b014db.jpg" 
         alt="Irmãos abraçados" 
         style="display: block; max-width: 400px; margin: 30px auto; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.2);" />
  `;
}
