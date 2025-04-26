import CounterUp from "@/components/elements/CounterUp";

export default function Section7() {
  return (
    <>
      <section className="feature-area-2 pt-120 pb-120 overflow-hidden">
        <div className="container">
          <div className="feature-wrap2">
            <div className="row gx-60 gy-5 align-items-center flex-row-reverse">
              <div className="col-xl-6 text-xl-end">
                <div className="feature-thumb2-1">
                  <div className="img1 image-anim">
                    <img src="/assets/img/others/feature2-1.jpg" alt="img" />
                  </div>
                  <div className="img2 jump image-anim">
                    <div className="thumb">
                      <img src="/assets/img/others/feature2-2.jpg" alt="img" />
                    </div>
                  </div>
                  <div className="feature-counter-wrap">
                    <div className="box-icon">
                      <img
                        src="/assets/img/icon/feature-counter-icon2-1.svg"
                        alt="img"
                      />
                    </div>
                    <h3 className="box-counter">
                      <CounterUp>96</CounterUp>%
                    </h3>
                    <p className="box-text">Successful </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="section__title">
                  <span className="sub-title text-anim">Benefits</span>
                  <h2 className="title text-anim2">
                    Benefits of UAE Mainland Company Formation
                  </h2>
                </div>
                <p className="mt-30 mb-40">
                  Setting up a UAE mainland company offers full ownership
                  flexibility, easy access to local and global markets, and
                  minimal currency restrictions. It’s an ideal choice for
                  entrepreneurs aiming for unlimited business growth across the
                  UAE and beyond...
                </p>
                <div className="about-grid-wrap style3">
                  <div className="about-grid-card style3">
                    <div className="box-icon">
                      <img
                        src="/assets/img/icon/feature-icon2-1.svg"
                        alt="img"
                      />
                    </div>
                    <div className="card-details">
                      <h4 className="box-title">Key Benefits</h4>
                      <p className="box-text">
                        Availability of commercial space for lease in any
                        location Capacity to engage in a variety of commercial
                        operations
                      </p>
                    </div>
                  </div>
                  <div className="about-grid-card style3">
                    <div className="box-icon">
                      <img
                        src="/assets/img/icon/feature-icon2-1.svg"
                        alt="img"
                      />
                    </div>
                    <div className="card-details">
                      <h4 className="box-title">Global Business Service</h4>
                      <p className="box-text">
                        Processing work visas is simple <br />
                        No restrictions on currency
                      </p>
                    </div>
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
