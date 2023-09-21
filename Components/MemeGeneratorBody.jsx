import React from 'react';
import memeDataSrc from "../data.js"

export default function MemeGeneratorBody(){
    // const [memeImg, setMemeImg] = React.useState("http://i.imgflip.com/1bij.jpg")

    const [meme, setMemeImg] = React.useState({
        topText: "",
        bottomText: "",
        imgSrc: "http://i.imgflip.com/1bij.jpg"
    })

    function getMemeImage (){
        const memeData = memeDataSrc.data.memes
        const randomNumber = Math.floor(Math.random() * memeData.length)
        setMemeImg(prevMeme => {
            return {
              ...prevMeme,
                imgSrc: memeData[randomNumber].url    //randomize image url through setState
            }
        })
    }

    return(
        <main className="meme-generator-body">
            <div className="form">
                <input type="text" placeholder="Input Upper Statement" className="form-input" />
                <input type="text" placeholder='Input Lower Statement' className="form-input" />
                <button className='form-button' onClick={getMemeImage}>Click to get image</button>
                <img src={meme.imgSrc} className='meme-image'/>
            </div>
            
            <h1>Meme Generator</h1>
        </main>
    )
}