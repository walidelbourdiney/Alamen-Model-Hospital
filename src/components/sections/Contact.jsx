import "../../assets/styles/Contact.css";

import { FaPhoneAlt, FaMapMarkerAlt, FaGlobe, FaClock } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-header">
          <span className="section-tag">تواصل معنا</span>

          <h2 className="section-title">نحن هنا لخدمتكم على مدار الساعة</h2>

          <p className="section-subtitle">
            يمكنكم التواصل معنا أو زيارة المستشفى للحصول على أفضل خدمات الرعاية
            الصحية.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3>العنوان</h3>

                <p>
                  طريق الإسكندرية - مطروح الكيلو 107
                  <br />
                  أمام فندق الماسة
                  <br />
                  العلمين الجديدة - مصر
                </p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <FaPhoneAlt />
              </div>

              <div>
                <h3>الهاتف</h3>

                <a href="tel:01553705492">015 53705492</a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <FaGlobe />
              </div>

              <div>
                <h3>الموقع الإلكتروني</h3>

                <a
                  href="http://Alamenhospital.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Alamenhospital.com
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <FaClock />
              </div>

              <div>
                <h3>ساعات العمل</h3>

                <p>نعمل على مدار 24 ساعة</p>
              </div>
            </div>
          </div>

          <div className="contact-map">
            <iframe
              title="Hospital Location"
              src="https://maps.google.com/maps?q=Alamein%20Hospital&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
