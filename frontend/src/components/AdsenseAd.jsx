import { useEffect, useRef, useState } from "react";

const AdsenseAd = () => {
  const adRef = useRef(null);
  const [adLoaded, setAdLoaded] = useState(true);

  useEffect(() => {
    // ✅ If ad script blocked → skip rendering
    if (!window.adsbygoogle) {
      console.warn("AdSense blocked by browser");
      setAdLoaded(false);
      return;
    }

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log("AdSense error:", err);
      setAdLoaded(false);
    }
  }, []);

  // ❌ If blocked → render nothing (prevents crash)
  if (!adLoaded) return null;

  return (
    <ins
      ref={adRef}
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-7471916622235083"
      data-ad-slot="5675048448"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};

export default AdsenseAd;

