import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk";
// 참고 https://apis.map.kakao.com/web/guide/
export default function useKakaoLoader() {
  useKakaoLoaderOrigin({
    appkey: "8bf711a67861e4d547c9a8e3e83fdc74",
    libraries: ["clusterer", "drawing", "services"],
  });
}
