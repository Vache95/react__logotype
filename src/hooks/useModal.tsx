import { useEffect, useState } from "react";

export const useModal = () => {

  const [isShowing, setIsShowing] = useState<boolean>(false);
  const [data, setData] = useState<{ title: string, text: string } | null>(null)

  const toggle = (item?: { title: string, text: string }) => {
    setIsShowing(!isShowing);
    if (item) {
      setData({
        title: item?.title,
        text: item?.text
      })
    }
  }

  useEffect(() => {
    if (isShowing) {
      window.document.body.style.overflow = "hidden"
    } else {
      window.document.body.style.overflow = "auto"
    }
    return (() => {
      window.document.body.style.overflow = "auto"
    })
  }, [isShowing])


  return {
    isShowing,
    toggle,
    data
  };
};

