import getWikiResults from "@/lib/getWikiResults"

type Props = {
    // params are always a string
    // we know params are coming in because that is a requirement for finding this page
    // searchTerm is used because of the folder name determining this param
    // this is all put together by next
    params: {
        searchTerm: string
    }
}
export async function generateMetadata({ params: { searchTerm }} : Props) {
    const wikiData: Promise<SearchResult> = getWikiResults(searchTerm)
    const data = await wikiData
    const displayTerm = searchTerm.replaceAll('%20', ' ')

    if (!data?.query?.pages) {
        return {
            title: `${displayTerm} Not Found`
        }
    }
    return {
        title: displayTerm,
        description: `Search results for ${displayTerm}`
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
                    : <h2 className="p-2 text-xl">{`${searchTerm} Not Found`}</h2>
                    }
        </div>
    )
    return content
}