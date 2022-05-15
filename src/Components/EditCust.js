import { useState } from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Edit(props) {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    
    const handleClose = () => {
        setOpen(false);
      };

    const inputChanged = (event) => {
        props.setSingle({...props.single, [event.target.name]: event.target.value})
    }
    
    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Edit
            </Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Editing</DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        Let's change something!
                    </DialogContentText>

                    <TextField
                        autoFocus
                        margin="dense"
                        label="First Name"
                        fullWidth
                        onChange={inputChanged}
                        value={props.single.firstname}
                        name="firstname"
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        label="Last Name"
                        fullWidth
                        onChange={inputChanged}
                        value={props.single.lastname}
                        name="lastname"
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        label="EMail"
                        fullWidth
                        onChange={inputChanged}
                        value={props.single.email}
                        name="email"
                    />


                    <TextField
                        autoFocus
                        margin="dense"
                        label="Phone Number"
                        fullWidth
                        onChange={inputChanged}
                        value={props.single.phone}
                        name="phone"
                    />


                    <TextField
                        autoFocus
                        margin="dense"
                        label="Street Address"
                        fullWidth
                        onChange={inputChanged}
                        value={props.single.streetaddress}
                        name="streetaddress"
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        label="Post Code"
                        fullWidth
                        onChange={inputChanged}
                        value={props.single.postcode}
                        name="postcode"
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        label="City"
                        fullWidth
                        onChange={inputChanged}
                        value={props.single.city}
                        name="city"
                    />
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={(props.editIt)} variant='contained'>EDIT</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}