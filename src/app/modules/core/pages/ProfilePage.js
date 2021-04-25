import React from 'react'
import { Profile } from '../components'
import { CanActive, Loader } from 'src/app/components'
import config from 'src/environments/config'
import { useLoadingEffect } from 'src/app/utils'
const ProfilePage = () => {

    const { loading, setLoading, showLoader, hideLoader } = useLoadingEffect()

    return (
        <>
            {/* <p>ProfilePage</p> */}
            <CanActive isRole={localStorage.getItem("role")} />
            <Loader loading={loading} />
            <Profile />
        </>
    )
}

export default ProfilePage
