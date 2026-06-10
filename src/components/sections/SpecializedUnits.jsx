import "../../assets/styles/SpecializedUnits.css";

const units = [
  "وحدة القسطرة القلبية",
  "وحدة القسطرة المخية",
  "وحدة القسطرة الطرفية",
  "وحدة مناظير جراحة العظام",
  "وحدة مناظير الجهاز الهضمي",
  "وحدة مناظير النساء",
  "وحدة مناظير المسالك البولية",
  "وحدة مناظير الأنف والأذن",
  "وحدة الجراحات الميكروسكوبية للأنف والأذن",
  "قسم إصابات الملاعب",
];

export default function SpecializedUnits() {
  return (
    <section className="specialized-units section" id="units">
      <div className="container">
        <div className="units-header">
          <span className="section-tag">الوحدات المتخصصة</span>

          <h2 className="section-title">
            وحدات طبية متقدمة لخدمات دقيقة ومتخصصة
          </h2>

          <p className="section-subtitle">
            تضم المستشفى مجموعة من الوحدات المتخصصة المجهزة بأحدث التقنيات
            لتقديم خدمات تشخيصية وعلاجية متقدمة.
          </p>
        </div>

        <div className="units-grid">
          {units.map((unit, index) => (
            <div className="unit-card" key={index}>
              <span className="unit-index">
                {(index + 1).toString().padStart(2, "0")}
              </span>

              <h3>{unit}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
