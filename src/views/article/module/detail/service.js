import ApiData from 'views/public/demo-data'

export default {
    renderData(id = "") {
        return new Promise((resolve, reject) => {
            let rtnData = {}

            for (let v of ApiData.frames) {
                if (v.title === id) {
                    rtnData = v
                }
            }
            resolve(rtnData)
        })
    }
}
