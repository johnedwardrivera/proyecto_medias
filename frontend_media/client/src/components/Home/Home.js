import img1 from "../../img/fondoprincipal.jpg";
import img2 from "../../img/fondo1.jpg";
import img3 from "../../img/pretty.png";
import style from "./Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <div>
      <div>
        <div
          id="carouselExampleSlidesOnly"
          class="carousel carousel-dark slide"
          data-bs-ride="carousel"
          div
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src={img1}
                alt=""
                style={{
                  width: "1400px",
                  height: "600px",
                }}
              ></img>
            </div>
          </div>
        </div>
      </div>
      {/* quienes somos */}

      <div class="container">
        <div class="row">
          <div class="col-md-12 pb-4"></div>
          <h4 class="text-center">Pretty Stockings</h4>
        </div>
      </div>

      <div class="col-md-12 d-flex justify-content-center">
        <div
          class="shadow p-3 card mb-3"
          style={{ width: "800px ", height: "300px" }}
        >
          <div class="row g-0">
            <div class="col-md-4">
              <img src={img2} class="img-fluid rounded-start" alt="..." />
            </div>

            <div class="col-md-8">
              <div class="card-body">
                <p class="card-text">
                  Este sitio es un nexo entre problemas y soluciones. Tienes una
                  necesidad, contactas con quien pueda solucionar y listo!
                  Problema resuelto!! Muchos profesionales nos eligen para
                  postular sus servicios, al igual que muchos clientes
                  satisfechos por el uso de nuestra plataforma.
                </p>
                <p class="card-text">
                  <small class="text-muted" className={style.texto}></small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  footer */}

      <footer
        class="footer_area section_padding_130_0"
        className={style.footer_area}
      >
        <div class="container">
          <div class="row">
            <div div class="col-12 col-sm-6 col-lg-4">
              <div
                class="single-footer-widget section_padding_0_130"
                className={style.single}
              >
                <p>Pretty Stockings</p>
                <div class="copywrite-text mb-5" className={style.test}>
                  <a target="brank" href="">
                    <img src={img3} style={{ width: "100%" }} alt=""></img>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg">
              <div class="single-footer-widget section_padding_0_130">
                <h5 class="widget-title">Producto</h5>

                <div class="footer_menu"></div> 
                <p>Medias</p>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-lg">
              <div class="single-footer-widget section_padding_0_130">
                <h5 class="widget-title">Contáctame</h5>
              </div>
              <div class="footer_menu">
                <p>Cali colombia</p>
                <p>stockingspretty40@gmail.com</p>
                <p>cl: 3167064670</p>
                <div div class="buttons" className={style.social}>
                  <a
                    target="brank"
                    href="https://www.instagram.com/riveraedward242/"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </a>

                  <a
                    target="brank"
                    href="https://www.instagram.com/riveraedward242/"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>

                  <a
                    target="brank"
                    href="https://www.instagram.com/riveraedward242/"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="grupo-2">
          <p>DERECHOS RESERVADOS © 2022</p> <p>Pretty Stockings</p>{" "}
          <p>- CALI COLOMBIA</p>
        </div>
      </footer>
    </div>
  );
};
export default Home;
