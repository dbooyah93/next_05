import getWikiResults from "@/lib/getWikiResults"

type Props = {
    // params are always a string
    params: {
        searchTerm: string
    }
}

export default async function SearchResults ({ params: { searchTerm } }: Props) {
    const wikiData: Promise<SearchResult> = getWikiResults( searchTerm )
    const data = await wikiData
    const results: Result[] | undefined = data?.query?.pages

    const content = (
        <div className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
            <h2 className='p-2 text-xl'>Results:</h2>
            {results
            // Object.map returns an array of the result generated on each loop
                    ? Object.values( results ).map( (result, i) => {
                        return <p key={i}>
                            { JSON.stringify(result) }
                        </p>
                    })
                    : <h2 className="p-2 text-white text-xl">{`${searchTerm} Not Found`}</h2>
                    }
        </div>
    )
    return content
}