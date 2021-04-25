import React, { useState } from 'react'
import { useWait } from './useWait'
import { useDispatch, useSelector } from 'react-redux';
import { useLoadingAction } from 'src/app/stores/actions';

export const useLoaderHandle = () => {


    const dispatch = useDispatch();

    const { loading } = useSelector((state) => state.loadingState)

    const { wait } = useWait()

    const hideLoader = async () => {

        await wait(1000)

        await dispatch(useLoadingAction().hideLoading())

    }
    const showLoader = async () => {
        await dispatch(useLoadingAction().showLoading())

    }

    return {
        loading,
        showLoader,
        hideLoader
    }
}
