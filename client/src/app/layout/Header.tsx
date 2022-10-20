import {
  AppBar,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";


interface Props {
    toggle : boolean;
    modeFlip : () => void;
}

export default function Header({toggle, modeFlip} : Props) {
 
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6">Ski-Store</Typography>
        <Switch
            checked={toggle}
            onChange={modeFlip}
          inputProps={{ "aria-label": "controlled" }}
        />
      </Toolbar>
    </AppBar>
  );
}

