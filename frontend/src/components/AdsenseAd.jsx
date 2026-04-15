import { useEffect } from "react";

const AdsenseAd = () => {
  useEffect(() => {
    try {
      if (window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-7471916622235083"
     data-ad-slot="5675048448"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
  );
};

export default AdsenseAd;
