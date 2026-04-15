import { useEffect, useRef } from "react";

const AdsenseAd = () => {
  const adRef = useRef(null);

  useEffect(() => {
    if (!window.adsbygoogle || !adRef.current) return;

    try {
      window.adsbygoogle.push({});
    } catch (err) {
      console.log("AdSense push error:", err);
    }
  }, []);

  return (
    <ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-7471916622235083"
     data-ad-slot="5675048448"
     data-ad-format="auto"
     data-full-width-responsive="true"/>
  );
};

export default AdsenseAd;