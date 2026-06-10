import "../../assets/styles/MedicalTechnology.css";

const technologies = [
  {
    title: "MRI",
    subtitle: "جهاز الرنين المغناطيسي",
    description:
      "تصوير دقيق ومتقدم لمختلف أعضاء الجسم للمساعدة في التشخيص والعلاج.",
  },

  {
    title: "CT × 2",
    subtitle: "أجهزة الأشعة المقطعية",
    description: "فحوصات سريعة وعالية الدقة للحالات الطارئة والتخصصية.",
  },

  {
    title: "DR × 2",
    subtitle: "الأشعة الرقمية",
    description: "تقنيات تصوير رقمية حديثة توفر نتائج دقيقة وسريعة.",
  },

  {
    title: "LAB",
    subtitle: "معامل متكاملة",
    description: "إجراء كافة أنواع التحاليل الطبية بأحدث الأجهزة المعملية.",
  },
];

export default function MedicalTechnology() {
  return (
    <section className="medical-tech section" id="technology">
      <div className="container">
        <div className="medical-tech-header">
          <span className="section-tag">التكنولوجيا الطبية</span>

          <h2 className="section-title">أحدث الأجهزة والتقنيات الطبية</h2>

          <p className="section-subtitle">
            بنية تحتية طبية متطورة وأجهزة حديثة تدعم دقة التشخيص وسرعة تقديم
            الرعاية الصحية.
          </p>
        </div>

        <div className="tech-grid">
          {technologies.map((item, index) => (
            <article className="tech-card" key={index}>
              <div className="tech-badge">{item.title}</div>

              <h3>{item.subtitle}</h3>

              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
