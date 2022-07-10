import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import productos from './productos-data'
import { Link } from '@mui/material';
import { style } from '@mui/system';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function Footer() {
  return (
      <div>
    <Box sx={{ flexGrow: 1, margin: 5, marginLeft: 15}}>
      <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4} lg={2}>
            <Box>
                <h3>Occasions</h3>
                <Link href="/" color="inherit">
                  Occasions
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Working From Home
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Snack Time
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Beackfast
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Vegan Life
                </Link>
              </Box>
            </Grid>
              <Grid item xs={12} sm={6} md={4} lg={2}>
              <h3>All Categories</h3>

              <Link href="/" color="inherit">
                 Contact
               </Link>
           </Grid>
             <Grid item xs={12} sm={6} md={4} lg={2}>
             <h3>Gift & Bundles</h3>

             <Link href="/" color="inherit">
                Contact
              </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
             <h3>Our Brands</h3>

             <Link href="/" color="inherit">
                Contact
              </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
             <h3>About Us</h3>

             <Link href="/" color="inherit">
                Contact
              </Link>
          </Grid>
        </Grid>
      </Box>
      
    </div>
  )
}

export default Footer

