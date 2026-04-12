import './App.css'
import { LogoFB } from './images/index';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const LogoImg = styled('img')(({ theme }) => ({
  cursor: 'pointer',
  width: 80,
  height: 60,
  transition: 'width 0.3s, height 0.3s',
  [theme.breakpoints.up('lg')]: {
    width: 100,
    height: 55,
    marginTop: -7,
    marginBottom: -5,
  },
}));

function Logo() {

  const navigate = useNavigate(); // ✅ important

  return (
    <a href="#" className='p-3'>
      <LogoImg onClick={() => navigate("/")} src={LogoFB} alt="logo" />
    </a>
  )
}

export default Logo;
