import React from 'react'
import { useLocation } from 'react-router-dom';

export const useOpendrawer = () => {
    let location = useLocation();
    let openDrawerByLink = false;
    if (location?.state?.openDrawer != null && location?.state?.openDrawer != undefined) {
        openDrawerByLink = location.state.openDrawer
        // console.log("open drawer not null not undefied")
    } else {
        // console.log("open drawer null or undefied")
    }
    return { openDrawerByLink }
}
