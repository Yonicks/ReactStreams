import * as React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";

export interface Props {
    children?: React.ReactNode,
    onSubmit: Function;
}


export interface State {
}


class StreamForm extends React.Component<Props & InjectedFormProps<{}, Props>> {


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
        this.props.onSubmit(formValues);
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


export default reduxForm<{}, Props>({
    form: 'streamForm',
    validate
})(StreamForm);
