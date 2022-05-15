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
                        label="Date"
                        fullWidth
                        onChange={inputChanged}
                        value={props.single.date}
                        name="date"
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        label="Duration (minutes)"
                        fullWidth
                        onChange={inputChanged}
                        value={props.single.duration}
                        name="duration"
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        label="Activity"
                        fullWidth
                        onChange={inputChanged}
                        value={props.single.activity}
                        name="activity"
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