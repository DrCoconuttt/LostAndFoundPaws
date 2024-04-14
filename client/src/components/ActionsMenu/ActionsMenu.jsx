import React, { useState } from "react";
import {
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText,
    Divider,
    IconButton,
    Typography,
    Box
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import ConfirmDialog from '../ConfirmDialog/ConfirmDialog';

const UserMenu = ({ anchorEl, open, handleClose, handleEdit, handleDelete, handleResolved, resolved }) => {
    return (
        <div>
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        width: '20ch', // Adjust the width as needed
                    },
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 16px' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        Post Options
                    </Typography>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        size="small"
                        sx={{ '&:hover': { backgroundColor: 'transparent' } }}
                    >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                </Box>
                <Divider />
                <MenuItem onClick={handleEdit}>
                    <ListItemIcon>
                        <EditIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Edit" />
                </MenuItem>
                <Divider></Divider>
                <MenuItem onClick={handleDelete}>
                    <ListItemIcon>
                        <DeleteIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Delete" />
                </MenuItem>
                <Divider></Divider>
                <MenuItem onClick={handleResolved} disabled={resolved}>
                    <ListItemIcon>
                        <CheckIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Mark as resolved" />
                </MenuItem>
            </Menu>
        </div>
    );
};

export default UserMenu;
