export const styles = (theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 100,
  },
  sendIcon: {
    marginRight: "25px",
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  submitBtn: {
    position: "relative",
    left: "35%",
    width: "30%",
    fontFamily: "Pathway Gothic One, sans-serif",
    backgroundColor: "#2f4c6e",
    color: "#fff",
    fontSize: "20px",
    "&:hover":{backgroundColor: "#0a2140",}
  },
  inputs: {
    display: "flex",
    margin: "10px",
    fontFamily: "Pathway Gothic One, sans-serif",
    width: "700px",
  },
  registrationForm: {
    width: "45%",
    display: "flex",
    position: "absolute",
    left: "25vw",
  },
  icon: {
    color: "gray",
    fontSize: "90%",
    position: "relative",
    top: "25px",
    margin: "5px",
  },
  legend: {
    fontSize: "200%",
    fontFamily: "Pathway Gothic One, sans-serif",
  },
  center: {
    fontFamily: "Pathway Gothic One, sans-serif",
    textAlign: "center",
    color: "gray",
  },
  addUserBtn: {
    backgroundColor: "#fff",
    textAlign: "center",
    fontFamily: "Pathway Gothic One, sans-serif",
  },
  addIcon: {
    fontSize: "20px",
    margin: "5px",
  },
  hr: {
    height: "2px",
    border: "none",
    color: "gray",
    backgroundColor: "gray",
  },
  button: {
    borderRadius: "50%",
  },
  description: {
    textAlign: "center",
    width: "100%",
    opacity: "0.5",
    borderTop: "3px solid gray",
    borderBottom: "3px solid gray",
    fontFamily: "Pathway Gothic One, sans-serif",
    fontSize: "150%",
  },
  removeBtn: {
    display: "none",
  },
  grid: {
    display: "flex",
  },
});
