/** String Permutation
 * All the characters of the string would be arranged
 * in different locations.
 * This program uses the container object as a reference where the 
 * values will be stored, and the pre parameter to update
 * new values. 
 */
// Use the pre Value to accumulate characters to form the permutation
const permuteString = (word, pre='', container=[]) => {
    // Base case
    if (word.length === 0 ) {
        container.push(pre);
        return container;
    } 
    
    let charArray = word.split('').sort();
    let lastChar = '';
    for (let i = 0; i < charArray.length; i++) {
        let char = charArray[i];
        
        if (i > 0 && char === lastChar) {
            continue;
        }

        let newPre = pre + char;
        
        console.log(` Prefix Value: ${newPre}`);
        let remainingArray = [...charArray]; 
        remainingArray.splice(i, 1);
        let remainStr = remainingArray.join('');

        lastChar = char;

        permuteString(remainStr, newPre, container);
    }
    return container;
}
    
    

console.log(permuteString("fcc"));