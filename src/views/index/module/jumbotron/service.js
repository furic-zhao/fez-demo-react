import ApiData from 'views/public/demo-data'

export default {
    renderData() {
        return new Promise((resolve, reject) => {
            resolve(ApiData.index.jumbotron);
        });
    }
}
