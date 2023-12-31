import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem  from "@mui/material/ListItem";
import ListItemText  from "@mui/material/ListItemText";
import  ListItemButton  from "@mui/material/ListItemButton";

const NavListDrawer = ({navArrayLinks, NavLink, setOpen}) => {
    return ( 
        <Box sx={{width: 200}}>
            <nav>
                <List>
                    {
                        navArrayLinks.map(item => (
                            <ListItem key={item.title}>
                                <ListItemButton component={NavLink} to={item.path} onClick={() => setOpen(false)}>
                                    <ListItemText>{item.title}</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </nav>
        </Box>
     );
}
 
export default NavListDrawer;