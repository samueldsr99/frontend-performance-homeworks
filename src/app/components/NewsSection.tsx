import Image from "next/image";
import Link from "next/link";

export default function NewsSection() {
  return (
    <section className="news section-padding">
      <div className="container">
        <div className="row">
          <h2 className="text-center mb-lg-5 mb-4">News &amp; Events</h2>

          <div className="col-lg-6 col-md-6 col-12">
            <div className="news-thumb mb-4">
              <Link href="/news-detail">
                <Image
                  loading="lazy"
                  src="/images/news/pablo-merchan-montes-Orz90t6o0e4-unsplash.webp"
                  className="img-fluid news-image"
                  width={800}
                  height={600}
                  alt=""
                />
              </Link>

              <div className="news-text-info news-text-info-large">
                <span className="category-tag bg-danger">Featured</span>

                <h5 className="news-title mt-2">
                  <Link href="/news-detaill" className="news-title-link">
                    Healthy Lifestyle and happy living tips
                  </Link>
                </h5>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12">
            <div className="news-thumb mb-4">
              <Link href="/news-detail">
                <Image
                  loading="lazy"
                  src="/images/news/stefan-johnson-xIFbDeGcy44-unsplash.webp"
                  className="img-fluid news-image"
                  alt=""
                  width={800}
                  height={600}
                />
              </Link>

              <div className="news-text-info news-text-info-large">
                <span className="category-tag bg-danger">Featured</span>

                <h5 className="news-title mt-2">
                  <Link href="/news-detail" className="news-title-link">
                    How to make a healthy meal
                  </Link>
                </h5>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-12">
            <div className="news-thumb mb-lg-0 mb-lg-4 mb-0">
              <Link href="/news-detail">
                <Image
                  loading="lazy"
                  src="/images/news/gilles-lambert-S_LhjpfIdm4-unsplash.webp"
                  className="img-fluid news-image"
                  width={800}
                  height={600}
                  alt=""
                />
              </Link>

              <div className="news-text-info">
                <span className="category-tag me-3 bg-info">Promotions</span>

                <strong>8 April 2022</strong>

                <h5 className="news-title mt-2">
                  <Link href="/news-detail" className="news-title-link">
                    Is Coconut good for you?
                  </Link>
                </h5>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-12">
            <div className="news-thumb mb-lg-0 mb-lg-4 mb-2">
              <Link href="/news-detail">
                <Image
                  loading="lazy"
                  src="/images/news/caroline-attwood-bpPTlXWTOvg-unsplash.webp"
                  className="img-fluid news-image"
                  width={800}
                  height={600}
                  alt=""
                />
              </Link>

              <div className="news-text-info">
                <span className="category-tag">News</span>

                <h5 className="news-title mt-2">
                  <Link href="/news-detail" className="news-title-link">
                    Salmon Steak Noodle
                  </Link>
                </h5>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="news-thumb mb-4">
              <Link href="news-detail.html">
                <Image
                  loading="lazy"
                  src="/images/news/louis-hansel-GiIiRV0FjwU-unsplash.webp"
                  className="img-fluid news-image"
                  width={800}
                  height={600}
                  alt=""
                />
              </Link>

              <div className="news-text-info">
                <span className="category-tag me-3 bg-info">Meeting</span>

                <strong>30 April 2022</strong>

                <h5 className="news-title mt-2">
                  <Link href="/news-detail" className="news-title-link">
                    Making a healthy salad
                  </Link>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
