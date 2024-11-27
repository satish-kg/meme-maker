import React, {useState, useEffect} from 'react';

export default function MemeGeneratorBody(){
    // const [memeImg, setMemeImg] = React.useState("http://i.imgflip.com/1bij.jpg")

    const [meme, setMemeImg] = useState({
        topText: "",
        bottomText: "",
        imgSrc: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(()=>{
        async function getMemes(){
            const res = await fetch ("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    },[])

    function getMemeImage(){
        const randomNumber = Math.floor(Math.random()*allMemes.length)
        const url = allMemes[randomNumber].url
        setMemeImg(prevMeme=>({
            ...prevMeme,
            imgSrc : url
        }))
    }

    function changeHandler(event){
        const {name, value} = event.target
        setMemeImg(prevMeme =>({
            ...prevMeme,
            [name]:value
        }))
    }

    return(
        <main className="meme-generator-body">
            <div className="form">
                <input type="text" placeholder="Input Upper Statement" className="form-input"
                    name="topText"
                    value={meme.topText}
                    onChange={changeHandler}
                />
                <input type="text" placeholder='Input Lower Statement' className="form-input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={changeHandler}
                />
                <button className='form-button' onClick={getMemeImage}>Click to change template image</button>
                {/* <img src={meme.imgSrc} className='meme-image'/> */}
            </div>
            <div className="meme">
                <img src={meme.imgSrc} className="meme-image" />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
            <div className='form-new'>
                <button className='form-new-button'>Download the image</button>
            </div>
        </main>
    )
}