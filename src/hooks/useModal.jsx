import { useEffect, useState } from "react";

const useModal = () => {

  const [isShowing, setIsShowing] = useState(false);
  const [data,setData] = useState({})

  const toggle = (item) => {
    setIsShowing(!isShowing);
    if(item){
      setData({
        title:item?.title,
        text:item?.text
    })
    }
  }

  useEffect(() => {
    if(isShowing){
      window.document.body.style.overflow = "hidden"
    }else{
      window.document.body.style.overflow = "auto"
    }
    return (() => {
      window.document.body.style.overflow = "auto"
    })
  },[isShowing])


  return {
    isShowing,
    toggle,
    data
  };
};

export default useModal;