import React, { useRef, useEffect } from 'react';

const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    const track = videoElement.textTracks[1]; // Access the first track (subtitles)
    
    if (track) {
      track.mode = 'showing'; // Ensure captions are visible by default
    }
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <video
        ref={videoRef}
        width="320"
        height="240"
        controls
        autoPlay
        muted
        preload="auto" // Preload video to allow for autoplay
        className="w-full h-auto"
      >
        <source src="/kncompress720.mp4" type="video/mp4" />
        <track
          src="/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
          default // This ensures captions are enabled by default
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
