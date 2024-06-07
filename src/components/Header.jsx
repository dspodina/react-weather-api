import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header = ({ title }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: "100%",
        backgroundColor: "#0B3954",
        padding: "20px",
      }}
    >
      <Toolbar variant="dense">
        <Typography
          variant="h6"
          color="inherit"
          component="div"
          sx={{
            flexGrow: 1,
            textTransform: "uppercase",
            fontWeight: "bold",
            textAlign: "center",
            letterSpacing: "1px",
          }}
        >
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
