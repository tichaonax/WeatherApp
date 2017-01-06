var React = require('react');

class ErrorModal extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    }

    render() {
        return (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>Eerror Title</h4>
                <p>Error Message!</p>
                <p>
                    <button className="button hollow" data-close="">Ok</button>
                </p>
            </div>
        );
    }
}

module.exports = ErrorModal;