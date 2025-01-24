// import React, { useState, useRef, useEffect } from "react";

type LazyImageProps = {
  src: string;
  alt: string;
  className?: string;
  width?: number | string;
  height?: number | string;
};
//Значительных улучшений не замечено
const LazyLoadingImg: React.FC<LazyImageProps> = ({
  src,
  alt,
  className,
  width,
  height,
}) => {
  // const imageRef = useRef<HTMLImageElement | null>(null);
  // const [loaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   let observer: IntersectionObserver;

  //   if (imageRef.current && !loaded) {
  //     observer = new IntersectionObserver((entries) => {
  //       const entry = entries[0];
  //       if (entry.isIntersecting) {
  //         const img = imageRef.current;
  //         if (img) {
  //           img.onload = () => {
  //             setLoaded(true);
  //           };
  //           img.onerror = () => {
  //             console.error(`Failed to load image: ${src}`);
  //             setLoaded(true);
  //           };
  //           img.src = src;
  //           observer.unobserve(img);
  //         }
  //       }
  //     });
  //     observer.observe(imageRef.current);
  //   }

  //   return () => {
  //     if (imageRef.current && observer) {
  //       observer.unobserve(imageRef.current);
  //     }
  //   };
  // }, [src, loaded]);

  return (
    <img
      // ref={imageRef}
      alt={alt}
      // src={loaded ? src : undefined}
      src={src}
      // loading="lazy"
      className={className}
      width={width}
      height={height}
    />
  );
};

export default LazyLoadingImg;
