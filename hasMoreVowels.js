//  function hasMoreVowels(word){
//     const vowels = ["a", "e", "i", "o", "u"];
//     let vowelsCount = 0;
//     let wordSplit = word.toLowerCase();

//     for (let i = 0; i < wordSplit.length; i++){
//         const letter = wordSplit[i];
//         if (vowels.includes(letter)){
//             vowelsCount++;
//         }
//         if (vowelsCount > word.length / 2){
//             return true;
//         }
//     }
//     return false;
//  }

// console.log(hasMoreVowels('Ice'));

// function hasMoreVowels(word){
//     let vowelCount = 0;
    // let nonVowelCount = 0;
//     word = word.toLowerCase();
//     for(let i = 0; i < word.length; i++){
//         if (
//             word[i] === "a" ||
//             word[i] === "e" ||
//             word[i] === "i" ||
//             word[i] === "o" ||
//             word[i] === "u"
//         ){  
//             vowelCount++
//         } else{
//             nonVowelCount++
//         }
//     }
//     if (vowelCount > nonVowelCount){
//         return true;
//     } else{
//         return false;
//     }
// }

function hasMoreVowels(word){
    const vowels = ["a", "e", "i", "o", "u"];
    let vowelsCount = 0;
    let nonVowelCount = 0;
    let wordArray = word.toLowerCase().split('');

    wordArray.forEach(function(letter) {
        vowels.includes(letter)? vowelsCount++: nonVowelCount++;
    })
    return vowelsCount > nonVowelCount;
 }

console.log(hasMoreVowels("true"))