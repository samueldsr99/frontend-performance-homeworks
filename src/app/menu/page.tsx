import Image from "next/image";

export default function MenuPage() {
  return (
    <>
      <header className="site-header site-menu-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-12 mx-auto">
              <h1 className="text-white">Our Menus</h1>

              <strong className="text-white">
                Perfect for all Breakfast, Lunch and Dinner
              </strong>
            </div>
          </div>
        </div>

        <div className="overlay"></div>
      </header>

      <section className="menu section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="mb-lg-5 mb-4">Breakfast Menu</h2>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="menu-thumb">
                <Image
                  src="/images/breakfast/brett-jordan-8xt8-HIFqc8-unsplash.webp"
                  className="img-fluid menu-image"
                  width={600}
                  height={400}
                  alt=""
                />

                <div className="menu-info d-flex flex-wrap align-items-center">
                  <h4 className="mb-0">Fresh Start</h4>

                  <span className="price-tag bg-white shadow-lg ms-4">
                    <small>$</small>24.50
                  </span>

                  <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                    <h6 className="reviews-text mb-0 me-3">4.4/5</h6>

                    <div className="reviews-stars">
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star reviews-icon"></i>
                    </div>

                    <p className="reviews-text mb-0 ms-4">128 Reviews</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="menu-thumb">
                <Image
                  src="/images/breakfast/lucas-swennen-1W_MyJSRLuQ-unsplash.webp"
                  className="img-fluid menu-image"
                  alt=""
                  width={600}
                  height={400}
                />

                <div className="menu-info d-flex flex-wrap align-items-center">
                  <h4 className="mb-0">Baked Creamy</h4>

                  <span className="price-tag bg-white shadow-lg ms-4">
                    <small>$</small>16.50
                  </span>

                  <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                    <h6 className="reviews-text mb-0 me-3">3/5</h6>

                    <div className="reviews-stars">
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star reviews-icon"></i>
                      <i className="bi-star reviews-icon"></i>
                    </div>

                    <p className="reviews-text mb-0 ms-4">64 Reviews</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="menu-thumb">
                <Image
                  src="/images/breakfast/louis-hansel-dphM2U1xq0U-unsplash.webp"
                  className="img-fluid menu-image"
                  width={600}
                  height={400}
                  alt=""
                />

                <div className="menu-info d-flex flex-wrap align-items-center">
                  <h4 className="mb-0">Burger Set</h4>

                  <span className="price-tag bg-white shadow-lg ms-4">
                    <small>$</small>24.50
                  </span>

                  <del className="ms-4">
                    <small>$</small>36.50
                  </del>

                  <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                    <h6 className="reviews-text mb-0 me-3">3/5</h6>

                    <div className="reviews-stars">
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star reviews-icon"></i>
                      <i className="bi-star reviews-icon"></i>
                    </div>

                    <p className="reviews-text mb-0 ms-4">32 Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="menu section-padding bg-white">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="mb-lg-5 mb-4">Lunch Menu</h2>
            </div>

            <div className="col-lg-6 col-12">
              <div className="menu-thumb">
                <Image
                  src="/images/lunch/louis-hansel-cH5IPjaAYyo-unsplash.webp"
                  className="img-fluid menu-image"
                  alt=""
                  width={600}
                  height={400}
                />

                <div className="menu-info d-flex flex-wrap align-items-center">
                  <h4 className="mb-0">Super Steak Set</h4>

                  <span className="price-tag bg-white shadow-lg ms-4">
                    <small>$</small>32.75
                  </span>

                  <del className="ms-4">
                    <small>$</small>55
                  </del>

                  <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                    <h6 className="reviews-text mb-0 me-3">4.2/5</h6>

                    <div className="reviews-stars">
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star reviews-icon"></i>
                    </div>

                    <p className="reviews-text mb-0 ms-4">66 Reviews</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className="menu-thumb">
                <Image
                  src="/images/lunch/louis-hansel-rheOvfxOlOA-unsplash.webp"
                  className="img-fluid menu-image"
                  alt=""
                  width={600}
                  height={400}
                />

                <div className="menu-info d-flex flex-wrap align-items-center">
                  <h4 className="mb-0">Bread &amp; Steak Set</h4>

                  <span className="price-tag bg-white shadow-lg ms-4">
                    <small>$</small>42.50
                  </span>

                  <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                    <h6 className="reviews-text mb-0 me-3">3/5</h6>

                    <div className="reviews-stars">
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star reviews-icon"></i>
                      <i className="bi-star reviews-icon"></i>
                    </div>

                    <p className="reviews-text mb-0 ms-4">84 Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="menu section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="mb-lg-5 mb-4">Dinner Menu</h2>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="menu-thumb">
                <Image
                  src="/images/dinner/farhad-ibrahimzade-ZipYER3NLhY-unsplash.webp"
                  className="img-fluid menu-image"
                  alt=""
                  width={600}
                  height={400}
                />

                <div className="menu-info d-flex flex-wrap align-items-center">
                  <h4 className="mb-0">Seafood Set</h4>

                  <span className="price-tag bg-white shadow-lg ms-4">
                    <small>$</small>65.50
                  </span>

                  <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                    <h6 className="reviews-text mb-0 me-3">4.4/5</h6>

                    <div className="reviews-stars">
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star reviews-icon"></i>
                    </div>

                    <p className="reviews-text mb-0 ms-4">102 Reviews</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="menu-thumb">
                <Image
                  src="/images/dinner/keriliwi-c3mFafsFz2w-unsplash.webp"
                  className="img-fluid menu-image"
                  alt=""
                  width={600}
                  height={400}
                />

                <div className="menu-info d-flex flex-wrap align-items-center">
                  <h4 className="mb-0">Premium Steak</h4>

                  <span className="price-tag bg-white shadow-lg ms-4">
                    <small>$</small>74.25
                  </span>

                  <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                    <h6 className="reviews-text mb-0 me-3">3/5</h6>

                    <div className="reviews-stars">
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star reviews-icon"></i>
                      <i className="bi-star reviews-icon"></i>
                    </div>

                    <p className="reviews-text mb-0 ms-4">56 Reviews</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="menu-thumb">
                <Image
                  src="/images/dinner/farhad-ibrahimzade-isHUj3N0194-unsplash.webp"
                  className="img-fluid menu-image"
                  alt=""
                  width={600}
                  height={400}
                />

                <div className="menu-info d-flex flex-wrap align-items-center">
                  <h4 className="mb-0">Salmon Set</h4>

                  <span className="price-tag bg-white shadow-lg ms-4">
                    <small>$</small>60
                  </span>

                  <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                    <h6 className="reviews-text mb-0 me-3">3/5</h6>

                    <div className="reviews-stars">
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star reviews-icon"></i>
                      <i className="bi-star reviews-icon"></i>
                    </div>

                    <p className="reviews-text mb-0 ms-4">76 Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
