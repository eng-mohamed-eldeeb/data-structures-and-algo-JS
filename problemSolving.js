
function charCount (str) {
    //make an opject to return
    const result= {};
    //loop over str, for each char
    for(var char of str){
        result[char] = ++result[char] || 1 
    }
        //if a char is sothing else don't do any thing  
    //return the opject
    return result;
}
console.log(charCount('Hi there')) 