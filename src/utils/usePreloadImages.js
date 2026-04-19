import { useEffect, useState } from "react";

import getCategoryBoxImageSrc from "./helpers";

export default function usePreloadImages(data) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!data.length) return;

    setReady(false);
    let cancelled = false;

    const promises = data.map((el) => {
      const src = getCategoryBoxImageSrc(el, el.articleType);

      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        if (img.complete) {
          resolve();
        } else {
          img.onload = () => resolve();
          img.onerror = () => resolve();
        }
      });
    });

    Promise.all(promises).then(() => {
      if (!cancelled) setReady(true);
    });

    return () => {
      cancelled = true;
    };
  }, [data]);
  return ready;
}
