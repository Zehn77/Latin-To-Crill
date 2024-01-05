

var alpha = [ //kirill-lotin uchun lotin alfaviti
    'A', 'B', 'V', 'G', 'D', 'E', 'Yo', 'J', 'Z', 'I', 'Y', 'K', 'L', 'M', 'N', 'O', 'P',
    'R', 'S', 'T', 'U', 'F', 'X', 'Ts', 'Ch', 'Sh', 'Sh', '\'', 'I', '', 'E', 'Yu', 'Ya', 'G\'', 'Q', 'H', 'O\'',
    'a', 'b', 'v', 'g', 'd', 'e', 'yo', 'j', 'z', 'i', 'y', 'k', 'l', 'm', 'n', 'o', 'p',
    'r', 's', 't', 'u', 'f', 'x', 'ts', 'ch', 'sh', 'sh', '\'', 'i', '', 'e', 'yu', 'ya', 'g\'', 'q', 'h', 'o\'',
];

var alphaLatin = [ //lotin-kirill uchun lotin alfaviti
    'A', 'B', 'V', 'G', 'D', 'E', '‡', 'J', 'Z', 'I', 'Y', 'K', 'L', 'M', 'N', 'O', 'P',
    'R', 'S', 'T', 'U', 'F', 'X', '‡', '‡', '‡', '‡', '‡', '‡', '‡', '‡', '‡', '‡', '‡', 'Q', 'H', '‡',
    'a', 'b', 'v', 'g', 'd', 'e', '‡', 'j', 'z', 'i', 'y', 'k', 'l', 'm', 'n', 'o', 'p',
    'r', 's', 't', 'u', 'f', 'x', '‡', '‡', '‡', '‡', '\'', '‡', '‡', '‡', '‡', '‡', '‡', 'q', 'h', '‡',
];
var alphaRus = [
    'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П',
    'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', 'Ғ', 'Қ', 'Ҳ', 'Ў',
    'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п',
    'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я', 'ғ', 'қ', 'ҳ', 'ў',
];


/*=================kirillga o'girish=================== */

function kirillga(originalMessage) {
    /*original textni olyapti */
    var CyrillicTranslated = "";         //kirill ga o'girilgan xabar
    /*avval bu harf birikmalar o'zgartirilsin : */
    originalMessage = originalMessage.replace(/`/g, "\'");
    originalMessage = originalMessage.replace(/ʹ/g, "\'");
    originalMessage = originalMessage.replace(/ʻ/g, "\'");
    originalMessage = originalMessage.replace(/ʼ/g, "\'");
    originalMessage = originalMessage.replace(/ʽ/g, "\'");
    originalMessage = originalMessage.replace(/ˊ/g, "\'");
    originalMessage = originalMessage.replace(/ˋ/g, "\'");
    originalMessage = originalMessage.replace(/‘/g, "\'");
    //bu O' ning shapkasi. Har xil variantda tarjima qiladi :)

    originalMessage = originalMessage.replace(/Ye/g, "Е");
    originalMessage = originalMessage.replace(/YE/g, "Е");
    originalMessage = originalMessage.replace(/Yo/g, "Ё");
    originalMessage = originalMessage.replace(/YO/g, "Ё");
    originalMessage = originalMessage.replace(/Ch/g, "Ч");
    originalMessage = originalMessage.replace(/CH/g, "Ч");
    originalMessage = originalMessage.replace(/Sh/g, "Ш");
    originalMessage = originalMessage.replace(/SH/g, "Ш");
    originalMessage = originalMessage.replace(/Yu/g, "Ю");
    originalMessage = originalMessage.replace(/YU/g, "Ю");
    originalMessage = originalMessage.replace(/Ya/g, "Я");
    originalMessage = originalMessage.replace(/YA/g, "Я");
    originalMessage = originalMessage.replace(/Ts/g, "Ц");
    originalMessage = originalMessage.replace(/TS/g, "Ц");

    originalMessage = originalMessage.replace(/G\'/g, "Ғ");
    originalMessage = originalMessage.replace(/O\'/g, "Ў");

    originalMessage = originalMessage.replace(/ye/g, "е");
    originalMessage = originalMessage.replace(/yo/g, "ё");
    originalMessage = originalMessage.replace(/ch/g, "ч");
    originalMessage = originalMessage.replace(/sh/g, "ш");
    originalMessage = originalMessage.replace(/yu/g, "ю");
    originalMessage = originalMessage.replace(/ya/g, "я");
    originalMessage = originalMessage.replace(/ts/g, "ц");
    originalMessage = originalMessage.replace(/g\'/g, "ғ");
    originalMessage = originalMessage.replace(/o\'/g, "ў");

    function Eliser(currentWord) {//bu e harfini nastroyka qiladi ;)

        if (currentWord[0] === 'E') {
            // currentWord.charAt(0) = 'Э'; or   currentWord[0] = 'э'; //this is read only ! u cant modify it :)
            var E = currentWord.replace(/E/i, "Э");
            //i means case insensitive. regular expressions are written without quotes. replace() method replaces only the first match                
            return E;
        }
        else if (currentWord[0] === 'e') {
            var e = currentWord.replace(/e/i, "э");
            return e;
        }
        else {
            return currentWord;//shu bug ni deb aaancha vatim ketdi! Nega boshqa so'zlarni qaytarmaydi deyman-a yana :)
        }
    }
    let letterE = originalMessage.split(' ').map(Eliser).join(' ');
    originalMessage = letterE;

    /*kirillga o'girish algoritmi :*/
    function encrypt(string) {
        /*asosiy kirill ga o'girish algoritmi */
        for (var i = 0; i < string.length; i++) {
            for (var j = 0; j < alphaLatin.length; j++) {


                if (string[i] == alphaLatin[j]) {
                    CyrillicTranslated += alphaRus[j]; break;
                }
                /*simvollarni va shuningdek o'zi kirill alifbosidagi harflarni ham o'zgartirmaydi: */
                else if ((string.charCodeAt(i) >= 9 && string.charCodeAt(i) <= 11) || (string.charCodeAt(i) > 32 && string.charCodeAt(i) < 39) || (string.charCodeAt(i) > 39 && string.charCodeAt(i) <= 64) || (string.charCodeAt(i) >= 91 && string.charCodeAt(i) < 96) || (string.charCodeAt(i) >= 123 && string.charCodeAt(i) <= 1300)) {
                    CyrillicTranslated += string[i]; break;
                    // alert("son simvol topdi"); 
                }

                else if (string.charCodeAt(i) === 32) { /* probelni necha bo'lsa shuncha qo'shadi :)*/
                    CyrillicTranslated += " "; break;
                }
            }
        }
        // console.log(CyrillicTranslated)
    }

    encrypt(originalMessage);//keyin tarjima uchun yubor :)
    /*natijani return qiladi */
    return CyrillicTranslated;

};


export default kirillga;