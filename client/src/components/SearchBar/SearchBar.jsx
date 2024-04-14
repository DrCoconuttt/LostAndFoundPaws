import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import theme from "../../theme/theme";

const SearchBar = ({ placeholder }) => {
  return (
    <TextField
      className="search_bar"
      focused
      id="search-text"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon sx={{ color: `` }} />
          </InputAdornment>
        ),
      }}
      placeholder={placeholder}
      sx={{
        input: {
          color: `${theme.palette.custom.greyBkg.comment.button}`,
          "&::placeholder": {
            opacity: 0.8,
          },
        },
        bgcolor: `${theme.palette.custom.greyBkg.input}`,
        width: "100%",
        "& fieldset": { border: "none" },
        borderRadius: "10px",
      }}
    />
  );
};
export default SearchBar;
