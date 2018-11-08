import React, { Component } from 'react'

class Uploader extends Component {

    loaderImg = (e) => {
        e.preventDefault();

        let preview = document.querySelector('img');
        let file    = e.target.files[0];
        let reader  = new FileReader();

        reader.addEventListener('load', function () {
            preview.src = reader.result;
            console.log(reader)
            console.log(reader.result)
        })

        if (file) {
            reader.readAsDataURL(file);
        } else {
            preview.src = "";
        }
    }

    render () {
        return (
            <div>
                <img className='img' style={{width: '150px'}}/>
                <input type='file' onChange={this.loaderImg}/>
            </div>
        )
    }
}

export default Uploader