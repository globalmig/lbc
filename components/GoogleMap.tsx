import React from "react";

export default function GoogleMap() {
  return (
    <div className="relative w-full max-w-[1440px] mx-auto mt-10 px-4">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.817752954567!2d127.14002767640451!3d36.79891976777081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b281965ff22ef%3A0xd54216da4c2fb319!2z7Lap7LKt64Ko64-EIOyynOyViOyLnCDrj5nrgqjqtawg64uk6rCANOq4uCA0LTEx!5e0!3m2!1sko!2skr!4v1769388976723!5m2!1sko!2skr"
        width="1000"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        className="w-full rounded-lg shadow-lg"
      ></iframe>

      {/* 정보 박스 */}
      <div className="absolute top-2 left-2 bg-white p-4 rounded-md shadow-lg w-full max-w-[300px] ">
        <h3 className="font-bold text-lg mb-1">천안본점</h3>
        <p className="text-sm mb-1">
          충남 천안시 동남구
          <br />
          다가4길 4-11, 202
        </p>
        <p className="text-sm font-semibold">☎ 1588.3705</p>
      </div>
    </div>
  );
}
