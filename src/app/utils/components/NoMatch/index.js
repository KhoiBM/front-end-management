import React from 'react';
import {
    useLocation
} from "react-router-dom";
function NoMatch() {
    let location = useLocation();

    return (
        <div>
            <h3>
                {/* No match for <code>{location.pathname}</code> */}
                <p>NoMatch</p>
            </h3>
        </div>
    );
}
export default NoMatch