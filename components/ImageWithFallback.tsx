"use client";

import Image from "next/image";
import React, { useState } from "react";

const ImageWithFallback = (props: {
  src: string;
  alt: string;
  className: string;
}) => {
  const [imgSrc, setImgSrc] = useState(props.src);

  return (
    <Image
      width={300}
      height={450}
      {...props}
      src={imgSrc}
      onError={() => {
        setImgSrc(
          "https://davidkoepp.com/wp-content/themes/blankslate/images/Movie%20Placeholder.jpg"
        );
      }}
    />
  );
};

export default ImageWithFallback;
