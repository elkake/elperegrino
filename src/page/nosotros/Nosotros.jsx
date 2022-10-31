import React from 'react'
import './style.css'
import Gallery from './Components/Gallery'
import photos from '../../data/getPhotos'
import BackButton from '../../Components/Buttons/BackButton'

function Nosotros() {
  return (
    <div className="nos_container">
      <BackButton />
      <h2 className="nos_tittle">NOSOTROS</h2>
      <section>
        <Gallery />
        <div className="nos_collage-description">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
            repellat, enim fuga consequatur omnis ratione mollitia aspernatur
            hic. Recusandae rerum deserunt animi accusantium tempora commodi
            deleniti alias? Ipsam, dolor commodi. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Sint repellat, enim fuga consequatur
            omnis ratione mollitia aspernatur hic. Recusandae rerum deserunt
            animi accusantium tempora commodi deleniti alias? Ipsam, dolor
            commodi. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Sint repellat, enim fuga consequatur omnis ratione mollitia
            aspernatur hic. Recusandae rerum deserunt animi accusantium tempora
            commodi deleniti alias? Ipsam, dolor commodi.
          </p>
        </div>
      </section>
      <section className="nos_second-section">
        <h2 className="nos_ss-tittle">HISTORIA</h2>
        <div className="nos_ss-img"></div>
        <div className="nos_ss-description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            eaque eum modi aperiam, reprehenderit reiciendis laudantium debitis
            doloribus praesentium explicabo facere nesciunt repudiandae
            architecto, rerum aspernatur magnam illum veritatis quod. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus eos
            in omnis sequi temporibus ipsum. Maiores quae dolor sed sunt
            veritatis in recusandae! Sunt, labore iure veniam enim optio
            aperiam. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Officia velit, molestias culpa nisi earum aliquid quasi voluptas
            reprehenderit eaque esse labore voluptatum, temporibus libero quos
            magni cumque eos quis illo.
          </p>
        </div>
      </section>
      <section className="nos_third-section">
        <div className="nos_ts-misvis">
          <div className="nos_ts-description">
            <h3>MISION</h3>
            <p>
              Brindar diariamente un alimento primordial de calidad a todas las
              familias ... Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Sapiente reprehenderit, ut inventore maiores consequatur
              quisquam magni nam porro cupiditate neque pariatur. Eius,
              cupiditate voluptates? Sit nesciunt dolor cum eum minima?
            </p>
          </div>
          <div className="nos_ts-imgmisvis">
            <img src={photos[5].img} alt={photos[5].alt} />
          </div>
        </div>
        <div className="nos_ts-misvis">
          <div className="nos_ts-description">
            <h3>VISION</h3>
            <p>
              Ser una de las mejores proovedoras de ... en muchas partes del
              pais Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sapiente reprehenderit, ut inventore maiores consequatur quisquam
              magni nam porro cupiditate neque pariatur. Eius, cupiditate
              voluptates? Sit nesciunt dolor cum eum minima?
            </p>
          </div>
          <div className="nos_ts-imgmisvis">
            <img src={photos[6].img} alt={photos[6].alt} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Nosotros
