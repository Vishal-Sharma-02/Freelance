import React, { useRef, useEffect } from "react";
import Hls from "hls.js";

const VideoPlayer = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const url =
      "https://vz-abea7b3f-f97.b-cdn.net/71c440ae-a3d3-4a8b-aa05-f2de228fcb22/playlist.m3u8";

    video.muted = true;
    video.playsInline = true;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = url;
      video.play().catch(() => {});
    } else if (Hls.isSupported()) {
      const hls = new Hls({ enableWorker: true });
      hls.loadSource(url);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });

      return () => hls.destroy();
    }
  }, []);

  // Auto-unmute on first user interaction
  useEffect(() => {
    const video = videoRef.current;

    const unmuteOnClick = () => {
      video.muted = false;
      video.volume = 1;
      video.play();
      window.removeEventListener("click", unmuteOnClick);
    };

    window.addEventListener("click", unmuteOnClick);
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      playsInline
      controls
      style={{ width: "100%", height: "100%", borderRadius: "12px" }}
    />
  );
};

export default VideoPlayer;
