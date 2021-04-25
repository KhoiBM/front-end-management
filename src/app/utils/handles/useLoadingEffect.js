import React, { useEffect } from 'react'
import { useLoaderHandle } from './useLoaderHandle'

export const useLoadingEffect = () => {
    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()

    console.log("loading: " + JSON.stringify(loading))


    useEffect(() => {

        showLoader()

        hideLoader()

    }, [])

    useEffect(() => {

        console.log("RefreshLoading: " + JSON.stringify(loading))

    }, [loading])

    return { loading, setLoading, showLoader, hideLoader }
}
