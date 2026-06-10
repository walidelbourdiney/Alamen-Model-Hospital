import "../../assets/styles/About.css";

import hospitalImage from "../../assets/images/alaHospital.jpg";

export default function About() {
  return (
    <section className="about-hospital section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <img src={hospitalImage} alt="مستشفى العلمين النموذجي" />
          </div>

          <div className="about-content">
            <span className="section-tag">عن المستشفى</span>

            <h2 className="section-title">
              مدينة طبية متكاملة
              <br />
              في قلب العلمين الجديدة
            </h2>

            <p className="about-description">
              تعد مستشفى العلمين النموذجي إحدى أبرز المؤسسات الطبية الحديثة
              بمدينة العلمين الجديدة، حيث توفر منظومة متكاملة من الخدمات الطبية
              والتشخيصية والعلاجية وفق أعلى معايير الجودة والرعاية الصحية.
            </p>

            <p className="about-description">
              تضم المستشفى العديد من الوحدات المتخصصة ومراكز التميز الطبي
              المدعومة بأحدث الأجهزة والتقنيات، بما يضمن تقديم خدمات صحية متقدمة
              تلبي احتياجات المرضى والزوار على مدار الساعة.
            </p>

            <div className="about-values">
              <div className="value-card">
                <h3>رؤيتنا</h3>

                <p>
                  أن نكون نموذجاً رائداً في تقديم الرعاية الصحية المتطورة
                  والخدمات الطبية المتكاملة.
                </p>
              </div>

              <div className="value-card">
                <h3>رسالتنا</h3>

                <p>
                  تقديم خدمات صحية عالية الجودة تعتمد على الكفاءة الطبية
                  والتكنولوجيا الحديثة وراحة المريض.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
