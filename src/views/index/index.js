import React from 'react';
import ReactDOM from 'react-dom';

import Header from 'views/public/module/common/header';
import Jumbotron from './module/jumbotron/index';
import Fezdesc from './module/fezdesc/index';
import Footer from 'views/public/module/common/footer';


let Page = React.createClass({
	render() {
		return (
			<div>
        <Header />
        <Jumbotron />
        <Fezdesc />
        <Footer />
        </div>
		);
	}
});

ReactDOM.render(
	<Page />,
	document.getElementById('app')
);
