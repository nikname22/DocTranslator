import React, { useState } from 'react';
import {
    Button,
    IconButton,
    Toolbar,
    Box,
    AppBar,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';
import { Link } from 'react-router-dom';

export default function Menu() {
    const [anchor, setAnchor] = useState<boolean | undefined>(false)

    const theme = createTheme({
        palette: {
            primary: {
                main: '#E1C340',
                contrastText: '#fff',
            },
        },
    });

    const menuItems = [
        { text: 'Inbox', path: '', icon: <InboxIcon />, link: "/login" },
        { text: 'Starred', path: '', icon: <MailIcon />, link: "/contato" },
        { text: 'Send email', path: '', icon: <InboxIcon />, link: "/login" },
        { text: 'Drafts', path: '', icon: <MailIcon />, link: "/login" }
    ]

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ backgroundColor: 'primary' }}>
                    <Toolbar sx={{ justifyContent: 'space-between' }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => setAnchor(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Button color="inherit" sx={{ backgroundColor: '#FED656' }} onClick={() => alert('criar função de login')}>Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Drawer
                open={anchor}
                onClose={() => setAnchor(false)}
                sx={{
                    '& .MuiDrawer-paper': { width: { lg: '15%' } },
                }}
            >
                <List>
                    <ListItem sx={{ justifyContent: 'flex-end' }}>
                        <IconButton onClick={() => setAnchor(false)}>
                            <ArrowBackIosSharpIcon />
                        </IconButton>
                    </ListItem>
                    <Divider />
                    {menuItems.map((menuItem) => (
                        <Link to={menuItem.link} style={{textDecoration:'none', color:'inherit'}}>
                            <ListItem key={menuItem.text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {menuItem.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={menuItem.text} />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Drawer>            
        </ThemeProvider>
    );
}