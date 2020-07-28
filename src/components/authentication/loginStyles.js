export const styles = (theme) => ({
  main: {
    width: "auto",
    display: "block",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    height: "500px",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${
      theme.spacing.unit * 3
    }px`,
  },

  form: {
    width: "100%",
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 9,
    backgroundColor: "#2f4c6e",
    color: "white",
  },
  iconStyle: {
    fontSize: "80px",
    color: "#616161",
  },
  linkSignin: {
    color: "white",
    textDecoration: "none",
  },
  linkStyle: {
    color: "#616161",
    textDecoration: "none",
  },
  signin: {
    fontFamily: "Pathway Gothic One, sans-serif",
    textDecoration: "none",
    color: "#616161",
  },
});
