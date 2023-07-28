import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem  from "@mui/material/ListItem";
import ListItemText  from "@mui/material/ListItemText";
import  ListItemButton  from "@mui/material/ListItemButton";

const NavListDrawer = () => {
    return ( 
        <Box sx={{width: 250, bgcolor: 'lightsalmon'}}>
            <nav>
                <List>
                    <ListItem>
                        <ListItemButton component='a' href="inicio">
                            <ListItemText primary='Inicio' />   
                        </ListItemButton>
                    </ListItem>

                    <ListItem>
                        <ListItemButton component='a' href="#buscador-crypto">
                            <ListItemText primary='Buscador Crypto' />   
                        </ListItemButton>
                    </ListItem>

                    <ListItem>
                        <ListItemButton component='a' href="#buscador-clima">
                            <ListItemText primary='Consulta climea' />   
                        </ListItemButton>
                    </ListItem>

                    <ListItem>
                        <ListItemButton component='a' href="#api-juego-de-tronos">
                            <ListItemText primary='API Juego de tronos' />   
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
        </Box>
     );
}
 
export default NavListDrawer;