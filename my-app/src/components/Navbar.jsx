import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import logo from '../assets/react.svg';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles'

const SearchBar = styled(TextField)({
    width: '350px',    
    height: '32px',    
    '& .MuiOutlinedInput-root': {
      height: '32px',  
      backgroundColor:'#5D5D5D',
      color:'white'
    },
    '& .MuiInputBase-input': {
      padding: '4px 12px', 
      height: '24px',      
    },
  });
function Navbar(){

    return (
        <>
        <Box id="Box" sx={{    width: '1366px',
    height: '54px',
    backgroundColor: '#1C1C1C'}}>
                  <Stack direction='row' gap='10px' >
            <Box sx={{width:'116px',height:'22px',textAlign:'center',paddingTop:'16px',paddingLeft:'24px'}}>
                <img src={logo} style={{height:'22px'}}></img>
            </Box>
            <Box sx={{width:'0px',height:'17px',border:'1px solid #98A0AC',marginTop:'18.5px'}}></Box>
            <Box>
            <Typography sx={{fontSize:'10px',letterSpacing:0,fontFamily:'nunito sans',color:'#ffffff',marginTop:'19.5px'}}>PROPERTY MANAGEMENT SOLUTION</Typography>
            </Box>
            <Box sx={{height:'50px'}}>
         
            <SearchBar
      variant="outlined"
      placeholder="Search..."
      InputProps={{
        'aria-label': 'search',
      }}
    />
    </Box>
            </Stack>
        </Box>
        
        </>
    )
}

export default Navbar;