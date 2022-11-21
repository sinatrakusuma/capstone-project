import React from 'react'
import "./navbar.scss"
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import { Link } from 'react-router-dom'
// import CustomButton from '../CustomButton/CustomButton'

const KontakButton = styled(Button)({
  fontSize: '0.75rem',
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#2E582C',
  borderColor: '#2E582C',
  '&:hover': {
    backgroundColor: '#2e582ca3',
    borderColor: '#2e582ca3',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#2E582C',
    borderColor: '#2E582C',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.1rem rgba(0.0.0.0)',
  },
});



const Navbar = () => {
  return (
    // <ThemeProvider theme={theme}>
    <header>
    <div className="wrap">
      <div className="brand">
        <div className="icon"></div>
        <h1>DAUSAGI</h1>
      </div>
      <nav>
        <div className="nav-right">
          <Link to="/">
          <a href="" className="link">Beranda</a>
          </Link>
          <Link to="/banksampah">
          <a href="" className="link">Bank Sampah</a>
          </Link>
          <Link to="/daurulang">
          <a href="" className="link">Daur Ulang</a>
          </Link>
          <Link to="/layanan">
          <a href="" className="link">Layanan</a>
          </Link>
          <Link to="/tentangkami">
          <a href="" className="link">Tentang Kami</a>
          </Link>
          <Link>
          <KontakButton variant="contained" disableRipple>
           Kontak
          </KontakButton>
          </Link>
          {/* <CustomButton
          backgroundColor='#2E582C'
          color='#ffffff'
          textButton='KONTAK'
          moreBtn={true}
          /> */}
          {/* <Button variant="contained" sx={{ bgcolor: (theme) => theme.palette.secondary.main,':hover' : bgcolor}} >Kontak</Button> */}
          {/* <a href="" className="button">Kontak</a> */}
        </div>
      </nav>
    </div>
   </header>
    // </ThemeProvider>
  )
}

export default Navbar;
