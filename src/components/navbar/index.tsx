import React from 'react';
import {Box, Button, Grid, IconButton, Link, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    logo: {
        display: "flex",
        alignItems: "center"
    },
    links: {
        fontFamily: "League Spartan,arial",
        color: "#0b0c11",
    },
    desktopLinks: {
        marginRight: 30,
    }
});

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState<any>(null);
    const classes = useStyles();
    const handleOpenNavMenu = (event:any) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <div className="Navbar">
            <Grid container spacing={2}>
                <Grid item md={2} xs={0} className={classes.logo}>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <img src="/assets/images/logo.png" alt="Logo" title={"Afrozweb Test Project"}/>
                    </Box>
                </Grid>
                <Grid item xs={10}>
                    <Toolbar disableGutters>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <MenuItem>
                                    <Link className={classes.links} underline={"none"} href="#">
                                        Stories
                                    </Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link className={classes.links} underline={"none"} href="#">
                                        Events
                                    </Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link className={classes.links} underline={"none"} href="#">
                                        Places
                                    </Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link className={classes.links} underline={"none"} href="#">
                                        Boards
                                    </Link>
                                </MenuItem>
                            </Menu>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            <img src="/assets/images/logo.png" alt="Logo" title={"Afrozweb Test Project"}/>
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                className={classes.desktopLinks}
                            >
                                <Link className={classes.links} underline={"none"} href="#">
                                    Stories
                                </Link>
                            </Button>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                className={classes.desktopLinks}
                            >
                                <Link className={classes.links} underline={"none"} href="#">
                                    Events
                                </Link>
                            </Button>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                className={classes.desktopLinks}
                            >
                                <Link className={classes.links} underline={"none"} href="#">
                                    Places
                                </Link>
                            </Button>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                className={classes.desktopLinks}
                            >
                                <Link className={classes.links} underline={"none"} href="#">
                                    Boards
                                </Link>
                            </Button>
                        </Box>
                    </Toolbar>
                </Grid>
            </Grid>
        </div>
    );
}

export default Navbar;
