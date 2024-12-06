import { useState, useEffect } from "react";
import "./scrolltop.css";

export default function ScrollTop() {
      const [isVisible, setIsVisible] = useState(false);

      // إظهار الزر عند التمرير لأسفل
      useEffect(() => {
            const toggleVisibility = () => {
                  if (window.scrollY > 300) {
                        setIsVisible(true);
                  } else {
                        setIsVisible(false);
                  }
            };

            window.addEventListener("scroll", toggleVisibility);

            return () => window.removeEventListener("scroll", toggleVisibility);
      }, []);

      // وظيفة التمرير إلى الأعلى
      const scrollToTop = () => {
            window.scrollTo({
                  top: 0,
                  behavior: "smooth", // تمرير سلس
            });
      };

      return (
            <section
                  className={`scroll-top ${isVisible ? "show" : ""}`}
                  onClick={scrollToTop}
            >
                  <i className="fa-solid fa-arrow-up"></i>
            </section>
      );
}
