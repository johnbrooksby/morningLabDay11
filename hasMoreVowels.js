 const hasMoreVowels = (word) => {
    const vowels = ["a", "e", "i", "o", "u"];
    let vowelsCount = 0;
    let wordSplit = word.toLowerCase();

    for (let i = 0; i < wordSplit.length; i++){
        const letter = wordSplit[i];
        if (vowels.includes(letter)){
            vowelsCount++;
        }
        if (vowelsCount > word.length / 2){
            return true;
        }
    }
    return false;
 }

console.log(hasMoreVowels('Ice'));