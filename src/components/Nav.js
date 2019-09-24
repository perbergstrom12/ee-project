import React from "react";
import { Link } from "gatsby";
import { makeStyles } from "@material-ui/styles";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles(theme => ({
  item: {
    color: theme.app.labelColor
  },
  active: { color: theme.palette.primary.light },
  icon: { color: "inherit" }
}));

const Nav = props => {
  console.log(props);
  const classes = useStyles();
  return (
    <List>
      <ListItem
        component={Link}
        to="/"
        className={classes.item}
        activeClassName={classes.active}
        button
      >
        <ListItemIcon className={classes.icon}>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Hem" />
      </ListItem>
      <Divider />
      <ListItem
        component={Link}
        to="/allmaent"
        className={classes.item}
        activeClassName={classes.active}
        button
        aria-label="general"
      >
        <ListItemText primary="Allmänt" />
      </ListItem>
      <ListItem
        component={Link}
        to="/infoerande"
        className={classes.item}
        activeClassName={classes.active}
        button
        aria-label="project"
      >
        <ListItemText primary="Införande" />
      </ListItem>
      <ListItem
        component={Link}
        to="/ledarskap"
        className={classes.item}
        activeClassName={classes.active}
        button
        aria-label="leadership"
      >
        <ListItemText primary="Ledarskap" />
      </ListItem>
      <ListItem
        component={Link}
        to="/feedback"
        className={classes.item}
        activeClassName={classes.active}
        button
        aria-label="feedback"
      >
        <ListItemText primary="Feedback" />
      </ListItem>
    </List>
  );
};

export default Nav;
