import { useState } from "react";

function useTriangle(screenWidth) {
  const [showTriangle, setShowTriangle] = useState();

  const hideTriangle = () => screenWidth < 870 && setShowTriangle(false);

  return { showTriangle, setShowTriangle, hideTriangle };
}
export default useTriangle;
