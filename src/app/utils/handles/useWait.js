import React from 'react'

export const useWait = () => {
    const sleep = (milliseconds) => {
        return new Promise((resolve) => setTimeout(resolve, milliseconds));
    };
    const wait = async (milliseconds = 2000) => {
        await sleep(milliseconds);
    };
    return { wait }
}
