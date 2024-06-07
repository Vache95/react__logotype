import { useEffect, useRef, useState } from 'react';

export const useScrollHide = (wrapperRef: any, threshold: any = 200) => {
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {

    const handleScroll = () => {
      if (wrapperRef.current) {
        const currentScrollY = wrapperRef.current.scrollTop;

        if (currentScrollY > threshold) {
          if (currentScrollY > lastScrollY.current) {
            setIsHidden(true);
          } else {
            setIsHidden(false);
          }
        } else {
          setIsHidden(false);
        }

        lastScrollY.current = currentScrollY;
      }
    };

    const wrapper = wrapperRef.current;
    if (wrapper) {
      wrapper.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (wrapper) {
        wrapper.removeEventListener('scroll', handleScroll);
      }
    };

  }, [wrapperRef, threshold]);



  return isHidden;
};

