type Result = {
    // determined by what we know Wiki will send back as a result
    pageid: string,
    title: string,
    extract: string,
    thumbnail?: {
        source: string,
        width: number,
        height: number,
    }
}

type SearchResult = {
    // optional query and pages
    query?: {
        pages?: Result[]
    }
}