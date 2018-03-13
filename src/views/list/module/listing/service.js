import ApiData from 'views/public/demo-data'

export default {
    renderData() {
        let rtnData = []
        return new Promise((resolve, reject) => {

            for (let v of ApiData.frames) {
                let dataItem = {}

                dataItem.title = v.title
                dataItem.desc = v.desc
                dataItem.id = v.title

                rtnData.push(dataItem)
            }

            resolve(rtnData)
        })
    }
}
