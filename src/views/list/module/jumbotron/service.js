import Q from 'q'

import ApiData from 'views/public/demo-data'

export default {
    renderData() {
        return Q.Promise((resolve, reject) => {
            resolve(ApiData.list.jumbotron)
        })
    }
}
