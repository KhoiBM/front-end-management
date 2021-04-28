import React from 'react'
import { animateScroll as scroll } from 'react-scroll';

export const useScrollToTop = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    }
    return { scrollToTop }
}
