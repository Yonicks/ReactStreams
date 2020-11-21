import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStreams } from './../../../actions/index';
import { Stream } from './../../../models/stream';

interface Props {
    fetchStreams: Function
    streams: any[];
}
interface State {

}

export class StreamList extends Component<Props, State> {
    componentDidMount(): void {
        this.props.fetchStreams()
    }

    renderList() {
        return this.props.streams.map((stream: any) => {
            return (
                <div className="item" key={stream.id}>
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
    { streams: Object.values(state.streams) }
)

const mapDispatchToProps = {
    fetchStreams
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamList)