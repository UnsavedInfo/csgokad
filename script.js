var hinos = [
  "https://protettordelinks.com/wp-content/baixar/chavesabertura_www.toquesengracadosmp3.com.mp3"
];

var escudos = [
  "https://i.pinimg.com/originals/52/d1/f2/52d1f29fa97ebd0fb28e7ab5991d38b2.jpg",
  "https://www.imagensempng.com.br/wp-content/uploads/2021/01/Escudo-Ponte-Preta-Png.png",
  "https://w7.pngwing.com/pngs/639/567/png-transparent-real-madrid-c-f-uefa-champions-league-la-liga-juventus-f-c-atletico-madrid-football-logo-juventus-fc-sports.png"
];

var jogadores = [
  {
    nome: "Fallen",
    kills: 0,
    assists: 0,
    deaths: 0,
    pontos: 0,
    icone:
      "https://64.media.tumblr.com/b257924565102bca43c7def38a6d9af8/1366ccf2ce2fbec0-a9/s400x600/ecb0b34ceb52accdb65c8e6a7baefed2e359ad16.png"
  },
  {
    nome: "s1mple",
    kills: 0,
    assists: 0,
    deaths: 0,
    pontos: 0,
    icone:
      "https://mir-s3-cdn-cf.behance.net/projects/404/75615d115507751.Y3JvcCw0NzI0LDM2OTUsMCw1MTQ.jpg"
  },
  {
    nome: "Eufrazino",
    kills: 0,
    assists: 0,
    deaths: 0,
    pontos: 0,
    icone:
      "https://i.pinimg.com/564x/25/79/ca/2579ca1b2d8917d89200c9354d9772ad.jpg"
  },
  {
    nome: "Coldzera",
    kills: 0,
    assists: 0,
    deaths: 0,
    pontos: 0,
    icone:
      "https://s2.glbimg.com/VNtKUxfQumXtYA3md3hpkj-HlJc=/0x0:1600x1067/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/o/Q/xiHTArQrKDXTl4Wa5GEw/20180518-helena-kristiansson-epl-dallas-02974.jpg"
  },
  {
    nome: "Golfo",
    kills: 0,
    assists: 0,
    deaths: 0,
    pontos: 0,
    icone:
      "https://avatars.akamai.steamstatic.com/996e48d80a663b9fac102904e0be5a33aceff6bb_full.jpg"
  },
  {
    nome: "Duck Dodgers",
    kills: 0,
    assists: 0,
    deaths: 0,
    pontos: 0,
    icone:
      "https://i.pinimg.com/474x/35/2f/02/352f02bfa07377dceb1d659357ee42ee.jpg"
  },
  {
    nome: "Didi",
    kills: 0,
    assists: 0,
    deaths: 0,
    pontos: 0,
    icone: "https://s01.video.glbimg.com/x216/2052884.jpg"
  }
];

// "Pego" o elemento "tabelaJogadores" do HTML
var elementoTabela = document.getElementById("tabelaJogadores");

//template string

//Não tem problema chamar a função antes de defini-la
exibirNaTela();

// Essa função serve para atualizar a tabela a cada mudança
function exibirNaTela() {
  //.iinerHTML vai adicionar todo esse código ao HTML
  //Dessa 5forma, entre crases, é possível escrever em JavaScript e HTML.

  for (var i = 0; i < jogadores.length; i++) {
    elementoTabela.innerHTML += `

      
      <tr style="height: 25px;"> 
        <td>
        <div id="icones" style="vertical-align:middle; margin:1px 1px; float: left;"> <img src=${jogadores[i].icone}>  </div>
        <div id= "names" style= "text-align: left;"> ${jogadores[i].nome} </div>
        </td>
        
       
        
        <td style>${jogadores[i].kills}</td>
        <td>${jogadores[i].assists}</td>
        <td>${jogadores[i].deaths}</td>
        <td style = "width: 8%">${jogadores[i].pontos}</td>
        <td><button onClick="adicionarKill(${i})">K+</button></td>
        <td><button onClick="adicionarAssist(${i})">A+</button></td>
        <td><button onClick="adicionarDeath(${i})">D+</button></td>
      </tr>
        
        `;
  }
}

function adicionarTime() {
  var listaFormatosImagem = ["jpg", "jpeg", "png", "tif", "tiff", "bmp", "gif"];
  var escudoInserido = document.getElementById("icone").value;
  var formatoInserido = escudoInserido.slice(-3);

  if (document.getElementById("time").value == "") {
    alert("Insira um nome válido!");
  } else if (!listaFormatosImagem.includes(formatoInserido)) {
    alert(
      "O link que você inseriu não é de uma imagem. \n\n Insira um link que termine com uma extensão de imagem (.jpg, .png, .jpeg, ...) \n \n ex: https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/evolving_google_identity_2x1.jpg"
    );
  } else {
    jogadores.push({
      nome: document.getElementById("time").value,
      kills: 0,
      assists: 0,
      deaths: 0,
      pontos: 0,
      icone: escudoInserido
    });

    elementoTabela.innerHTML = "";
    document.getElementById("icone").value = "";
    exibirNaTela();
    console.log(escudos);

    console.log(jogadores);

    elementoTabela.innerHTML = ""; //limpa a tela atual
    exibirNaTela(); // Atualiza a tela
    document.getElementById("time").value = ""; //Limpa o input
  }
}

// Com o i, sei qual elemento do dicinário estou me referindo
function adicionarKill(i) {
  jogadores[i].kills++;
  jogadores[i].pontos += 2;
  console.log(jogadores[i]); //mostra o dicionário do jogador do caso

  // Oderna a lista de objetos "jogadores" por pontos.
  jogadores.sort(function (a, b) {
    return b.pontos - a.pontos;
  });

  elementoTabela.innerHTML = "";
  exibirNaTela();
}

function adicionarAssist(i) {
  jogadores[i].assists++;
  jogadores[i].pontos++;

  console.log(jogadores[i]);

  jogadores.sort(function (a, b) {
    return b.pontos - a.pontos;
  });

  elementoTabela.innerHTML = "";
  exibirNaTela(); //atualiza a tabela
}

function adicionarDeath(i) {
  jogadores[i].deaths++;

  console.log(jogadores[i]);

  jogadores.sort(function (a, b) {
    return b.pontos - a.pontos;
  });

  elementoTabela.innerHTML = "";
  exibirNaTela(); //atualiza a tabela
}