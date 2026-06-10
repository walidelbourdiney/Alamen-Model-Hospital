import "../../assets/styles/Specialties.css";

const centers = [
  {
    title: "وحدة القسطرة القلبية",
    description:
      "تشخيص وعلاج أمراض القلب والشرايين باستخدام أحدث تقنيات القسطرة العلاجية والتشخيصية.",
  },

  {
    title: "وحدة القسطرة المخية",
    description:
      "التعامل مع أمراض الأوعية الدموية بالمخ والسكتات الدماغية بأحدث الأساليب العلاجية.",
  },

  {
    title: "وحدة الأشعة التداخلية",
    description:
      "إجراءات علاجية دقيقة بدون جراحة تقليدية مع تقليل فترة التعافي للمريض.",
  },

  {
    title: "وحدة علاج الأورام",
    description:
      "خدمات تشخيص ومتابعة وعلاج الأورام وفق أحدث البروتوكولات الطبية.",
  },

  {
    title: "وحدة غسيل الكلى",
    description:
      "10 وحدات متطورة لغسيل الكلى بالإضافة إلى خدمات الغسيل بالبلازما داخل العناية.",
  },

  {
    title: "وحدة علاج الألم",
    description:
      "برامج علاجية متخصصة للسيطرة على الألم وتحسين جودة حياة المرضى.",
  },
];

export default function Specialties() {
  return (
    <section className="excellence section" id="centers">
      <div className="container">
        <div className="excellence-header">
          <span className="section-tag">مراكز التميز الطبية</span>

          <h2 className="section-title">خدمات تخصصية متقدمة بأحدث التقنيات</h2>

          <p className="section-subtitle">
            تضم المستشفى مجموعة من الوحدات الطبية المتخصصة التي توفر خدمات
            تشخيصية وعلاجية متقدمة وفق أعلى معايير الجودة.
          </p>
        </div>

        <div className="centers-grid">
          {centers.map((center, index) => (
            <article key={index} className="center-card">
              <div className="center-number">0{index + 1}</div>

              <h3>{center.title}</h3>

              <p>{center.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
