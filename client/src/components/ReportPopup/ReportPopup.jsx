import React, { useState } from 'react';
import './ReportPopup.css';
import { Dialog, DialogContent, DialogActions, Button, Select, MenuItem, TextField, DialogTitle } from '@mui/material';
import { generateClient } from "aws-amplify/api"; 
import * as mutations from '../../graphql/mutations';

function ReportEntity({ onClose, contentType, itemId, userId, onReport }) {
  const [reason, setReason] = useState('');
  const [description, setDescription] = useState('');
  const client = generateClient({ authMode: userId ? "userPool" : "apiKey" }); 
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [open, setOpen] = useState(true);

  const handleSubmit = async (e) => {
    setIsSubmitting(true);
    e.preventDefault();
    let mutation;
    let input = {
      reason: reason,
      description: description,
      userID: userId || "GUEST_USER_ID",
    };

    if (contentType === "comment") {
      mutation = mutations.createCommentReport;
      input.commentID = itemId; 
    } else if (contentType === "post") {
      mutation = mutations.createPostReport;
      input.postID = itemId; 
    } else if (contentType === "sighting") {
      mutation = mutations.createSightingReport;
      input.sightingID = itemId; 
    }

    try {
      const { data } = await client.graphql({
        query: mutation,
        variables: { input },
      });
      console.log(`${contentType} report created: `, data);
      onClose(); 
      onReport();
      setIsSubmitting(false); 
    } catch (error) {
      console.error(`Error creating ${contentType} report:`, error);
      setIsSubmitting(false);
    }
  };


  return (
    <Dialog
        open={open}
        onClose={() => {
            onClose();
          }}
        PaperProps={{
            sx: {
            backgroundColor: '#fff',
            m: 'auto', 
            width: '530px', 
            maxWidth: '90%',
            borderRadius: '5px'
            }
        }}
        >
      <DialogTitle sx={{ textAlign: 'center', paddingY: 3 }} variant="h3">Please select a reason for reporting this {contentType}</DialogTitle>
      <DialogContent>
        <Select
          displayEmpty
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          fullWidth
          required
        >
          <MenuItem value="" disabled>
            Select a reason...
          </MenuItem>
          <MenuItem value="SPAM">Spam</MenuItem>
          <MenuItem value="INAPPROPRIATE">Inappropriate</MenuItem>
          <MenuItem value="OTHER">Other</MenuItem>
        </Select>
        <TextField
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description (optional)"
          multiline
          rows={6}
          fullWidth
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button
            variant="outlined"
            onClick={onClose}
            disabled={isSubmitting}
            sx={{ 
            marginLeft: '10px', 
            padding: '10px 20px', 
            borderRadius: '4px',
            ':first-of-type': {
                marginLeft: 0,
            }
            }}
        >
            Cancel
        </Button>
        <Button
            variant="contained"
            onClick={handleSubmit}
            color="primary"
            disabled={isSubmitting}
            sx={{ 
            marginLeft: '10px', 
            padding: '10px 20px', 
            borderRadius: '4px',
            }}
        >
            Report
        </Button>
        </DialogActions>
    </Dialog>
  );

}

export default ReportEntity;
