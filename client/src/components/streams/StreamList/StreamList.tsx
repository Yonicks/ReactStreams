import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStreams } from './../../../actions/index';
import { Stream } from './../../../models/stream';

interface Props {
    fetchStreams: Function
    streams: any[];
    currentUserId: string;
}
interface State {

}

export class StreamList extends Component<Props, State> {
    componentDidMount(): void {
        this.props.fetchStreams()
    }

    renderAdmin(stream: Stream) {
        if (stream.userId === this.props.currentUserId) {
            return (
                <div className="right floated content">
                    <button className="ui button primary">Edit</button>
                    <button className="ui button negative">Delete</button>
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

    render() {
        return (
            <div>
                <h2>Streams:</h2>
                <div className="ui called list">{this.renderList()}</div>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => (
    {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId
    }
)

const mapDispatchToProps = {
    fetchStreams
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamList)