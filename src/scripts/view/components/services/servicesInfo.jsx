import React from "react";
import { Box, Container } from "@mui/system";
import HeadingSectionText from "../headingSectionText/headingSectionText";
import CardInfo from "./cardServicesInfo";

const servicesInfo = () => {
  return (
    <Container
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "5rem auto",
        minHeight: "400px",
        "&.MuiContainer-root": {
          padding: {
            xs: "40px 24px",
            md: "40px 80px",
          },
        },
      }}
    >
      <HeadingSectionText
        headingText="Layanan Kami"
        helperText="Berikut merupakan layanan yang tersedia di website kami"
      />

      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <CardInfo
          number="01."
          title="Bank Sampah"
          content="Merupakan fitur yang digunakan dalam pengelolaan sampah anda. Bank sampah merupakan konsep pengumpulan sampah kering dan dipilah serta memiliki manajemen layaknya perbankan tapi yang ditabung bukan uang melainkan sampah"
        />
        <CardInfo
          number="02."
          title="Pick-Up Sampah"
          content="Kenyamanan pengguna adalah yang paling penting bagi kami. Anda tidak perlu repot datang ke tempat pengolahan sampah secara mandiri. Cukup melalui aplikasi, sampah anda akan di pick up langsung oleh tim kami."
        />
        <CardInfo
          number="03."
          title="Transaksi Secara Digital"
          content="Transaksi yang dilakukan melalui metode transfer, jadi memudahkan anda dalam menerima keuntungan dari transaksi tukar sampah."
        />
        <CardInfo
          number="04."
          title="Bantuan Daur Ulang Sampah"
          content="Kami juga menyediakan informasi kepada anda bagaimana cara mendaur ulang sampah menjadi suatu produk yang bermanfaat."
        />
      </Box>
    </Container>
  );
};

export default servicesInfo;
