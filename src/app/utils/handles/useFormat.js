

export const useFormat = () => {
    const formatMoney = (val) => {
        if (Number.isInteger(val)) {
            const arr = String(val).replace(/\\./gi, "")
                .split('')
            // console.log("val:" + val)
            // console.log("arr:" + arr)
            const reverseArr = arr.reverse()
            let newArr = []
            let count = 0
            let result = ''
            // console.log("reverseArr:" + reverseArr)
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



            result = newArr.reverse().join("")

            // newArr = newArr.reverse().join("")
            // console.log("newArr:" + result)

            return result

        } else {

            return 0

        }


    }
    return { formatMoney }
}