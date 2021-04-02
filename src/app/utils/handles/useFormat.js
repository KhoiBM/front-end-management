import { toast } from "react-toastify"

export const useFormat = () => {
    const formatMoney = (val) => {
        const arr = String(val).split('')
        const reverseArr = arr.reverse()
        let newArr = []
        let count = 0
        let result = ''

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

        // newArr = newArr.reverse().join("")
        // console.log("newArr:" + newArr)

        result = newArr.reverse().join("")

        return result

    }
    return { formatMoney }
}