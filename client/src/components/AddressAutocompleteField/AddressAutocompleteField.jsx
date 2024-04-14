import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CustomTextField from "../TextField/TextField";
import { InputAdornment } from "@mui/material";

// This is from their tutorial, no security issue
// TODO: move to environemnt variable
const accessToken = process.env.REACT_APP_MAPBOX_API_KEY;

  const AddressAutocompleteField = ({ onChange, ...otherProps }) => {
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const handleChangeSearch = async (event) => {
      if(!event) return
      const inputValue = event.target.value;
      
      try {
        setLoading(true);
        const response = await 
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${inputValue}.json?access_token=${accessToken}`)
        const results = await response.json();
        setOptions(results?.features || []);
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    
    const handleChangeSelection = (_, newValue) => {
      onChange({
        address: newValue?.place_name, 
        longitude: newValue?.center[0], 
        latitude: newValue?.center[1]
      });
    };
  
    return (
      <Autocomplete
        fullWidth
        freeSolo
        disableClearable
        options={options}
        loading={loading}
        getOptionLabel={(option) => option.place_name || option.address || ''}
        onInputChange={handleChangeSearch}
        onChange={handleChangeSelection}
        value={otherProps.value}
        renderInput={(params) => (
          <CustomTextField
            {...params}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOnIcon color="primary" />
                </InputAdornment>
              ),
              endAdornment: (
                <React.Fragment>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
            {...otherProps}
          />
        )}
      />
    );
  };
  
  export default AddressAutocompleteField;
