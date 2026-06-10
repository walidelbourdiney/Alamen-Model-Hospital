import "../../assets/styles/Capabilities.css";

const specialties = [
  "القلب والأوعية الدموية",
  "المخ والأعصاب",
  "الأطفال",
  "النساء والتوليد",
  "العظام",
  "المسالك البولية",
  "الأنف والأذن والحنجرة",
  "الأورام",
  "العلاج الطبيعي",
  "التجميل",
  "الجهاز الهضمي والمناظير",
  "الكلى والغسيل الكلوي",
];

export default function Capabilities() {
  return (
    <section className="capabilities section" id="capabilities">
      <div className="container">
        <div className="capabilities-header">
          <span className="section-tag">خدماتنا الطبية</span>

          <h2 className="section-title">الأقسام والتخصصات الطبية</h2>

          <p className="section-subtitle">
            منظومة متكاملة من التخصصات الطبية لتقديم الرعاية الصحية بأعلى معايير
            الجودة والكفاءة.
          </p>
        </div>

        <div className="specialties-grid">
          {specialties.map((specialty, index) => (
            <div key={index} className="specialty-card">
              <span className="specialty-number">
                {(index + 1).toString().padStart(2, "0")}
              </span>

              <h3>{specialty}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
