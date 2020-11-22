import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { connect } from 'react-redux';
import { RouteParams, Stream } from './../../../models/stream';
import { fetchStream, editStream } from './../../../actions/index';
import StreamForm from "../StreamForm";
import _ from 'lodash';

export interface Props {
    children?: React.ReactNode,
    stream: Stream;
    fetchStream: Function;
    editStream: Function;
}

export interface State {
}


class StreamEdit extends React.Component<RouteComponentProps<RouteParams> & Props, State> {
    componentDidMount(): void {
        this.props.fetchStream(this.props.match.params.id)
    }

    onSubmit = (formValues: any) => {
        this.props.editStream(this.props.match.params.id, formValues);
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>
        }
        else return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm
                    initialValues={_.pick(this.props.stream, 'title', 'description')}
                    onSubmit={this.onSubmit} />
            </div>
        )
    }
}


const mapStateToProps = (state: any, ownProps: RouteComponentProps<RouteParams> & Props) => {
    return { stream: state.streams[ownProps.match.params.id] }
};



export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);