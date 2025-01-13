// Liste des musiques
const tracks = [
    { title: "Billie H (JefLeCri/DAMOUR), ", src: "music/Billie H masterisé (online-audio-converter.com).mp3", lyrics: `Billie H fume du hash Billie H
Billie H fume du H
Elle se crame les intestins Elle
se fout de son destin Toute la
journée bien Bourrache
Quand elle chante c'est un ange
Qui chante des fruits étrange
Avec grace et disgrace
C'est un chant qui agace
les limaces
Billie H chante du jazz
C'est un genre de Rossignol
Avec l'alcool elle s'isole
Des sournois qui la malaxe
Quand elle chante c'est un ange
Qui chante des fruits étrange
Avec grace et disgrace
C'est un chant qui agace
les limaces
Billie H sans cesse remache
Une vie mélancolique
Dans des vapeurs éthylique
Dans son sang un tas de flash
Quand elle chante c'est un ange
Qui chante des fruits étrange
Avec grace et disgrace
C'est un chant qui agace
Les limaces
Billie fait une ganache
Avec ses bras qu'elle cache
Une fleur dans les cheveux
Une voix qui vient des cieux
Quand elle chante c'est un ange
Qui chante des fruits étrange
Avec grace et disgrace ` },
    { title: "A Toulon", src: "music/A Toulon master (online-audio-converter.com).mp3" },
    { title: "Le banjo", src: "music/le banjo mastering ville défigurée - 10_10_2023 14.14.mp3",lyrics:`Voici le texte sans les accords et les numéros :

---

Le banjo dans la rue  
Il a des cheveux d'or  
C'est un météore  
De l'aurore  
À la mort  
Il joue en accords  
Un corps à corps  

C'est une corrida  
Qu'un jour il exécuta  
Une mélodie de sous-sol  
Un truc de dingue, c'est ma boussole  

Le banjo dans la rue  
Il a des cheveux d'or  
C'est un météore  
De l'aurore  
À la mort  
Il joue en accords  
Un corps à corps  

L'histoire de sa vie  
Elle s'étale tous les midis  
En plein dans ta mémoire  
Et toi, tu vois en lui un miroir  

Le banjo dans la rue  
Il a des cheveux d'or  
C'est un météore  
De l'aurore  
À la mort  
Il joue en accords  
Un corps à corps  

Et l'acteur entre en scène  
Des disques sortent de sa peau  
Même les clodos font le pogo  
Sur le pavé quand crache le banjo  

Le banjo dans la rue  
Il a des cheveux d'or  
C'est un météore  
De l'aurore  
À la mort  
Il joue en accords  
Un corps à corps  

Musique sans frontières  
Le keum est sans barrières  
Vraie force de la vie  
Et sa musique, c'est comme un cri  

Le banjo dans la rue  
Il a des cheveux d'or  
C'est un météore  
De l'aurore  
À la mort  
Il joue en accords  
Un corps à corps  

La foule est une marée  
Que la musique a calmée  
La rue est un marais  
Que les larmes ont soulagé  

Le banjo dans la rue  
Il a des cheveux d'or  
C'est un météore  
De l'aurore  
À la mort  
Il joue en accords  
Un corps à corps  

---` },
    { title: "Rivière", src: "music/riviere.mp3", lyrics: `Rivière éternelle...` },
    { title: "Le scaphandrier", src: "music/le scaphandrier mastering ville défigurée - 10_10_2023 14.41.mp3" },
    { title: "Les aubépines  ", src: "music/les aubépines mastering 2025 - 13_01_2025 17.40.mp3" },
    { title: "Les éffarés  Rimbaud /Jef Le Cri", src: "music/les éffarés mastering 2025 - 13_01_2025 17.35.mp3" },
    { title: "Partir ", src: "music/Partir.mp3" },
];

let currentTrack = 0;
const audio = new Audio(tracks[currentTrack].src);

// Contrôles DOM
const trackTitle = document.getElementById("track-title");
const playPauseBtn = document.getElementById("play-pause-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const volumeDown = document.getElementById("volume-down");
const volumeUp = document.getElementById("volume-up");

// Met à jour l'écran
function updateScreen() {
    trackTitle.textContent = tracks[currentTrack].title;

    // Applique l'animation de défilement du titre
    trackTitle.style.animation = "none";
    setTimeout(() => {
        trackTitle.style.animation = "scroll 10s linear infinite";
    }, 50);

    // Met à jour les paroles
    const lyricsText = document.getElementById("lyrics-text");
    lyricsText.textContent = tracks[currentTrack].lyrics || ""; // Par défaut, vide si pas de paroles

    // Ajuster la durée de l'animation en fonction de la longueur du texte
    const textLength = lyricsText.textContent.length;
    const animationDuration = Math.max(30, textLength / 10) + "s";

    // Réinitialiser l'animation des paroles
    lyricsText.style.animation = "none";
    setTimeout(() => {
        lyricsText.style.animation = `scroll-lyrics ${animationDuration} linear infinite`;
    }, 50);
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

// Suivant
nextBtn.addEventListener("click", () => {
    currentTrack = (currentTrack + 1) % tracks.length;
    audio.src = tracks[currentTrack].src;
    updateScreen();
    audio.play();
    playPauseBtn.textContent = "⏸️";
});

// Précédent
prevBtn.addEventListener("click", () => {
    currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    audio.src = tracks[currentTrack].src;
    updateScreen();
    audio.play();
    playPauseBtn.textContent = "⏸️";
});

// Contrôles de volume
volumeDown.addEventListener("click", () => {
    if (audio.volume > 0) audio.volume -= 0.1;
});

volumeUp.addEventListener("click", () => {
    if (audio.volume < 1) audio.volume += 0.1;
});

// Initialisation
updateScreen();
