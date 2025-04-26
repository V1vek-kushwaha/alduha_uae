import Link from "next/link";

export default function Footer1() {
  return (
    <>
      <footer>
        <div className="footer__area footer__area-one  black1-bg">
          <div className="footer__bg-shape1-1">
            <img src="/assets/img/bg/footer-bg-shape1-1.png" alt="img" />
          </div>
          <div className="container">
            <div className="footer__top fix">
              <div className="row gy-40 justify-content-between align-items-center">
                <div className="col-xl-5 col-lg-6">
                  <h3 className="footer__top-title">
                    Join alduha and Get a Special Discount
                  </h3>
                </div>
                <div className="col-auto">
                  <Link href="/contact" className="btn btn-three">
                    <span
                      className="btn-text"
                      data-text="WRITE YOUR EXPERIENCE"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="footer__middle">
              <div className="row justify-content-between">
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="footer__widget footer__about">
                    <div className="footer__logo">
                      <Link href="/">
                        <img src="/assets/img/logo/logo-white.png" alt="logo" />
                      </Link>
                    </div>
                    <p className="footer__content mb-35">
                      Experience seamless business setup in Dubai with our
                      expert solutions. With over 10+ years of expertise
                    </p>
                    <div className="social-links">
                      <ul className="list-wrap">
                        <li>
                          <Link
                            href="/https://www.facebook.com/"
                            target="_blank"
                          >
                            <i className="fab fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link href="/https://twitter.com" target="_blank">
                            <i className="fab fa-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/https://www.linkedin.com/"
                            target="_blank"
                          >
                            <i className="fab fa-linkedin-in" />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/https://www.instagram.com/"
                            target="_blank"
                          >
                            <i className="fab fa-instagram" />
                          </Link>
                        </li>
                        <li>
                          <Link href="/https://www.skype.com/" target="_blank">
                            <i className="fab fa-skype" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-auto col-md-6">
                  <div className="footer__widget footer__links">
                    <h4 className="footer__widget-title">Quick Links</h4>
                    <ul className="list-wrap">
                      <li>
                        <Link href="/about">
                          <svg
                            width={17}
                            height={14}
                            viewBox="0 0 17 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9 1L15 7M15 7L9 13M15 7H0"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            />
                          </svg>
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link href="/project">
                          <svg
                            width={17}
                            height={14}
                            viewBox="0 0 17 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9 1L15 7M15 7L9 13M15 7H0"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            />
                          </svg>
                          Portfolio
                        </Link>
                      </li>
                      <li>
                        <Link href="/appointment">
                          <svg
                            width={17}
                            height={14}
                            viewBox="0 0 17 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9 1L15 7M15 7L9 13M15 7H0"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            />
                          </svg>
                          Appointment
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog">
                          <svg
                            width={17}
                            height={14}
                            viewBox="0 0 17 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9 1L15 7M15 7L9 13M15 7H0"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            />
                          </svg>
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact">
                          <svg
                            width={17}
                            height={14}
                            viewBox="0 0 17 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9 1L15 7M15 7L9 13M15 7H0"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            />
                          </svg>
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-auto col-md-6">
                  <div className="footer__widget footer__contact">
                    <h4 className="footer__widget-title">Office Inforamtion</h4>
                    <div className="footer__info-item">
                      <div className="footer__info-icon">
                        <i className="fas fa-phone-alt" />
                      </div>
                      <div className="footer__info-content">
                        <h4 className="title">Call Us 24/7</h4>
                        <Link href="/tel:25621452156">(+971) 2145.2156</Link>
                      </div>
                    </div>
                    <div className="footer__info-item">
                      <div className="footer__info-icon">
                        <i className="fas fa-envelope" />
                      </div>
                      <div className="footer__info-content">
                        <h4 className="title">Work with us</h4>
                        <Link href="/mailto:info@alduha.com">
                          info@alduha.com
                        </Link>
                      </div>
                    </div>
                    <div className="footer__info-item">
                      <div className="footer__info-icon">
                        <i className="fas fa-map-marker-alt" />
                      </div>
                      <div className="footer__info-content">
                        <h4 className="title">Our Location</h4>
                        <p>251 Hilton, Dubai</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-auto col-md-6">
                  <div className="footer__widget footer__insta-feed-list">
                    <h4 className="footer__widget-title">Instagram Posts</h4>
                    <ul className="list-wrap">
                      <li>
                        <div className="insta-thumb">
                          <img
                            src="/assets/img/widget/ins_post01.jpg"
                            alt="Image"
                          />
                          <Link href="/instagram.com" className="icon-btn">
                            <i className="fab fa-instagram" />
                          </Link>
                        </div>
                      </li>
                      <li>
                        <div className="insta-thumb">
                          <img
                            src="/assets/img/widget/ins_post02.jpg"
                            alt="Image"
                          />
                          <Link href="/instagram.com" className="icon-btn">
                            <i className="fab fa-instagram" />
                          </Link>
                        </div>
                      </li>
                      <li>
                        <div className="insta-thumb">
                          <img
                            src="/assets/img/widget/ins_post03.jpg"
                            alt="Image"
                          />
                          <Link href="/instagram.com" className="icon-btn">
                            <i className="fab fa-instagram" />
                          </Link>
                        </div>
                      </li>
                      <li>
                        <div className="insta-thumb">
                          <img
                            src="/assets/img/widget/ins_post04.jpg"
                            alt="Image"
                          />
                          <Link href="/instagram.com" className="icon-btn">
                            <i className="fab fa-instagram" />
                          </Link>
                        </div>
                      </li>
                      <li>
                        <div className="insta-thumb">
                          <img
                            src="/assets/img/widget/ins_post05.jpg"
                            alt="Image"
                          />
                          <Link href="/instagram.com" className="icon-btn">
                            <i className="fab fa-instagram" />
                          </Link>
                        </div>
                      </li>
                      <li>
                        <div className="insta-thumb">
                          <img
                            src="/assets/img/widget/ins_post06.jpg"
                            alt="Image"
                          />
                          <Link href="/instagram.com" className="icon-btn">
                            <i className="fab fa-instagram" />
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom text-center">
            <div className="container">
              <div className="footer__copyright">
                <Link href="#">alduha</Link> - Copyright 2025. All rights
                reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
