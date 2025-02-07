# jefmusic.com
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Site officiel de Jef Le Cri : musique et poésie ">
    <!-- Métadonnées de base -->

<meta name="description" content="Découvrez l'univers de Jef Le Cri : poésie, musique et événements uniques. Plongez dans ses compositions et collaborations artistiques.">
<meta name="keywords" content="Jef Le Cri, musique, poésie, événements, artiste indépendant, Cuverville, collaborations artistiques">
<meta name="author" content="Jef Le Cri">

<!-- Balises Open Graph pour les réseaux sociaux -->
<meta property="og:title" content="Jef Le Cri - Poésie et Musique">
<meta property="og:description" content="Plongez dans l'univers de Jef Le Cri : poésie, musique et événements uniques. Découvrez ses chansons et collaborations.">
<meta property="og:image" content="https://jeflecrimusic.netlify.app/assets/jef-le-cri.jpg">
<meta property="og:url" content="https://jeflecrimusic.netlify.app/">
<meta property="og:type" content="website">

<!-- Balises Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Jef Le Cri - Poésie et Musique">
<meta name="twitter:description" content="Découvrez l'univers de Jef Le Cri : poésie, musique et événements uniques. Plongez dans ses compositions et collaborations artistiques.">
<meta name="twitter:image" content="https://jeflecrimusic.netlify.app/assets/jef-le-cri.jpg">

    <title>Jef  Poésie et Musique</title>
    <link rel="icon" href="./picture/jef-2.jpg" type="image/png">

    <!-- Bootstrap CSS    tu me recopie le cosde tezl qulle en etier sauf indication contraire -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
 <link rel="stylesheet" href="style.css">
    <!-- Custom CSS -->
    
</head>

<body>
    <!-- Bandeau avec Image de Fond et Titre -->
    <header class="banner">
        <div class="banner-text">
            <h1>Jef Le Cri</h1>
            <p>Poésie, musique et plus encore.</p>
        </div>
    </header>

    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Accueil</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link" href="#poesie">Poésie</a></li>
                    <li class="nav-item"><a class="nav-link" href="#musique">Musique</a></li>
                    <li class="nav-item"><a class="nav-link" href="#evenements">Événement</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <main class="container my-5">
        <!-- Section Poésie   -->
        <section id="poesie">
            <h2 class="main-title mb-4">Jef le Cri  ?</h2>
           
                
                <div style="white-space: pre-wrap; word-wrap: break-word;overflow-wrap: break-word">
      <p>
        Dans l’intimité des rues et des petites scènes, Jef Lecri façonne un univers singulier où musique et poésie s’entrelacent.
      Inspiré par Brassens, Brel, Les Ogres de Barback et marqué par l’héritage poétique de Rimbaud aux surréalistes, il mêle mélodie et révolte avec un souffle punk doux mais affirmé.
      Membre des groupes Zangra, Elfe et Mer, Cuverville (avec David gentilini), il sème des histoires vibrantes dans ses compositions. Artiste indépendant en quête du statut d’intermittent, il a vu ses chansons reprises par Le Cri du Peuple et collabore avec la poète Sylvie Escartin pour créer des ambiances musicales uniques.
         Jef Le Cri, c’est un mélange d’intensité et d’authenticité, une signature rare qui laisse une empreinte durable.
           </p>
                </div>
           
            
        </section>

        <!-- Section Musique -->
        <div class="player-container">
            <h2>Chansons</h2>
    
            <!-- Liste des titres -->
            <div id="track-list"></div>
    
            <!-- Paroles -->
            <div id="lyrics" class="lyrics">Sélectionnez une chanson pour afficher les paroles...</div>
    
            <!-- Contrôles -->
            <div class="controls">
                <button id="prev-btn">⏮️</button>
                <button id="play-pause-btn">▶️</button>
                <button id="next-btn">⏭️</button>
            </div>
        </div>

        <!-- Section Événements -->
        <section id="evenements" class="mt-5">
            <h2 class="main-title mb-4">Événements</h2>
            <ul>
                <li><strong>Concert :</strong> 29 novembre 2024, Bordeaux le petit grain avec Cuverville</li>
                <li><strong>Concert :</strong> 11 janvier 2025, Cercle de Préchac avec Cuverville</li>
            </ul>
        </section>

        <!-- Section Vidéos -->
        <section id="videos" class="mt-5">
            <h2 class="main-title mb-4">Vidéos</h2>
            <div class="row">
                <div class="col-md-4">
                    <iframe width="100%" height="200" src="https://www.youtube.com/embed/YeBdWK9uAXU" allowfullscreen></iframe>
                </div>
                <div class="col-md-4">
                    <iframe width="100%" height="200" src="https://www.youtube.com/embed/bSm0ugGU-oE" allowfullscreen></iframe>
                </div>
                <div class="col-md-4">
                    <iframe width="100%" height="200" src="https://www.youtube.com/embed/qnf-Xe6K9ls" allowfullscreen></iframe>
                </div>
            </div>
        </section>

        <!-- Carrousel -->
        <section id="photos" class="mt-5">
            <h2 class="main-title mb-4">Photos</h2>
            <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="picture/jef-7.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="picture/jef-8.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="picture/jef-9.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="picture/jef-10.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="picture/jef-11.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="picture/jef-12.jpg" class="d-block w-100" alt="...">
                    </div>
                   
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    </main>

    <footer class="text-center py-3">
        <p>&copy; 2024 JefLeCri - Tous droits réservés.</p>
    </footer>

    <!-- Bootstrap Bundle JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
 <script src="script.js"></script>
    
    
   
   
</body>

</html>


Là, je mets le CSS.

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
    color: #333;
    
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.player-container {
    width: 90%;
    max-width: 600px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
}

.track {
    padding: 10px;
    border-bottom: 1px solid #ddd;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background 0.2s;
}

.track:hover {
    background-color: #f0f0f0;
}

.track.active {
    background-color: #333;
    color: #fff;
}

.lyrics {
    margin-top: 20px;
    font-size: 1rem;
    white-space: pre-wrap;
    color: #555;
}

.controls {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
}

.controls button {
    background: #333;
    color: #fff;
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.2s;
}

.controls button:hover {
    background: #555;
}
body {
    font-family: 'Roboto', sans-serif;
}

header.banner {
    background: url('picture/jef-6.jpg') no-repeat center center/cover;
    color: #fff;
    text-align: center;
    padding: 60px 20px;
}

header.banner h1 {
    font-family: 'Playfair Display', serif;
    font-size: 3rem;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
}

header.banner p {
    font-size: 1.2rem;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

p {
    margin-top:0.5 rem;
margin-bottom: 1.5 rem; /* Ajustez la valeur selon vos préférences */

}



.carousel img {
    height: 400px;
    object-fit: cover;
}

footer {
    background: #f8f9fa;
}

.main-title {
    color: #555;
    font-weight: bold;
}





@media (max-width: 768px) {
    .carousel img {
        height: 250px;
    }
}



 




.carousel img {
height: auto; /* Permet à l'image de conserver son ratio */
max-height: 500px; /* Limite la hauteur maximale sur grand écran */
object-fit: cover; /* Assure un affichage agréable sans étirement */
}



const tracks = [
    { title: "Billie H (JefLeCri/DAMOUR)", src: "music/Billie H masterisé (online-audio-converter.com).mp3", lyrics: `
Billie H  

Billie H fume du H  
Elle se crame les intestins 
Elle se fout de son destin 
Toute la journée bien Bourrache  
Quand elle chante c'est un ange  
Qui chante des fruits étrange  
Avec grace avec disgrace  
C'est un chant qui agace  les limaces  

Billie H 
sans cesse remache 
Une vie mélancolique  
Dans des vapeurs éthylique 
 Dans ses bras  un tas de flash  
Quand elle chante c'est un ange 
 Qui chante des fruits étrange  
 Avec grace avec disgrace  
C'est un ange  qui agace  Les limaces  

Billie H 
fait une ganache  
Avec ses bras qu'elle cache 
Une fleur dans les cheveux U
ne voix qui vient des cieux  
Quand elle chante c'est un ange  
Qui chante des fruits étrange 
 Avec grace avec disgrace  
C'est un chant qui agace  
Les limaces

Paroles et musique Damour Jf` },
    { title: "A Toulon", src: "music/A Toulon master (online-audio-converter.com).mp3",lyrics: 
`A Toulon, j'étais un enfant,
Aussi grand que maintenant,
Sur la jetée du Mourillon,
Je m'écorchais les talons.
Mon vieux était encore là,
Pas encore dans l’au-delà,
Les pieds dans la mer,
Un clope dans les serres.

A Toulon, j'étais ce mino,
Silencieux de tous ces mots.
Sous  le pont de Saint-Jean,
J'imaginais des brigands
Dans la fureur des rails,
À l'abri des détails,
Sous le tunnel de métal,
Où s'engouffre le Mistral.

A Toulon, j'étais ce mariole
Qui rêvait d'être Félix Mayol.
Sur le cours Lafayette,
Cade Chichi  Fregi en claquettes.
De Strasbourg jusqu’au port,
Rue d’Alger, sans effort,
L'odeur de cette marée
De cette ville où je suis né.

À Toulon, j'étais ce moco,
Moitié fada, moitié fayot,
Sur l’avenue Colonel Picot.
Chaque jour était Marengo,
Le soleil, le vent, les oiseaux
Chantaient fort comme le sirocco,
Les cigales, ici, c'est banal,
Dans le Nord, c’est d'la balle.

`},
    { title: "Le banjo", src: "music/le banjo mastering ville défigurée - 10_10_2023 14.14.mp3", lyrics: `
Le banjo dans la rue
Il a des cheveux d'or
C'est un météore
De l'aurore
A la mort
il joue en accords
Un corps a corps

C'est une corrida 
Qu'un jour il exécuta 
Une mélodie de sous sol
un truc de dingue c'est ma boussole 

Le banjo dans la rue
il a des cheveux d'or
C'est un météore
De l'aurore
A la mort
il joue en accords
Un corps a corps

l'histoire de sa vie 
elle s'étale tous les midi
En plein dans ta mémoire 
Et toi Tu vois en lui un miroir 

lE banjo dans la rue
il a des cheveux d'or
C'est un météore
De l'aurore
A la mort
il joue en accords
Un corps a corps

Et l'acteur entre en scène
des disques sortent de sa peau 
et les flics font le pogo
sur le pavé quand crache le banjo
le banjo dans la rue
il a des cheveux d'or
C'est un météore
De l'aurore
A la mort
il joue en accords
Un corps a corps

Musique sans frontiéres
le keum est sans barrières
vrai force de la vie
et sa musique c'est comme un cri

lE banjo dans la rue
il a des cheveux d'or
C'est un météore
De l'aurore
A la mort
il joue en accords
Un corps a corps

La foule est une marée 
que la musique a calmée 
La rue est un marais
Que les larmes soulageait 

lE banjo dans la rue
il a des cheveux d'or
C'est un météore
De l'aurore
A la mort
il joue en accords
Un corps a corps

JF DAMOUR/DAMOUR` },
    { title: "Rivière", src: "music/riviere.mp3", lyrics: `Riviére
Paroles et musique JF Damour

Rivière éternelle
Au désir charnelle
tu coule lentement
plus sereinement
Ton lit est défait
les ports inondés
Le canal est bouché
la rivière est monté
Est l'onde remue ses méandres
La crue s'est mue en une offrande

Rivière éternelle
ou s'arréte le ciel
La houle fulminant
renverse fiérement
les grues sur les quais
tombe sur les pavés
L'eau a submergé
La ville défigurée
les Pierre ricoche sur l'ombre
envasé dans l'alluvion sombre

Rivière éternelle
attend le dégel
l'éclat d'un fragment
le feu d'un instant
le cap vers la tranchée
La forêt incendié
Les bateaux vont coulés
Les troncs d'arbres sont coupés
Et flotte comme des bouchons vides
Sur la riviére pleine de rides

Riviére éternelle
en forme de dentelle
Le long des gratte ciel
Fier et naturel
Souillé comme une poubelle
Traité comme une chienne
survivante` },
    { title: "Le scaphandrier", src: "music/le scaphandrier mastering ville défigurée - 10_10_2023 14.41.mp3",lyrics :`
        Le scaphandrier

Il descends  au fond de l'océan
Dans l'espoir de trouver  un trésor 
Des camés des dépaysements
Des silence pour un amour d'or

Qu'une fadaise n'avait pu convaincre
Sirènes au corps lisse  au long cils
Du moins pour ces nuits indistincte
D'espoir et de dépits inutiles

Il reste sur  cet pensées qui le hante
Des champs de coquelicots rubis
Des plaines verte des lèvres violente
Et des lubie en forme d’alibis

Il  descend au fond de l'océan
sentir la pénombre descendre
sur le mémorial encastrant
Dans l' alluvion  des jour clément

En face de l'embrasure  enflammé
Un vestige large dissonant
Qui l’obsède  jusqu'à  la satiété
Il se sent semblable a un volcan

C'est tout son estomac qui souffre
Dans l’abysse profond il s’abîme
Pour ce voyage pour la Grande-Ourse
Pour cette aphrodite  sous marine	

De cet fièvre une envie l'envahit
Du fond du bide il sent le courage 
Il décame déclamant  un cri
Une torpeur semblable a un brouillage

L’apprêté   de son scaphandre 
La touche  velouté  de ce gouffre
Danse de même qu'une sarabande 
Lorsque ses amandes s'entrouvrent

C'est une fanfare qui se faufile
sous ses  récifs  perdrix de mer
 Il ne trouve que de la pacotille 
Buste de bakélite  de bruyére

Pendant son labeur il se tord
Le dos de douleur qui empire 
Il a la fièvre pour la Toison d'or
ça l’anéantit  il la désire

La chanson du scaphandrier
Je l'ai écrit pour cet inconnu
De Lombardie ou  de  Calabre 
 curant ma darse de ces obus

Pour les licenciés des Chantiers 
de La  ciotat  et  la  de  Seyne 00    
Vos navires  sont partie  navigué
Dans ma caboche  et sur cette scène









`},
    { title: "Les aubépines", src: "music/les aubépines mastering 2025 - 13_01_2025 17.40.mp3",lyrics: `
        Les aubépines
Sous les plis de ton jean,
 Les sourires de ta mine,
 Les caresses de mes rires
 Et ton rire qui s'anime.

Sur les plis de ta vie,
 Tu es resté mon ami.
 À travers ce champ de ruines
 Où j'ai enterré des mines.

Sur ce pli de papier,
 J'ai construit un chantier
 Perdu, presque noyé,
 Complètement déraciné.

Sur les plis de ton jardin,
 Qui avait tous les parfums,
 J'ai cru un seul instant
 Qu'il existait un présent.

Sur le pli  des aubépines,
 Je me souviens et je rumine
 Toutes ces vies perdues,
 Ces lectures que je n'ai pas eues.

Sur le pli de tes yeux
 Vert bleu, j'ai renié Dieu.
 Et sur ma foi, je jure,
 T'aimer est une torture.

 

`},
    { title: "Les éffarés Rimbaud /Jef Le Cri", src: "music/les éffarés mastering 2025 - 13_01_2025 17.35.mp3" },
    { title: "Partir", src: "music/Partir.mp3" }
];

let currentTrack = 0;
const audio = new Audio(tracks[currentTrack].src);

const trackList = document.getElementById("track-list");
const lyrics = document.getElementById("lyrics");
const playPauseBtn = document.getElementById("play-pause-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

// Initialiser la liste des pistes
function initTrackList() {
    trackList.innerHTML = "";
    tracks.forEach((track, index) => {
        const trackDiv = document.createElement("div");
        trackDiv.classList.add("track");
        if (index === currentTrack) trackDiv.classList.add("active");
        trackDiv.textContent = track.title;
        trackDiv.addEventListener("click", () => {
            currentTrack = index;
            playTrack();
        });
        trackList.appendChild(trackDiv);
    });
}

// Lecture/Pause
playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = "⏸️";
    } else {
        audio.pause();
        playPauseBtn.textContent = "▶️";
    }
});

// Suivant/Précédent
nextBtn.addEventListener("click", () => {
    currentTrack = (currentTrack + 1) % tracks.length;
    playTrack();
});

prevBtn.addEventListener("click", () => {
    currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    playTrack();
});

// Lire une piste
function playTrack() {
    audio.src = tracks[currentTrack].src;
    audio.play();
    playPauseBtn.textContent = "⏸️";
    updateUI();
}

// Mettre à jour l'interface
function updateUI() {
    initTrackList();
    lyrics.textContent = tracks[currentTrack].lyrics || "Aucune parole disponible pour cette chanson.";
}

// Initialisation
initTrackList();
updateUI();

Je t'ai mis 3 fichiers Pense On va vérifier que tout fonctionne bien, refais moi les 3 fichiers à la suite comme J'aimerais bien avoir Ton avis Merci.



D'accord ! Je vais te générer les fichiers de base pour tes composants tout en respectant ton code de base.  

Chaque page et composant contiendra une structure minimale pour que ton application fonctionne immédiatement.  

Je te prépare ça ! 🎯

J'ai ajouté des commentaires pour expliquer chaque partie de ton code. Maintenant, ton application est plus facile à comprendre et à maintenir. Si tu veux que je t'aide à créer les fichiers des pages et des composants, dis-moi ! 😊

D'accord ! Je vais te générer les fichiers de base pour tes composants tout en respectant ton code de base.  

Chaque page et composant contiendra une structure minimale pour que ton application fonctionne immédiatement.  

Je te prépare ça ! 🎯

J'ai ajouté des commentaires pour expliquer chaque partie de ton code. Maintenant, ton application est plus facile à comprendre et à maintenir. Si tu veux que je t'aide à créer les fichiers des pages et des composants, dis-moi ! 😊

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Poetry from './pages/Poetry';
import Music from './pages/Music';
import Events from './pages/Events';
import Videos from './pages/Videos';
import Contact from './pages/Contact';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

// Composant principal de l'application
function App() {
  return (
    <Router>
      {/* Barre de navigation présente sur toutes les pages */}
      <Navbar />
      
      {/* Définition des routes de l'application */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/poetry" element={<Poetry />} />
        <Route path="/music" element={<Music />} />
        <Route path="/events" element={<Events />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      
      {/* Pied de page présent sur toutes les pages */}
      <Footer />
    </Router>
  );
}

export default App;
