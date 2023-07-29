import React, {useState} from "react";
import Button from "@mui/material/Button";
import NavListDrawer from "../NavListDrawer";
import Drawer from "@mui/material/Drawer";

const Navbar = () => {
    const  [open, setOpen] = useState(false);
    
    return ( 
        <>
            <Button variant='contained' onClick={() =>setOpen(true)}>Open Dreawer</Button>

            <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
                <NavListDrawer />
            </Drawer>
        </>
     );
}
 
export default Navbar;