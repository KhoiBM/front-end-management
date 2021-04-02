/* eslint-disable react/prop-types */
import { useEffect, } from 'react'
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

export const CanActive = (props) => {
    const history = useHistory();
    useEffect(() => {
        const token = localStorage.getItem("pps-token");
        const role = localStorage.getItem("role");
        if (!token || !role) history.push("/auth/signin")
        console.log("role:" + role);
        console.log("isRole:" + props.isRole);
        if (role != props.isRole) {
            toast.error("Không có quyền truy cập")
            history.push("/auth/signin")
        }
    }, [])
    return null
}


