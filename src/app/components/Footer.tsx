export default function Footer() {
  return (
    <footer className="site-footer section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4 className="text-white mb-4 me-5">Crispy Kitchen</h4>
          </div>

          <div className="col-lg-4 col-md-7 col-xs-12 tooplate-mt30">
            <h6 className="text-white mb-lg-4 mb-3">Location</h6>

            <p>121 Einstein Loop N, Bronx, NY 10475, United States</p>

            <a
              href="https://goo.gl/maps/wZVGLA7q64uC1s886"
              className="custom-btn btn btn-dark mt-2"
            >
              Directions
            </a>
          </div>

          <div className="col-lg-4 col-md-5 col-xs-12 tooplate-mt30">
            <h6 className="text-white mb-lg-4 mb-3">Opening Hours</h6>

            <p className="mb-2">Monday - Friday</p>

            <p>10:00 AM - 08:00 PM</p>

            <p>
              Tel:{" "}
              <a href="tel: 010-02-0340" className="tel-link">
                010-02-0340
              </a>
            </p>
          </div>

          <div className="col-lg-4 col-md-6 col-xs-12 tooplate-mt30">
            <h6 className="text-white mb-lg-4 mb-3">Social</h6>

            <ul className="social-icon">
              <li>
                <a href="#" className="social-icon-link bi-facebook"></a>
              </li>

              <li>
                <a href="#" className="social-icon-link bi-instagram"></a>
              </li>

              <li>
                <a
                  href="https://twitter.com/search?q=tooplate.com&src=typed_query&f=live"
                  target="_blank"
                  className="social-icon-link bi-twitter"
                ></a>
              </li>

              <li>
                <a href="#" className="social-icon-link bi-youtube"></a>
              </li>
            </ul>

            <p className="copyright-text tooplate-mt60">
              Copyright © 2022 Crispy Kitchen Co., Ltd. <br />
              Design:
              <a
                rel="nofollow"
                href="https://www.tooplate.com/"
                target="_blank"
              >
                Tooplate
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
