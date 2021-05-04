
import { useLocation } from 'react-router-dom';

export const useGetStateLocation = () => {
    let location = useLocation();

    let data = {}

    if (location?.state?.data && location?.state?.data != null) {
        data = location.state.data
    }
    return { data }
}