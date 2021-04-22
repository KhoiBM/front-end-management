/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react'
import { makeStyles } from '@material-ui/core';
import { Layer, Stage, Image } from 'react-konva';
import useImage from 'use-image';
const useStyles = makeStyles(theme => ({
    stageContainer: {
        // width: "30rem",
        width: "100% !important",
        height: "auto",
        minHeight: "100% !important",
        display: 'flex',
        justifyContent: "center !important",
        alignItems: "center !important",
        // background: "red",
        border: "1px solid rgba(0, 0, 0, 0.23)",
        // backgroundImage: ({ bgPhoto }) => (`url("${bgPhoto && bgPhoto != null ? bgPhoto : ''}")`)
        "& .konvajs-content": {
            // display: 'flex',
            // justifyContent: "center !important",
            // alignItems: "center !important",
        }

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

const URLImage = ({ image }) => {
    const [img] = useImage(`${image.src}`);

    const [scaledImage, setScaledImage] = useState({ ...img })
    console.log("image:" + JSON.stringify(image))
    console.log("scaledImage:" + JSON.stringify(scaledImage))
    useEffect(() => {
        if (img && img != null) {
            console.table(JSON.stringify(img))
            console.log("width:" + JSON.stringify(img.width))
            console.log("height:" + JSON.stringify(img.height))
            const data = getScaledImageCoordinates(700, 600, img.width, img.height)
            console.log("data: " + JSON.stringify(data))
            setScaledImage(prev => ({
                ...prev,
                ...data
            }))
        }

    }, [img])

    function getScaledImageCoordinates(
        containerWidth,
        containerHeight,
        width,
        height,
    ) {
        let bestRatio = (containerWidth) / width
        let newWidth = width * bestRatio * 0.2,
            newHeight = height * bestRatio * 0.2
        return { newWidth, newHeight }
    }

    return (
        <Image
            image={img}
            x={image.x - 130}
            y={image.y - 60}

            strokeWidth={2}
            // stroke={"red"}

            width={scaledImage ? scaledImage.newWidth : 0}
            height={scaledImage ? scaledImage.newHeight : 0}

            // width={scaledImage ? scaledImage.width : 0}
            // height={scaledImage ? scaledImage.height : 0}

            offsetX={scaledImage ? -(scaledImage.newWidth / 2) : 0}
            offsetY={scaledImage ? -(scaledImage.newHeight / 10) : 0}

            draggable

            onDragStart={(e) => {
                setScaledImage(prev => ({
                    ...prev,
                    isDragging: true
                }));
            }}
            onDragEnd={e => {
                setScaledImage(prev => ({
                    ...prev,
                    isDragging: false,
                    x: e.target.x(),
                    y: e.target.y()
                }));
            }}

        />
    );
};

const URLBGImage = ({ image }) => {
    const [img] = useImage(`${image.src}`);
    const [scaledImage, setScaledImage] = useState({})

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
        <Image
            image={img}
            x={image.x}
            y={image.y}

            strokeWidth={2}
            // stroke={"red"}

            width={scaledImage ? scaledImage.newWidth : 0}
            height={scaledImage ? scaledImage.newHeight : 0}

            // width={scaledImage ? scaledImage.width : 0}
            // height={scaledImage ? scaledImage.height : 0}

            offsetX={scaledImage ? -(scaledImage.newWidth / 1) : 0}
            offsetY={scaledImage ? -(scaledImage.newHeight / 10) : 0}

        />
    );
};


export const StageKonvaContainer = (props) => {


    const { bgPhoto, dragUrl, stageRef } = props

    const [imgBg] = useImage(`${bgPhoto}`);

    const stageWidth = "1000"
    const stageHeight = "1000"

    const classes = useStyles({ bgPhoto });



    const [images, setImages] = useState([]);

    const [selectedId, selectShape] = useState(null);


    useEffect(() => {
        console.log("bgPhoto: " + bgPhoto)
    }, [bgPhoto])

    useEffect(() => {
        console.log("images:" + JSON.stringify(images))
    }, [dragUrl, images])


    const checkDeselect = (e) => {
        // deselect when clicked on empty area
        const clickedOnEmpty = e.target === e.target.getStage();
        if (clickedOnEmpty) {
            selectShape(null);
        }
    };



    return (
        <>

            <div
                onDrop={(e) => {
                    e.preventDefault();
                    // register event position
                    stageRef.current.setPointersPositions(e);
                    console.log("PointersPositions:" + stageRef.current.setPointersPositions(e))
                    // add image
                    setImages(
                        images.concat([
                            {
                                ...stageRef.current.getPointerPosition(),
                                src: dragUrl.current
                            }
                        ])
                    );
                    dragUrl.current = ""
                }}
                onDragOver={(e) => e.preventDefault()}
            >


                <Stage
                    className={classes.stageContainer}
                    ref={stageRef}
                    width={stageWidth * 1.1} height={stageHeight * 0.6}
                    onMouseDown={checkDeselect}
                    onTouchStart={checkDeselect}
                >
                    <Layer >
                        {imgBg && imgBg != null &&
                            <URLBGImage image={imgBg} />
                        }
                        {images.map((image, index) => {
                            return <URLImage image={image} key={index} />;
                        })}

                    </Layer>
                </Stage>

            </div>


        </>
    )
}







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
// const [img] = useImage(`${bgPhoto}`);
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
