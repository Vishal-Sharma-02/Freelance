import React, { useRef, useEffect, useState } from "react";
import Hls from "hls.js";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const video = videoRef.current;
    const url =
      "https://vz-abea7b3f-f97.b-cdn.net/5cadd260-423a-47f4-b054-0dd9917812d7/playlist.m3u8";

    video.muted = true;
    video.playsInline = true;
    video.preload = "auto";

    const playVideo = () => {
      video.play().catch(() => {
        setError("Click the play button to start the video.");
      });
    };

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = url;
      video.addEventListener("loadedmetadata", playVideo);
      video.addEventListener("canplay", () => setIsLoading(false), {
        once: true,
      });

      return () => {
        video.removeEventListener("loadedmetadata", playVideo);
        video.removeAttribute("src");
        video.load();
      };
    } else if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: false,
      });

      hls.attachMedia(video);
      hls.on(Hls.Events.MEDIA_ATTACHED, () => hls.loadSource(url));

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        setIsLoading(false);
        playVideo();
      });

      hls.on(Hls.Events.ERROR, (_, data) => {
        if (!data.fatal) return;

        if (data.type === Hls.ErrorTypes.NETWORK_ERROR) {
          hls.startLoad();
        } else if (data.type === Hls.ErrorTypes.MEDIA_ERROR) {
          hls.recoverMediaError();
        } else {
          setIsLoading(false);
          setError("The video could not be loaded. Please try again.");
        }
      });

      return () => hls.destroy();
    }

    setIsLoading(false);
    setError("This browser does not support HLS video playback.");
  }, []);

  const handlePlayClick = () => {
    const video = videoRef.current;
    video.muted = false;
    video.volume = 1;
    video.play()
      .then(() => {
        setHasStarted(true);
        setError("");
      })
      .catch(() => setError("The video is still loading. Please try again."));
  };

  return (
    <div
      className="
        w-full 
        aspect-video 
        relative 
        bg-black 
        rounded-xl 
        overflow-hidden
      "
    >
      {/* VIDEO */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        controls={hasStarted}
        className="w-full h-full object-contain bg-black"
      />

      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white">
          Loading video...
        </div>
      )}

      {error && !isLoading && (
        <p className="absolute bottom-4 left-4 right-4 text-center text-sm text-white">
          {error}
        </p>
      )}

      {/* PLAY BUTTON */}
      {!hasStarted && (
        <button
          onClick={handlePlayClick}
          className="
            absolute inset-0 
            flex items-center justify-center
            bg-black/20
          "
        >
          <div
            className="
              flex items-center justify-center
              w-20 h-20
              rounded-full
              bg-black/60
              border border-white/30
              backdrop-blur-sm
              shadow-lg
            "
          >
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
