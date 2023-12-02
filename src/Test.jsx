import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Links from "./layout/header/ui/Links";
import LinksVertical from "./layout/header/ui/LinksVertical";

const Test = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <Box sx={{ mb: 2 }}>
            {/* App Bar */}
            <AppBar position="static" style={{ background: '#2196F3', alignItems: 'flex-start' }}>
                <Toolbar>
                    {/* Menu Button for Mobile */}
                    <IconButton
                        edge="start"
                        style={{ marginRight: '16px' }}
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer}
                    >
                        <MenuIcon />
                    </IconButton>

                    {/* Title */}
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        BCard
                    </Typography>

                    {/* Add your links here */}
                    <Links />

                </Toolbar>
            </AppBar>

            {/* Drawer for Mobile */}
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer}
            >
                <List>
                    {/* Add your links here */}
                    <LinksVertical />
                </List>
            </Drawer>
        </Box>
    );
};

export default Test;
