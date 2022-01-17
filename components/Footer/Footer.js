import React from "react";
import styles from "./Footer.module.css";
import FooterNavbar from "./Footer.Navbar";
import FooterContent from "./Footer.content";

function Footer() {
  return (
    <>
      {/* BG IMAGE WRAPPER */}
      <div className={styles.imageWrapper}>
        <img
          src="/footer/footer_bg.svg"
          // layout="fill"
          alt="footer green decorative background "
          // priority
          style={{ width: "100vw", height: "500px" }}
        />
        {/* CONTENT */}
        <FooterContent />
      </div>
      {/* BOTTOM NAVBAR */}
      <FooterNavbar />
    </>
  );
}

export default Footer;
