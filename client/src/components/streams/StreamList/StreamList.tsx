import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { fetchStreams, togglePopup } from './../../../actions/index';
import { Stream } from './../../../models/stream';
import { ModalPopUp } from './../../ModalPopUp';

interface Props {
    fetchStreams: any
    togglePopup: any
    streams: any[];
    currentUserId: string;
    isSignedIn: boolean;
    isPopupShow: boolean;
}
interface State {
    show: boolean;
}

export class StreamList extends Component<Props, State> {
    componentDidMount(): void {
        this.props.fetchStreams()
    }

    renderAdmin(stream: Stream) {
        if (stream.userId === this.props.currentUserId) {
            return (
                <div className="right floated content">
                    <Link className="ui button primary" to={`streams/edit/${stream.id}`}>Edit</Link>
                    <Link className="ui button negative" to={`streams/delete/${stream.id}`}>Delete</Link>
                </div>
            );
        }
    }

    renderList() {
        return this.props.streams.map((stream: Stream) => {
            return (
                <div className="item" key={stream.id}>
                    {this.renderAdmin(stream)}
                    <i className="large middle aligned icon camera"></i>
                    <div className="content">
                        {stream.title}
                        <div className="description">{stream.description}</div>
                    </div>
                </div>
            )
        })
    }

    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link to="/streams/new" className="ui button primary">Create Stream</Link>
                </div>
            )
        }
    }

    onDeleteSubmit = () => {
        this.props.togglePopup(false);
    }


    onDeleteClose = () => {
        this.props.togglePopup(false);
    }

    render() {
        return (
            <div>
                <h2>Streams:</h2>
                <div className="ui called list">{this.renderList()}</div>
                {this.renderCreate()}
            </div>
        )
    }



}

const mapStateToProps = (state: any) => (
    {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn,
        isPopupShow: state.popup.isPopupShow,
    }
)

const mapDispatchToProps = {
    fetchStreams,
    togglePopup
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamList)