import React, { useState } from 'react'
import photos from '../../../data/getPhotos'
import './style.css'
function Gallery() {
  const [urlImg, setUrlImg] = useState("https://scontent.faep8-1.fna.fbcdn.net/v/t1.6435-9/80416210_2494879383974650_5974174950389448704_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=1jWH9H1DLzsAX_PgUOr&tn=f3TdXvzIneMRyAJG&_nc_ht=scontent.faep8-1.fna&oh=00_AfAJCutKOPz35fC70QikhpNp9mE1ULfCZPuOQLpIsdryIQ&oe=6387361F")

  const changeImg = e => {
    e.target.currentSrc? setUrlImg(e.target.currentSrc) : setUrlImg("https://scontent.faep8-1.fna.fbcdn.net/v/t1.6435-9/80416210_2494879383974650_5974174950389448704_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=1jWH9H1DLzsAX_PgUOr&tn=f3TdXvzIneMRyAJG&_nc_ht=scontent.faep8-1.fna&oh=00_AfAJCutKOPz35fC70QikhpNp9mE1ULfCZPuOQLpIsdryIQ&oe=6387361F") 
  }
  return (
    <div className="nos_collage">
      <div onClick={changeImg} className="nos_item-one nos_collage-group">
        <img src={photos[0].img} alt="" />
      </div>
      <div onClick={changeImg} className="nos_item-three nos_collage-group">
        <img src={photos[2].img} alt="" />
      </div>
      <div onClick={changeImg} className="nos_item-four nos_collage-group">
        <img src={photos[3].img} alt="" />
      </div>
      <div onClick={changeImg} className="nos_item-five nos_collage-group">
        <img src={photos[4].img} alt="" />
      </div>
      <div className="nos_item-six nos_collage-group">
        <img src={urlImg} alt="" />
      </div>
    </div>
  )
}

export default Gallery
