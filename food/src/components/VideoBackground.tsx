import React from 'react';

interface VideoBackgroundProps {
  opacity?: number;
}

export function VideoBackground({ opacity = 0.3 }: VideoBackgroundProps) {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className={`absolute inset-0 w-full h-full object-cover`}
      style={{ opacity }}
    >
      <source
        src="https://cdn.pixabay.com/video/2024/08/18/227128_large.mp4"
        type="video/mp4"
      />
    </video>
  );
}