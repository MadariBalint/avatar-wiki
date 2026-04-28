import { useEffect, useMemo, useState } from "react";

import getCategoryBoxImageSrc from "./helpers";

export default function usePreloadImages(data) {
  const imageSources = useMemo(() => {
    return data.map((el) => getCategoryBoxImageSrc(el, el.articleType));
  }, [data]);

  const imageSetKey = useMemo(() => {
    return JSON.stringify(imageSources);
  }, [imageSources]);

  const [loadedImageSetKey, setLoadedImageSetKey] = useState(() => imageSetKey);

  useEffect(() => {
    if (!imageSources.length || loadedImageSetKey === imageSetKey) {
      return;
    }

    let cancelled = false;

    const promises = imageSources.map((src) => {
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
      if (!cancelled) {
        setLoadedImageSetKey(imageSetKey);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [imageSetKey, imageSources, loadedImageSetKey]);

  return imageSources.length === 0 || loadedImageSetKey === imageSetKey;
}
