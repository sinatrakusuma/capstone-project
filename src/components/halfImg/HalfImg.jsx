import React from "react";

const HalfImg = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
        marginTop: "150px",
      }}
    >
      <div
        style={{
          width: "1152px",
          height: "550px",
          backgroundImage: "url(./6.jpg)",
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
