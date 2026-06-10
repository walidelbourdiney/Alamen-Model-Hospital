import "../../assets/styles/BeautyCenter.css";

const services = [
  {
    title: "إزالة الشعر بالليزر",
  },
  {
    title: "حقن البوتوكس",
  },
  {
    title: "حقن الفيلر",
  },
  {
    title: "نحت وتنسيق القوام",
  },
];

export default function BeautyCenter() {
  return (
    <section className="beauty-center section" id="beauty-center">
      <div className="container">
        <div className="beauty-content">
          <div className="beauty-text">
            <span className="section-tag">مركز التجميل الطبي</span>

            <h2 className="section-title">
              خدمات تجميل متكاملة بأحدث التقنيات
            </h2>

            <p className="beauty-description">
              يقدم قسم التجميل بالمستشفى مجموعة متكاملة من الخدمات التجميلية
              والعلاجية تحت إشراف متخصصين باستخدام أحدث الأجهزة والتقنيات
              الطبية.
            </p>

            <div className="beauty-services">
              {services.map((service, index) => (
                <div className="beauty-service" key={index}>
                  {service.title}
                </div>
              ))}
            </div>
          </div>

          <div className="beauty-card">
            <span>Premium Care</span>

            <h3>
              عناية متخصصة
              <br />
              ونتائج طبيعية
            </h3>

            <p>
              بيئة طبية آمنة وتجهيزات حديثة تضمن أعلى مستويات الجودة والخصوصية.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
