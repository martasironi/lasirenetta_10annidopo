var game = new Phaser.Game(1024, 768, Phaser.AUTO, '',{ preload: preload });
//{ preload: preload, create: create, update: update }
function preload(){}

//livello1
var player;
var pozione;
var cursors;
var timer;
var total = 0;
var player_vince = false;
var speed = 250;

//livello2
var player;
var playerOldPos = {x: 32,y: 600};
var pozzanghera;
var palma;
var cursors;
var base;
var score = 0;
var scoreText;
var vite = 5;
var viteText;
var enemy;

var Copertina = {
  preload: function(){
    game.load.crossOrigin = 'anonymous';
    game.load.image('copertina', 'assets/grafica/copertina/copertina_sfondo.jpg');
    game.load.image('icona_gioca', 'assets/grafica/copertina/gioca.png');
    game.load.image('icona_autori', 'assets/grafica/copertina/autori.png');
    game.load.image('icona_crediti', 'assets/grafica/copertina/crediti.png');
    game.load.image('sfondo_fisso', 'assets/grafica/copertina/sfondo_fisso.png');
    game.load.image('sfondo_giallo', 'assets/grafica/copertina/sfondo_giallo.png');
  },
  create: function(){
 //sfondo
    immagine_copertina = game.add.sprite(0, 0, 'copertina');
    immagine_copertina.fixedToCamera = true;
 //icona gioca
    sfondo_gioca = game.add.sprite(680, 330, 'sfondo_fisso');
    sfondo_gioca.fixedToCamera = true;
    sfondo2_gioca = game.add.sprite(675, 322, 'sfondo_giallo');
    sfondo2_gioca.fixedToCamera = true;
    sfondo2_gioca.alpha = 0;
    icona_gioca = game.add.sprite(700, 320, 'icona_gioca');
    icona_gioca.fixedToCamera = true;
    icona_gioca.inputEnabled = true;
    icona_gioca.events.onInputDown.add(this.imageClick_gioco, this);
 //icona autori
    sfondo_autori = game.add.sprite(680, 430, 'sfondo_fisso');
    sfondo_autori.fixedToCamera = true;
    sfondo2_autori = game.add.sprite(675, 422, 'sfondo_giallo');
    sfondo2_autori.fixedToCamera = true;
    sfondo2_autori.alpha = 0;
    icona_autori = game.add.sprite(700, 420, 'icona_autori');
    icona_autori.fixedToCamera = true;
    icona_autori.inputEnabled = true;
    icona_autori.events.onInputDown.add(this.imageClick_autori, this);
 //icona Crediti
    sfondo_crediti = game.add.sprite(680, 528, 'sfondo_fisso');
    sfondo_crediti.fixedToCamera = true;
    sfondo2_crediti = game.add.sprite(675, 520, 'sfondo_giallo');
    sfondo2_crediti.fixedToCamera = true;
    sfondo2_crediti.alpha = 0;
    icona_crediti = game.add.sprite(700, 520, 'icona_crediti');
    icona_crediti.fixedToCamera = true;
    icona_crediti.inputEnabled = true;
    icona_crediti.events.onInputDown.add(this.imageClick_crediti, this);
  },
  update: function(){
  //luce gioca
    if (icona_gioca.input.pointerOver())
    {sfondo2_gioca.alpha = 1;}
    else
    {sfondo2_gioca.alpha = 0;}
 //luce autori
    if (icona_autori.input.pointerOver())
    {sfondo2_autori.alpha = 1;}
    else
    {sfondo2_autori.alpha = 0;}
 //luce crediti
    if (icona_crediti.input.pointerOver())
    {sfondo2_crediti.alpha = 1;}
    else
    {sfondo2_crediti.alpha = 0;}

  },
  imageClick_gioco: function(pointer) {
        this.game.state.start('Intro_Flash1');
  },
  imageClick_autori: function(pointer) {
        this.game.state.start('Autori');
  },
  imageClick_crediti: function(pointer) {
        this.game.state.start('Crediti');
  },
}
game.state.add('Copertina', Copertina)

var Crediti = {
  preload: function(){
    game.load.crossOrigin = 'anonymous';
    game.load.image('crediti', 'assets/grafica/autori_crediti/crediti.jpg');
    game.load.image('icona', 'assets/grafica/autori_crediti/pulsante.png');
    game.load.image('sfondo_fisso', 'assets/grafica/autori_crediti/sfondo_verde.png');
    game.load.image('sfondo_giallo', 'assets/grafica/autori_crediti/sfondo_giallo.png');
  },
  create: function(){
    immagine_crediti = game.add.sprite(0, 0, 'crediti');
    immagine_crediti.fixedToCamera = true;
    sfondo_icona = game.add.sprite(392, 657, 'sfondo_fisso');
    sfondo_icona.fixedToCamera = true;
    sfondo_icona.scale.x = 0.7;
    sfondo_icona.scale.y = 0.7;
    sfondo2_icona = game.add.sprite(388, 650, 'sfondo_giallo');
    sfondo2_icona.fixedToCamera = true;
    sfondo2_icona.alpha = 0;
    sfondo2_icona.scale.x = 0.7;
    sfondo2_icona.scale.y = 0.7;
    icona_indietro = game.add.sprite(415, 650, 'icona');
    icona_indietro.fixedToCamera = true;
    icona_indietro.scale.x = 0.7;
    icona_indietro.scale.y = 0.7;
    icona_indietro.inputEnabled = true;
    icona_indietro.events.onInputDown.add(this.imageClick_indietro, this);
  },
  update: function(){
    if (icona_indietro.input.pointerOver())
    {sfondo2_icona.alpha = 1;}
    else
    {sfondo2_icona.alpha = 0;}
  },
  imageClick_indietro: function(pointer) {
        this.game.state.start('Copertina');
  }
}
game.state.add('Crediti', Crediti)

var Autori = {
  preload: function(){
    game.load.crossOrigin = 'anonymous';
    game.load.image('autori', 'assets/grafica/autori_crediti/autori.jpg');
    game.load.image('icona', 'assets/grafica/autori_crediti/pulsante.png');
    game.load.image('sfondo_fisso', 'assets/grafica/autori_crediti/sfondo_verde.png');
    game.load.image('sfondo_giallo', 'assets/grafica/autori_crediti/sfondo_giallo.png');
  },
  create: function(){
    immagine_autori = game.add.sprite(0, 0, 'autori');
    immagine_autori.fixedToCamera = true;
    sfondo_icona = game.add.sprite(392, 657, 'sfondo_fisso');
    sfondo_icona.fixedToCamera = true;
    sfondo_icona.scale.x = 0.7;
    sfondo_icona.scale.y = 0.7;
    sfondo2_icona = game.add.sprite(388, 650, 'sfondo_giallo');
    sfondo2_icona.fixedToCamera = true;
    sfondo2_icona.alpha = 0;
    sfondo2_icona.scale.x = 0.7;
    sfondo2_icona.scale.y = 0.7;
    icona_indietro = game.add.sprite(415, 650, 'icona');
    icona_indietro.fixedToCamera = true;
    icona_indietro.scale.x = 0.7;
    icona_indietro.scale.y = 0.7;
    icona_indietro.inputEnabled = true;
    icona_indietro.events.onInputDown.add(this.imageClick_indietro, this);
  },
  update: function(){
    if (icona_indietro.input.pointerOver())
    {sfondo2_icona.alpha = 1;}
    else
    {sfondo2_icona.alpha = 0;}
  },
  imageClick_indietro: function(pointer) {
        this.game.state.start('Copertina');
  }
}
game.state.add('Autori', Autori)

var Intro_Flash1 = {
  preload: function(){
    game.load.crossOrigin = 'anonymous';
    game.load.image('intro', 'assets/grafica/introduzione/Flashback1.png');
    game.load.image('icona_dx', 'assets/grafica/introduzione/pulsante_dx.png');
    game.load.image('sfondo_verde_dx', 'assets/grafica/introduzione/sfondo_verde_dx.png');
    game.load.image('sfondo_giallo_dx', 'assets/grafica/introduzione/sfondo_giallo_dx.png');
    game.load.image('icona_sx', 'assets/grafica/introduzione/pulsante_sx.png');
    game.load.image('sfondo_verde_sx', 'assets/grafica/introduzione/sfondo_verde_sx.png');
    game.load.image('sfondo_giallo_sx', 'assets/grafica/introduzione/sfondo_giallo_sx.png');
  },
  create: function(){
    immagine_introduzione = game.add.sprite(0, 0, 'intro');
    immagine_introduzione.fixedToCamera = true;
    //icona destra (avanti)
    sfondo_icona_dx = game.add.sprite(853, 688, 'sfondo_verde_dx');
    sfondo_icona_dx.fixedToCamera = true;
    sfondo2_icona_dx = game.add.sprite(850, 690, 'sfondo_giallo_dx');
    sfondo2_icona_dx.fixedToCamera = true;
    icona_dx = game.add.sprite(857, 677, 'icona_dx');
    icona_dx.fixedToCamera = true;
    sfondo_icona_dx.alpha = 0;
    sfondo2_icona_dx.alpha = 0;
    icona_dx.alpha = 0;
    icona_dx.inputEnabled = true;
    icona_dx.events.onInputDown.add(this.imageClick_avanti, this);
    //icona sinistra (indietro)
    sfondo_icona_sx = game.add.sprite(17, 688, 'sfondo_verde_sx');
    sfondo_icona_sx.fixedToCamera = true;
    sfondo2_icona_sx = game.add.sprite(20, 690, 'sfondo_giallo_sx');
    sfondo2_icona_sx.fixedToCamera = true;
    icona_sx = game.add.sprite(30, 677, 'icona_sx');
    icona_sx.fixedToCamera = true;
    sfondo_icona_sx.alpha = 0;
    sfondo2_icona_sx.alpha = 0;
    icona_sx.alpha = 0;
    icona_sx.inputEnabled = true;
    icona_sx.events.onInputDown.add(this.imageClick_indietro, this);
  },
  update: function(){
 //tasto destro (avanti)
    if (game.input.mousePointer.x > 900)
    {sfondo_icona_dx.alpha = 1;
    icona_dx.alpha = 1;}
    else
    {sfondo_icona_dx.alpha = 0;
    icona_dx.alpha = 0;}
    if (icona_dx.input.pointerOver())
    {icona_dx.alpha = 1;
    sfondo2_icona_dx.alpha = 1;}
    else
    {sfondo2_icona_dx.alpha = 0;}
 //tasto sinistro (indietro)
    if (game.input.mousePointer.x < 100)
    {sfondo_icona_sx.alpha = 1;
    icona_sx.alpha = 1;}
    else
    {sfondo_icona_sx.alpha = 0;
    icona_sx.alpha = 0;}
    if (icona_sx.input.pointerOver())
    {icona_sx.alpha = 1;
    sfondo2_icona_sx.alpha = 1;}
    else
    {sfondo2_icona_sx.alpha = 0;}
  },
  imageClick_indietro: function(pointer) {
        this.game.state.start('Copertina');
  },
  imageClick_avanti: function(pointer) {
        this.game.state.start('Intro_Flash2');
  }
}
game.state.add('Intro_Flash1', Intro_Flash1)

var Intro_Flash2 = {
  preload: function(){
    game.load.crossOrigin = 'anonymous';
    game.load.image('intro', 'assets/grafica/introduzione/Flashback2.png');
    game.load.image('icona_dx', 'assets/grafica/introduzione/pulsante_dx.png');
    game.load.image('sfondo_verde_dx', 'assets/grafica/introduzione/sfondo_verde_dx.png');
    game.load.image('sfondo_giallo_dx', 'assets/grafica/introduzione/sfondo_giallo_dx.png');
    game.load.image('icona_sx', 'assets/grafica/introduzione/pulsante_sx.png');
    game.load.image('sfondo_verde_sx', 'assets/grafica/introduzione/sfondo_verde_sx.png');
    game.load.image('sfondo_giallo_sx', 'assets/grafica/introduzione/sfondo_giallo_sx.png');
  },
  create: function(){
    immagine_introduzione = game.add.sprite(0, 0, 'intro');
    immagine_introduzione.fixedToCamera = true;
    //icona destra (avanti)
    sfondo_icona_dx = game.add.sprite(853, 688, 'sfondo_verde_dx');
    sfondo_icona_dx.fixedToCamera = true;
    sfondo2_icona_dx = game.add.sprite(850, 690, 'sfondo_giallo_dx');
    sfondo2_icona_dx.fixedToCamera = true;
    icona_dx = game.add.sprite(857, 677, 'icona_dx');
    icona_dx.fixedToCamera = true;
    sfondo_icona_dx.alpha = 0;
    sfondo2_icona_dx.alpha = 0;
    icona_dx.alpha = 0;
    icona_dx.inputEnabled = true;
    icona_dx.events.onInputDown.add(this.imageClick_avanti, this);
    //icona sinistra (indietro)
    sfondo_icona_sx = game.add.sprite(17, 688, 'sfondo_verde_sx');
    sfondo_icona_sx.fixedToCamera = true;
    sfondo2_icona_sx = game.add.sprite(20, 690, 'sfondo_giallo_sx');
    sfondo2_icona_sx.fixedToCamera = true;
    icona_sx = game.add.sprite(30, 677, 'icona_sx');
    icona_sx.fixedToCamera = true;
    sfondo_icona_sx.alpha = 0;
    sfondo2_icona_sx.alpha = 0;
    icona_sx.alpha = 0;
    icona_sx.inputEnabled = true;
    icona_sx.events.onInputDown.add(this.imageClick_indietro, this);
  },
  update: function(){
 //tasto destro (avanti)
    if (game.input.mousePointer.x > 900)
    {sfondo_icona_dx.alpha = 1;
    icona_dx.alpha = 1;}
    else
    {sfondo_icona_dx.alpha = 0;
    icona_dx.alpha = 0;}
    if (icona_dx.input.pointerOver())
    {icona_dx.alpha = 1;
    sfondo2_icona_dx.alpha = 1;}
    else
    {sfondo2_icona_dx.alpha = 0;}
 //tasto sinistro (indietro)
    if (game.input.mousePointer.x < 100)
    {sfondo_icona_sx.alpha = 1;
    icona_sx.alpha = 1;}
    else
    {sfondo_icona_sx.alpha = 0;
    icona_sx.alpha = 0;}
    if (icona_sx.input.pointerOver())
    {icona_sx.alpha = 1;
    sfondo2_icona_sx.alpha = 1;}
    else
    {sfondo2_icona_sx.alpha = 0;}
  },
  imageClick_indietro: function(pointer) {
        this.game.state.start('Intro_Flash1');
  },
  imageClick_avanti: function(pointer) {
        this.game.state.start('Intro_Flash3');
  }
}
game.state.add('Intro_Flash2', Intro_Flash2)

var Intro_Flash3 = {
  preload: function(){
    game.load.crossOrigin = 'anonymous';
    game.load.image('intro', 'assets/grafica/introduzione/Flashback3.png');
    game.load.image('icona_dx', 'assets/grafica/introduzione/pulsante_dx.png');
    game.load.image('sfondo_verde_dx', 'assets/grafica/introduzione/sfondo_verde_dx.png');
    game.load.image('sfondo_giallo_dx', 'assets/grafica/introduzione/sfondo_giallo_dx.png');
    game.load.image('icona_sx', 'assets/grafica/introduzione/pulsante_sx.png');
    game.load.image('sfondo_verde_sx', 'assets/grafica/introduzione/sfondo_verde_sx.png');
    game.load.image('sfondo_giallo_sx', 'assets/grafica/introduzione/sfondo_giallo_sx.png');
  },
  create: function(){
    immagine_introduzione = game.add.sprite(0, 0, 'intro');
    immagine_introduzione.fixedToCamera = true;
    //icona destra (avanti)
    sfondo_icona_dx = game.add.sprite(853, 688, 'sfondo_verde_dx');
    sfondo_icona_dx.fixedToCamera = true;
    sfondo2_icona_dx = game.add.sprite(850, 690, 'sfondo_giallo_dx');
    sfondo2_icona_dx.fixedToCamera = true;
    icona_dx = game.add.sprite(857, 677, 'icona_dx');
    icona_dx.fixedToCamera = true;
    sfondo_icona_dx.alpha = 0;
    sfondo2_icona_dx.alpha = 0;
    icona_dx.alpha = 0;
    icona_dx.inputEnabled = true;
    icona_dx.events.onInputDown.add(this.imageClick_avanti, this);
    //icona sinistra (indietro)
    sfondo_icona_sx = game.add.sprite(17, 688, 'sfondo_verde_sx');
    sfondo_icona_sx.fixedToCamera = true;
    sfondo2_icona_sx = game.add.sprite(20, 690, 'sfondo_giallo_sx');
    sfondo2_icona_sx.fixedToCamera = true;
    icona_sx = game.add.sprite(30, 677, 'icona_sx');
    icona_sx.fixedToCamera = true;
    sfondo_icona_sx.alpha = 0;
    sfondo2_icona_sx.alpha = 0;
    icona_sx.alpha = 0;
    icona_sx.inputEnabled = true;
    icona_sx.events.onInputDown.add(this.imageClick_indietro, this);
  },
  update: function(){
 //tasto destro (avanti)
    if (game.input.mousePointer.x > 900)
    {sfondo_icona_dx.alpha = 1;
    icona_dx.alpha = 1;}
    else
    {sfondo_icona_dx.alpha = 0;
    icona_dx.alpha = 0;}
    if (icona_dx.input.pointerOver())
    {icona_dx.alpha = 1;
    sfondo2_icona_dx.alpha = 1;}
    else
    {sfondo2_icona_dx.alpha = 0;}
 //tasto sinistro (indietro)
    if (game.input.mousePointer.x < 100)
    {sfondo_icona_sx.alpha = 1;
    icona_sx.alpha = 1;}
    else
    {sfondo_icona_sx.alpha = 0;
    icona_sx.alpha = 0;}
    if (icona_sx.input.pointerOver())
    {icona_sx.alpha = 1;
    sfondo2_icona_sx.alpha = 1;}
    else
    {sfondo2_icona_sx.alpha = 0;}
  },
  imageClick_indietro: function(pointer) {
        this.game.state.start('Intro_Flash2');
  },
  imageClick_avanti: function(pointer) {
        this.game.state.start('Intro_Anteprima');
  }
}
game.state.add('Intro_Flash3', Intro_Flash3)

var Intro_Anteprima = {
  preload: function(){
    game.load.crossOrigin = 'anonymous';
    game.load.image('intro', 'assets/grafica/introduzione/Anteprima_Scatenante.png');
    game.load.image('icona_dx', 'assets/grafica/introduzione/pulsante_dx.png');
    game.load.image('sfondo_verde_dx', 'assets/grafica/introduzione/sfondo_verde_dx.png');
    game.load.image('sfondo_giallo_dx', 'assets/grafica/introduzione/sfondo_giallo_dx.png');
    game.load.image('icona_sx', 'assets/grafica/introduzione/pulsante_sx.png');
    game.load.image('sfondo_verde_sx', 'assets/grafica/introduzione/sfondo_verde_sx.png');
    game.load.image('sfondo_giallo_sx', 'assets/grafica/introduzione/sfondo_giallo_sx.png');
  },
  create: function(){
    immagine_introduzione = game.add.sprite(0, 0, 'intro');
    immagine_introduzione.fixedToCamera = true;
    //icona destra (avanti)
    sfondo_icona_dx = game.add.sprite(853, 688, 'sfondo_verde_dx');
    sfondo_icona_dx.fixedToCamera = true;
    sfondo2_icona_dx = game.add.sprite(850, 690, 'sfondo_giallo_dx');
    sfondo2_icona_dx.fixedToCamera = true;
    icona_dx = game.add.sprite(857, 677, 'icona_dx');
    icona_dx.fixedToCamera = true;
    sfondo_icona_dx.alpha = 0;
    sfondo2_icona_dx.alpha = 0;
    icona_dx.alpha = 0;
    icona_dx.inputEnabled = true;
    icona_dx.events.onInputDown.add(this.imageClick_avanti, this);
    //icona sinistra (indietro)
    sfondo_icona_sx = game.add.sprite(17, 688, 'sfondo_verde_sx');
    sfondo_icona_sx.fixedToCamera = true;
    sfondo2_icona_sx = game.add.sprite(20, 690, 'sfondo_giallo_sx');
    sfondo2_icona_sx.fixedToCamera = true;
    icona_sx = game.add.sprite(30, 677, 'icona_sx');
    icona_sx.fixedToCamera = true;
    sfondo_icona_sx.alpha = 0;
    sfondo2_icona_sx.alpha = 0;
    icona_sx.alpha = 0;
    icona_sx.inputEnabled = true;
    icona_sx.events.onInputDown.add(this.imageClick_indietro, this);
  },
  update: function(){
 //tasto destro (avanti)
    if (game.input.mousePointer.x > 900)
    {sfondo_icona_dx.alpha = 1;
    icona_dx.alpha = 1;}
    else
    {sfondo_icona_dx.alpha = 0;
    icona_dx.alpha = 0;}
    if (icona_dx.input.pointerOver())
    {icona_dx.alpha = 1;
    sfondo2_icona_dx.alpha = 1;}
    else
    {sfondo2_icona_dx.alpha = 0;}
 //tasto sinistro (indietro)
    if (game.input.mousePointer.x < 100)
    {sfondo_icona_sx.alpha = 1;
    icona_sx.alpha = 1;}
    else
    {sfondo_icona_sx.alpha = 0;
    icona_sx.alpha = 0;}
    if (icona_sx.input.pointerOver())
    {icona_sx.alpha = 1;
    sfondo2_icona_sx.alpha = 1;}
    else
    {sfondo2_icona_sx.alpha = 0;}
  },
  imageClick_indietro: function(pointer) {
        this.game.state.start('Intro_Flash3');
  },
  imageClick_avanti: function(pointer) {
        this.game.state.start('Intro_Scatenante');
  }
}
game.state.add('Intro_Anteprima', Intro_Anteprima)

var Intro_Scatenante = {
  preload: function(){
    game.load.crossOrigin = 'anonymous';
    game.load.image('intro', 'assets/grafica/introduzione/Evento_Scatenante.png');
    game.load.image('icona_dx', 'assets/grafica/introduzione/pulsante_dx.png');
    game.load.image('sfondo_verde_dx', 'assets/grafica/introduzione/sfondo_verde_dx.png');
    game.load.image('sfondo_giallo_dx', 'assets/grafica/introduzione/sfondo_giallo_dx.png');
    game.load.image('icona_sx', 'assets/grafica/introduzione/pulsante_sx.png');
    game.load.image('sfondo_verde_sx', 'assets/grafica/introduzione/sfondo_verde_sx.png');
    game.load.image('sfondo_giallo_sx', 'assets/grafica/introduzione/sfondo_giallo_sx.png');
  },
  create: function(){
    immagine_introduzione = game.add.sprite(0, 0, 'intro');
    immagine_introduzione.fixedToCamera = true;
    //icona destra (avanti)
    sfondo_icona_dx = game.add.sprite(853, 688, 'sfondo_verde_dx');
    sfondo_icona_dx.fixedToCamera = true;
    sfondo2_icona_dx = game.add.sprite(850, 690, 'sfondo_giallo_dx');
    sfondo2_icona_dx.fixedToCamera = true;
    icona_dx = game.add.sprite(857, 677, 'icona_dx');
    icona_dx.fixedToCamera = true;
    sfondo_icona_dx.alpha = 0;
    sfondo2_icona_dx.alpha = 0;
    icona_dx.alpha = 0;
    icona_dx.inputEnabled = true;
    icona_dx.events.onInputDown.add(this.imageClick_avanti, this);
    //icona sinistra (indietro)
    sfondo_icona_sx = game.add.sprite(17, 688, 'sfondo_verde_sx');
    sfondo_icona_sx.fixedToCamera = true;
    sfondo2_icona_sx = game.add.sprite(20, 690, 'sfondo_giallo_sx');
    sfondo2_icona_sx.fixedToCamera = true;
    icona_sx = game.add.sprite(30, 677, 'icona_sx');
    icona_sx.fixedToCamera = true;
    sfondo_icona_sx.alpha = 0;
    sfondo2_icona_sx.alpha = 0;
    icona_sx.alpha = 0;
    icona_sx.inputEnabled = true;
    icona_sx.events.onInputDown.add(this.imageClick_indietro, this);
  },
  update: function(){
 //tasto destro (avanti)
    if (game.input.mousePointer.x > 900)
    {sfondo_icona_dx.alpha = 1;
    icona_dx.alpha = 1;}
    else
    {sfondo_icona_dx.alpha = 0;
    icona_dx.alpha = 0;}
    if (icona_dx.input.pointerOver())
    {icona_dx.alpha = 1;
    sfondo2_icona_dx.alpha = 1;}
    else
    {sfondo2_icona_dx.alpha = 0;}
 //tasto sinistro (indietro)
    if (game.input.mousePointer.x < 100)
    {sfondo_icona_sx.alpha = 1;
    icona_sx.alpha = 1;}
    else
    {sfondo_icona_sx.alpha = 0;
    icona_sx.alpha = 0;}
    if (icona_sx.input.pointerOver())
    {icona_sx.alpha = 1;
    sfondo2_icona_sx.alpha = 1;}
    else
    {sfondo2_icona_sx.alpha = 0;}
  },
  imageClick_indietro: function(pointer) {
        this.game.state.start('Intro_Anteprima');
  },
  imageClick_avanti: function(pointer) {
        this.game.state.start('Livello1_istruzioni');
  }
}
game.state.add('Intro_Scatenante', Intro_Scatenante)

var Livello1_istruzioni = {
  preload: function(){
    game.load.crossOrigin = 'anonymous';
    game.load.image('immagine_istruzioni', 'assets/grafica/istruzioni/istruzioni_livello1.jpg');
    game.load.image('icona', 'assets/grafica/istruzioni/pulsante_partenza.png');
    game.load.image('sfondo_fisso', 'assets/grafica/istruzioni/sfondo_fisso.png');
    game.load.image('sfondo_giallo', 'assets/grafica/istruzioni/sfondo_giallo.png');
  },
  create: function(){
    immagine_istruzioni = game.add.sprite(0, 0, 'immagine_istruzioni');
    immagine_istruzioni.fixedToCamera = true;
    sfondo_icona = game.add.sprite(17, 53, 'sfondo_fisso');
    sfondo_icona.fixedToCamera = true;
    sfondo_icona.scale.x = 0.7;
    sfondo_icona.scale.y = 0.7;
    sfondo2_icona = game.add.sprite(15, 46, 'sfondo_giallo');
    sfondo2_icona.fixedToCamera = true;
    sfondo2_icona.alpha = 0;
    sfondo2_icona.scale.x = 0.7;
    sfondo2_icona.scale.y = 0.7;
    icona_gioca = game.add.sprite(31, 45, 'icona');
    icona_gioca.fixedToCamera = true;
    icona_gioca.scale.x = 0.7;
    icona_gioca.scale.y = 0.7;
    icona_gioca.inputEnabled = true;
    icona_gioca.events.onInputDown.add(this.imageClick_play, this);
  },
  update: function(){
    if (icona_gioca.input.pointerOver())
    {sfondo2_icona.alpha = 1;}
    else
    {sfondo2_icona.alpha = 0;}
  },
  imageClick_play: function(pointer) {
        this.game.state.start('Livello1');
  }
}
game.state.add('Livello1_istruzioni', Livello1_istruzioni)

var Livello1 = {
  preload: function() {
   //personaggio
      game.load.spritesheet('sirenetta', 'assets/livello1/sprite_sirenetta.png', 459, 523);
  //barile
      game.load.image('barile_grigio', 'assets/livello1/barile_grigio.png');
      game.load.image('barile_verde','assets/livello1/verde1.png');
      game.load.image('barile_giallo', 'assets/livello1/verde2.png');
      game.load.image('barile_arancio', 'assets/livello1/verde3.png');
      game.load.image('barile_rosso', 'assets/livello1/verde4.png');
      game.load.image('teschio','assets/livello1/teschio.png');
  //alghe
      game.load.image('alga_piccola', 'assets/livello1/alga_piccola.png');
      game.load.image('alga_media', 'assets/livello1/alga_media.png');
      game.load.image('alga_grande', 'assets/livello1/alga_grande.png');
      game.load.image('alga_grande2', 'assets/livello1/alga_grande2.png');
      game.load.image('alga_piccola_rov', 'assets/livello1/alga_piccola_rovescio.png');
      game.load.image('alga_media_rov', 'assets/livello1/alga_media_rovescio.png');
      game.load.image('alga_grande_rov', 'assets/livello1/alga_grande_rovescio.png');
      game.load.image('alga_grande2_rov', 'assets/livello1/alga_grande2_rovescio.png');
  //sfondo
      game.load.image('sfondo', 'assets/livello1/sfondo.png');
      game.load.image('rovine', 'assets/livello1/coralli_fondo.png');
      game.load.image('coralli1', 'assets/livello1/coralli_mezzo.png');
      game.load.image('coralli2', 'assets/livello1/coralli_primo.png');
      game.load.image('sabbia', 'assets/livello1/sabbia.png');
      game.load.image('sabbia_sopra', 'assets/livello1/spiaggia.png');
      game.load.image('sfondo_grotta', 'assets/livello1/sfondo_grotta.png');
      game.load.image('grotta', 'assets/livello1/grotta.png');
      game.load.image('base_grotta', 'assets/livello1/base_grotta.png');
      game.load.image('alto_grotta', 'assets/livello1/alto_grotta.png');
      game.load.image('discesa_grotta', 'assets/livello1/discesa_grotta.png');
  //barra sviluppo
      game.load.image('barra', 'assets/livello1/barra.png');
      game.load.image('icona', 'assets/livello1/icona_barra.png');
  //pozione
      game.load.image('pozione', 'assets/livello1/pozione.png');
  //spazzatura/bottiglie
      game.load.image('bottiglia1', 'assets/livello1/bottiglia1.png');
      game.load.image('bottiglia1_blu', 'assets/livello1/bottiglia1_blu.png');
      game.load.image('bottiglia2', 'assets/livello1/bottiglia2.png');
      game.load.image('bottiglia3', 'assets/livello1/bottiglia3.png');
      game.load.image('bottiglia3_blu', 'assets/livello1/bottiglia3_blu.png');
      game.load.image('sacchetto', 'assets/livello1/sacchetto.png');
      game.load.image('barile_sfondo', 'assets/livello1/barile_blu.png');

  },

  create: function() {
    //delimitare area di gioco per inseirire barra sotto
       game.world.setBounds(0,0, 5120, 740);
    //sfondo mare
        sfondo = game.add.tileSprite(-5, -10, 5120, 768, 'sfondo');
        sfondo.fixedToCamera = true;
    //rovine
        parallax1 = game.add.tileSprite(0, -10, 6144, 768, 'rovine');
        parallax1.fixedToCamera = true;
    //coralli lontani
        parallax2 = game.add.tileSprite(0, -10, 6144, 768, 'coralli1');
        parallax2.fixedToCamera = true;
    //coralli vicini
        parallax3 = game.add.tileSprite(0, -30, 6144, 768, 'coralli2');
        parallax2.fixedToCamera = true;

    //spazzatura
    spazzatura = game.add.physicsGroup();
    spazzatura1 = spazzatura.create(300, 100, 'bottiglia3_blu');
    var tween1 = game.add.tween(spazzatura1).to({ x:300, y:150 }, 2500, "Sine.easeInOut", true, 0, -1);
    tween1.yoyo(true,0);
    spazzatura4 = spazzatura.create(600, 450, 'bottiglia1_blu');
    var tween4 = game.add.tween(spazzatura4).to({ x:600, y:400 }, 2500, "Sine.easeInOut", true, 0, -1);
    tween4.yoyo(true,0);
    spazzatura2 = spazzatura.create(1200, 200, 'bottiglia3_blu');
    var tween2 = game.add.tween(spazzatura2).to({ x:1200, y:250 }, 2500, "Sine.easeInOut", true, 0, -1);
    tween2.yoyo(true,0);
    spazzatura5 = spazzatura.create(1370, 50, 'bottiglia1_blu');
    var tween5 = game.add.tween(spazzatura5).to({ x:1370, y:150 }, 2500, "Sine.easeInOut", true, 0, -1);
    tween5.yoyo(true,0);
    spazzatura6 = spazzatura.create(2150, 400, 'bottiglia3_blu');
    var tween6 = game.add.tween(spazzatura6).to({ x:2150, y:450 }, 2500, "Sine.easeInOut", true, 0, -1);
    tween6.yoyo(true,0);
    spazzatura3 = spazzatura.create(2450, 70, 'sacchetto');
    var tween3 = game.add.tween(spazzatura3).to({ x:2450, y:150 }, 2500, "Sine.easeInOut", true, 0, -1);
    tween3.yoyo(true,0);
    spazzatura7 = spazzatura.create(3150, 50, 'sacchetto');
    var tween7 = game.add.tween(spazzatura7).to({ x:3150, y:100 }, 2500, "Sine.easeInOut", true, 0, -1);
    tween7.yoyo(true,0);

    //barili_sfondo
        barili = game.add.physicsGroup();
        barili.create(400, 530, 'barile_sfondo');
        barili.create(1100, 570, 'barile_sfondo');
        barili.create(2350, 520, 'barile_sfondo');

    //sabbia
        sabbia = game.add.tileSprite(0, 0, 5120, 768, 'sabbia');

    //sfondo grotta
        sfondo_grotta = game.add.tileSprite(3763, 0, 5120, 768, 'sfondo_grotta');
    //base alta e bassa
        base_grotta = game.add.sprite(3763, 650, 'base_grotta');
        game.physics.arcade.enable(base_grotta);
        base_grotta.body.immovable = true;
        alto_grotta = game.add.sprite(3770, 0, 'alto_grotta');
        game.physics.arcade.enable(alto_grotta);
        alto_grotta.body.immovable = true;
        grotta = game.add.tileSprite(3763, 0, 5120, 768, 'grotta');
    //discesa grotta
        discesa_grotta = game.add.sprite(3700, 0, 'discesa_grotta');
        game.physics.arcade.enable(discesa_grotta);
        discesa_grotta.body.immovable = true;

    //alghe grandi2
        algheg2 = game.add.physicsGroup();
        algheg2.setAll("body.immovable",true);
        algheg2.create(750,300,'alga_grande2');
        algheg2.create(1550,280,'alga_grande2');

        alga10 = algheg2.create(1800,0,'alga_grande2_rov');

        algheg2.create(2300,300,'alga_grande2');

        alga11 = algheg2.create(3000,-20,'alga_grande2_rov');
        alga12 = algheg2.create(3250,300,'alga_grande2');
        alga13 = algheg2.create(3500,-20,'alga_grande2_rov');
    //grotta
        alga14 = algheg2.create(4300,-200,'alga_grande2_rov');

    //alghe grandi
        algheg = game.add.physicsGroup();
        algheg.setAll("body.immovable",true);
        algheg.create(300,350,'alga_grande');
        algheg.create(670,400,'alga_grande');
        algheg.create(1020,370,'alga_grande');

        algheg.create(1250,-200,'alga_grande_rov');

        algheg.create(1490,370,'alga_grande');

        algheg.create(2050,350,'alga_grande');

        algheg.create(2220,400,'alga_grande');

        algheg.create(2550,-190,'alga_grande_rov');

        algheg.create(2750,500,'alga_grande');

        algheg.create(2950,-180,'alga_grande_rov');

        //grotta
        algheg.create(3950,500,'alga_grande');
        algheg.create(4100,-250,'alga_grande_rov');
        algheg.create(4590,400,'alga_grande');


    //alghe medie
        alghem = game.add.physicsGroup();
        alghem.setAll("body.immovable",true);
        alghem.create(370,500,'alga_media');

        alghem.create(650,550,'alga_media');
        alghem.create(800,500,'alga_media');

        alghem.create(1100,550,'alga_media');

        alghem.create(1470,500,'alga_media');
        alghem.create(1600,500,'alga_media');

        //alghem.create(1950,550,'alga_media');
        alghem.create(2120,550,'alga_media');

        alghem.create(2300,550,'alga_media');

        alghem.create(2620,-10,'alga_media_rov');

        alghem.create(2820,470,'alga_media');

        alghem.create(3300,550,'alga_media');
        alghem.create(3220,500,'alga_media');
        alghem.create(3500,-10,'alga_media_rov');

        alghem.create(3730,550,'alga_media');
     //grotta
        alghem.create(3900,500,'alga_media');
        alghem.create(4200,500,'alga_media');
        //alghem.create(4700,-10,'alga_media_rov');

    //alghe piccole
        alghep = game.add.physicsGroup();
        alghep.setAll("body.immovable",true);
        alghep.create(260,600,'alga_piccola');
        alghep.create(420,600,'alga_piccola');

        alghep.create(850,580,'alga_piccola');

        alghep.create(1240,-10,'alga_piccola_rov');

        alghep.create(1430,580,'alga_piccola');

        alghep.create(2050,580,'alga_piccola');

        alghep.create(2350,580,'alga_piccola');

        alghep.create(2650,-10,'alga_piccola_rov')

        alghep.create(2800,580,'alga_piccola');

        alghep.create(3090,-10,'alga_piccola_rov');

        alghep.create(3700,580,'alga_piccola');
    //grotta
        alghep.create(4100,-10,'alga_piccola_rov');
        alghep.create(4580,580,'alga_piccola');

    //spazzatura sabbia
        spazzatura2 = game.add.physicsGroup();
        spazzatura2.create(460, 670, 'bottiglia3');
        spazzatura4 = spazzatura2.create(1125, 720, 'bottiglia1');
        spazzatura4.angle = 290;
        spazzatura2.create(1200, 660, 'bottiglia2');
        spazzatura5 = spazzatura2.create(1950, 670, 'bottiglia1');
        spazzatura5.angle = 20;
        spazzatura2.create(2730, 690, 'bottiglia3');
        spazzatura6 = spazzatura2.create(3350, 700, 'bottiglia2');
        spazzatura6.angle = -40;
        spazzatura2.create(3390, 690, 'bottiglia3');

    //sabbia sopra
        sabbia = game.add.tileSprite(0,10, 3000, 768, 'sabbia_sopra');


    //sirenetta
        player = game.add.sprite(32, 300, 'sirenetta');
        player.height = 150;
        player.width = 100;
        game.physics.arcade.enable(player);
        player.body.gravity.y = -100;
        player.body.allowGravity = false;
        player.body.collideWorldBounds = true;
        player.animations.add('left', [0, 1, 2], 5, true);
        player.animations.add('right', [5, 6, 7], 5, true);

    //pozione
        pozione = game.add.sprite(4900, 550, 'pozione');
        game.physics.arcade.enable(pozione);
    //barile
    //grigio_base
        barile_grigio = game.add.sprite(890, 565, 'barile_grigio');
        //game.physics.arcade.enable(barile_grigio);
        barile_grigio.fixedToCamera = true;
    //verde1
        barile_verde = game.add.sprite(890, 565, 'barile_verde');
        //game.physics.arcade.enable(barile_verde);
        barile_verde.fixedToCamera = true;
        //timer fade
        game.time.events.add(Phaser.Timer.SECOND * 0, fadeGreen, barile_verde);
        function fadeGreen(){
          game.add.tween(barile_verde).to({ alpha: 0 }, 15000, Phaser.Easing.Linear.None, true);
        };
    //giallo2
        barile_giallo = game.add.sprite(890, 565, 'barile_giallo');
        //game.physics.arcade.enable(barile_giallo);
        barile_giallo.fixedToCamera = true;
        //timer fade
        game.time.events.add(Phaser.Timer.SECOND * 15, fadeYellow, barile_giallo);
        function fadeYellow(){
          game.add.tween(barile_giallo).to({ alpha: 0 }, 15000, Phaser.Easing.Linear.None, true);
        };
    //arancio3
        barile_arancio = game.add.sprite(890, 565, 'barile_arancio');
        //game.physics.arcade.enable(barile_arancio);
        barile_arancio.fixedToCamera = true;
        //Timer fade
        game.time.events.add(Phaser.Timer.SECOND * 30, fadeOrange, barile_arancio);
        function fadeOrange(){
          game.add.tween(barile_arancio).to({ alpha: 0 }, 15000, Phaser.Easing.Linear.None, true);
        };
    //rosso
        barile_rosso = game.add.sprite(890, 565, 'barile_rosso');
        //game.physics.arcade.enable(barile_rosso);
        barile_rosso.fixedToCamera = true;
        //Timer fade
        game.time.events.add(Phaser.Timer.SECOND * 45, fadeRed, barile_rosso);
        function fadeRed(){
          game.add.tween(barile_rosso).to({ alpha: 0 }, 15000, Phaser.Easing.Linear.None, true);
        };

    //teschio
        teschio = game.add.sprite(890, 565, 'teschio');
        teschio.fixedToCamera = true;

    //barra avanzamento
        barra = game.add.sprite(70, 740, 'barra');
        barra.fixedToCamera = true;
        icona = game.add.sprite(50, 730, 'icona');
        game.physics.arcade.enable(icona);
        icona.fixedToCamera = true;
        icona_pozione = game.add.sprite(785, 715,'pozione');
        icona_pozione.scale.x = 0.6;
        icona_pozione.scale.y = 0.6;
        icona_pozione.fixedToCamera = true;

    //Our controls.
        cursors = game.input.keyboard.createCursorKeys();

    //camera
        //game.camera.follow(player);
        game.camera.follow(player) //, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);


    //timer gioco
        game.time.events.add(60000, EndGame);
        function EndGame() {
          if(player_vince == false) {game.state.start('Livello1')};
        }
  },

  update: function() {
    //barra sviluppo
         icona.cameraOffset.x = (player.body.x/5120 * 740.56) + 70;

    //collisione alghe
        game.physics.arcade.overlap (player, algheg2, function() {
          speed = 30;
          game.time.events.add(1500, function() {speed = 250;})
        });
        game.physics.arcade.overlap (player, algheg, function() {
          speed = 30;
          game.time.events.add(1500, function() {speed = 250;})
        });
        game.physics.arcade.overlap (player, alghem);
        game.physics.arcade.overlap (player, alghep);
    //collisione grotta
        game.physics.arcade.collide (player, grotta);
        game.physics.arcade.collide (player, alto_grotta);
        game.physics.arcade.collide (player, base_grotta);
        game.physics.arcade.collide (player, discesa_grotta);
    //collisione pozione
        game.physics.arcade.collide (player, pozione, function() {
        pozione.kill();
        player_vince = true;
        //livello2
        game.time.events.add(1000, function() {game.state.start('Intermezzo');})
        });

    //velocità player fermo
        player.body.velocity.x = 0;

    //movimento alghe
       if(alga10.body.y >= -10)
       {alga10.body.velocity.y = -80;}
       else if (alga10.body.y <= -250)
       {alga10.body.velocity.y = 80;};

       if(alga11.body.y >= -20)
       {alga11.body.velocity.y = -70;}
       else if (alga11.body.y <= -200)
       {alga11.body.velocity.y = 70;};

       if(alga12.body.y >= 500)
       {alga12.body.velocity.y = -50;}
       else if (alga12.body.y <= 300)
       {alga12.body.velocity.y = 50;};

       if(alga13.body.y >= -20)
       {alga13.body.velocity.y = -100;}
       else if (alga13.body.y <= -200)
       {alga13.body.velocity.y = 100;};

       if(alga14.body.y >= -100)
       {alga14.body.velocity.y = -100;}
       else if (alga14.body.y <= -250)
       {alga14.body.velocity.y = 100;};

    //comandi
        if (cursors.left.isDown){

          if (player.body.x > 500) {
          parallax1.tilePosition.x += 0.4;
          parallax2.tilePosition.x += 0.5;
          parallax3.tilePosition.x += 0.6;
          }
        //  Move to the left
        player.body.velocity.x = -speed;
        player.animations.play('left');
        }
        else if (cursors.right.isDown)
        {
          if (player.body.x > 500) {
          parallax1.tilePosition.x -= 0.4;
          parallax2.tilePosition.x -= 0.5;
          parallax3.tilePosition.x -= 0.6;
          }
        //  Move to the right
        player.body.velocity.x = speed;
        player.animations.play('right');
        }
        else
        {
            //  Stand still
            player.animations.stop();
            //sprite
            player.frame = 4;
        }

        //  Allow the player to jump if they are touching the ground.
        if (cursors.down.isDown)
        {
            player.body.velocity.y = speed;
       }
      else
       {
        player.body.velocity.y=70;
       }

        if (cursors.up.isDown)
        {
            player.body.velocity.y = -speed;
        }

    },
}
game.state.add('Livello1', Livello1);

var Intermezzo = {
  preload: function(){
    game.load.crossOrigin = 'anonymous';
    game.load.image('intro', 'assets/grafica/introduzione/Intermezzo.png');
    game.load.image('icona_dx', 'assets/grafica/introduzione/pulsante_dx.png');
    game.load.image('sfondo_verde_dx', 'assets/grafica/introduzione/sfondo_verde_dx.png');
    game.load.image('sfondo_giallo_dx', 'assets/grafica/introduzione/sfondo_giallo_dx.png');
  },
  create: function(){
    immagine_introduzione = game.add.sprite(0, 0, 'intro');
    //icona destra (avanti)
    sfondo_icona_dx = game.add.sprite(850, 690, 'sfondo_verde_dx');
    sfondo2_icona_dx = game.add.sprite(850, 690, 'sfondo_giallo_dx');
    icona_dx = game.add.sprite(857, 677, 'icona_dx');
    sfondo_icona_dx.alpha = 0;
    sfondo2_icona_dx.alpha = 0;
    icona_dx.alpha = 0;
    icona_dx.inputEnabled = true;
    icona_dx.events.onInputDown.add(this.imageClick_gioca, this);
  },
  update: function(){
 //tasto destro (avanti)
    if (game.input.mousePointer.x > 900)
    {sfondo_icona_dx.alpha = 1;
    icona_dx.alpha = 1;}
    else
    {sfondo_icona_dx.alpha = 0;
    icona_dx.alpha = 0;}
    if (icona_dx.input.pointerOver())
    {icona_dx.alpha = 1;
    sfondo2_icona_dx.alpha = 1;}
    else
    {sfondo2_icona_dx.alpha = 0;}
  },
  imageClick_gioca: function(pointer) {
        this.game.state.start('Livello2_istruzioni');
  }
}
game.state.add('Intermezzo', Intermezzo)

var Livello2_istruzioni = {
  preload: function(){
    game.load.crossOrigin = 'anonymous';
    game.load.image('immagine_istruzioni', 'assets/grafica/istruzioni/istruzioni_livello2.jpg');
    game.load.image('icona', 'assets/grafica/istruzioni/pulsante_partenza.png');
    game.load.image('sfondo_fisso', 'assets/grafica/istruzioni/sfondo_fisso.png');
    game.load.image('sfondo_giallo', 'assets/grafica/istruzioni/sfondo_giallo.png');
  },
  create: function(){
    immagine_istruzioni = game.add.sprite(0, 0, 'immagine_istruzioni');
    immagine_istruzioni.fixedToCamera = true;
    sfondo_icona = game.add.sprite(5, 77, 'sfondo_fisso');
    sfondo_icona.fixedToCamera = true;
    sfondo_icona.scale.x = 0.7;
    sfondo_icona.scale.y = 0.7;
    sfondo2_icona = game.add.sprite(4, 71, 'sfondo_giallo');
    sfondo2_icona.fixedToCamera = true;
    sfondo2_icona.alpha = 0;
    sfondo2_icona.scale.x = 0.7;
    sfondo2_icona.scale.y = 0.7;
    icona_gioca = game.add.sprite(20, 70, 'icona');
    icona_gioca.fixedToCamera = true;
    icona_gioca.scale.x = 0.7;
    icona_gioca.scale.y = 0.7;
    icona_gioca.inputEnabled = true;
    icona_gioca.events.onInputDown.add(this.imageClick_play, this);
  },
  update: function(){
    if (icona_gioca.input.pointerOver())
    {sfondo2_icona.alpha = 1;}
    else
    {sfondo2_icona.alpha = 0;}
  },
  imageClick_play: function(pointer) {
        this.game.state.start('Livello2');
  }
}
game.state.add('Livello2_istruzioni', Livello2_istruzioni)

var Livello2 = {
  preload: function(){
    //sfondo
    game.load.image('montagnecielo', 'assets/livello2/montagnecielo3.png');
    game.load.image('palmedietro', 'assets/livello2/palmedietro3.png');
    game.load.image('palme', 'assets/livello2/palme3.png');
    game.load.image('base', 'assets/livello2/base2.png');
    game.load.image('cespugli', 'assets/livello2/cespugli3.png');
    //pozzanghere
    game.load.image('pozzanghera1', 'assets/livello2/pozzanghera1.png');
    game.load.image('pozzanghera2', 'assets/livello2/pozzanghera2.png');
    //palme
    game.load.image('testa1', 'assets/livello2/testa1.png');
    game.load.image('testa2', 'assets/livello2/testa2.png');
    game.load.image('testa3', 'assets/livello2/testa3.png');
    game.load.image('testa4', 'assets/livello2/testa4.png');
    game.load.image('testa5', 'assets/livello2/testa5.png');
    game.load.image('testa6', 'assets/livello2/testa6.png');
    game.load.image('testa7', 'assets/livello2/testa7.png');
    game.load.image('testa8', 'assets/livello2/testa8.png');
    game.load.image('gambo1', 'assets/livello2/gambo1.png');
    game.load.image('gambo2', 'assets/livello2/gambo2.png');
    game.load.image('gambo3', 'assets/livello2/gambo3.png');
    game.load.image('gambo4', 'assets/livello2/gambo4.png');
    game.load.image('gambo5', 'assets/livello2/gambo5.png');
    game.load.image('gambo6', 'assets/livello2/gambo6.png');
    //cuori vite sirenetta
    game.load.image('cuore1', 'assets/livello2/cuore1.png');
    game.load.image('cuore2', 'assets/livello2/cuore2.png');
    game.load.image('cuore3', 'assets/livello2/cuore3.png');
    game.load.image('cuore4', 'assets/livello2/cuore4.png');
    game.load.image('cuore5', 'assets/livello2/cuore5.png');
    //cuori vite nemico
    game.load.image('cuore1_nemico', 'assets/livello2/cuore1_nemico.png');
    game.load.image('cuore2_nemico', 'assets/livello2/cuore2_nemico.png');
    game.load.image('cuore3_nemico', 'assets/livello2/cuore3_nemico.png');
    game.load.image('cuore4_nemico', 'assets/livello2/cuore4_nemico.png');
    game.load.image('cuore5_nemico', 'assets/livello2/cuore5_nemico.png');
    //spazzatura
    game.load.image('spazza_set', 'assets/livello2/spazza_set_bruciato.png');
    game.load.image('counter', 'assets/livello2/spazza_counter.png');
    //sprite sirenetta
    game.load.spritesheet('dude', 'assets/livello2/sirenetta.png', 89, 151);
    //nemico
    game.load.image('enemy', 'assets/livello2/nemico.png');
    //proiettili nemico
    game.load.image('proiettile', 'assets/livello2/proiettile.png');
    //rubinetto finale + acqua
    game.load.image('rubinetto', 'assets/livello2/rubinetto.png');
    game.load.spritesheet('acqua_tossica', 'assets/livello2/acqua_tossica.png', 39, 91);
    game.load.spritesheet('acqua_tossica_2', 'assets/livello2/acqua_tossica_2.png', 33, 90);
    },

    create: function(){
      game.world.setBounds(0,0, 10000, 768);

  //sfondo
  //cielo/montagne
      parallax1 = game.add.tileSprite(0, 0, 10000, 768, 'montagnecielo');
      parallax1.fixedToCamera = true;
  //palme sfondo
      parallax2 = game.add.tileSprite(0, 0, 10000, 768, 'palmedietro');
      parallax2.fixedToCamera = true;
  //cespugli
      parallax3 = game.add.tileSprite(0, 0, 10000, 768, 'cespugli');
      parallax3.fixedToCamera = true;
  //palme vicino
      parallax4 = game.add.tileSprite(0, 0, 10000, 768, 'palme');
      parallax4.fixedToCamera = true;

  //palme
  //gambi palme
      gambo = game.add.physicsGroup();
      gambo.setAll("body.immovable",true);

      gambo.create(470, 555, 'gambo1');

      gambo.create(1500, 570, 'gambo1');
      gambo.create(1800, 425, 'gambo3');
      //prova
      gambo.create(1940, 255, 'gambo6');
      gambo.create(2100, 405, 'gambo4');

      gambo.create(2700, 575, 'gambo1');

      gambo.create(4500, 575, 'gambo1');
      gambo.create(4900, 425, 'gambo4');
      gambo.create(5200, 260, 'gambo6');
      gambo.create(5360, 357, 'gambo5');
      gambo.create(5700, 545, 'gambo1');

      gambo.create(7300, 575, 'gambo1');
      gambo.create(7650, 425, 'gambo3');
      gambo.create(7870, 405, 'gambo4');
      gambo.create(8100, 260, 'gambo6');
      gambo.create(8300, 425, 'gambo3');

  //teste palme
      testa = game.add.physicsGroup();

      testa.create(405, 530, 'testa1');

      testa.create(1460, 530, 'testa1');
      testa.create(1760, 385, 'testa3');
      //prova
      testa.create(1900, 250, 'testa1');
      testa.create(2075, 375, 'testa3');

      testa.create(2655, 540, 'testa1');

      testa.create(4450, 535, 'testa3');
      testa.create(4880, 375, 'testa1');
      testa.create(5170, 240, 'testa3');
      testa.create(5330, 280, 'testa1');
      testa.create(5640, 480, 'testa1');

      testa.create(7250, 530, 'testa1');
      testa.create(7610, 368, 'testa3');
      testa.create(7860, 365, 'testa2');
      testa.create(8065, 240, 'testa3');
      testa.create(8265, 368, 'testa3');

      testa.setAll("body.immovable", true);


  //spazzatura
      spazzatura = game.add.physicsGroup();
      spazzatura.create(425, 450, 'spazza_set');
      //spazzatura.create(780, 645, 'spazza_set');
      spazzatura.create(1250, 645, 'spazza_set');
      spazzatura.create(1480, 450, 'spazza_set');
      //spazzatura.create(1780, 310, 'spazza_set');
      spazzatura.create(2095, 300, 'spazza_set');
      //spazzatura.create(2410, 645, 'spazza_set');
      spazzatura.create(2675, 465, 'spazza_set');
      spazzatura.create(3055, 645, 'spazza_set');
      spazzatura.create(3650, 645, 'spazza_set');
      //spazzatura.create(4300, 645, 'spazza_set');
      spazzatura.create(4465, 460, 'spazza_set');
      spazzatura.create(4905, 295, 'spazza_set');
      spazzatura.create(5350, 200, 'spazza_set');
      spazzatura.create(5660, 400, 'spazza_set');
      spazzatura.create(6300, 645, 'spazza_set');
      spazzatura.create(6950, 645, 'spazza_set');
      spazzatura.create(7624, 290, 'spazza_set');
      spazzatura.create(8078, 165, 'spazza_set');
      spazzatura.create(8610, 645, 'spazza_set');

  //base cammina
      base = game.add.sprite(0,725, 'base');
      game.physics.arcade.enable(base);
      base.body.immovable = true;

  //pozzanghere
      pozzanghera = game.add.physicsGroup();
      pozzanghera.setAll("body.immovable",true);
      game.physics.arcade.enable(pozzanghera);
      pozz0=pozzanghera.create(200,725, 'pozzanghera1');
      pozz0.scale.x=1.7;
      pozz1=pozzanghera.create(500,725, 'pozzanghera2');
      pozz1.scale.x=1.7;
      pozz2=pozzanghera.create(890, 725, 'pozzanghera1');
      pozz2.scale.x=2.4;
      pozz3=pozzanghera.create(1370, 725, 'pozzanghera2');
      pozz3.scale.x=3;
      pozz4=pozzanghera.create(1950, 725, 'pozzanghera1');
      pozz4.scale.x=3.2;
      pozz5=pozzanghera.create(2500, 725, 'pozzanghera2');
      pozz5.scale.x=3.5;
      pozz6=pozzanghera.create(3160, 725, 'pozzanghera1');
      pozz6.scale.x=3;
      pozz7=pozzanghera.create(3800, 725, 'pozzanghera2');
      pozz7.scale.x=3;
      pozz8=pozzanghera.create(4400, 725, 'pozzanghera1');
      pozz8.scale.x=4;
      pozz9=pozzanghera.create(5050, 725, 'pozzanghera2');
      pozz9.scale.x=4;
      pozz10=pozzanghera.create(5760, 725, 'pozzanghera1');
      pozz10.scale.x=3.5;
      pozz11=pozzanghera.create(6450, 725, 'pozzanghera2');
      pozz11.scale.x=3;
      pozz12=pozzanghera.create(7050, 725, 'pozzanghera1');
      pozz12.scale.x=3.3;
      pozz13=pozzanghera.create(7600, 725, 'pozzanghera2');
      pozz13.scale.x=3.3;
      pozz14=pozzanghera.create(8150, 725, 'pozzanghera1');
      pozz14.scale.x=3;
      pozz15=pozzanghera.create(8715, 725, 'pozzanghera2');
      pozz15.scale.x=1.5;

    //sotto tubo
      pozz20 = pozzanghera.create(9730, 725, 'pozzanghera2');

  //rubinetto finale
  //liquido tossico
      liquido = game.add.sprite(9793,637, 'acqua_tossica');
      liquido.animations.add('scorrimento', [0,1,2], 7, true);
      liquido.animations.play('scorrimento');
      liquido_fine = game.add.sprite(9795,635, 'acqua_tossica_2');
      liquido_fine.animations.add('fine', [0,1,2,3,4], 7, false);
      liquido_fine.alpha = 0;
  //rubinetto
      rubinetto = game.add.sprite(9790,530, 'rubinetto');
      game.physics.arcade.enable(rubinetto);
      rubinetto.body.immovable = true;

  // player-sirenetta
      player = game.add.sprite(32, 400, 'dude');
      game.physics.arcade.enable(player);
      game.camera.follow(player);
      player.body.bounce.y = 0.1;
      player.body.gravity.y = 430;
      player.body.collideWorldBounds = true;
      player.animations.add('left', [0, 1, 2, 3], 8, true);
      player.animations.add('right', [5, 6, 7, 8], 8, true);

  //arma sirenetta
      weapon = game.add.weapon(20, 'spazza_set');
      weapon.onFire.add(function() {
        score -=1;
      })
      weapon.bullets.setAll("width", 50);
      weapon.bullets.setAll("height", 50);
      weapon.setBulletBodyOffset(20, 20);
      weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
      weapon.bulletAngleOffset = 0;
      weapon.bulletSpeed = 400;
      weapon.fireAngle = 0;
      weapon.fireRate = 1000;
      weapon.fireLimit = score;
      proiettili_sparati = weapon.shots;
      weapon.trackSprite(player,20,100);
      fireButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);

  //nemico
      enemy = game.add.sprite(9560, 580, 'enemy');
      game.physics.arcade.enable(enemy);
      enemy.body.immovable= true;
      enemy.body.collideWorldBounds = true;

  //arma nemico
      weaponNemico = game.add.weapon(14, 'proiettile');
      weaponNemico.bullets.setAll("width", 110);
      weaponNemico.bullets.setAll("height", 80);
      weaponNemico.setBulletBodyOffset(-20, 20);
      weaponNemico.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
      weaponNemico.bulletAngleOffset = 180;
      weaponNemico.bulletSpeed = 400;
      weaponNemico.fireAngle = -180;
      weaponNemico.fireRate = 2500;
      weaponNemico.trackSprite(enemy,-30,100);

  //spazzatura icona
      counter = game.add.sprite(775, 85, 'spazza_set');
      counter.scale.x = 0.7;
      counter.scale.y = 0.7;
      counter.fixedToCamera=true;

  //vite player
      cuore1=game.add.sprite(770, 20, 'cuore1');
      cuore1.scale.x=0.2;
      cuore1.scale.y=0.2;
      cuore1.fixedToCamera=true;
      cuore1_esiste=true;
      cuore2=game.add.sprite(770, 20, 'cuore2');
      cuore2.scale.x=0.2;
      cuore2.scale.y=0.2;
      cuore2.fixedToCamera=true;
      cuore2_esiste=true;
      cuore3=game.add.sprite(770, 20, 'cuore3');
      cuore3.scale.x=0.2;
      cuore3.scale.y=0.2;
      cuore3.fixedToCamera=true;
      cuore3_esiste=true;
      cuore4=game.add.sprite(770, 20, 'cuore4');
      cuore4.scale.x=0.2;
      cuore4.scale.y=0.2;
      cuore4.fixedToCamera=true;
      cuore4_esiste=true;
      cuore5=game.add.sprite(770, 20, 'cuore5');
      cuore5.scale.x=0.2;
      cuore5.scale.y=0.2;
      cuore5.fixedToCamera=true;
      cuore5_esiste=true;

  //vite enemy
      cuore6=game.add.sprite(9600, 500, 'cuore1_nemico');
      cuore6.scale.x=0.2;
      cuore6.scale.y=0.2;
      cuore6_esiste=true;
      cuore7=game.add.sprite(9600, 500, 'cuore2_nemico');
      cuore7.scale.x=0.2;
      cuore7.scale.y=0.2;
      cuore7_esiste=true;
      cuore8=game.add.sprite(9600, 500, 'cuore3_nemico');
      cuore8.scale.x=0.2;
      cuore8.scale.y=0.2;
      cuore8_esiste=true;
      cuore9=game.add.sprite(9600, 500, 'cuore4_nemico');
      cuore9.scale.x=0.2;
      cuore9.scale.y=0.2;
      cuore9_esiste=true;
      cuore10=game.add.sprite(9600, 500, 'cuore5_nemico');
      cuore10.scale.x=0.2;
      cuore10.scale.y=0.2;
      cuore10_esiste=true;

  // conteggio spazzatura
      scoreText = game.add.text(825, 95, 'x ' + score, { fontSize: '32px', fill: '#000' });
      scoreText.fixedToCamera = true;

  // contolli
      cursors = game.input.keyboard.createCursorKeys();

    },

    update: function(){
      //camera
          game.camera.follow(player);

      //interazioni
          //collisione player pozzanghere
          var hitPozzanghera = game.physics.arcade.overlap(player, pozzanghera, perditaVite, ritorno);
          //collisione con base
          var camminabase= game.physics.arcade.collide(base, player);
          //collisione con testa palme
          var saltatesta=game.physics.arcade.collide(testa, player);
          //collisione con rubinetto finale
          game.physics.arcade.collide(player, rubinetto);
          //collisione con emeny
          game.physics.arcade.collide(player, enemy);
          //ferisci nemico
          game.physics.arcade.collide(weapon.bullets, enemy, ferisciNemico);
          //ferisci sirenetta
          game.physics.arcade.collide(weaponNemico.bullets, player, ferisciPlayer);
          //raccolta spazzatura
          game.physics.arcade.overlap(player, spazzatura, collectspazzatura);

      //perdita vite se tocca pozzanghere
          function perditaVite (player, pozzanghere) {
          if(cuore1_esiste==true) {cuore1.kill(); cuore1_esiste=false; }
          else if(cuore2_esiste==true) {cuore2.kill(); cuore2_esiste=false;}
          else if(cuore3_esiste==true) {cuore3.kill(); cuore3_esiste=false;}
          else if(cuore4_esiste==true) {cuore4.kill(); cuore4_esiste=false;}
          else if(cuore5_esiste==true) {cuore5.kill(); cuore5_esiste=false; player.kill(); player_vince = false;
          game.time.events.add(500, function() {score = 0; game.state.start('Sconfitta_L2');})}
          }
      //ritorno a punto iniziale
          function ritorno() {
            player.x = 0;}

      //perdita vite se player viene colpita
          function ferisciPlayer (player, bullet) {
          if(cuore1_esiste==true) {bullet.kill(); cuore1.kill(); cuore1_esiste=false; }
          else if(cuore2_esiste==true) {bullet.kill(); cuore2.kill(); cuore2_esiste=false;}
          else if(cuore3_esiste==true) {bullet.kill(); cuore3.kill(); cuore3_esiste=false;}
          else if(cuore4_esiste==true) {bullet.kill(); cuore4.kill(); cuore4_esiste=false;}
          else if(cuore5_esiste==true) {bullet.kill(); cuore5.kill(); cuore5_esiste=false; player.kill(); player_vince = false;
          game.time.events.add(1000, function() {score = 0; game.state.start('Sconfitta_L2');})}
          }

      //perdita vite del nemico quando colpito
          function ferisciNemico(enemy, bullet) {
          if(cuore6_esiste==true) {bullet.kill(); cuore6.kill(); cuore6_esiste=false;}
          else if(cuore7_esiste==true) {bullet.kill(); cuore7.kill(); cuore7_esiste=false;}
          else if(cuore8_esiste==true) {bullet.kill(); cuore8.kill(); cuore8_esiste=false;}
          else if(cuore9_esiste==true) {bullet.kill(); cuore9.kill(); cuore9_esiste=false;}
          else if(cuore10_esiste==true) {bullet.kill(); cuore10.kill(); cuore10_esiste=false;
          enemy.kill(); weaponNemico.destroy(); liquido.alpha = 0; liquido_fine.alpha = 1; liquido_fine.animations.play('fine'); player_vince = false;
          game.time.events.add(3000, function() {score = 0; game.state.start('Vittoria_L2');})}
        }

      //raccolta di spazzatura
          function collectspazzatura (player, spazzatura) {
              spazzatura.kill();
              score += 1;
              scoreText.text = 'x ' + score;
          }
      //nemico che spara quando sirenetta è vicina
      //spostamento della camera su scontro finale
          if (player.body.x > 9050){
            game.camera.roundPx = true;
            game.camera.follow(null);
            var tween1 = game.add.tween(game.camera).to({x: 8976}, 350, Phaser.Easing.Quadratic.Out, true, 0);
            game.time.events.add(1800, function() {game.world.setBounds(game.camera.x,0, 10000, 768);});
            // quello sotto interferisce con il tween1
            //tween1.onComplete.add(function(){game.world.setBounds(game.camera.x,0, 10000, 768);});
            game.time.events.add(1900, function() {weaponNemico.autofire = true;});
          };

      //movimento player
          // player fermo
          player.body.velocity.x = 0;
          //movimenti
          if (cursors.left.isDown)
          {
          //parallasse
            if (playerOldPos.x != player.body.x) {
          parallax1.tilePosition.x += 0.2;
          parallax2.tilePosition.x += 0.3;
          parallax3.tilePosition.x += 0.6;
          parallax4.tilePosition.x += 0.8;
          }
         //movimento sinistra
              player.body.velocity.x = -350;
              player.animations.play('left');
          }
          else if (cursors.right.isDown)
          {
        //parallasse
              if (playerOldPos.x != player.body.x) {
         parallax1.tilePosition.x -= 0.2;
         parallax2.tilePosition.x -= 0.3;
         parallax3.tilePosition.x -= 0.6;
         parallax4.tilePosition.x -= 0.8;
         }
        //movimento destra
              player.body.velocity.x = 350;
              player.animations.play('right');
          }
          else
          {   //  Stand still
              player.animations.stop();
              player.frame = 4;
          }

          //salto
          if (cursors.down.isDown && (camminabase || saltatesta))
          {player.body.velocity.y = 400;}

          if (cursors.up.isDown && (camminabase || saltatesta))
          {player.body.velocity.y = -430;}

       //spara
          if(fireButton.isDown) {
             if(score >= 1) {weapon.fire()}
          }

          scoreText.text = 'x ' + score;
     },
  }
game.state.add('Livello2', Livello2)

var Vittoria_L2 = {
  preload: function(){
    game.load.crossOrigin = 'anonymous';
    game.load.image('vittoria', 'assets/grafica/finale/vittoria.png');
    game.load.image('icona_menu', 'assets/grafica/finale/pulsante_menu.png');
    game.load.image('sfondo_verde', 'assets/grafica/finale/sfondo_verde.png');
    game.load.image('sfondo_giallo', 'assets/grafica/finale/sfondo_giallo.png');
  },
  create: function(){
    immagine_vittoria = game.add.sprite(0, 0, 'vittoria');
    immagine_vittoria.fixedToCamera = true;
    //icona menu
    sfondo_icona_menu = game.add.sprite(710, 608, 'sfondo_verde');
    sfondo_icona_menu.fixedToCamera = true;
    sfondo2_icona_menu = game.add.sprite(700, 600, 'sfondo_giallo');
    sfondo2_icona_menu.fixedToCamera = true;
    icona_menu = game.add.sprite(725, 600, 'icona_menu');
    icona_menu.fixedToCamera = true;
    sfondo2_icona_menu.alpha = 0;
    icona_menu.inputEnabled = true;
    icona_menu.events.onInputDown.add(this.imageClick_menu, this);
  },
 update: function(){
   //tasto destro (avanti)
      if (icona_menu.input.pointerOver())
      {sfondo2_icona_menu.alpha = 1;}
      else
      {sfondo2_icona_menu.alpha = 0;}
    },
  imageClick_menu: function(pointer) {
          this.game.state.start('Copertina');}
  }
game.state.add('Vittoria_L2', Vittoria_L2)

var Sconfitta_L2 = {
  preload: function(){
    game.load.crossOrigin = 'anonymous';
    game.load.image('sconfitta', 'assets/grafica/finale/sconfitta.png');
    game.load.image('icona_menu', 'assets/grafica/finale/pulsante_menu.png');
    game.load.image('icona_riprova', 'assets/grafica/finale/pulsante_riprova.png');
    game.load.image('sfondo_verde', 'assets/grafica/finale/sfondo_verde.png');
    game.load.image('sfondo_giallo', 'assets/grafica/finale/sfondo_giallo.png');
  },
  create: function(){
    immagine_sconfitta = game.add.sprite(0, 0, 'sconfitta');
    immagine_sconfitta.fixedToCamera = true;
    //icona riprova
    sfondo_icona_riprova = game.add.sprite(710, 508, 'sfondo_verde');
    sfondo_icona_riprova.fixedToCamera = true;
    sfondo2_icona_riprova = game.add.sprite(700, 500, 'sfondo_giallo');
    sfondo2_icona_riprova.fixedToCamera = true;
    icona_riprova = game.add.sprite(725, 498, 'icona_riprova');
    icona_riprova.fixedToCamera = true;
    sfondo2_icona_riprova.alpha = 0;
    icona_riprova.inputEnabled = true;
    icona_riprova.events.onInputDown.add(this.imageClick_redo, this);
    //icona menu
    sfondo_icona_menu = game.add.sprite(710, 608, 'sfondo_verde');
    sfondo_icona_menu.fixedToCamera = true;
    sfondo2_icona_menu = game.add.sprite(700, 600, 'sfondo_giallo');
    sfondo2_icona_menu.fixedToCamera = true;
    icona_menu = game.add.sprite(725, 600, 'icona_menu');
    icona_menu.fixedToCamera = true;
    sfondo2_icona_menu.alpha = 0;
    icona_menu.inputEnabled = true;
    icona_menu.events.onInputDown.add(this.imageClick_menu, this);
  },
  update: function(){
    //icona riprova
       if (icona_riprova.input.pointerOver())
       {sfondo2_icona_riprova.alpha = 1;}
       else
       {sfondo2_icona_riprova.alpha = 0;}
    //icona menu
        if (icona_menu.input.pointerOver())
        {sfondo2_icona_menu.alpha = 1;}
        else
        {sfondo2_icona_menu.alpha = 0;}
     },
  imageClick_redo: function(pointer) {
        this.game.state.start('Livello2');
  },
  imageClick_menu: function(pointer) {
        this.game.state.start('Copertina');
  }
}
game.state.add('Sconfitta_L2', Sconfitta_L2)


//inizia con stato copertina
game.state.start('Copertina')
