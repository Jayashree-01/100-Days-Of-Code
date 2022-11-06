// Programme to replace %20 when space appears.

function urlify(string){
    let url = '';
    for(let i=0; i<string.length; i++){
        url+= string[i] == ' '? '%20' : string[i];
    }
    return url;
}
console.log(urlify('Jaya   shree Das'));