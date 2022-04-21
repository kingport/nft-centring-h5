import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = (props) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const content = document.getElementsByClassName("hm-content")[0];
    if (content) {
      content.scrollTo(0, 0);
    }
    // window.scrollTo(0, 0);
  }, [pathname]);

  return props.children;
};

export default ScrollToTop;
