import React from 'react';

const Error_message = ({error}) => {
    return (
        <article className="message is-warning">
            <div className="message-header">
                <p>Warning</p>
                <button className="delete" aria-label="delete"></button>
            </div>
            <div className="message-body">
                {error.error}
            </div>
        </article>
    );
};

export default Error_message;