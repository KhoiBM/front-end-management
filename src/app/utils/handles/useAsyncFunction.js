import React from 'react'

export const useAsyncFunction = () => {
    const asyncEvery = async (arr, predicate) => {
        console.log("asyncEvery")
        // for (let value of arr) {
        //     if (!await predicate(value)) return false;
        // }
        for (let [index, value] of arr.entries()) {
            console.log("index:" + index)
            // console.log("value:" + value)
            if (!await predicate(value, index)) return false;
        }

        return true;
    };
    return { asyncEvery }
}
