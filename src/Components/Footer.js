import { Routes, Route, Link } from "react-router-dom";


export function Footer() {
  return (
    <footer id="footer" className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">Ramana Electronics is a leading provider of electronic device repairs, maintenance, and
              support services. We specialize in providing top-notch repair services for Led TVs, laptops, desktops,
              tablets, and more. Our experienced and certified technicians can handle any repair job, from simple to
              complex. We guarantee fast and reliable service, competitive prices, and the highest quality of work.</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6></h6>
            <ul className="footer-links">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>

          <div className="col-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="tel:9962424100">Contact Us</a></li>
             
              <li><Link to="/terms">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2023 Ramana Electronics. All Rights Reserved.</p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="https://www.facebook.com/profile.php?id=100089835970067" target="_blank"><i className="fa-brands fa-facebook-f"></i></a></li>
              <li><a className="telegram" href="https://t.me/Ramana_Electronics" target="_blank"><i className="fa-brands fa-telegram"></i></a></li>
              <li><a className="instagram" href="https://www.instagram.com/ramanaelectronics/" target="_blank"><i className="fa-brands fa-instagram"></i></a></li>
              <li><a className="phone" href="tel:9962424996"><i className="fa-solid fa-phone"></i></a></li>
              <li><a className="gmail" href="mailto:ramanaelectronicsolution@gmail.com" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>

            </ul>
          </div>
        </div>
      </div>


    </footer>
  );
}
