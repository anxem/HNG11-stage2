import React from "react";

const Icons = (props) => {
  if (props.icon === "quote") {
    return (
      <>
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <rect
            opacity="0.5"
            width="80"
            height="80"
            fill="url(#pattern0_12_73)"
          />
          <defs>
            <pattern
              id="pattern0_12_73"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlink:href="#image0_12_73" transform="scale(0.0078125)" />
            </pattern>
            <image
              id="image0_12_73"
              width="128"
              height="128"
              xlink:href="data:image/png;base64,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"
            />
          </defs>
        </svg>
      </>
    );
  }
};

export default Icons;
