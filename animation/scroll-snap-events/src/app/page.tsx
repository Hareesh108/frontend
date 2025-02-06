"use client";

import { useEffect, useRef } from "react";

interface Trailer {
  title: string;
  description: string;
  release: string;
  genre: string;
  src: string;
}

const trailers: Trailer[] = [
  {
    title: "Squid Game: Season 2",
    description: "Official Trailer",
    release: "Only on Netflix, December 26, 2024",
    genre: "Thriller",
    src: "https://res.cloudinary.com/dsderm9xw/video/upload/v1733975799/Squid_Game__Season_2_za2com.mp4",
  },
  {
    title: "How To Train Your Dragon",
    description: "Official Trailer",
    release: "In Theaters June 13",
    genre: "Animation",
    src: "https://res.cloudinary.com/dsderm9xw/video/upload/v1733975239/videoplayback_cy2rg5.mp4",
  },
  {
    title: "Wicked",
    description: "Official Trailer",
    release: "In Theaters Nov 27",
    genre: "Fantasy Fiction",
    src: "https://res.cloudinary.com/dsderm9xw/video/upload/v1733976488/videoplayback_1_s2eb3p.mp4",
  },
];

const VideoTrailers: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videosRef = useRef<HTMLVideoElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const trailers = videosRef.current;
      let visibleTrailer: HTMLVideoElement | null = null;

      trailers.forEach((video) => {
        const rect = video.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          visibleTrailer = video;
        }
      });

      trailers.forEach((video) => {
        if (video === visibleTrailer) {
          video.play();
        } else {
          video.pause();
        }
      });
    };

    const container = containerRef.current;
    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-scroll snap-y snap-mandatory bg-black text-white"
    >
      {trailers.map((trailer, index) => (
        <div
          key={index}
          className="relative h-screen w-full snap-start flex flex-col justify-center items-center overflow-hidden"
        >
          <video
            ref={(el) => {
              if (el) videosRef.current[index] = el;
            }}
            src={trailer.src}
            muted
            controls
            loop
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="relative z-10 text-center p-5 max-w-4xl">
            <h2 className="text-4xl font-bold mb-2 text-shadow-lg">
              {trailer.title}
            </h2>
            <p className="text-lg opacity-80">{trailer.description}</p>
            <p className="text-lg opacity-80">{trailer.release}</p>
            <div className="inline-block bg-white bg-opacity-20 px-4 py-2 rounded-full mt-3 text-sm">
              {trailer.genre}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoTrailers;
