import * as React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { connect } from 'react-redux';
import { createStream } from './../../../actions/index';

export interface Props {
    children?: React.ReactNode,
    createStream: Function;
}


export interface State {
}


class StreamCreate extends React.Component<Props & InjectedFormProps<{}, Props>> {


    renderError({ error, touched }: { error: string, touched: boolean }): React.ReactNode {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta }: { input: any, label: string, meta: any }): React.ReactNode => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete='off' />
                {this.renderError(meta)}
            </div>
        )
    }


    onSubmit = (formValues: any) => {
        this.props.createStream(formValues);
    }

    render() {
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field label="Enter Title" name="title" component={this.renderInput} />
                <Field label="Enter Description" name="description" component={this.renderInput} />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = (formValues: any) => {
    const errors: any = {};
    if (!formValues.title) {
        errors.title = 'must enter title'
    }

    if (!formValues.description) {
        errors.description = 'must enter description'
    }
    return errors;
}


const formWrapped = reduxForm<{}, Props>({
    form: 'streamCreate',
    validate
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);