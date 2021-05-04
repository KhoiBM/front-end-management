/* eslint-disable react/prop-types */
import { useEffect, useState, } from 'react'
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

export const CanActive = (props) => {
    const history = useHistory();
    const [ready, setReady] = useState(false)
    useEffect(() => {
        const token = localStorage.getItem("pps-token");
        const role = localStorage.getItem("role");
        console.log("role:" + role);
        console.log("isRole:" + props.isRole);

        if (!token || !role) {
            toast.error("Không có quyền truy cập")
            history.replace("/auth/signin")
        } else if (role != props.isRole) {
            toast.error("Không có quyền truy cập")
            history.replace("/auth/signin")
        } else {
            setReady(true)
        }

    }, [])
    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <>
            {ready &&
                // eslint-disable-next-line react/react-in-jsx-scope
                <>
                    {props.children}
                </>
            }
        </>
    )
}


