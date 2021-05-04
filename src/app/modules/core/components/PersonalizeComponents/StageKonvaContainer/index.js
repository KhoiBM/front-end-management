/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react'
import { makeStyles } from '@material-ui/core';
import { Layer, Stage, Image as ImageKonva, Transformer, Group } from 'react-konva';
import useImage from 'use-image';
import { v4 as uuidv4 } from 'uuid';
import { v5 as uuidv5 } from 'uuid';
import deleteIcon from 'src/app/assets/image/cancel.png'
import { useRefresh } from 'src/app/utils';
import config from 'src/environments/config';
const useStyles = makeStyles(theme => ({
    dropStageZone: {

        width: "902px !important",
        height: "602px !important",
        // border: "1px solid rgba(0, 0, 0, 0.23)",
        display: 'flex',
        justifyContent: "center !important",
        alignItems: "center !important",
        position: 'relative',


    },
    stageContainer: {
        position: "absolute",
        top: 0,
        right: 0,
        width: "100%",
        height: "100% !important",
        display: 'flex',
        justifyContent: "center !important",
        alignItems: "center !important",
        // background: "red",
        backgroundColor: "#fff !important",
        // border: "1px solid rgba(0, 0, 0, 0.23)",
        // backgroundImage: ({ bgPhoto }) => (`url("${bgPhoto && bgPhoto != null ? bgPhoto : ''}")`)
        "& .konvajs-content": {
            // display: 'flex',
            // justifyContent: "center !important",
            // alignItems: "center !important",
        },
        borderRadius: "10px",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
        overflow: "hidden",

    },
    layerContainer: {
        width: "90% !important",
        height: "90% !important",
        display: 'flex',
        justifyContent: "center !important",
        alignItems: "center !important",
        border: "1px solid blue",
    },
    cardMedia: {
        objectFit: "contain",
        maxWidth: "20%",
        maxHeight: "30%",
        width: 'auto',
        height: 'auto',
        // border: "1px solid blue",

    }
}))

const URLImage = ({
    image,
    isSelected,
    onSelect,
    selectShape,
    onDelete,
    onDragEnd,
    onChange,
    handleRefresh
}) => {

    // console.log("isSelected:" + JSON.stringify(isSelected))

    const shapeRef = useRef();
    const groupRef = useRef();
    const trRef = useRef();

    const [img] = useImage(`${image.src}`);

    const [deleteImage] = useImage(deleteIcon);

    const [scaledImage, setScaledImage] = useState({ ...image })

    const [groupImage, setGroupImage] = useState({ x: image.x, y: image.y })

    const [deleteButton, setDeleteButton] = useState({
        x: image.x,
        y: image.y,
        newWidth: 20,
        newHeight: 20
    })

    const [isDragging, setIsDragging] = useState(false);


    // console.log("img:")
    // console.log(img)
    // console.log("image:")
    // console.log(image)
    // console.log("scaledImage:")
    // console.log(scaledImage)

    useEffect(() => {
        if (img && img != null) {
            console.table(JSON.stringify(img))
            // console.log("width:" + JSON.stringify(img.width))
            // console.log("height:" + JSON.stringify(img.height))
            const data = getScaledImageCoordinates(700, 600, img.width, img.height)
            // console.log("data: " + JSON.stringify(data))
            setScaledImage(prev => ({
                ...prev,
                ...data
            }))
        }

    }, [img])

    useEffect(() => {
        if (isSelected) {
            // we need to attach transformer manually
            trRef.current.nodes([shapeRef.current]);
            trRef.current.getLayer().batchDraw();

        }
    }, [isSelected]);


    function getScaledImageCoordinates(
        containerWidth,
        containerHeight,
        width,
        height,
    ) {
        let bestRatio = (containerWidth) / width
        let newWidth = parseInt(width * bestRatio * 0.4),
            newHeight = parseInt(height * bestRatio * 0.4)
        return { newWidth, newHeight }
    }

    return (
        <>

            {
                isSelected &&
                <ImageKonva
                    onLoad={(e) => {
                        setDeleteButton(prev => ({
                            ...prev,
                            isDragging: true,
                            newWidth: scaledImage.newWidth > 0 ? 20 : 0,
                            newHeight: scaledImage.newHeight > 0 ? 20 : 0,
                            x: scaledImage.x,
                            y: scaledImage.y,
                        }))
                    }}

                    onClick={async (e) => {

                        selectShape(null)

                        await onDelete()

                        handleRefresh()

                    }}


                    image={deleteImage}



                    width={deleteButton ? deleteButton.newWidth : 10}
                    height={deleteButton ? deleteButton.newHeight : 10}


                    x={deleteButton.x - 100}
                    y={deleteButton.y - 100}

                    strokeWidth={2}
                    stroke={"white"}
                    fill={"white"}

                />
            }

            <ImageKonva

                onClick={onSelect}
                onTap={onSelect}

                ref={shapeRef}

                image={img}

                x={scaledImage.x - 130}
                y={scaledImage.y - 60}

                strokeWidth={2}
                // stroke={"red"}


                width={scaledImage ? scaledImage.newWidth : 0}
                height={scaledImage ? scaledImage.newHeight : 0}

                offsetX={scaledImage ? -Number((scaledImage.newWidth / 2)) : 0}
                offsetY={scaledImage ? -Number((scaledImage.newHeight / 10)) : 0}

                draggable

                onDragStart={(e) => {
                    setScaledImage(prev => ({
                        ...prev,
                        isDragging: true
                    }));
                    onChange({
                        ...scaledImage,
                        isDragging: true
                    })
                    setDeleteButton(prev => ({
                        ...prev,
                        isDragging: true
                    }))

                }}
                onDragEnd={e => {
                    setScaledImage(prev => ({
                        ...prev,
                        isDragging: false,
                        x: e.target.x() + 130,
                        y: e.target.y() + 60
                    }));
                    onChange({
                        ...scaledImage,
                        isDragging: false,
                        x: e.target.x() + 130,
                        y: e.target.y() + 60
                    })
                    setDeleteButton(prev => ({
                        ...prev,
                        isDragging: false,
                        x: e.target.x() + 130,
                        y: e.target.y() + 60
                    }))

                }}

                onTransformEnd={(e) => {
                    // transformer is changing scale of the node
                    // and NOT its width or height
                    // but in the store we have only width and height
                    // to match the data better we will reset scale on transform end
                    const node = shapeRef.current;
                    const scaleX = node.scaleX();
                    const scaleY = node.scaleY();

                    // we will reset it back
                    node.scaleX(1);
                    node.scaleY(1);

                    setScaledImage(prev => ({
                        ...prev,
                        x: node.x() + 130,
                        y: node.y() + 60,
                        // set minimal value
                        newWidth: Math.max(5, node.width() * scaleX),
                        newHeight: Math.max(node.height() * scaleY),
                    }));

                    setDeleteButton(prev => ({
                        ...prev,
                        x: node.x() + 130,
                        y: node.y() + 60,
                    }))


                }}

                onMouseEnter={e => {
                    // style stage container:
                    const container = e.target.getStage().container();
                    // container.style.cursor = "pointer";
                    container.style.cursor = "move";
                    // container.style.cursor = "crosshair";
                }}
                onMouseLeave={e => {
                    const container = e.target.getStage().container();
                    container.style.cursor = "default";
                }}

            />


            {/* </Group> */}


            {
                isSelected && (
                    <Transformer
                        ref={trRef}
                        borderStroke="#a7c5eb"
                        borderStrokeWidth={2}
                        // borderEnabled={true}
                        anchorStroke="#a7c5eb"
                        anchorStrokeWidth={2}
                        anchorSize={parseInt(10)}
                        anchorCornerRadius={1}
                        keepRatio={true}
                        // centeredScaling={true}
                        boundBoxFunc={(oldBox, newBox) => {
                            // limit resize
                            if (newBox.width < 5 || newBox.height < 5) {
                                return oldBox;
                            }
                            return newBox;
                        }}
                    />
                )
            }
        </>
    );
};

const URLBGImage = ({ image }) => {
    const [img] = useImage(`${image.src}`);
    const [scaledImage, setScaledImage] = useState({})
    // console.log("img:")
    // console.log(img)
    useEffect(() => {
        if (img && img != null) {
            console.table(JSON.stringify(img))
            // console.log("width:" + JSON.stringify(img.width))
            // console.log("height:" + JSON.stringify(img.height))
            const data = getScaledImageCoordinates(700, 600, img.width, img.height)
            // console.log("data: " + JSON.stringify(data))
            setScaledImage(data)
        }

    }, [img])
    function getScaledImageCoordinates(
        containerWidth,
        containerHeight,
        width,
        height,
    ) {
        let bestRatio = (containerWidth) / width
        let newWidth = width * bestRatio * 0.5,
            newHeight = height * bestRatio * 0.5
        return { newWidth, newHeight }
    }
    return (
        <ImageKonva
            image={img}
            x={image.x}
            y={image.y}

            strokeWidth={2}
            // stroke={"red"}

            width={scaledImage ? scaledImage.newWidth : 0}
            height={scaledImage ? scaledImage.newHeight : 0}

            // width={scaledImage ? scaledImage.width : 0}
            // height={scaledImage ? scaledImage.height : 0}

            offsetX={scaledImage ? -Number((scaledImage.newWidth / 1.2)) : 0}
            offsetY={scaledImage ? -Number((scaledImage.newHeight / 15)) : 0}

        />
    );
};


export const StageKonvaContainer = (props) => {


    const {
        bgPhoto,
        dragUrl,
        stageRef,
        isPressCreatePreviewPhoto,
        setIsPressCreatePreviewPhoto,
        setSeletedPhotoID,
        setPhotoCustomerUploadList,
        photoPreviewID,
        isPressDeletePreviewPhoto,
        setIsPressDeletePreviewPhoto,
        photoCustomerUploadList,
        setPhotoPreviewID,
        toPrintInStageImages,
        setToPrintInStageImages,
        personalizeType } = props

    const stageWidth = "1000"
    const stageHeight = "1000"

    const classes = useStyles({ bgPhoto });

    // if (personalizeType == config.usePersonalizeType.createYourOwn) {
    //     const [imgBg] = useImage(`${bgPhoto}`);
    // } else {

    // }



    const [selectedId, selectShape] = useState(null);

    const [bgStage, setBgStage] = useState(null)

    const { refresh, setRefresh, first, setFirst, handleRefresh } = useRefresh()


    // console.log("bgStage")
    // console.log(bgStage)
    useEffect(() => {

        if (bgPhoto && bgPhoto != null) {
            console.log("bgPhoto: " + bgPhoto)

            let imgBg = new Image()
            imgBg.crossOrigin = "Anonymous"
            imgBg.src = bgPhoto
            imgBg.id = uuidv4()

            console.log("imgBg: ")
            console.log(imgBg)

            setBgStage(imgBg)

        }



    }, [bgPhoto])

    useEffect(() => {
        // console.log("photoCustomerUploadListStage:")
        // console.log(photoCustomerUploadList)
    }, [photoCustomerUploadList])

    useEffect(() => {

    }, [isPressDeletePreviewPhoto])


    useEffect(() => {

        console.log("isPressCreatePreviewPhotoStage")
        selectShape(null)
        setSeletedPhotoID(null)



    }, [isPressCreatePreviewPhoto])


    useEffect(() => {
        // if (isPressCreatePreviewPhoto) {

        if (photoPreviewID && photoPreviewID != null) {
            setPhotoCustomerUploadList(prev => [...new Set(prev.concat(toPrintInStageImages.map((val) => ({ photoPreviewID: photoPreviewID, acceptedFile: val.acceptedFile }))))])
            setPhotoPreviewID(null)
        }

        // }

    }, [photoPreviewID])

    useEffect(() => {
        console.log("refresh")
        console.log("toPrintInStageImages:" + JSON.stringify(toPrintInStageImages))
    }, [dragUrl, toPrintInStageImages, refresh])

    useEffect(() => {


    }, [selectedId])

    // console.log("toPrintInStageImages:" + JSON.stringify(toPrintInStageImages))
    // console.log("selectedId:" + JSON.stringify(selectedId))

    const checkDeselect = (e) => {
        // deselect when clicked on empty area
        const clickedOnEmpty = e.target === e.target.getStage();
        if (clickedOnEmpty) {
            selectShape(null);
            console.log("changeSelectedIdStageNull")
            setSeletedPhotoID(null)

        }
    };


    return (
        <>

            <div
                onDrop={async (e) => {
                    e.preventDefault();
                    if (dragUrl.current && dragUrl.current != null && dragUrl.current.src && dragUrl.current.src != null && dragUrl.current.acceptedFile && dragUrl.current.acceptedFile != null) {
                        // register event position
                        stageRef.current.setPointersPositions(e);
                        // console.log("PointersPositions:" + stageRef.current.setPointersPositions(e))
                        // add image
                        // console.log("dragUrl.current")
                        // console.log(dragUrl.current)
                        const uuid = await `${uuidv4()}${new Date().getTime()}`
                        const source = dragUrl.current.src
                        const acceptedFile = dragUrl.current.acceptedFile
                        console.log("source")
                        console.log(source)
                        // console.log("acceptedFile")
                        // console.log(acceptedFile)
                        if (source && source != null && acceptedFile && acceptedFile != null) {
                            await setToPrintInStageImages(
                                toPrintInStageImages.concat([
                                    {
                                        ...stageRef.current.getPointerPosition(),
                                        src: source,
                                        acceptedFile,
                                        id: uuid
                                    }
                                ])
                            );

                            handleRefresh()
                            dragUrl.current.src = ""
                            dragUrl.current.acceptedFile = ""
                        }
                    }






                }}
                onDragOver={(e) => e.preventDefault()
                }
                className={classes.dropStageZone}

            >


                <Stage
                    className={classes.stageContainer}
                    ref={stageRef}
                    width={stageWidth * 0.9} height={stageHeight * 0.6}
                    onMouseDown={checkDeselect}
                    onTouchStart={checkDeselect}

                >
                    <Layer className={classes.layerContainer}>
                        {bgStage && bgStage != null &&
                            <URLBGImage image={bgStage}
                            />
                        }
                        {toPrintInStageImages && toPrintInStageImages != null && toPrintInStageImages.map((image, index) => {
                            return <URLImage image={image} key={index}
                                isSelected={image.id === selectedId}
                                onSelect={() => {
                                    selectShape(image.id);
                                    console.log("changeSelectedIdStage")
                                    setSeletedPhotoID(image.id)
                                }}
                                selectShape={selectShape}
                                onDelete={async () => {
                                    const newImages = await toPrintInStageImages.filter((val, index) => `${val.id}` !== `${image.id}`);

                                    // console.log("deletedImages:" + JSON.stringify(newImages))
                                    await setToPrintInStageImages(newImages);
                                    // console.log("onDelete:")
                                    handleRefresh()

                                }}
                                onChange={(newAttrs) => {
                                    const newImages = toPrintInStageImages.slice();
                                    newImages[index] = newAttrs;
                                    // console.log("newImages:" + JSON.stringify(newImages))
                                    setToPrintInStageImages(newImages);
                                }}
                                handleRefresh={handleRefresh}

                            />;
                        })}

                    </Layer>
                </Stage>

            </div>


        </>
    )
}

{/* <Group
    draggable

    strokeWidth={2}
    stroke={"blue"}

    x={image.x}
    y={image.y}

    width={scaledImage ? scaledImage.newWidth + 50 : 0}
    height={scaledImage ? scaledImage.newHeight + 50 : 0}

    onDragStart={(e) => {
        // setIsDragging(true)
        // const container = e.target.getStage().container();
        // // container.style.cursor = "pointer";
        // container.style.border = "1px solid red";
    }
    }

    onDragEnd={(e) => {

        // setIsDragging(false);

        // setScaledImage(prev => ({
        //     ...prev,
        //     isDragging: false,
        //     x: e.target.x() + 130,
        //     y: e.target.y() + 60
        // }));

        // onChange({
        //     ...scaledImage,
        //     isDragging: false,
        //     x: e.target.x() + 130,
        //     y: e.target.y() + 60
        // })

    }}
> */}





// const LionImage = (classes) => {
//     // const [image] = useImage("https://photo-upload-album-1.s3-ap-southeast-1.amazonaws.com/Studio'sRawProduct/categoryCode/productcode/61895338-2d60-50a8-aa53-5768dbe89724aaaa.png");
//     // const [img] = useImage("https://photo-upload-album-1.s3-ap-southeast-1.amazonaws.com/Studio'sRawProduct/categoryCode/productcode/03ea3cd4-ef98-52f2-bc44-a854e167a8aaScreen%20Shot%202021-03-21%20at%2021.59.47.png");
//     const [img] = useImage("https://photo-upload-album-1.s3-ap-southeast-1.amazonaws.com/Studio'sRawProduct/categoryCode/productcode/03ea3cd4-ef98-52f2-bc44-a854e167a8aaScreen%20Shot%202021-03-21%20at%2021.59.47.png");
//     useEffect(() => {
//         if (img && img != null) {
//             console.table(JSON.stringify(img))
//             console.log("width:" + JSON.stringify(img.width))
//             console.log("height:" + JSON.stringify(img.height))
//         }

//     }, [img])

//     // function getScaledImageCoordinates(
//     //     containerWidth,
//     //     containerHeight,
//     //     width,
//     //     height,
//     // ) {
//     //     let widthRatio = (containerWidth) / width,
//     //         heightRatio = (containerHeight) / height
//     //     let bestRatio = Math.min(widthRatio, heightRatio)
//     //     let newWidth = width * bestRatio,
//     //         newHeight = height * bestRatio
//     //     return { newWidth, newHeight }
//     // }

//     return (
//         < Image
//             image={img}
//             x={250}


//             strokeWidth={2}
//             stroke={"red"}

//             width={img ? img.width * (700 / img.width) : 0}
//             height={img ? img.height * (600 / img.height) : 0}

//             // scale={{
//             //     x: 0.4,
//             //     y: 0.4
//             // }}

//             offsetX={img ? (img.width / 10) : 0}
//             offsetY={img ? -(img.height / 10) : 0}


//         // style={{
//         //     objectFit: "contain",
//         //     maxWidth: "20px !important",
//         //     maxHeight: "30%",
//         //     width: 'auto',
//         //     height: 'auto',
//         //     // border: "1px solid blue",

//         // }}
//         />
//     )




// };



// const [img] = useImage("https://photo-upload-album-1.s3-ap-southeast-1.amazonaws.com/Studio'sRawProduct/categoryCode/productcode/61895338-2d60-50a8-aa53-5768dbe89724aaaa.png");
// const [img] = useImage(`${ bgPhoto }`);
{/* <URLBGImage image={{ src: bgPhoto }} /> */ }
{/* <img
                style={{ height: "100px" }}
                src={img && img != null ? img.src : ""}
                onClick={() => {

                }}
            /> */}
            // <Stage

            // >
            //     <Layer
            //     >
            //         <LionImage classes={classes} />
            //     </Layer>
            // </Stage>
    // const [image] = useImage("https://photo-upload-album-1.s3-ap-southeast-1.amazonaws.com/Studio'sRawProduct/categoryCode/productcode/03ea3cd4-ef98-52f2-bc44-a854e167a8aaScreen%20Shot%202021-03-21%20at%2021.59.47.png");
