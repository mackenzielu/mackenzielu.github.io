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
        "word": "αγάπη"
    },
    {
        "language": "Arabic",
        "word": "حب"
    },
    {
        "language": "albanian",
        "word": "dashuri"
    },
    {
        "language": "amharic",
        "word": "ፍቅር"
    },
    {
        "language": "armenian",
        "word": "Սեր"
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
        "word": "каханне"
    },
    {
        "language": "bengali",
        "word": "ভালবাসা"
    },
    {
        "language": "bosnian",
        "word": "ljubavi"
    },
    {
        "language": "bulgarian",
        "word": "любов"
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
        "word": "爱"
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
        "word": "სიყვარული"
    },
    {
        "language": "german",
        "word": "liebe"
    },
    {
        "language": "gujarati",
        "word": "પ્રેમ"
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
        "word": "אהבה"
    },
    {
        "language": "hindi",
        "word": "प्रेम"
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
        "word": "ást"
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
        "word": "grá"
    },
    {
        "language": "italian",
        "word": "amore"
    },
    {
        "language": "japanese",
        "word": "愛"
    },
    {
        "language": "javanese",
        "word": "katresnan"
    },
    {
        "language": "kannada",
        "word": "ಪ್ರೀತಿ"
    },
    {
        "language": "kazakh",
        "word": "махаббат"
    },
    {
        "language": "khmer",
        "word": "ស្រឡាញ់"
    },
    {
        "language": "kiryarwanda",
        "word": "urukundo"
    },
    {
        "language": "korean",
        "word": "사랑"
    },
    {
        "language": "kurdish",
        "word": "evîn"
    },
    {
        "language": "kyrgyz",
        "word": "сүйүү"
    },
    {
        "language": "lao",
        "word": "ຮັກ"
    },
    {
        "language": "latin",
        "word": "amare"
    },
    {
        "language": "latvian",
        "word": "mīlestība"
    },
    {
        "language": "lithuanian",
        "word": "meilė"
    },
    {
        "language": "luxembourish",
        "word": "Léift"
    },
    {
        "language": "macedonian",
        "word": "убов"
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
        "word": "സ്നേഹം"
    },
    {
        "language": "maltese",
        "word": "imħabba"
    },
    {
        "language": "moari",
        "word": "aroha"
    },
    {
        "language": "marathi",
        "word": "प्रेम"
    },
    {
        "language": "mongolian",
        "word": "хайр"
    },
    {
        "language": "burmese",
        "word": "aahkyit"
    },
    {
        "language": "nepali",
        "word": "माया"
    },
    {
        "language": "norwegian",
        "word": "kjærlighet"
    },
    {
        "language": "odia",
        "word": "ପ୍ରେମ"
    },
    {
        "language": "pashto",
        "word": "مينه"
    },
    {
        "language": "persian",
        "word": "عشق"
    },
    {
        "language": "polish",
        "word": "miłość"
    },
    {
        "language": "portuguese",
        "word": "amar"
    },
    {
        "language": "punjabi",
        "word": "ਪਿਆਰ"
    },
    {
        "language": "romanian",
        "word": "dragoste"
    },
    {
        "language": "russian",
        "word": "люблю"
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
        "word": "љубав"
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
        "word": "پيار"
    },
    {
        "language": "sinhala",
        "word": "ආදරය"
    },
    {
        "language": "slovak",
        "word": "láska"
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
        "word": "kärlek"
    },
    {
        "language": "tamil",
        "word": "காதல்"
    },
    {
        "language": "tatar",
        "word": "мәхәббәт"
    },
    {
        "language": "telugu",
        "word": "ప్రేమ"
    },
    {
        "language": "thai",
        "word": "รัก"
    },
    {
        "language": "turkish",
        "word": "aşk"
    },
    {
        "language": "turkmen",
        "word": "söýgi"
    },
    {
        "language": "ukranian",
        "word": "кохання"
    },
    {
        "language": "urdu",
        "word": "محبت"
    },
    {
        "language": "vietnamese",
        "word": "yêu"
    },
    {
        "language": "yiddish",
        "word": "ליבע"
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