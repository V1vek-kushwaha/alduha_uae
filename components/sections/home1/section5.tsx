import CounterUp from "@/components/elements/CounterUp";

export default function Section5() {
  return (
    <>
      <section className="counter-area-1 pb-120 pt-120 pt-xl-0">
        <div className="container">
          <div className="row gy-30 justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="counter-card">
                <h3 className="counter-card_title">
                  <CounterUp>10</CounterUp>+
                </h3>
                <p className="counter-card_subtitle">
                  Years of Mainland Expertise
                </p>
                <p className="counter-card_text">
                  A decade of proven success in UAE mainland business formation
                  and consulting.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="counter-card">
                <h3 className="counter-card_title">
                  <CounterUp>96</CounterUp>+
                </h3>
                <p className="counter-card_subtitle">
                  Mainland Companies Formed
                </p>
                <p className="counter-card_text">
                  We’ve helped over 500 businesses establish and grow across UAE
                  mainland jurisdictions.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="counter-card">
                <h3 className="counter-card_title">
                  <CounterUp>100</CounterUp>
                </h3>
                <p className="counter-card_subtitle">
                  Foreign Ownership Available
                </p>
                <p className="counter-card_text">
                  Set up your business with full ownership rights under UAE's
                  mainland regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
