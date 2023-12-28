export default async function getWikiResults(searchTerm: string) {
    // we just know that searchTerm will be a string and that we are sending a searchterm at all
    // URLSearchParams is a browser standard constructor
    // the below url parameters are specific to wikipidia
    const searchParams = new URLSearchParams({
        action: 'query',
        generator: 'search',
        gsrsearch: searchTerm,
        gsrlimit: '20',
        prop: 'pageimages|extracts',
        exchars: '100',
        exintro: 'true',
        explaintext: 'true',
        exlimit: 'max',
        format: 'json',
        origin: '*',
    })
    const response = await fetch('https://en.wikipedia.org/w/api.php?' + searchParams)
    return response.json()

}
