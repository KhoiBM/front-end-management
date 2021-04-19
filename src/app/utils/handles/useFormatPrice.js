export const useFormatPrice = () => {

    const formatPriceMoney = (val) => {
        let regex = /[\\.]/gi

        if (Number.isInteger(val)) {

            console.log("isInteger:" + Number.isInteger(val))

            return val

        } else {
            // console.log("isInteger:" + Number.isInteger(val))

            const arrSplitByDot = String(val)
                .split(/\./gi)

            // console.log("arrSplitByDot:" + arrSplitByDot)


            const arrToFormat = arrSplitByDot[0]
                .split('')

            // console.log("val:" + val)
            // console.log("arrToFormat:" + arrToFormat)


            let reverseArr = arrToFormat.reverse()
            let newArr = []
            let count = 0
            let result = ''



            // newArr = reverseArr.filter((currVal, index) => {

            //     // console.log("currVal:" + currVal)

            //     let test = !regex.test(currVal)

            //     // console.log("test:" + test)

            //     return test

            // }
            // )

            reverseArr.forEach((currVal, index) => {

                if (count == 3) {
                    newArr.push('.')
                    count = 1
                } else {
                    count++
                }

                newArr.push(currVal)

            }
            )


            // console.log("newArr:" + newArr)

            result = newArr.reverse().join("")

            arrSplitByDot.forEach((currVal, index) => {


                result += index != 0 ? `.${currVal}` : ''
                // console.log("result:" + result)

            })


            // console.log("result:" + result)

            return result

        }

    }

    return { formatPriceMoney }

}