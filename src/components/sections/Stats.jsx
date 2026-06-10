import "../../assets/styles/Stats.css";

const stats = [
  {
    number: "106",
    label: "سرير طبي",
  },
  {
    number: "28",
    label: "عيادة خارجية",
  },
  {
    number: "11",
    label: "سرير عناية مركزة",
  },
  {
    number: "10",
    label: "وحدات غسيل كلوي",
  },
  {
    number: "10",
    label: "حضانات أطفال",
  },
  {
    number: "4",
    label: "أسررة عناية أطفال",
  },
  {
    number: "7",
    label: "أسرة عناية قلب",
  },
  {
    number: "20",
    label: "سرير الاستقبال والطوارئ",
  },
  {
    number: "4",
    label: "أسرة عناية مخ و أعصاب",
  },
];

export default function HospitalStats() {
  return (
    <section className="hospital-stats section" id="stats">
      <div className="container">
        <div className="stats-header">
          <span className="section-tag">مستشفى العلمين بالأرقام</span>

          <h2 className="section-title">
            إمكانيات وتجهيزات متكاملة لخدمة المرضى
          </h2>

          <p className="section-subtitle">
            نقدم منظومة طبية متكاملة تضم أحدث التجهيزات الطبية والكوادر المتخصصة
            لتوفير أفضل مستويات الرعاية الصحية.
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((item, index) => (
            <div className="stat-card" key={index}>
              <h3>{item.number}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
