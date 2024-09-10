import React from "react";

const Logo = () => {
  return (
    <svg viewBox="0 0 415 415" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_4_60)">
        <path
          d="M56 30H239C305.274 30 359 83.7258 359 150V213C359 279.274 305.274 333 239 333H56V30Z"
          fill="#5B86E5"
        />
        <path
          d="M107.955 222.2C110.055 257.9 132.855 292.1 198.555 292.1C263.355 292.1 287.955 265.7 287.955 226.4C287.955 190.4 268.155 169.7 224.355 165.5L186.255 161.6C170.955 159.8 164.955 152.3 164.955 142.1C164.955 128.9 176.955 120.8 197.355 120.8C219.855 120.8 231.855 131.3 233.955 147.2H286.155C283.455 111.8 258.855 82.4 197.355 82.4C139.755 82.4 111.555 108.2 111.555 145.7C111.555 179.6 132.255 200 168.255 204.2L211.755 209C226.755 211.1 234.555 217.7 234.555 230.9C234.555 244.7 224.955 253.7 199.455 253.7C171.555 253.7 160.755 238.7 159.255 222.2H107.955Z"
          fill="#ABC1F2"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_4_60"
          x="0"
          y="0"
          width="415"
          height="415"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="26" />
          <feGaussianBlur stdDeviation="28" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_4_60"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_4_60"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Logo;
