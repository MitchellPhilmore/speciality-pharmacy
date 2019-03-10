import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import pricingTiers from "../pricingTiers";

const styles = theme => ({
  card: {
    maxWidth: 400,
    boxShadow: "10px 10px 5px grey"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: "#616161"
  },
  links: {
    color: "#ffff",
    textDecoration: "none",
    fontSize: "125%"
  },
  btn: { backgroundColor: "#424242" }
});

class Teir extends Component {
  render() {
    const { classes, name, avatar, cost, duration, tierType } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Teir type " className={classes.avatar}>
              {avatar}
            </Avatar>
          }
          title={
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
          }
        />
        <CardContent>
          <Typography component="p">
            <h6>Try for {duration}</h6>
            <h1>$ {cost}</h1>
            {pricingTiers.pro}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.btn}
          >
            <Link
              className={classes.links}
              to={{
                pathname: "/acquire",
                state: {
                  tierName: name,
                  cost: cost,
                  duration: duration,
                  tierType: tierType
                }
              }}
            >
              Sign up for {name}
            </Link>
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(Teir);
