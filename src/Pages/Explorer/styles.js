import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

export const styles = (theme) => ({
  pro: {
    color: "red",
  },
  header: {
    position: "relative",
    left: "380px",
    color: "white",
    fontFamily: "Pathway Gothic One, sans-serif",
  },
});

export const centerLoader = {
  width: "50%",
  position: "absolute",
  top: "30%",
  left: "62vw",
  transform: "translate(-50%,0%)",
};

export const tableContainer = {
  width: "3000px",
  margin: "0 auto",
};

export const containerStyle = {
  background: "white",
  overflowX:'hidden'
};

export const getMuiTheme = () =>
  createMuiTheme({
    overrides: {
      MUIDataTable: {
        root: {
          width: "200px",
        },
      },

      MuiPaper: {
        root: {
          maxWidth: "82vw",
          margin: "0 auto",
          overflowX: "hidden",
          marginBottom: "50px",
          position: "relative",
        },
        elevation2: {
          "27": {
            boxShadow: "none",
            // overflowX:'hidden',
          },
        },
      },
      MUIDataTableToolbar: {
        root: {
          backgroundColor: "#537895",
          backgroundImage: "linear-gradient(315deg, #537895 0%, #09203f 74%)",
          transition: "background-color 2s",
          color: "white",
          width: "2200px",
          position: "relative",
        },
        actions: {
          position: "absolute",
        },
      },
      MuiSvgIcon: {
        root: {
          color: "white",
        },
      },

      MUIDataTableBodyCell: {
        root: {
          padding: "5px",
          width: "5px",
          maxWidth: "200px",
          fontFamily: "Pathway Gothic One, sans-serif",
          fontSize: "90%",
        },
      },
      MuiInputBase: {
        root: {
          color: "lightgray",
          fontSize: "18px",
          textAlign: "right",
          position: "absolute",
          left: "8%",
          fontFamily: "Pathway Gothic One, sans-serif",
          width: "100px",
        },
      },

      MUIDataTableHeadCell: {
        root: {
          fontSize: "15px",
          fontFamily: "Pathway Gothic One, sans-serif",
        },
      },
      MUIDataTableFilter: {
        root: {
          width: "550px",
          maxWidth: "550px",
          height: "350px",
          overflowX: "scroll",
        },
      },
      MuiInputLabel: {
        root: {
          fontSize: "15px",
          position: "relative",
          left: "20px",
        },
      },
      MuiTypography: {
        root: {
          width: "1000px",
        },
      },
      MUIDataTableViewCol: {
        root: {
          width: "180px",
          height: "270px",
        },
      },
    },
  });
