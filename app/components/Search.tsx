'use client'

import { useState, FormEvent } from "react"
import { useRouter } from "next/router"

export default function Search () {
    const [search, setSearch] = useState('')
    const router = useRouter()
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setSearch('')
        router.push(`/${search}/`)
        // pushes rout onto page address
    }

    return (
        <form
            className="w-50 justify-center md:justify-between"
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