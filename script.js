
alert("Bem vindo a esse jogo que fiquei dias tentando fazer, usando AI e a Ino...")
        alert("Clique no botão abaixo pra começar plmdds.")

        //colocar música
  

        let imagens = [
            "https://i.imgur.com/OUqbPMw.png",//django
            "https://i.imgur.com/ZivFwhu.png",//chihiro
            "https://i.imgur.com/H1HLdKm.png",//castelo animado
            "https://i.imgur.com/2XPjq1g.png", //hercules
            "https://i.imgur.com/MqrJZur.png", //orgulho e preconceito
            "https://i.imgur.com/SXYoKEM.png", //a nova onda do imperador
            "https://i.imgur.com/3j10SEt.png", //book of mormon
            "https://i.imgur.com/geQHPd1.png", //wicked
            "https://i.imgur.com/fYtNSV0.png", //naruto
            "https://i.imgur.com/flFFOlb.png", //evangelion
            "https://i.imgur.com/Mh43S1S.png", //itazura na kiss
            "https://i.imgur.com/bNQh6QK.png", //o ritual
            "https://i.imgur.com/rrZSUzI.png", //digimon
            "https://i.imgur.com/Jxymsk6.png", //moulin rouge
            "https://i.imgur.com/1P7aPrj.png", //barbie
            "https://i.imgur.com/6dUbkXk.png", //marble hornets
            "https://i.imgur.com/wRqi1zL.png", //steven universe
            "https://i.imgur.com/E3q7hNy.png", //harry potter
            "https://i.imgur.com/ZR1sZcD.png", //crepusculo
            "https://i.imgur.com/6BSwBz9.png", //killbill
            "https://i.imgur.com/x40ECUx.png", //a mumia
            "https://i.imgur.com/K8Xw8Pa.png", //rei leão
            "https://i.imgur.com/PPaLNUQ.png", //parasita
            "https://i.imgur.com/Sbi5w3I.png", //bacurau
            "https://i.imgur.com/6kDEvC7.png", //mulan
            "https://i.imgur.com/mrgFUIS.png", //atlantis
            "https://i.imgur.com/ud9zakk.png", //o quinto elemento
            "https://i.imgur.com/NsQJBjB.png", //aristogatas
            "https://i.imgur.com/JkwAWV7.png", //legalmente loira
            "https://i.imgur.com/q0ptObc.png" //diario da princesa

        ];

        let respostas = [
            ["Django", "Django Livre", "Django Unleashed"],
            ["A Viagem de Chihiro", "Viagem de Chihiro", "Spiret Away"], 
            ["Castelo Animado", "O Castelo Animado", "Howl's Moving Castle"],
            ["Hercules", "Hércules"],
            ["Orgulho e Preconceito", "Pride and Prejudice"],
            ["A Nova do Imperador", "The Emperor's New Grove"],
            ["The Book of Mormon", "Book of Mormon"],
            ["Wicked"],
            ["Naruto", "Naruto Shippuden"],
            ["Evangelion", "Neo Genesis Evangelion"],
            ["Itazura na Kiss"],
            ["O Ritual", "The Rite"],
            ["Digimon o filme", "Digimon: O Filme", "Digimon"],
            ["Moulin Rouge"],
            ["Barbie"],
            ["Marble Hornets"],
            ["Steven Universe"],
            ["Harry Potter"],
            ["Crepusculo", "Crepúsculo", "Twilight"],
            ["Kill Bill", "Kill Bill 2"],
            ["A Múmia", "A Mumia"],
            ["O Rei Leão", "Rei Leão"],
            ["Parasita", "Parasite"],
            ["Bacurau"],
            ["Mulan"],
            ["Atlantis", "Atlantis: O Reino Perdido"],
            ["O Quinto Elemento", "The Fifth Element"],
            ["Aristogatas", "Os Aristogatos", "The Aristocats"],
            ["Legalmente Loira"],
            ["O Diário da Princesa", "O Diario da Princesa", "The Princess Diaries"]
        ];
        let score = 0;
        let respostaCorreta = null;
        let perguntasFeitas = 0;

        const perguntaElement = document.getElementById("pergunta");
        const imgElement = document.getElementById("imagem");
        const respostaInput = document.getElementById("resposta");
        const feedbackElement = document.getElementById("feedback");

        function fazerPergunta() {
            if (imagens.length > 0 && perguntasFeitas < 20) {
                const indice = Math.floor(Math.random() * imagens.length);
                const urlImagem = imagens.splice(indice, 1)[0];
                respostaCorreta = respostas.splice(indice, 1)[0];

                perguntaElement.textContent = "Qual o nome do anime/filme?";
                imgElement.src = urlImagem;
                respostaInput.value = "";
                feedbackElement.textContent = "";
                perguntasFeitas++;
            } else {
                alert("Fim de jogo! Seu score foi: " + score);
                jogarNovamente()
                score = 0;
            }
        }

 
        function verificarResposta() {
            const respostaUsuario = respostaInput.value;
            if (!respostaUsuario) {
                alert("Digite uma resposta antes de responder");
                return;
            }
                if (respostaCorreta.some(correta => correta.toLowerCase() === respostaUsuario.toLowerCase())) {
                alert("Resposta correta!");
                score += 5;
                imgElement.classList.add("acertou");
                setTimeout(() => {
                imgElement.classList.remove("acertou");
                proximaPergunta();
        }, 2000); // Aguarda 2 segundos antes de avançar para a próxima pergunta
            } else {
                alert("Erooooou");
                imgElement.classList.add("errou");
                setTimeout(() => {
                imgElement.classList.remove("errou");
                proximaPergunta();
        }, 2000); // Aguarda 2 segundos antes de avançar para a próxima pergunta
    }
}
        function reiniciarJogo(){
            imagens = [
            "https://i.imgur.com/OUqbPMw.png",//django
            "https://i.imgur.com/ZivFwhu.png",//chihiro
            "https://i.imgur.com/H1HLdKm.png",//castelo animado
            "https://i.imgur.com/2XPjq1g.png", //hercules
            "https://i.imgur.com/MqrJZur.png", //orgulho e preconceito
            "https://i.imgur.com/SXYoKEM.png", //a nova onda do imperador
            "https://i.imgur.com/3j10SEt.png", //book of mormon
            "https://i.imgur.com/geQHPd1.png", //wicked
            "https://i.imgur.com/fYtNSV0.png", //naruto
            "https://i.imgur.com/flFFOlb.png", //evangelion
            "https://i.imgur.com/Mh43S1S.png", //itazura na kiss
            "https://i.imgur.com/bNQh6QK.png", //o ritual
            "https://i.imgur.com/rrZSUzI.png", //digimon
            "https://i.imgur.com/Jxymsk6.png", //moulin rouge
            "https://i.imgur.com/1P7aPrj.png", //barbie
            "https://i.imgur.com/6dUbkXk.png", //marble hornets
            "https://i.imgur.com/wRqi1zL.png", //steven universe
            "https://i.imgur.com/E3q7hNy.png", //harry potter
            "https://i.imgur.com/ZR1sZcD.png", //crepusculo
            "https://i.imgur.com/6BSwBz9.png", //killbill
            "https://i.imgur.com/x40ECUx.png", //a mumia
            "https://i.imgur.com/K8Xw8Pa.png", //rei leão
            "https://i.imgur.com/PPaLNUQ.png", //parasita
            "https://i.imgur.com/Sbi5w3I.png", //bacurau
            "https://i.imgur.com/6kDEvC7.png", //mulan
            "https://i.imgur.com/mrgFUIS.png", //atlantis
            "https://i.imgur.com/ud9zakk.png", //o quinto elemento
            "https://i.imgur.com/NsQJBjB.png", //aristogatas
            "https://i.imgur.com/JkwAWV7.png", //legalmente loira
            "https://i.imgur.com/q0ptObc.png" //diario da princesa
                ]
            respostas = [
            ["Django", "Django Livre", "Django Unleashed"],
            ["A Viagem de Chihiro", "Viagem de Chihiro", "Spiret Away"], 
            ["Castelo Animado", "O Castelo Animado", "Howl's Moving Castle"],
            ["Hercules", "Hércules"],
            ["Orgulho e Preconceito", "Pride and Prejudice"],
            ["A Nova do Imperador", "The Emperor's New Grove"],
            ["The Book of Mormon", "Book of Mormon"],
            ["Wicked"],
            ["Naruto", "Naruto Shippuden"],
            ["Evangelion", "Neo Genesis Evangelion"],
            ["Itazura na Kiss"]
            ["O Ritual", "The Rite"],
            ["Digimon o filme", "Digimon: O Filme", "Digimon"],
            ["Moulin Rouge"],
            ["Barbie"],
            ["Marble Hornets"],
            ["Steven Universe"],
            ["Harry Potter"],
            ["Crepusculo", "Crepúsculo", "Twilight"],
            ["Kill Bill", "Kill Bill 2"],
            ["A Múmia", "A Mumia"],
            ["O Rei Leão", "Rei Leão"],
            ["Parasita", "Parasite"],
            ["Bacurau"],
            ["Mulan"],
            ["Atlantis", "Atlantis: O Reino Perdido"],
            ["O Quinto Elemento", "The Fifth Element"],
            ["Aristogatas", "Os Aristogatos", "The Aristocats"],
            ["Legalmente Loira"],
            ["O Diário da Princesa", "O Diario da Princesa", "The Princess Diaries"]
                ]
                    score = 0;
                    respostaCorreta = null;
                    perguntasFeitas = 0;
                    fazerPergunta();
        }

        function iniciarJogo() {
            fazerPergunta();
        }

        function proximaPergunta() {
            setTimeout(fazerPergunta, 500);
        }

        function jogarNovamente(){
            const simNao = prompt("Gostaria de jogar de novo? s/n")

            if(simNao !== null){
                const respostaFormatada = simNao.trim().toLowerCase();
                if(respostaFormatada === "s"){
                    reiniciarJogo();
                }else if(respostaFormatada === "n"){
                    alert("Vai jogar sim kct")
                    reiniciarJogo();
                }else{
                    alert("Digite s ou n >:(");
                    jogarNovamente();
                }
            } 
        }

        window.onload = iniciarJogo;