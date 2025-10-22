import React from "react";

export default function GoogleMap() {
  return (
    <div className="relative w-full max-w-[1440px] mx-auto mt-10 px-4">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.3984370846124!2d127.03185757635963!3d37.49851982802454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca15674889261%3A0x57e749cd2d9a4c08!2z7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDthYztl6TrnoDroZwyMOq4uCAxOA!5e0!3m2!1sko!2skr!4v1761110831474!5m2!1sko!2skr"
        width="1000"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        className="w-full rounded-lg shadow-lg"
      ></iframe>

      {/* 정보 박스 */}
      <div className="absolute top-2 left-2 bg-white p-4 rounded-md shadow-lg w-full max-w-[300px] ">
        <h3 className="font-bold text-lg mb-1">LK 관세사무소</h3>
        <p className="text-sm mb-1">
          서울시 강남구 테헤란로 20길 18
          <br />
          부봉빌딩 6층, 608호
        </p>
        <p className="text-sm font-semibold">☎ 02-552-2893</p>
      </div>
    </div>
  );
}
