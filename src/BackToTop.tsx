import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Back to top"
      className="cursor-pointer
        fixed bottom-12 right-4 z-50
        w-12 h-12
        flex items-center justify-center
        rounded-full
        shadow-lg
        transition-all duration-300
      "
      style={{
        backgroundColor: hovered ? "#C7AD5D" : "#ffffff",
      }}
    >
      <FaArrowUp
        className="w-5 h-5 transition-colors duration-300 animate-bounce"
        color={hovered ? "#ffffff" : "#C7AD5D"}
      />
    </button>
  );
}

export default BackToTop;
