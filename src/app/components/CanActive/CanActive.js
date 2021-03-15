/* eslint-disable react/prop-types */
import { useEffect, } from 'react'
import { useHistory } from 'react-router-dom';
// import { useShowSnackbar } from "src/app/utils/handles/index";
import { toast } from 'react-toastify';

const CanActive = (props) => {
    const history = useHistory();
    // const { showSnackbar } = useShowSnackbar();
    useEffect(() => {
        const token = localStorage.getItem("pps-token");
        const role = localStorage.getItem("role");
        if (!token || !role) history.push("/auth/login")
        console.log("role:" + role);
        console.log("isRole:" + props.isRole);
        if (role != props.isRole) {
            // showSnackbar("Không có quyền truy cập vào trang này", "error")
            toast.error("Không có quyền truy cập")
            history.push("/auth/signin")

        }
    }, [])
    return null
}

export default CanActive
