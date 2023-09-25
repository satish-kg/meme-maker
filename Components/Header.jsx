import React from 'react';

export default function Header(){
    return(
        <div className="header-logo">
            <img className='troll-face-logo' src="/assets/images/troll-face.png" alt="meme generator logo - the original meme!"/>
            <h1 className="header-title">Meme Generator</h1>
            {/* <h2 className="header-subtitle">"हमसे ना हो पाएगा"</h2> */}
            <h2 className="header-subtitle">"तुमसे ना हो सकी"</h2>
        </div>

    )
}