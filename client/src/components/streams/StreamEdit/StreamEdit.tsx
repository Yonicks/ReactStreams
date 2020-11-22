import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { connect } from 'react-redux';
import { Stream } from './../../../models/stream';
import { fetchStream } from './../../../actions/index';


export interface Props {
    children?: React.ReactNode,
    stream: Stream;
    fetchStream: Function;
}

export interface State {
}

export interface RouteParams {
    id: string;
}
class StreamEdit extends React.Component<RouteComponentProps<RouteParams> & Props, State> {
    componentDidMount(): void {
        this.props.fetchStream(this.props.match.params.id)
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>
        }
        else return (
            <div>{this.props.stream.title}</div>
        )
    }
}


const mapStateToProps = (state: any, ownProps: RouteComponentProps<RouteParams> & Props) => {
    return { stream: state.streams[ownProps.match.params.id] }
};



export default connect(mapStateToProps, { fetchStream })(StreamEdit);