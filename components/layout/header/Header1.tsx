import Link from "next/link";

export default function Header1({
  scroll,
  isMobileMenu,
  handleMobileMenu,
}: any) {
  return (
    <>
      <header>
        <div id="header-fixed-height" className="header-fixed-height-two" />
        <div className="tg-header__top tg-header__top d-lg-block d-none">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <ul className="tg-header__top-info left-side list-wrap justify-content-xl-start justify-content-center">
                  <li>
                    <svg
                      width={16}
                      height={14}
                      viewBox="0 0 16 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5625 5.03125L14.8438 10.7812C14.9375 10.9375 15 11.0938 15 11.2812V13C15 13.5625 14.5312 14 14 14H2C1.4375 14 1 13.5625 1 13V11.2812C1 11.0938 1.03125 10.9375 1.125 10.7812L4.40625 5.03125C4.75 4.40625 5.4375 4 6.15625 4H9.8125C10.5312 4 11.1875 4.40625 11.5625 5.03125ZM13.5 12.5V11.4062L10.25 5.75C10.1562 5.625 10 5.5 9.8125 5.5H6.15625C5.96875 5.5 5.8125 5.625 5.71875 5.75L2.5 11.4062V12.5H13.5ZM8 7C9.09375 7 10 7.90625 10 9C10 10.125 9.09375 11 8 11C6.875 11 6 10.125 6 9C6 7.90625 6.875 7 8 7ZM15.8125 2.84375C15.9062 2.96875 16 3.09375 16 3.25V5C16 5.28125 15.75 5.5 15.5 5.5H13.2812C13.0938 5.5 12.9375 5.40625 12.8438 5.25L12 3C10.75 2.46875 9.375 2.25 8 2.25C6.59375 2.25 5.21875 2.46875 4 3L3.125 5.25C3.03125 5.40625 2.875 5.5 2.6875 5.5H0.5C0.21875 5.5 0 5.28125 0 5V3.25C0 3.09375 0.0625 2.96875 0.15625 2.84375C2.34375 1.03125 5.125 0 8 0C10.8438 0 13.625 1.03125 15.8125 2.84375Z"
                        fill="currentColor"
                      />
                    </svg>
                    Affordable UAE Mainland Company Setup – Expert Guidance,
                    Clear Costs.
                  </li>
                </ul>
              </div>
              <div className="col-xl-6 col-md-4 d-xl-block d-none">
                <ul className="tg-header__top-right list-wrap">
                  <li className="tg-header__top-social">
                    <ul className="list-wrap">
                      <li>
                        <Link href="/https://www.facebook.com/" target="_blank">
                          <i className="fab fa-facebook-f me-2" />
                          Facebook
                        </Link>
                      </li>
                      <li>
                        <Link href="/https://twitter.com" target="_blank">
                          <i className="fab fa-twitter me-2" />
                          Twitter
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/https://www.fa-linkedin.com/"
                          target="_blank"
                        >
                          <i className="fab fa-linkedin-in me-2" />
                          Linkedin
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="tg-header__middle d-lg-block d-none">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="tgmenu__wrap">
                  <nav className="tgmenu__nav">
                    <div className="logo">
                      <Link href="/">
                        <img src="/assets/img/logo/logo.png" alt="Logo" />
                      </Link>
                    </div>
                    <div className="info-card-wrap">
                      <div className="info-card">
                        <div className="info-card_icon">
                          <i className="fas fa-phone-alt" />
                        </div>
                        <div className="info-card_content">
                          <p className="info-card_text">Phone Number</p>
                          <Link
                            href="/tel:+12013802737"
                            className="info-card_link"
                          >
                            (+971) 2156-2145
                          </Link>
                        </div>
                      </div>
                      <div className="info-card">
                        <div className="info-card_icon">
                          <i className="fas fa-envelope" />
                        </div>
                        <div className="info-card_content">
                          <p className="info-card_text">Email Us Here</p>
                          <Link
                            href="/mailto:info@alduha.com"
                            className="info-card_link"
                          >
                            info@alduha.com
                          </Link>
                        </div>
                      </div>
                      <div className="info-card">
                        <div className="info-card_icon">
                          <i className="fas fa-map-marker-alt" />
                        </div>
                        <div className="info-card_content">
                          <p className="info-card_text">Office Address</p>
                          <p className="info-card_link">251 Hilton, Dubai</p>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="sticky-header" className="tg-header__area tg-header__area-two">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="tgmenu__wrap">
                  <nav className="tgmenu__nav">
                    <div className="logo d-lg-none d-block">
                      <Link href="/">
                        <img src="/assets/img/logo/logo.png" alt="Logo" />
                      </Link>
                    </div>
                    <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex">
                      <ul className="navigation">
                        <li className="menu-item-has-children active">
                          <Link href="#">Business Setup</Link>
                          <ul className="sub-menu">
                            <li className="active">
                              <Link href="/">UAE</Link>
                            </li>

                            <li className="active">
                              <Link href="/">UAE Free Zone</Link>
                            </li>
                            <li className="active">
                              <Link href="/">UAE Offshore</Link>
                            </li>
                            <li className="active">
                              <Link href="/">Packages</Link>
                            </li>
                            {/* <li>
                              <Link href="/home-2">Home Two</Link>
                            </li>
                            <li>
                              <Link href="/home-3">Home Three</Link>
                            </li>
                            <li>
                              <Link href="/home-4">Home Four</Link>
                            </li>
                            <li>
                              <Link href="/home-5">Home Five</Link>
                            </li> */}
                          </ul>
                        </li>

                        <li className="menu-item-has-children">
                          <Link href="#">Our Services</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link href="/service">
                                Trade License Services
                              </Link>
                            </li>
                            <li>
                              <Link href="/service-details">
                                Pro & Visa Services
                              </Link>
                            </li>
                            <li>
                              <Link href="/service-details">
                                Other Services
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li className="menu-item-has-children">
                          <Link href="#">Community</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link href="/about">Abour Us</Link>
                            </li>
                            <li>
                              <Link href="/project">News & Events</Link>
                            </li>
                            <li>
                              <Link href="/project-details">
                                Press Releases
                              </Link>
                            </li>
                            <li>
                              <Link href="/team">Client Stories</Link>
                            </li>
                            <li>
                              <Link href="/team-details">Company Profile</Link>
                            </li>
                            <li>
                              <Link href="/pricing">Chairmen's Profile</Link>
                            </li>
                            <li>
                              <Link href="/appointment">Our Experts</Link>
                            </li>
                            <li>
                              <Link href="/error">Why Al-Duha</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link href="/blog">Blog </Link>
                        </li>
                        <li className="menu-item-has-children">
                          <Link href="#">Resources</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link href="/blog">Ongoing Promotions</Link>
                            </li>
                            <li>
                              <Link href="/blog-2">Expert Columns</Link>
                            </li>
                            <li>
                              <Link href="/blog-details">
                                BizCast by Al-Duha
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <Link href="#">Auxiliaried</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link href="/blog">Business Centers </Link>
                            </li>
                            <li>
                              <Link href="/blog-2">Tax & Accounting</Link>
                            </li>
                            <li>
                              <Link href="/blog-details"> Legal</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link href="/contact">Contacts</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="tgmenu__action d-none d-lg-block">
                      <Link
                        href="/appointment"
                        className="btn btn-two menu-tigger"
                      >
                        <span
                          className="btn-text"
                          data-text="Book Appointment"
                        />
                      </Link>
                    </div>
                    <div className="mobile-nav-toggler d-lg-none d-inline-flex">
                      <Link href="#" className="sidebar-btn">
                        <span className="line" />
                        <span className="line" />
                        <span className="line" />
                      </Link>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Menu  */}
        <div className="tgmobile__menu">
          <nav className="tgmobile__menu-box">
            <div className="close-btn">
              <i className="fas fa-times" />
            </div>
            <div className="nav-logo">
              <Link href="/">
                <img src="/assets/img/logo/logo-1.png" alt="Logo" />
              </Link>
            </div>
            <div className="tgmobile__menu-outer">
              {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
            </div>
            <div className="tgmobile__menu-bottom">
              <div className="contact-info">
                <ul className="list-wrap">
                  <li>
                    Mail:{" "}
                    <Link href="/mailto:info@alduha.com">info@alduha.com</Link>
                  </li>
                  <li>
                    Phone: <Link href="/tel:0123456789">+123 888 9999</Link>
                  </li>
                </ul>
              </div>
              <div className="social-links">
                <ul className="list-wrap">
                  <li>
                    <Link href="/https://www.facebook.com/" target="_blank">
                      <i className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/https://twitter.com" target="_blank">
                      <i className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/https://www.whatsapp.com/" target="_blank">
                      <i className="fab fa-whatsapp" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/https://www.instagram.com/" target="_blank">
                      <i className="fab fa-instagram" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/https://www.youtube.com/" target="_blank">
                      <i className="fab fa-youtube" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="tgmobile__menu-backdrop" />
        {/* End Mobile Menu */}
        {/* offCanvas-menu */}
        <div className="offCanvas__info">
          <div className="offCanvas__close-icon menu-close">
            <button>
              <i className="fas fa-times" />
            </button>
          </div>
          <div className="appointment-wrap2">
            <div className="appointment-thumb2 d-lg-block d-none">
              <img src="/assets/img/others/appointment2-1.png" alt="img" />
            </div>
            <div className="row justify-content-end">
              <div className="col-lg-6">
                <div className="appointment-form-wrap">
                  <div className="section__title mb-30">
                    <h4 className="title">Make An Appointment</h4>
                  </div>
                  <form
                    action="mail.php"
                    method="POST"
                    className="appointment__form ajax-contact"
                  >
                    <div className="row gy-20">
                      <div className="col-xl-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control style-border3"
                            name="name"
                            id="name"
                            placeholder="Your Name"
                          />
                          <label className="form-icon-right2">
                            <svg
                              width={14}
                              height={16}
                              viewBox="0 0 14 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7 8C4.78125 8 3 6.21875 3 4C3 1.8125 4.78125 0 7 0C9.1875 0 11 1.8125 11 4C11 6.21875 9.1875 8 7 8ZM7 1C5.34375 1 4 2.375 4 4C4 5.65625 5.34375 7 7 7C8.625 7 10 5.65625 10 4C10 2.375 8.625 1 7 1ZM8.5625 9.5C11.5625 9.5 14 11.9375 14 14.9375C14 15.5312 13.5 16 12.9062 16H1.0625C0.46875 16 0 15.5312 0 14.9375C0 11.9375 2.40625 9.5 5.40625 9.5H8.5625ZM12.9062 15C12.9375 15 13 14.9688 13 14.9375C13 12.5 11 10.5 8.5625 10.5H5.40625C2.96875 10.5 1 12.5 1 14.9375C1 14.9688 1.03125 15 1.0625 15H12.9062Z"
                                fill="currentColor"
                              />
                            </svg>
                          </label>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control style-border3"
                            name="email"
                            id="email"
                            placeholder="Email Address"
                          />
                          <label className="form-icon-right2">
                            <svg
                              width={16}
                              height={12}
                              viewBox="0 0 16 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0 2C0 0.90625 0.875 0 2 0H14C15.0938 0 16 0.90625 16 2V10C16 11.125 15.0938 12 14 12H2C0.875 12 0 11.125 0 10V2ZM1 2V3.25L7.09375 7.75C7.625 8.125 8.34375 8.125 8.875 7.75L15 3.25V2C15 1.46875 14.5312 1 14 1H1.96875C1.4375 1 0.96875 1.46875 0.96875 2H1ZM1 4.5V10C1 10.5625 1.4375 11 2 11H14C14.5312 11 15 10.5625 15 10V4.5L9.46875 8.5625C8.59375 9.1875 7.375 9.1875 6.5 8.5625L1 4.5Z"
                                fill="currentColor"
                              />
                            </svg>
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <select
                            name="subject"
                            id="subject"
                            className="form-select style-border3"
                          >
                            <option>Select Service</option>
                            <option value="Business">Business</option>
                            <option value="Managment">Managment</option>
                            <option value="Analysis">Analysis</option>
                          </select>
                          <label className="form-icon-right2">
                            <svg
                              width={16}
                              height={8}
                              viewBox="0 0 16 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.125 0.6875C1.21875 0.5625 1.34375 0.5 1.5 0.5C1.59375 0.5 1.71875 0.53125 1.8125 0.625L7.96875 6.28125L14.1562 0.625C14.3438 0.4375 14.6562 0.4375 14.8438 0.65625C15.0312 0.84375 15.0312 1.15625 14.8125 1.34375L8.3125 7.34375C8.125 7.53125 7.84375 7.53125 7.65625 7.34375L1.15625 1.34375C0.9375 1.1875 0.9375 0.875 1.125 0.6875Z"
                                fill="currentColor"
                              />
                            </svg>
                          </label>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="date-pick form-control style-border3"
                            name="date"
                            id="date-pick"
                            placeholder="Select Date"
                          />
                          <label className="form-icon-right2">
                            <svg
                              width={14}
                              height={16}
                              viewBox="0 0 14 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 2H10.75V0.75C10.75 0.34375 10.4062 0 10 0C9.625 0 9.25 0.34375 9.25 0.75V2H4.75V0.75C4.75 0.34375 4.40625 0 4 0C3.5625 0 3.25 0.34375 3.25 0.75V2H2C0.875 2 0 2.90625 0 4V14C0 15.125 0.875 16 2 16H12C13.0938 16 14 15.125 14 14V4C14 2.90625 13.0938 2 12 2ZM12 14.5H2C1.71875 14.5 1.5 14.2812 1.5 14V6H12.5V14C12.5 14.2812 12.25 14.5 12 14.5Z"
                                fill="currentColor"
                              />
                            </svg>
                          </label>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="time-pick form-control style-border3"
                            name="time"
                            id="time-pick"
                            placeholder="Select Time"
                          />
                          <label className="form-icon-right2">
                            <svg
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.25 3.75C7.25 3.34375 7.5625 3 8 3C8.40625 3 8.75 3.34375 8.75 3.75V7.625L11.4062 9.375C11.75 9.625 11.8438 10.0938 11.5938 10.4375C11.375 10.7812 10.9062 10.875 10.5625 10.625L7.5625 8.625C7.375 8.5 7.25 8.25 7.25 8V3.75ZM8 0C12.4062 0 16 3.59375 16 8C16 12.4375 12.4062 16 8 16C3.5625 16 0 12.4375 0 8C0 3.59375 3.5625 0 8 0ZM1.5 8C1.5 11.5938 4.40625 14.5 8 14.5C11.5625 14.5 14.5 11.5938 14.5 8C14.5 4.4375 11.5625 1.5 8 1.5C4.40625 1.5 1.5 4.4375 1.5 8Z"
                                fill="currentColor"
                              />
                            </svg>
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <textarea
                            name="message"
                            placeholder="Type Your Message"
                            id="contactForm"
                            className="form-control style-border3"
                          />
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn mt-30">
                      <span className="btn-text" data-text="Submit Message" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="offCanvas__overly" />
        {/* offCanvas-menu-end */}
      </header>
    </>
  );
}
