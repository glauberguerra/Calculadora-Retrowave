let visor = document.getElementById("visor");

function adicionar(valor) {
  if (visor.innerText === "0") {
    visor.innerText = valor;
  } else {
    visor.innerText += valor;
  }
}

function limpar() {
  visor.innerText = "0";
}

function remover() {
  visor.innerText = visor.innerText.slice(0, -1);
  if (visor.innerText === "") visor.innerText = "0";
}

function calcular() {
  try {
    const resultado = eval(visor.innerText);
    visor.innerText = resultado;

    const msg = document.getElementById("mensagemTotal");
    const final = document.getElementById("resultadoFinal");

    final.innerText = resultado;

    msg.classList.add("ativo");

    setTimeout(() => {
      msg.classList.remove("ativo");
    }, 5000);
  } catch {
    visor.innerText = "Erro";
  }
}

// Som de clique
const somClique = document.getElementById("somClique");
const botoes = document.querySelectorAll(".btn");

botoes.forEach(btn => {
  btn.addEventListener("click", () => {
    somClique.currentTime = 0;
    somClique.play();
  });
});

// Música de fundo inicia no primeiro clique no body
document.body.addEventListener("click", () => {
  const musica = document.getElementById("musicaFundo");
  if (musica.paused) {
    musica.play();
  }
}, { once: true });

// Controles de áudio
const musicaFundo = document.getElementById("musicaFundo");
const muteButton = document.getElementById("muteButton");
const volumeSlider = document.getElementById("volumeSlider");

muteButton.addEventListener("click", () => {
  musicaFundo.muted = !musicaFundo.muted;
  muteButton.textContent = musicaFundo.muted ? "🔇" : "🔊";
});

volumeSlider.addEventListener("input", () => {
  musicaFundo.volume = volumeSlider.value;
});

// -----------------------------
// MENSAGEM "START" - Pressionar qualquer tecla
// -----------------------------
window.addEventListener("load", () => {
  const startMsg = document.getElementById("startMessage");

  // Mostra a mensagem
  startMsg.style.opacity = 1;

  // Esconde após 3 segundos
  setTimeout(() => {
    startMsg.style.opacity = 0;
    setTimeout(() => {
      startMsg.style.display = "none";
    }, 800); // espera transição de fade
  }, 3000);
});


