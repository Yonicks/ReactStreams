import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signIn, signOut } from './../actions/index';
declare const window: any;

interface Props {
    signIn: Function;
    signOut: Function;
    isSignedIn: boolean | null;
}
interface State {
}

class GoogleAuth extends Component<Props, State> {



    auth: any;
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '566745741904-ns1m1ka3uq7eg7l535po9b6jjl81hs0m.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange)
            });
        });

    }

    onAuthChange = (isSignedIn: boolean) => {
        isSignedIn ? this.props.signIn(this.auth.currentUser.get().getId()) : this.props.signOut();
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };


    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button className="ui red google button" onClick={this.onSignOutClick}>  <i className="google icon"></i> SignOut </button>
            )
        } else {
            return (
                <button className="ui red google button" onClick={this.onSignInClick}>  <i className="google icon"></i> Sign In with Googles </button>
            )
        }
    }

    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return { isSignedIn: state.auth.isSignedIn }
}


export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);