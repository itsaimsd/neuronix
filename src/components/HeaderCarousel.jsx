// import React, { useState, useEffect } from "react";

// const images = [
//   "https://thrivous.com/cdn/shop/articles/knowledge-worker-brain.jpg?v=1625955806",
//   "https://www.s-squaresystems.com/wp-content/uploads/Configuring-ODBC-connection-to-import-database-objects-to-Informatica-PowerCenter.png",
//   "https://www.logic-fruit.com/wp-content/uploads/2023/07/Advanced-AI-and-ML-Image-Processing-Frameworks-for-Exceptional-Results-06.jpg"
// ];

// export default function HeaderCarousel() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 2000); // Change slide every 2 seconds

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div style={styles.carousel} className="mt-5">
//       <img
//         src={images[current]}
//         alt={`slide-${current}`}
//         style={styles.image}
//       />
      
//     </div>
//   );
// }

// const styles = {
//   carousel: {
//     position: "relative",
//     width: "100%",
//     height: "60vh",
//     overflow: "hidden",
//   },
//   image: {
//     width: "100%",
//     height: "100%",
//     objectFit: "cover",
//     transition: "opacity 2s ease-in-out",
//   },
//   overlay: {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     textAlign: "center",
//     color: "#fff",
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//     padding: "20px 40px",
//     borderRadius: "10px",
//   },
//   heading: {
//     fontSize: "2.5em",
//     margin: "0 0 10px",
//   },
//   subheading: {
//     fontSize: "1.2em",
//   },
// };

import React, { useState, useEffect } from "react";
import "./HeaderCarousel.css"; // Import the CSS file

const images = [
  "https://thrivous.com/cdn/shop/articles/knowledge-worker-brain.jpg?v=1625955806",
  "https://www.s-squaresystems.com/wp-content/uploads/Configuring-ODBC-connection-to-import-database-objects-to-Informatica-PowerCenter.png",
  "https://www.logic-fruit.com/wp-content/uploads/2023/07/Advanced-AI-and-ML-Image-Processing-Frameworks-for-Exceptional-Results-06.jpg"
];

export default function HeaderCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel">
      <img
        src={images[current]}
        alt={`slide-${current}`}
      />
    </div>
  );
}

