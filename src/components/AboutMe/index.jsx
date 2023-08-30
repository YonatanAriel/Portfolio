// import styles from "./style.module.css";

// function AboutMe() {
//   return (
//     <div className={`${styles.container} d-flex`}>
//       <div>
//         <h1>A bit about me..</h1>
//         <p>
//           <span> Coding is my true love.</span> <br />
//           <span>
//             Driven by this passion, I'm highly motivated to continuously expand
//             my knowledge,
//           </span>{" "}
//           <span>
//             enabling me to adapt quickly to new challenges and technologies.
//           </span>{" "}
//           <br />
//           <span>
//             I genuinely enjoy working with people and possess the capability to
//             lead when necessary.
//           </span>
//         </p>
//       </div>
//       <div className={styles.facts}>
//         <span>😎 22 Years Old</span>
//         <span> Lives In Israel ✡️ </span>
//         <span>❤️ Frontend </span>
//         <span>Speaks English & Hebrew 🤓</span>
//         <span>🦄 Single</span>
//         <span>Code 24/7 🤩</span>
//         <span>🏋️‍♀️ Workout & Football</span>
//       </div>
//     </div>
//   );
// }

// export default AboutMe;

import React, { useState, useEffect } from "react";
import styles from "./style.module.css";

function AboutMe() {
  const [animationIndex, setAnimationIndex] = useState(0);
  const textLines = [
    "Coding is my true love.",
    "Driven by this passion, I'm highly motivated",
    " to continuously expand my knowledge, enabling ",
    "me to adapt quickly to new challenges",
    " and technologies.",
    "I genuinely enjoy working with people and ",
    "possess the capability to lead when necessary.",
  ];

  useEffect(() => {
    if (animationIndex < textLines.length) {
      const timer = setTimeout(() => {
        setAnimationIndex(animationIndex + 1);
      }, 2700); // Delay each span's animation by 3 seconds

      return () => clearTimeout(timer);
    }
  }, [animationIndex]);

  return (
    <div className={`${styles.container} d-flex`}>
      <div>
        <h1>A bit about me..</h1>
        <p>
          {textLines.slice(0, animationIndex).map((line, index) => (
            <span key={index} style={{ display: "inline-block" }}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>
      {/* ... (rest of your code remains the same) */}
    </div>
  );
}

export default AboutMe;
