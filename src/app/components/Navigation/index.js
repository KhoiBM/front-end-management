import React, { useEffect } from 'react'
import { useGetStateLocation, useQueryURL } from 'src/app/utils'
import { useHistory } from 'react-router-dom'

export const Navigation = (props) => {
    const { data: dataToGet } = useGetStateLocation()
    const history = useHistory()
    useEffect(() => {
        if (dataToGet && dataToGet != null) {
            console.log("dataToGet: " + JSON.stringify(dataToGet))
            history.replace(dataToGet.locationObject)
        }
    }, [])

    return null
}
