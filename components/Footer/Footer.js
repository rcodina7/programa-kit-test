import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";
import FooterNavbar from "./Footer.Navbar";
import FooterContent from "./Footer.content";

function Footer() {
  return (
    <>
      {/* BG IMAGE WRAPPER */}
      <div className={styles.imageWrapper}>
        <Image
          src="/footer/footer_bg.svg"
          layout="fill"
          alt="footer green decorative background "
          priority
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
