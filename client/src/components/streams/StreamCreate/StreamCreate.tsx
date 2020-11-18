import * as React from "react";
import { Field, FormProps, InjectedFormProps, reduxForm } from "redux-form";

export interface Props {
    children?: React.ReactNode
}

export interface State {
}


class StreamCreate extends React.Component<InjectedFormProps> {

    renderInput({ input, label }: { input: any, label: string }) {
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} />
            </div>
        )
    }

    onSubmit = (formValues: any) => {
    }

    render() {
        return (
            <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field label="Enter Title" name="title" component={this.renderInput} />
                <Field label="Enter Description" name="description" component={this.renderInput} />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}



<Field />
export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);