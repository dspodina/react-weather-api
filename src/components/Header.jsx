import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { TiWeatherPartlySunny } from "react-icons/ti";

const Header = ({ title }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: "100%",
        backgroundColor: "rgba(14, 76, 108, 0.9)",
        padding: "10px 20px",
        boxShadow: "none",
        borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(10px)",
      }}
    >
      <Toolbar>
        <Typography
          variant="h4"
          color="inherit"
          component="div"
          sx={{
            flexGrow: 1,
            textTransform: "uppercase",
            fontWeight: "bold",
            textAlign: "center",
            letterSpacing: "3px",
            fontSize: "1.3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {title}
          <TiWeatherPartlySunny
            style={{
              marginLeft: "10px",
              fontSize: "2.5rem",
            }}
          />
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
