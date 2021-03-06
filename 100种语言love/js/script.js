const dl = document.getElementById('list-group');
const modal = document.getElementById('modal');

dl.addEventListener('click', openModal);

function populateList() {

    let output = '';

    loveTranslations.forEach( (love) => {
        // conditionals to change font sizes & style for larger words & langauge by adding a class to the <dt>
        if (love.language === 'georgian' || love.language === 'malayalam' || love.language === 'tatar') {

            output += `<div class="item" tabindex="0">
                <dt class="smaller">${love.word}</dt>
                <dd>${love.language}</dd>
            </div>`;

        } else if (to_medium.includes(love.language) === true){

            output += `<div class="item" tabindex="0">
                <dt class="medium">${love.word}</dt>
                <dd>${love.language}</dd>
            </div>`;

        } else if (to_italic.includes(love.language) === true){

            output += `<div class="item" tabindex="0">
                <dt class="italic">${love.word}</dt>
                <dd>${love.language}</dd>
            </div>`;

        } else {

            output += `<div class="item" tabindex="0">
                <dt>${love.word}</dt>
                <dd>${love.language}</dd>
            </div>`;

        }
        
    });

    dl.innerHTML = output;
}

function openModal(e) {
    if (e.target.nodeName.toLowerCase() === 'dl') {return;}
    else if (e.target.classList.contains('item') === true) {

        const lang = e.target.children[1].innerText.toLowerCase();

        modal.classList.toggle('active');
        
        if (to_italic.includes(lang) === true) { // conditional to change font size for different word sizes and lettering styles, adding classes to h1

            modal.innerHTML += `<button onclick="closeModal()" id="modal-close-btn">X</button>
            <h1 class="italic">${e.target.children[0].innerText}</h1>
            <p class="lang-name">${e.target.children[1].innerText}</p>`;

        } else if (to_medium.includes(lang) === true) {

            modal.innerHTML += `<button onclick="closeModal()" id="modal-close-btn">X</button>
            <h1 class="medium italic">${e.target.children[0].innerText}</h1>
            <p class="lang-name" style="margin-top:1.5rem">${e.target.children[1].innerText}</p>`;

        } else if (lang === 'georgian' || lang === 'malayalam' || lang === 'tatar') {

            modal.innerHTML += `<button onclick="closeModal()" id="modal-close-btn">X</button>
            <h1 class="smaller italic">${e.target.children[0].innerText}</h1>
            <p class="lang-name" style="margin-top: 3rem;">${e.target.children[1].innerText}</p>`;

        } else {

            modal.innerHTML += `<button onclick="closeModal()" id="modal-close-btn">X</button>
            <h1>${e.target.children[0].innerText}</h1>
            <p class="lang-name">${e.target.children[1].innerText}</p>`;
        }
    }
}

function closeModal() {
    document.getElementById('modal').classList.toggle('active');
    modal.innerHTML = ''; // clearing out the modal text
}

// 100 love translatons: Object Array
const loveTranslations = [
    {
        "language": "english",
        "word": "love"
    },
    {
        "language": "spanish",
        "word": "amor"
    },
    {
        "language": "french",
        "word": "l'amour"
    },
    {
        "language": "dutch",
        "word": "liefde"
    }, 
    {
        "language": "greek",
        "word": "??????????"
    },
    {
        "language": "Arabic",
        "word": "????"
    },
    {
        "language": "albanian",
        "word": "dashuri"
    },
    {
        "language": "amharic",
        "word": "?????????"
    },
    {
        "language": "armenian",
        "word": "??????"
    },
    {
        "language": "azerbaijani",
        "word": "sevgi"
    },
    {
        "language": "basque",
        "word": "maitasuna"
    },
    {
        "language": "belarusian",
        "word": "??????????????"
    },
    {
        "language": "bengali",
        "word": "?????????????????????"
    },
    {
        "language": "bosnian",
        "word": "ljubavi"
    },
    {
        "language": "bulgarian",
        "word": "??????????"
    },
    {
        "language": "catalan",
        "word": "amor"
    },
    {
        "language": "cebuano",
        "word": "gugma"
    },
    {
        "language": "chinese",
        "word": "???"
    },
    {
        "language": "corsican",
        "word": "amore"
    },
    {
        "language": "croatian",
        "word": "ljubav"
    },
    {
        "language": "czech",
        "word": "milovat"
    },
    {
        "language": "danish",
        "word": "elsker"
    },
    {
        "language": "esperanto",
        "word": "amo"
    },
    {
        "language": "estonian",
        "word": "armastus"
    },
    {
        "language": "filipino",
        "word": "pag-ibig"
    },
    {
        "language": "finnish",
        "word": "rakkaus"
    },
    {
        "language": "frisian",
        "word": "leafde"
    },
    {
        "language": "galician",
        "word": "amor"
    },
    {
        "language": "georgian",
        "word": "???????????????????????????"
    },
    {
        "language": "german",
        "word": "liebe"
    },
    {
        "language": "gujarati",
        "word": "???????????????"
    },
    {
        "language": "haitian creole",
        "word": "lanmou"
    },
    {
        "language": "hausa",
        "word": "soyayya"
    },
    {
        "language": "hawaiian",
        "word": "aloha"
    },
    {
        "language": "hebrew",
        "word": "????????"
    },
    {
        "language": "hindi",
        "word": "???????????????"
    },
    {
        "language": "hmong",
        "word": "kev hlub"
    },
    {
        "language": "hungarian",
        "word": "szeretet"
    },
    {
        "language": "icelandic",
        "word": "??st"
    },
    {
        "language": "igbo",
        "word": "ihunanya"
    },
    {
        "language": "indonesian",
        "word": "cinta"
    },
    {
        "language": "irish",
        "word": "gr??"
    },
    {
        "language": "italian",
        "word": "amore"
    },
    {
        "language": "japanese",
        "word": "???"
    },
    {
        "language": "javanese",
        "word": "katresnan"
    },
    {
        "language": "kannada",
        "word": "??????????????????"
    },
    {
        "language": "kazakh",
        "word": "????????????????"
    },
    {
        "language": "khmer",
        "word": "?????????????????????"
    },
    {
        "language": "kiryarwanda",
        "word": "urukundo"
    },
    {
        "language": "korean",
        "word": "??????"
    },
    {
        "language": "kurdish",
        "word": "ev??n"
    },
    {
        "language": "kyrgyz",
        "word": "??????????"
    },
    {
        "language": "lao",
        "word": "?????????"
    },
    {
        "language": "latin",
        "word": "amare"
    },
    {
        "language": "latvian",
        "word": "m??lest??ba"
    },
    {
        "language": "lithuanian",
        "word": "meil??"
    },
    {
        "language": "luxembourish",
        "word": "L??ift"
    },
    {
        "language": "macedonian",
        "word": "????????"
    },
    {
        "language": "malagasy",
        "word": "fitiavana"
    },
    {
        "language": "malay",
        "word": "cinta"
    },
    {
        "language": "malayalam",
        "word": "??????????????????"
    },
    {
        "language": "maltese",
        "word": "im??abba"
    },
    {
        "language": "moari",
        "word": "aroha"
    },
    {
        "language": "marathi",
        "word": "???????????????"
    },
    {
        "language": "mongolian",
        "word": "????????"
    },
    {
        "language": "burmese",
        "word": "aahkyit"
    },
    {
        "language": "nepali",
        "word": "????????????"
    },
    {
        "language": "norwegian",
        "word": "kj??rlighet"
    },
    {
        "language": "odia",
        "word": "???????????????"
    },
    {
        "language": "pashto",
        "word": "????????"
    },
    {
        "language": "persian",
        "word": "??????"
    },
    {
        "language": "polish",
        "word": "mi??o????"
    },
    {
        "language": "portuguese",
        "word": "amar"
    },
    {
        "language": "punjabi",
        "word": "????????????"
    },
    {
        "language": "romanian",
        "word": "dragoste"
    },
    {
        "language": "russian",
        "word": "??????????"
    },
    {
        "language": "samoan",
        "word": "alofa"
    },
    {
        "language": "scots gaelic",
        "word": "ghaoil"
    },
    {
        "language": "serbian",
        "word": "??????????"
    },
    {
        "language": "sesotho",
        "word": "lerato"
    },
    {
        "language": "shona",
        "word": "rudo"
    },
    {
        "language": "sindhi",
        "word": "????????"
    },
    {
        "language": "sinhala",
        "word": "????????????"
    },
    {
        "language": "slovak",
        "word": "l??ska"
    },
    {
        "language": "slovinian",
        "word": "ljubezen"
    },
    {
        "language": "somali",
        "word": "jacayl"
    },
    {
        "language": "sudanese",
        "word": "bogoh"
    },
    {
        "language": "swahili",
        "word": "upendo"
    },
    {
        "language": "swedish",
        "word": "k??rlek"
    },
    {
        "language": "tamil",
        "word": "???????????????"
    },
    {
        "language": "tatar",
        "word": "????????????????"
    },
    {
        "language": "telugu",
        "word": "???????????????"
    },
    {
        "language": "thai",
        "word": "?????????"
    },
    {
        "language": "turkish",
        "word": "a??k"
    },
    {
        "language": "turkmen",
        "word": "s????gi"
    },
    {
        "language": "ukranian",
        "word": "??????????????"
    },
    {
        "language": "urdu",
        "word": "????????"
    },
    {
        "language": "vietnamese",
        "word": "y??u"
    },
    {
        "language": "yiddish",
        "word": "????????"
    },
    {
        "language": "zulu",
        "word": "uthando"
    }
];

// array of languages that the characters need to italicised
const to_italic = ['hebrew', 'hindi', 'korean', 'kannada', 'lao', 'macedonian', 'mongolian', 'nepali', 'odia', 'russian', 'serbian', 'telugu', 'thai', 'marathi'];

// array of languages that need to reduced in font size
const to_medium = ['belarusian', 'bengali', 'greek', 'armenian', 'bulgarian', 'gujarati', 'khmer', 'kazakh', 'kyrgyz', 'punjabi', 'tamil', 'ukranian'];

populateList();