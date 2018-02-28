import React from 'react'
import ReactDOM from 'react-dom'

import Header from 'views/public/module/common/header'
import Jumbotron from './module/detail/jumbotron'
import Detail from './module/detail/index'
import Footer from 'views/public/module/common/footer'

import urlParam from 'views/public/utils/url-param'

urlParam('id').then((data) => {
    let Page = React.createClass({
        render() {
            return (
                <div>
        <Header />
        <Jumbotron id={data}/>
        <Detail id={data}/>
        <Footer />
        </div>
            )
        }
    })

    ReactDOM.render(
        <Page />,
        document.getElementById('app')
    )
})