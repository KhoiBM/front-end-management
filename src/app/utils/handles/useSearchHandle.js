import React, { useState } from 'react'

export const useSearchHandle = () => {
    const [clickSearch, setClickSearch] = useState(false)
    const [searchAction, setSearchAction] = useState(false)
    const [keywords, setKeywords] = useState("")

    const handleKeywordsChange = (event) => {
        setKeywords(event.target.value)

        if (event.target.value && event.target.value != null && event.target.value.length > 0) {
            setSearchAction(true)
        } else {
            setSearchAction(false)
            setClickSearch(prev => !prev)
        }

        console.log("keywords: " + keywords)
    }

    return { clickSearch, setClickSearch, searchAction, setSearchAction, keywords, setKeywords, handleKeywordsChange }
}
