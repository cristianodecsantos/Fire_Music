let allMusic = [
    {
        id: 1,
        name: "Três Corações",
        artist: "Henrique e Juliano",
        img: "sertanejo",
        src: "01-tres-coracoes"
    },
    {
        id: 2,
        name: "Se Joga na Minha Vida",
        artist: "Henrique e Juliano",
        img: "sertanejo",
        src: "02-se-joga-na-minha-vida"
    },
    {
        id: 3,
        name: "Metade da Estrada",
        artist: "Henrique e Juliano",
        img: "sertanejo",
        src: "03-metade-da-estrada"
    },
    {
        id: 4,
        name: "Quem Pegou, Pegou",
        artist: "Henrique e Juliano",
        img: "sertanejo",
        src: "04-quem-pegou-pegou"
    },
    {
        id: 5,
        name: "Palmas Pro Amor",
        artist: "Henrique e Juliano",
        img: "sertanejo",
        src: "05-palmas-pro-amor"
    },
    {
        id: 6,
        name: "Quando Você Vem",
        artist: "Henrique e Juliano",
        img: "sertanejo",
        src: "06-quando-voce-vem"
    },
    {
        id: 7,
        name: "Sala de Espera",
        artist: "Henrique e Juliano",
        img: "sertanejo",
        src: "07-sala-de-espera"
    },
    {
        id: 8,
        name: "Menos É Mais",
        artist: "Henrique e Juliano",
        img: "sertanejo",
        src: "08-menos-e-mais"
    },
    {
        id: 9,
        name: "Rua Recaída",
        artist: "Henrique e Juliano",
        img: "sertanejo",
        src: "09-rua-recaida"
    },
    {
        id: 10,
        name: "Lembrança Boa",
        artist: "Henrique e Juliano",
        img: "sertanejo",
        src: "10-lembranca-boa"
    },
    {
        id: 11,
        name: "Completa a Frase",
        artist: "Henrique e Juliano",
        img: "sertanejo",
        src: "11-completa-ai"
    },
    {
        id: 12,
        name: "Beijadamente Calculado",
        artist: "Henrique e Juliano",
        img: "sertanejo",
        src: "12-beijadamente-calculado"
    },
    {
        id: 13,
        name: "Arruma Um Cantinho",
        artist: "Henrique e Juliano",
        img: "sertanejo",
        src: "13-arruma-um-cantinho"
    },
    {
        id: 14,
        name: "Desbeijar Minha Boca",
        artist: "Henrique e Juliano",
        img: "sertanejo",
        src: "14-desbeijar-minha-boca"
    },
    {
        id: 15,
        name: "Fim Ou Intervalo",
        artist: "Henrique e Juliano",
        img: "sertanejo",
        src: "15-fim-ou-intervalo"
    },
    {
        id: 16,
        name: "Vai Que Bebereis",
        artist: "Henrique e Juliano",
        img: "sertanejo",
        src: "16-vai-que-bebereis"
    },
    {
        id: 17,
        name: "Granada",
        artist: "Henrique e Juliano",
        img: "sertanejo",
        src: "17-granada"
    },
    {
        id: 18,
        name: "Cidade Vizinha",
        artist: "Henrique e Juliano",
        img: "sertanejo",
        src: "18-cidade-vizinha"
    },
    {
        id: 19,
        name: "Garrafas Vazias",
        artist: "Henrique e Juliano",
        img: "sertanejo",
        src: "19-garrafas-vazias"
    },
    {
        id: 20,
        name: "Eu E A Saudade",
        artist: "Henrique e Juliano",
        img: "sertanejo",
        src: "20-eu-e-a-saudade"
    },
    {
        id: 21,
        name: "505",
        artist: "Arctic Monkeys",
        img: "rock",
        src: "21-505 - Arctic Monkeys - Copia"
    },
    {
        id: 22,
        name: "A Day To Remember",
        artist: "The Downfall of Us All",
        img: "rock",
        src: "22-A Day To Remember  - The Downfall of Us All"
    },
    {
        id: 23,
        name: "Aerials",
        artist: "System of a Down",
        img: "rock",
        src: "23-Aerials - System of a Down"
    },
    {
        id: 24,
        name: "Another Brick in the Wall",
        artist: "Pink Floyd",
        img: "rock",
        src: "24-Another Brick in the Wall, Pt. 2 - Pink Floyd"
    },
    {
        id: 25,
        name: "Back In Black",
        artist: " AC DC",
        img: "rock",
        src: "25-Back In Black - AC DC"
    },
    
    {
        id: 26,
        name: "sou-nordeste",
        artist: "aude oficial",
        img: "mpb",
        src: "26-aydeoficial-sou-nordeste-fb269596"
    },
    {
        id: 27,
        name: "avohai-",
        artist: "ze-ramalh",
        img: "mpb",
        src: "27-JonasFonseca-avohai-ze-ramalho-e2363e"
    },
    {
        id: 28,
        name: "como-nossos-pais",
        artist: "carla",
        img: "mpb",
        src: "28-micarla-quatrocomo-nossos-paiscouver-micarla-69300af9"
    },
    {
        id: 29,
        name: "anunciacao",
        artist: "pedro paulo e matheus",
        img: "mpb",
        src: "29-pedropauloematheus-anunciacao-dvd-ao-vivo"
    },
    {
        id: 30,
        name: "coracao-de-carro-forte",
        artist: "hungria",
        img: "hiphop",
        src: "30-chacallsondplayoficial-chacall-sondplay-partplaysson-hip-hop-amor-de-verdade-986e3c4b"
    },
    {
        id: 31,
        name: "pacificadores",
        artist: "hungria",
        img: "hiphop",
        src: "31-DjLarry-young-thug-cut-it-remix-ft-kevin-gates-ot-genesis-f4b89dcc"
    },
    {
        id: 32,
        name: "insonia",
        artist: "hungria",
        img: "hiphop",
        src: "32-GringoHipHopOficial-04-mais-um-drink-part-hungria-e-chacal"
    },
    {
        id: 33,
        name: "palco",
        artist: "hungria",
        img: "hiphop",
        src: "33-hungriahiphop-hungria-hip-hop-coracao-de-carro-forte-2f606716"
    },
    {
        id: 34,
        name: "yans",
        artist: "colio",
        img: "hiphop",
        src: "34-hungriahiphop-pacificadores-a-rua-part-wwwsuamusicacombrdjmixeroficial-djmixeroficial-c3beee4c"
    },
    {
        id: 35,
        name: "voandoalto",
        artist: "hungria",
        img: "hiphop",
        src: "35-00-frisson-part-pericles-inimigos-da-hp-413452"
    },
    {
        id: 36,
        name: "inimigos-da-hp",
        artist: "pericle",
        img: "pagode",
        src: "36-00-toca-um-samba-ai-part-glamour-da-batucada-inimigos-da-hp-413444"
    },
    {
        id: 37,
        name: "glamour-da-batucada",
        artist: "inimigos-da-hp",
        img: "pagode",
        src: "37-01-ate-que-durou-pericles-279819"
    },
    {
        id: 38,
        name: "ate-que-durou",
        artist: "pericles",
        img: "pagode",
        src: "38-01-curtindo-a-vida-bom-gosto-207929"
    },
    {
        id: 39,
        name: "curtindo-a-vida",
        artist: "-bom-gosto",
        img: "pagode",
        src: "39-01-desculpa-perfeita-pixote-146762"
    },

    {
        id: 40,
        name: "3 X 4",
        artist: "Engenheiros do Hawaii",
        img: "pop",
        src: "40-3 X 4 - Engenheiros do Hawaii"
    },
    {
        id: 41,
        name: "A Novidade",
        artist: "Os Paralamas do Sucesso",
        img: "pop",
        src: "41-A Novidade - Os Paralamas do Sucesso"
    },
    {
        id: 42,
        name: "Aonde Quer Que Eu Vá",
        artist: "Os Paralamas do Sucesso",
        img: "pop",
        src: "42-Aonde Quer Que Eu Vá - Os Paralamas do Sucesso"
    },
    {
        id: 43,
        name: "Até O Fim",
        artist: "Engenheiros do Hawaii",
        img: "pop",
        src: "43-Até O Fim - Engenheiros do Hawaii"
    },
    {
        id: 44,
        name: "Carta aos Missionários",
        artist: "Biquini Cavadão",
        img: "pop",
        src: "44-Biquini Cavadão  - Carta aos Missionários"
    },
    {
        id: 45,
        name: "Catch Me If I Fall",
        artist: "NEFFEX",
        img: "eletronico",
        src: "45-Catch Me If I Fall - NEFFEX"
    },
    {
        id: 46,
        name: "Dance Of The Gypsies",
        artist: "Hanu Dixit",
        img: "eletronico",
        src: "46-Dance Of The Gypsies - Hanu Dixit"
    },
    {
        id: 47,
        name: "Like It Loud",
        artist: "Dyalla",
        img: "eletronico",
        src: "47-Like It Loud - Dyalla"
    },
    {
        id: 48,
        name: "Organic Guitar House",
        artist: "Dyalla",
        img: "eletronico",
        src: "48-Organic Guitar House - Dyalla"
    },
    {
        id: 49,
        name: "Pioneers",
        artist: "TrackTribe",
        img: "eletronico",
        src: "49-Pioneers - TrackTribe"
    },
   
    {
        id: 51,
        name: "Torre Eiffel",
        artist: "KIKO CHICABANA",
        img: "axe",
        src: "51- Torre Eiffel"
    },
    {
        id: 52,
        name: "AMOR NA PRAIA",
        artist: "KIKO CHICABANA",
        img: "axe",
        src: "52- AMOR NA PRAIA - KIKO CHICABANA - CHICA AO VIVO - CD PROMOCIONAL"
    },
    {
        id: 53,
        name: "CASCA DE BALA",
        artist: "KIKO CHICABANA",
        img: "axe",
        src: "53- CASCA DE BALA - KIKO CHICABANA - CHICA AO VIVO - CD PROMOCIONAL"
    },
    {
        id: 54,
        name: "JEITO ESTRANHO",
        artist: "KIKO CHICABANA",
        img: "axe",
        src: "54- JEITO ESTRANHO - KIKO CHICABANA - CHICA AO VIVO - CD PROMOCIONAL"
    },
    {
        id: 55,
        name: "TEM CAFÉ",
        artist: "KIKO CHICABANA",
        img: "axe",
        src: "55- TEM CAFÉ - KIKO CHICABANA - CHICA AO VIVO - CD PROMOCIONAL"
    },
    {
        id: 56,
        name: "battlefield",
        artist: "elegy",
        img: "classica",
        src: "56-battlefield-elegy-201530"
    },
    {
        id: 57,
        name: "long",
        artist: "loneliness",
        img: "classica",
        src: "57-loneliness_long-202383"
    },
    {
        id: 58,
        name: "medium",
        artist: "loneliness",
        img: "classica",
        src: "58-loneliness_medium-1-202382"
    },
    {
        id: 59,
        name: "loneliness",
        artist: "medium",
        img: "classica",
        src: "59-loneliness_medium-2-202378"
    },
    {
        id: 60,
        name: "outro",
        artist: "loneliness",
        img: "classica",
        src: "60-loneliness_outro-202380"
    },
    {
        id: 61,
        name: "catch-it",
        artist: "catch-it",
        img: "jazz",
        src: "61-catch-it-117676"
    },
    {
        id: 62,
        name: "happy-santa",
        artist: "happy-santa",
        img: "jazz",
        src: "62-happy-santa_60sec-175537"
    },
    {
        id: 63,
        name: "snowman",
        artist: "joyful",
        img: "jazz",
        src: "63-joyful-snowman_60sec-176773"
    },
    {
        id: 64,
        name: "night-in-march",
        artist: "last",
        img: "jazz",
        src: "64-last-night-in-march-201786"
    },
    {
        id: 65,
        name: "club-in-new-orleans",
        artist: "the-best-jazz",
        img: "jazz",
        src: "65-the-best-jazz-club-in-new-orleans-164472"
    }
]
export default allMusic;