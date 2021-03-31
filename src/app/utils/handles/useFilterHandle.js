import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import config from 'src/environments/config';
import { ManageAccountServices } from 'src/app/services';

export const useFilterHandle = (props) => {
    const { fetchApi, mapToFilter } = props

    const [recordsSelect, setRecordsSelect] = useState([])

    const [filterList, setFilterList] = useState([]);

    const [action, setAction] = useState("filter")

    const [clickFilter, setClickFilter] = useState(false)


    useEffect(() => {
        loadFilterInit()
    }, [])

    // console.log("filterList:" + JSON.stringify(filterList))
    const loadFilterInit = async () => {
        try {

            const response = await (await fetchApi).data

            // console.log("response: " + response)
            if (response && response != null) {
                if (response.result == config.useResultStatus.SUCCESS) {

                    let records = response.info.records
                    records = records && records != null && records.length > 0 ? mapToFilter(records) : []


                    // console.log("RecordsSelect: " + JSON.stringify(records))

                    await setRecordsSelect(records ? records : [])

                    const mapFilterList = records.map((val) => (val.ID))

                    // console.log("mapList: " + JSON.stringify(mapFilterList))

                    await setFilterList(records ? mapFilterList : [])

                    // toast.success("Thành công")
                } else {
                    toast.error(`${config.useMessage.resultFailure} - ${response.errorInfo.message}`)
                }
            } else {
                throw new Error("Response is null or undefined")
            }

        } catch (err) {
            toast.error(`${config.useMessage.fetchApiFailure} + ${err}`)
        }
    }


    return { recordsSelect, setRecordsSelect, filterList, setFilterList, action, setAction, clickFilter, setClickFilter }
}

