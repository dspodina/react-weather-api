import PropTypes from "prop-types";
import { FaLongArrowAltUp, FaLongArrowAltDown, FaEquals } from "react-icons/fa";
import { Typography, Paper, Box } from "@mui/material";

const Hour = ({ hour, temp, arrow }) => {
  const getIcon = (arrow) => {
    const iconSize = 16;
    const iconColor =
      arrow === "up" ? "green" : arrow === "down" ? "red" : "white";
    const Icon =
      arrow === "up"
        ? FaLongArrowAltUp
        : arrow === "down"
        ? FaLongArrowAltDown
        : FaEquals;
    return <Icon size={iconSize} color={iconColor} />;
  };

  return (
    <Paper
      elevation={3}
      sx={{ p: 2, m: 1, color: "white", backgroundColor: "#285E7B" }}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="h6">{hour}</Typography>
        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
          <Box mr={1}>{getIcon(arrow)}</Box>
          <Typography variant="body1">{temp}°C</Typography>
        </Box>
      </Box>
    </Paper>
  );
};

Hour.propTypes = {
  hour: PropTypes.string.isRequired,
  temp: PropTypes.string.isRequired,
  arrow: PropTypes.string.isRequired,
};

export default Hour;
