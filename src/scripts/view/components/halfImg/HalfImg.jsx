import React from "react";

const HalfImg = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
        marginTop: "45px",
      }}
    >
      <div
        style={{
          width: "84vw",
          height: "70vh",
          backgroundImage: "url(./images/6.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          borderRadius: "20px",
          backgroundPositionY: "-83px",
        }}
      ></div>
    </div>
  );
};

export default HalfImg;
