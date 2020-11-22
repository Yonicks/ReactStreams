import * as React from "react";
import { connect } from 'react-redux';
import { createStream } from './../../../actions/index';
import StreamForm from "../StreamForm";

export interface Props {
    children?: React.ReactNode,
    createStream: Function;
}


export interface State {
}


class StreamCreate extends React.Component<Props> {


    onSubmit = (formValues: any) => {
        this.props.createStream(formValues);
    }

    render() {
        return (
            <div>
                <h3>Create a Stream:</h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}



export default connect(null, { createStream })(StreamCreate);