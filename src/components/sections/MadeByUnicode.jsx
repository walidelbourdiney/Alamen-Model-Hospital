export default function MadeByUnicode() {
  const styles = {
    wrapper: {
      width: "100%",
      padding: "100px 0",
      textAlign: "center",
      borderTop: "1px solid #e5e7eb",
      marginTop: "10px",
      backgroundColor: "#fff",
    },

    text: {
      fontSize: "24px",
      color: "#6b7280",
      margin: 0,
      fontFamily: "Arial, sans-serif",
    },

    brand: {
      fontWeight: "600",
      color: "#0f766e",
    },
  };
  return (
    <div style={styles.wrapper}>
      <p style={styles.text}>
        This website was proudly developed by{" "}
        <a
          href="https://unicodeagency.net/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.brand}
        >
          Unicode Agency
        </a>
      </p>
    </div>
  );
}
