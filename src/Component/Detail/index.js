import React from 'react';
import "./Detail.css";


function Detail() {
  return (
    <div className='content'>
        <h4>Hello, my name is</h4>
        <h1>Basit Amin</h1>
        <h3>I'm a Web Developer.</h3>
        <div className='newslatter'>
            <form>
                <input type="email" name="email" id="mail" placeholder="Enter your Email" />
                <input type="submit" name="submit" value="Lets Start" />

            </form>

        </div>

    </div>
  )
}

export default Detail