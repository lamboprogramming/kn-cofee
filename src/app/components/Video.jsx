import React, { useRef, useEffect } from 'react';

const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    const track = videoElement.textTracks[0]; 
    
    if (track) {
      track.mode = 'showing'; 
    }
  }, []);

  return (
    <div className="flex justify-center items-center m-4">
      <video
        ref={videoRef}
        width="320"
        height="240"
        controls
        autoPlay
        muted
        preload="auto" 
        className="w-full h-auto"
      >
        <source src="/kncoffee.mp4" type="video/mp4" />
        <track
          src="/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
          default 
        />
        Your browser does not support this video tag.
      </video>
    </div>
  );
};

export default Video;
