import Service from './service';

export default React.createClass({
    getInitialState() {
        return {
            fezdesc: ""
        };
    },
    componentDidMount() {

        Service.renderData().then((data) => {
            this.setState({
                fezdesc: data
            });
        });
    },
    render() {
        return (
            <div className="container fezdesc">
        <div className="row">
            <div className="col-md-12 fez-content">
                <h3>{this.state.fezdesc}</h3>
                <svg>
                  <use xlinkHref='#fez-fezlogo' />
                </svg>
            </div>
        </div>
        <hr />
    </div>
        );

    }
});
