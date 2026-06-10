import "../../assets/styles/Footer.css";

import logo from "../../assets/images/logo.jpg";

import { FaFacebookF, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}

          <div className="footer-brand">
            <img src={logo} alt="مستشفى العلمين النموذجي" />

            <p>
              مستشفى العلمين النموذجي هي مؤسسة طبية متكاملة تقدم خدمات تشخيصية
              وعلاجية متقدمة وفق أعلى معايير الجودة والرعاية الصحية.
            </p>
          </div>

          {/* Links */}

          <div className="footer-links">
            <h3>روابط سريعة</h3>

            <a href="#about">عن المستشفى</a>

            <a href="#capabilities">التخصصات الطبية</a>

            <a href="#technology">التكنولوجيا الطبية</a>

            <a href="#contact">تواصل معنا</a>
          </div>

          {/* Contact */}

          <div className="footer-contact">
            <h3>معلومات التواصل</h3>

            <div className="footer-item">
              <FaPhoneAlt />

              <span>015 53705492</span>
            </div>

            <div className="footer-item">
              <FaMapMarkerAlt />

              <span>العلمين الجديدة - مصر</span>
            </div>

            <a
              href="https://www.facebook.com/Alamen.hospital"
              target="_blank"
              rel="noreferrer"
              className="facebook-btn"
            >
              <FaFacebookF />

              <span>صفحتنا على فيسبوك</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 مستشفى العلمين النموذجي. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
