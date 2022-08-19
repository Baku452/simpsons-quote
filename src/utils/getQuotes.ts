
async function getQuotes(character : string = "", count : number = 1) {
    let url;
    let queries;
    queries = `?character=${character}&count=${count}`
    url =  (`https://thesimpsonsquoteapi.glitch.me/quotes${queries}`) 
    const response = await fetch(url);
    const quote = await response.json()
    return quote;
}


export { getQuotes };