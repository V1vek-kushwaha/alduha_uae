import Link from "next/link";

export default function Section9() {
  return (
    <>
      <section className="blog-area-3 pt-120 pb-120">
        <div className="container">
          <div className="section__title mb-50 text-center">
            <span className="sub-title text-anim">Recent Posts</span>
            <h2 className="title text-anim2">Latest Blogs &amp; Updates</h2>
          </div>
          <div className="row gy-30 justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div className="blog__post-item blog__post-item-five">
                <div className="blog__post-thumb image-anim">
                  <Link href="/blog-details">
                    <img src="/assets/img/blog/3-1.jpg" alt="img" />
                  </Link>
                </div>
                <div className="blog__post-content">
                  <div className="blog__post-meta">
                    <ul className="list-wrap">
                      <li>
                        <Link href="/blog-details">
                          <i className="fas fa-calendar" />
                          24 Feb, 2025
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-details">
                          <i className="fas fa-user" />
                          by admin
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <h3 className="title">
                    <Link href="/blog-details">
                      How can I start a company in the United Arab Emirates?
                    </Link>
                  </h3>
                  <p className="text">
                    You will need to choose an industry, choose your
                    organisational structure, find a local sponsor or partner,
                    register your company with the relevant UAE authorities
                  </p>
                  <div className="blog__post-bottom">
                    <Link href="/blog-details" className="link-btn">
                      READ MORE
                      <i className="fas fa-angle-double-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog__post-item blog__post-item-five">
                <div className="blog__post-thumb image-anim">
                  <Link href="/blog-details">
                    <img src="/assets/img/blog/3-2.jpg" alt="img" />
                  </Link>
                </div>
                <div className="blog__post-content">
                  <div className="blog__post-meta">
                    <ul className="list-wrap">
                      <li>
                        <Link href="/blog-details">
                          <i className="fas fa-calendar" />
                          26 Mar, 2025
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-details">
                          <i className="fas fa-user" />
                          by admin
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <h3 className="title">
                    <Link href="/blog-details">
                      Can foreign nationals open a business in the UAE?
                    </Link>
                  </h3>
                  <p className="text">
                    Usually, such is the case. However, there may be limitations
                    due to taxes regulations in your place of residence, your
                    nationality, and the type of business you
                  </p>
                  <div className="blog__post-bottom">
                    <Link href="/blog-details" className="link-btn">
                      READ MORE
                      <i className="fas fa-angle-double-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog__post-item blog__post-item-five">
                <div className="blog__post-thumb image-anim">
                  <Link href="/blog-details">
                    <img src="/assets/img/blog/3-3.jpg" alt="img" />
                  </Link>
                </div>
                <div className="blog__post-content">
                  <div className="blog__post-meta">
                    <ul className="list-wrap">
                      <li>
                        <Link href="/blog-details">
                          <i className="fas fa-calendar" />
                          14 Apr, 2025
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-details">
                          <i className="fas fa-user" />
                          by admin
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <h3 className="title">
                    <Link href="/blog-details">
                      UAE Mainland Company Registration cost?
                    </Link>
                  </h3>
                  <p className="text">
                    UAE mainland setup costs include licenses, registration,
                    immigration fees, office rent, and operations. Consult a
                    setup expert for accurate pricing.
                  </p>
                  <div className="blog__post-bottom">
                    <Link href="/blog-details" className="link-btn">
                      READ MORE
                      <i className="fas fa-angle-double-right" />
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
