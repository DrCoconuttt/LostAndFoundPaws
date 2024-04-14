import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

const CustomDropdown = ({ label, options, ...otherProps }) => {
  return (
    <FormControl variant="outlined" fullWidth>
      <Select
        label={label}
        {...otherProps}
        sx={{
            backgroundColor: '#F5F5F5',
            borderRadius: '4px'
          }}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {(otherProps.error) && <FormHelperText htmlFor='render-select' error>{otherProps.helperText}</FormHelperText>}
    </FormControl>
  );
}

export default CustomDropdown;
