import { useEffect } from "react";


export default function useLockBodyScroll(lock) {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (lock) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflow;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [lock]);
}