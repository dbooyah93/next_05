'use client'

import { useState, FormEvent } from "react"
import { useRouter } from "next/navigation"

export default function Search () {
    const [search, setSearch] = useState('')
    const router = useRouter()
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        // prevent reload
        event.preventDefault()
        // reset search term
        setSearch('')
        // set the route to the new page with the name of the search term
        router.push(`/${search}/`)
    }

    // no action value
    // class names from TW
    return (
        <form
            className="w-50 flex justify-center md:justify-between"
            onSubmit={handleSubmit}>
            <input type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-white p-2 w-80 text-xl rounded-xl"
                placeholder="Search"
            />
            <button className="p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold">
                🚀
            </button>
        </form>
    )
}