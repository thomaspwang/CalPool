// ProfileModal.js
import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function ProfileModal({ open, onClose, onSave, initialData}) {
  const [profileData, setProfileData] = useState(initialData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSave = () => {
    onSave(profileData);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} sx={{ '& .MuiDialog-paper': { padding: '32px', paddingBottom: '20px' } }} >
      <DialogTitle style={{ fontWeight: 'bold' }}>Profile Information</DialogTitle>
      <DialogContent>
        <Box component="form" noValidate autoComplete="off" >
          <TextField
            autoFocus
            margin="dense"
            name="first"
            label="First Name"
            type="text"
            fullWidth
            variant="outlined"
            value={profileData.first}
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="last"
            label="Last Name"
            type="text"
            fullWidth
            variant="outlined"
            value={profileData.last}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="graduation"
            label="Graduation"
            type="text"
            fullWidth
            variant="outlined"
            value={profileData.graduation}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="gender"
            label="Gender"
            type="text"
            fullWidth
            variant="outlined"
            value={profileData.gender}
            onChange={handleChange}
          />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
  

  
  export default ProfileModal;
  
