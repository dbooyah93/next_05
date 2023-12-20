'use client'

import { useState } from "react"
import { useRouter } from "next/router"

export default function Search () {
    const [search, setSearch] = useState('')
    const router = useRouter()
    const handleSubmit = async (event) => {
        event.preventDefault()
        setSearch('')
        router.push(`/${search}/`)
    }

    return (
        <div>
            Search
        </div>
    )
}