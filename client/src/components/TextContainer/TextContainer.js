import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => ( <
div className = "textContainer" >
<
div >
<
h1 > ROOOMMMIIIEEE < span role = "img"
aria - label = "emoji" > 💬 < /span></h
1 >
<
h2 > Created with React, Express, Node and Socket.IO < span role = "img"
aria - label = "emoji" > ❤️ < /span></h
2 >
<
h2 > Hey, Roomie Let 's have a  <span role="img" aria-label="emoji">⬅️</span></h2> </div> {
users ?
( < div >
    <
    h1 > Roomie 's  currently chatting: </h1> <div className = "activeContainer" > <
    h2 > {
        users.map(({ name }) => ( < div key = { name }
            className = "activeItem" > { name } <
            img alt = "Online Icon"
            src = { onlineIcon }
            /> </div >
        ))
    } < /h2> </div > < /div>
) :
null
} < /div>
);

export default TextContainer;