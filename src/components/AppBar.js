import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export default function CAppBar() {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const getTotalQuantity = () => {
    let total = 0
    cart?.cart.forEach(item => {
      total += item.quantity
    })
    return total
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'block', sm: 'block' } }}
          >
           Shope Here
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit" onClick={() => navigate('/cart')}>
              <Badge badgeContent={getTotalQuantity() || 0} color="error">
                <AddShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}