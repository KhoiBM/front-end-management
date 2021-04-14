/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import config from 'src/environments/config'
import { makeStyles, InputLabel, FormControl, MenuItem, Select, Chip, Input, useTheme } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        // width: props => props.length ? `${(props.length * 2) + 15}vmax` : "15vmax",
        width: "15vmax",
        maxWidth: "15vmax",
        minWidth: "250px"

    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
        background: "var( --tertiary-color-main)",
        color: "#fff"
    },
    selectContainer: {
        background: "#fff",
    }
}))

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 200,
        },
    },
};

function getStyles(ID, recordsSelect, theme) {
    return {
        fontWeight:
            recordsSelect.indexOf(ID) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export const FilterChipBar = (props) => {

    const { recordsSelect, setRecordsSelect, filterList, setFilterList, inputLabel, setAction, setClickFilter } = props

    const theme = useTheme();

    const classes = useStyles({
        length: filterList.length
    });

    const [first, setFirst] = useState(true)

    const [filterSelectList, setFilterSelectList] = useState([])

    // console.log("filterList: " + filterList)

    const handleFilterChange = (event) => {
        setClickFilter((prev) => !prev)
        setAction("filter")
        // console.log("event.target.value : " + JSON.stringify(event.target.value))

        // setFilterSelectList(event.target.value.length > 0 ? event.target.value : recordsSelect && recordsSelect != null && recordsSelect.length > 0 ? [...recordsSelect.map((val) => (val.ID))] : []);
        // setFilterSelectList(event.target.value);

        // setFilterList(event.target.value.length > 0 ? event.target.value : recordsSelect && recordsSelect != null && recordsSelect.length > 0 ? recordsSelect.map((val) => (val.ID)) : []);





        // if (event.target.value.indexOf(0) != -1) {
        //     // console.log("0")
        //     setFilterSelectList([0]);
        //     setFilterList(recordsSelect && recordsSelect != null && recordsSelect.length > 0 ? recordsSelect.map((val) => (val.ID)) : []);
        // } else {
        setFilterSelectList(event.target.value.length > 0 ? event.target.value : []);
        setFilterList(event.target.value.length > 0 ? event.target.value : recordsSelect && recordsSelect != null && recordsSelect.length > 0 ? recordsSelect.map((val) => (val.ID)) : []);
        // }
    }


    useEffect(() => {
        // console.log("filterSelectList: " + JSON.stringify(filterSelectList))
    }, [filterSelectList])

    return (
        <>

            <FormControl className={classes.formControl} variant="outlined" >

                <InputLabel id="filter-chip-label">
                    {/* {inputLabel} */}
                </InputLabel>
                <Select
                    labelId="filter-chip-label"
                    id="filter-mutiple-chip"
                    multiple
                    value={filterSelectList}
                    onChange={handleFilterChange}
                    displayEmpty={true}
                    // displayEmpty={false}
                    renderValue={(selected) => {
                        // console.log("selected: " + JSON.stringify(selected))
                        // console.log("selectedlength: " + selected.length)
                        return (
                            <div className={classes.chips}>
                                {
                                    selected.indexOf(0) != -1
                                        // || selected[0] == 0
                                        || selected.length == 0
                                        || selected == recordsSelect
                                        ? (() => {
                                            const allFilterList = recordsSelect.map((val) => (val.ID))
                                            // console.log("filterAll: " + recordsSelect.map((val) => (val.ID)))
                                            return (
                                                < Chip key={allFilterList} label={"Tất cả"} className={classes.chip} />
                                            )
                                        })()
                                        : selected.map((value) => {
                                            const name = recordsSelect && recordsSelect.find((val) => val.ID == value).name
                                            const labelValue = name ? name : value
                                            // console.log(recordsSelect.find((val) => val.ID == value).name)
                                            return (
                                                < Chip key={value} label={labelValue} className={classes.chip} />
                                            )
                                        })


                                }
                            </div>
                        )
                    }}
                    MenuProps={MenuProps}
                    // labelWidth={50}
                    className={classes.selectContainer}
                >
                    <MenuItem value={0} key={0} style={{ display: "none" }} >{"Tất cả"}</MenuItem>
                    {
                        recordsSelect && recordsSelect.map((val, index) => (<MenuItem value={val.ID} key={val.ID} style={getStyles(val.ID, recordsSelect, theme)}>{val.name}</MenuItem>))
                    }
                </Select>

            </FormControl>
        </>
    )
}


{/* <MenuItem value={0} key={0} style={getStyles(0, recordsSelect, theme)}>{"Tất cả"}</MenuItem> */ }
    //  // selected.length == recordsSelect.length ||
    //  selected.indexOf(0) != -1
    //  ? (() => {
    //      const allFilterList = recordsSelect.map((val) => (val.ID))
    //      // console.log("filterAll: " + recordsSelect.map((val) => (val.ID)))
    //      return (
    //          < Chip key={allFilterList} label={"Tất cả"} className={classes.chip} />
    //      )
    //  })()
    //  : selected.map((value) => {
    //      const name = recordsSelect && recordsSelect.find((val) => val.ID == value).name
    //      const labelValue = name ? name : value
    //      // console.log(recordsSelect.find((val) => val.ID == value).name)
    //      return (
    //          < Chip key={value} label={labelValue} className={classes.chip} />
    //      )
    //  })


// setFilterSelectList(event.target.value.length > 0 ? event.target.value : recordsSelect && recordsSelect != null && recordsSelect.length > 0 ? [0, ...recordsSelect.map((val) => (val.ID))] : []);
// if (event.target.value.indexOf(0) != -1) {
//     // console.log("0")
//     setFilterList(recordsSelect && recordsSelect != null && recordsSelect.length > 0 ? recordsSelect.map((val) => (val.ID)) : []);
// } else {
//     setFilterList(event.target.value.length > 0 ? event.target.value : recordsSelect && recordsSelect != null && recordsSelect.length > 0 ? recordsSelect.map((val) => (val.ID)) : []);
// }


// import React, { useEffect, useState } from 'react'
// import { ManageAccountServices } from 'src/app/services'
// import config from 'src/environments/config'
// import { toast } from 'react-toastify'
// import { makeStyles, InputLabel, FormControl, MenuItem, Select, Chip, Input, useTheme } from '@material-ui/core'

// const useStyles = makeStyles(theme => ({
//     formControl: {
//         margin: theme.spacing(1),
//         // width: props => props.length ? `${(props.length * 2) + 15}vmax` : "15vmax",
//         width: "15vmax",
//         maxWidth: "15vmax",
//         minWidth: "250px"

//     },
//     chips: {
//         display: 'flex',
//         flexWrap: 'wrap',
//     },
//     chip: {
//         margin: 2,
//         background: "var( --tertiary-color-main)",
//         color: "#fff"
//     },
//     selectContainer: {
//         background: "#fff",
//     }
// }))

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;

// const MenuProps = {
//     PaperProps: {
//         style: {
//             maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//             width: 200,
//         },
//     },
// };

// function getStyles(roleID, recordsRole, theme) {
//     return {
//         fontWeight:
//             recordsRole.indexOf(roleID) === -1
//                 ? theme.typography.fontWeightRegular
//                 : theme.typography.fontWeightMedium,
//     };
// }




// export const FilterChipBar = () => {


//     const theme = useTheme();

//     const [recordsRole, setRecordsRole] = useState([])

//     const [roleIDList, setRoleIDList] = React.useState([]);

//     const classes = useStyles({
//         length: roleIDList.length
//     });

//     console.log("roleIDList: " + roleIDList)
//     const handleChange = (event) => {
//         setRoleIDList(event.target.value.length > 0 ? event.target.value : recordsRole && recordsRole.length > 0 ? recordsRole.map((val) => (val.roleID)) : []);

//     }

//     useEffect(() => {
//         loadInit()
//     }, [])


//     const loadInit = async () => {
//         try {
//             const response = await (await ManageAccountServices.getRoleToFilter()).data
//             // console.log("response: " + response)
//             if (response && response != null) {
//                 if (response.result == config.useResultStatus.SUCCESS) {
//                     // console.log("recordsRole: " + JSON.stringify(response.info.records))
//                     setRecordsRole(response.info.records ? response.info.records : [])
//                     console.log("mapList: " + response.info.records.map((val) => (val.roleID)))
//                     setRoleIDList(response.info.records ? response.info.records.map((val) => (val.roleID)) : [])
//                     // toast.success("Thành công")
//                 } else {
//                     toast.error(config.useMessage.resultFailure)
//                 }
//             } else {
//                 throw new Error("Response is null or undefined")
//             }

//         } catch (err) {
//             toast.error(`${config.useMessage.fetchApiFailure} + ${err}`)
//         }
//     }

//     return (
//         <>

//             <FormControl className={classes.formControl} variant="outlined" >

//                 <InputLabel id="roleID-chip-label">Vai trò</InputLabel>
//                 <Select
//                     labelId="roleID-chip-label"
//                     id="roleID-mutiple-chip"
//                     multiple
//                     value={roleIDList}
//                     onChange={handleChange}
//                     renderValue={(selected) => (
//                         <div className={classes.chips}>
//                             {selected.map((value) => {
//                                 const roleName = recordsRole && recordsRole.find((val) => val.roleID == value).roleName
//                                 const labelValue = roleName ? roleName : value
//                                 // console.log(recordsRole.find((val) => val.roleID == value).roleName)
//                                 return (
//                                     < Chip key={value} label={labelValue} className={classes.chip} />
//                                 )
//                             })}
//                         </div>
//                     )}
//                     MenuProps={MenuProps}
//                     labelWidth={50}
//                     className={classes.selectContainer}
//                 >

//                     {
//                         recordsRole && recordsRole.map((val, index) => (<MenuItem value={val.roleID} key={val.roleID} style={getStyles(val.roleID, recordsRole, theme)}>{val.roleName}</MenuItem>))
//                     }
//                 </Select>

//             </FormControl>
//         </>
//     )
// }
