import "../../assets/styles/Hero.css";

import heroImage from "../../assets/images/alaHospital.jpg";

export default function Hero() {
  return (
    <section
      className="hero"
      id="hero"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="hero-overlay"></div>

      <div className="container hero-content">
        <div className="hero-text">
          <span className="hero-badge">مستشفى العلمين النموذجي</span>

          <h1>
            رعاية صحية متكاملة
            <span> بمعايير طبية متقدمة</span>
          </h1>

          <p>
            نقدم خدمات طبية متخصصة على مدار الساعة بأحدث التقنيات الطبية وكوادر
            مؤهلة لخدمة أهالي وزوار مدينة العلمين والساحل الشمالي.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">
              احجز موعداً
            </a>

            <a href="#about" className="btn-secondary">
              تعرف علينا
            </a>
          </div>

          {/* <div className="hero-stats">
            <div>
              <h3>24/7</h3>
              <span>خدمة الطوارئ</span>
            </div>

            <div>
              <h3>97+</h3>
              <span>سريراً طبياً</span>
            </div>

            <div>
              <h3>15+</h3>
              <span>تخصصاً طبياً</span>
            </div>
          </div> */}
        </div>

        <div className="hero-card">
          <h3>رؤية نحو مستقبل صحي أفضل</h3>

          <p>
            نسعى إلى تقديم خدمات صحية متكاملة تجمع بين الخبرة الطبية
            والتكنولوجيا الحديثة لتحقيق أفضل تجربة علاجية للمرضى.
          </p>
        </div>
      </div>
    </section>
  );
}
