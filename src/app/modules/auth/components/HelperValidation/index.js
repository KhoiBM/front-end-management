/* eslint-disable react/prop-types */
import React from 'react'
import styles from './helpervalidation.module.css'

const HelperValidation = (props) => {
    return (
        <>
            <div className={styles["helper-validation"]} >
                <span>{props.children}</span>
            </div>
        </>
    )
}

export default HelperValidation

// style={{
//     color: "var(--error-color-main)",
//     marginTop: "5px",
//     padding: "1 1 1 1",
//     fontSize: " 0.75rem",
//     fontStyle: "italic",
//     fontWeight: " 500"
// }}