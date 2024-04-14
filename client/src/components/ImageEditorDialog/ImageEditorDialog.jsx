import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import AvatarEditor from 'react-avatar-editor';
import { Dialog, DialogActions, Button } from '@mui/material';

const ImageEditorDialog = forwardRef(({ open, onClose, onSave, image }, ref) => {
  const editorRef = useRef(null);

  useImperativeHandle(ref, () => ({
    getImage: () => {
      return editorRef.current.getImageScaledToCanvas().toDataURL();
    },
  }));

  const handleSave = () => {
    if (editorRef.current) {
      const canvas = editorRef.current.getImageScaledToCanvas();
      canvas.toBlob(blob => {
        if (onSave) onSave(blob);
      }, 'image/png');
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <div style={{ padding: 20 }}>
        {image && (
          <AvatarEditor
            ref={editorRef}
            image={image}
            width={250}
            height={250}
            border={50}
            borderRadius={125}
            color={[255, 255, 255, 0.6]}
            scale={1.2}
            rotate={0}
          />
        )}
      </div>
      <DialogActions sx={{ justifyContent: 'space-between', padding: '8px 24px 32px' }}>
        <Button variant="contained" onClick={onClose} sx={{ flexGrow: 1, margin: '0 8px' }}>
          Cancel
        </Button>
        <Button variant="outlined"  onClick={handleSave} sx={{ flexGrow: 1, margin: '0 8px' }}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
});

export default ImageEditorDialog;