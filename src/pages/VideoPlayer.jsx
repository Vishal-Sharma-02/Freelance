import React, { useRef, useEffect, useState } from "react";
import Hls from "hls.js";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const url =
      "https://vz-abea7b3f-f97.b-cdn.net/71c440ae-a3d3-4a8b-aa05-f2de228fcb22/playlist.m3u8";

    video.muted = true;
    video.playsInline = true;

    // Load HLS or fallback
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = url;
      video.play().catch(() => {});
    } else if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(url);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });

      return () => hls.destroy();
    }
  }, []);

  const handlePlayClick = () => {
    const video = videoRef.current;

    // 🔥 Restart from beginning
    video.currentTime = 0;

    video.muted = false;
    video.volume = 1;
    video.play();

    setHasStarted(true);
  };

  return (
    <div className="relative w-full h-[260px] md:h-[300px] lg:h-[340px] xl:h-[370px] rounded-xl overflow-hidden">
      
      {/* VIDEO */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        controls={hasStarted}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* PLAY BUTTON — Only before playing */}
      {!hasStarted && (
        <button
          onClick={handlePlayClick}
          className="absolute inset-0 flex items-center justify-center bg-black/20 transition"
        >
          {/* Premium clean play button */}
          <div className="
            flex items-center justify-center
            w-20 h-20 
            rounded-full 
            bg-black/50 
            border border-white/40
            backdrop-blur-sm
            shadow-xl
            hover:bg-black/60
            transition
          ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              className="w-10 h-10"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      )}
    </div>
  );
};

export default VideoPlayer;
