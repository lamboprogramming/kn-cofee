import React from 'react'

const Video = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <video 
        width="320" 
        height="240" 
        controls 
        autoPlay 
        muted 
        preload="none"
        className="w-full h-auto"
      >
        <source src="/kn60.mp4" type="video/mp4" />
        <track
          src="/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Video
