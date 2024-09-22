"use client";

import { Map, MapMarker } from "react-kakao-maps-sdk";
import useKakaoLoader from "./use-kakao-loader";
import { useEffect } from "react";

export default function KakaoMap() {
  useKakaoLoader();

  useEffect(() => {
    const textBox = document.getElementById("text-box");
    const parent = textBox?.parentElement?.parentElement;

    if (parent) {
      parent.style.width = "500px";
    }
  }, []);

  return (
    <Map
      id="map"
      center={{
        lat: 37.5861756,
        lng: 127.0811403,
      }}
      style={{
        width: "100%",
        height: "100%",
        border: "1px solid black",
        borderRadius: "12px",
      }}
      level={3}
    >
      <MapMarker // 마커를 생성합니다
        position={{
          // 마커가 표시될 위치입니다
          lat: 37.5861756,
          lng: 127.0811403,
        }}
      />
    </Map>
  );
}
