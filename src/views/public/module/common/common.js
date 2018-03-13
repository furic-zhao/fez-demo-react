import ApiData from 'views/public/demo-data'

export default {
    navList() {
            return new Promise((resolve, reject) => {
                resolve(ApiData.common.navData)
            })
        },
        siteName() {
            return new Promise((resolve, reject) => {
                resolve(ApiData.common.siteName)
            })
        },
        footerText() {
            return new Promise((resolve, reject) => {
                resolve(ApiData.common.footerText)
            })
        }
}
