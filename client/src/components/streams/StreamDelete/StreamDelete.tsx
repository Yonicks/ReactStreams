import React from 'react'
import { ModalPopUp } from './../../ModalPopUp';
import { connect } from 'react-redux';
import { togglePopup } from '../../../actions/index'
import history from '../../../history';
import { RouteParams } from '../../../models/stream';
import { RouteComponentProps, Link } from 'react-router-dom';
import { fetchStream, deleteStream } from './../../../actions/index';
import { Stream } from './../../../models/stream';
import { Button } from 'react-bootstrap';



interface Props {
    children?: React.ReactNode,
    togglePopup: any
    stream: Stream;
    isSignedIn: boolean;
    isPopupShow: boolean;
    fetchStream: any;
    deleteStream: any;
}
interface State {
    show: boolean;
}


class StreamDelete extends React.Component<RouteComponentProps<RouteParams> & Props, State>{

    componentDidMount() {
        const currentStream = this.props.fetchStream(this.props.match.params.id);
        this.props.togglePopup(true);
    }
    onDeleteSubmit = () => {
        this.props.togglePopup(false);
        // this.props.deleteStream(this.props.stream.id)
        history.push('/')
    }
    onDeleteCancel = () => {
        this.props.togglePopup(false);
        history.push('/')
    }

    renderActions() {
        const { id } = this.props.match.params;
        return (
            <React.Fragment>
                <Link className="ui button" to="/"> Cancel </Link>
                <Button variant="danger" onClick={() => this.props.deleteStream(id)}> Delete</Button>
            </React.Fragment>
        )
    }


    renderContent() {
        if (!this.props.stream) {
            return 'Are you sure you want to delete this stream?';
        }
        return `Are you sure you want to delete this stream title: ${this.props.stream.title}?`
    }

    render() {
        return (
            <ModalPopUp
                title="Delete Stream"
                body={this.renderContent()}
                show={this.props.isPopupShow}
                onClose={this.onDeleteCancel}
                actions={this.renderActions()}
            />
        )
    }
}

const mapStateToProps = (state: any, ownProps: RouteComponentProps<RouteParams> & Props) => (
    {
        stream: state.streams[ownProps.match.params.id],
        isSignedIn: state.auth.isSignedIn,
        isPopupShow: state.popup.isPopupShow,
    }
)

const mapDispatchToProps = {
    togglePopup,
    fetchStream,
    deleteStream,
}


export default connect(mapStateToProps, mapDispatchToProps)(StreamDelete);
