import React from 'react'
import { Link } from 'react-router-dom';

interface Props {

}

export const Header = (props: Props) => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">Streamer</Link>
            <div className="right menu">
                <Link to="/" className="item">All Streams</Link>
            </div>
        </div>
    )
}


export default Header;