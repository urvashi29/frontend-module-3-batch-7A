import React from 'react';

const Display = (props) => {
    console.log(props);//object
    const {user} = props

    return (
        <div>
              My name is {user.firstName} is living in {user.country},
              working as a {user.designation}
        </div>
    );
};

export default Display;
