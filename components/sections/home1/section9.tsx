import Link from "next/link";

export default function Section9() {
  return (
    <>
      <section className="blog-area-1 pt-120 pb-120">
        <div className="container">
          <div className="section__title mb-50 text-center">
            <span className="sub-title text-anim">News Updates</span>
            <h2 className="title text-anim2">Latest Blog Posts</h2>
          </div>
          <div className="row gy-40 justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div className="blog__post-item blog__post-item-two blog__post-item-three">
                <div className="blog__post-thumb image-anim">
                  <Link href="/#">
                    <img src="/assets/img/blog/1-1.jpg" alt="img" />
                  </Link>
                  <div className="blog__post-date">
                    15 <span>Jan</span>
                  </div>
                </div>
                <div className="blog__post-content">
                  <h3 className="title">
                    <Link href="/#">
                      How can I start a company in the United Arab Emirates?
                    </Link>
                  </h3>
                  <p className="text">
                    You will need to choose an industry, choose your
                    organisational structure, find a local sponsor or partner,
                    register your company with the relevant UAE authorities
                  </p>
                  <div className="blog__post-bottom">
                    <Link href="/#" className="link-btn">
                      READ MORE
                      <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog__post-item blog__post-item-two blog__post-item-three">
                <div className="blog__post-thumb image-anim">
                  <Link href="/#">
                    <img src="/assets/img/blog/1-2.jpg" alt="img" />
                  </Link>
                  <div className="blog__post-date">
                    20 <span>FEB</span>
                  </div>
                </div>
                <div className="blog__post-content">
                  <h3 className="title">
                    <Link href="/#">
                      Can foreign nationals open a business in the UAE?
                    </Link>
                  </h3>
                  <p className="text">
                    Usually, such is the case. However, there may be limitations
                    due to taxes regulations in your place of residence, your
                    nationality, and the type of business you
                  </p>
                  <div className="blog__post-bottom">
                    <Link href="/#" className="link-btn">
                      READ MORE
                      <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog__post-item blog__post-item-two blog__post-item-three">
                <div className="blog__post-thumb image-anim">
                  <Link href="/#">
                    <img src="/assets/img/blog/1-3.jpg" alt="img" />
                  </Link>
                  <div className="blog__post-date">
                    05 <span>JUN</span>
                  </div>
                </div>
                <div className="blog__post-content">
                  <h3 className="title">
                    <Link href="/#">
                      UAE Mainland Company Registration cost?
                    </Link>
                  </h3>
                  <p className="text">
                    UAE mainland setup costs include licenses, registration,
                    immigration fees, office rent, and operations. Consult a
                    setup expert for accurate pricing.
                  </p>
                  <div className="blog__post-bottom">
                    <Link href="/#" className="link-btn">
                      READ MORE
                      <i className="fas fa-arrow-right" />
                    </Link>
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
