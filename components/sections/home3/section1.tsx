import Link from "next/link";

export default function Section1() {
  return (
    <>
      <section
        className="hero-wrapper hero-3 overflow-hidden bg-cover"
        data-background="assets/img/hero/hero-bg3-2.png"
        style={{
          backgroundImage: "url(assets/img/hero/hero-bg3-2.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row gy-5 align-items-center">
            <div className="col-lg-6">
              <div className="hero-style3">
                <h1 className="hero-title">
                  <span></span>Dubai mainland firms offer great opportunities
                  Today
                </h1>
                <div className="hero-text text-white">
                  Welcome! Start Growing Your Business
                </div>
                <div className="tg-button-wrap mt-40">
                  <Link href="#contact" className="btn btn-three">
                    <span className="btn-text" data-text="Get Consultant" />
                  </Link>
                  <Link
                    href="#service"
                    className="btn btn-fur"
                    style={{ background: "white", color: "#05365d" }}
                  >
                    <span className="btn-text" data-text="Our Services" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-thumb3">
                <div className="img1">
                  <img src="/assets/img/hero/hero-3-1.png" alt="img" />
                </div>
                <div className="img2">
                  <img src="/assets/img/hero/hero-3-2.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
