import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import amber from "@material-ui/core/colors/amber";
import green from "@material-ui/core/colors/green";
import blue from "@material-ui/core/colors/blue";

const dangerColor = red[500];
const dangerHoverColor = "rgba(244, 67, 54, 0.2)";
const warningColor = amber[500];
const successColor = green[500];
const infoColor = blue[500];

const myTheme = () => ({
  themeType: "dark",
  primaryColors: {
    light: "rgb(187, 222, 251)",
    main: "rgb(144, 202, 249)",
    dark: "rgb(100, 181, 246)"
  },
  secondaryColors: {
    light: "rgb(248, 187, 208)",
    main: "rgb(244, 143, 177)",
    dark: "rgb(240, 98, 146)"
  },
  badge: {
    background: "rgba(255,255,255,0.54)",
    color: "rgba(0,0,0,0.87)"
  },
  background: [
    "rgb(33, 33, 33)",
    "rgb(48, 48, 48)",
    "rgb(66, 66, 66)",
    "rgb(77, 77, 77)",
    "rgb(92, 92, 92)",
    "rgb(108, 108, 108)",
    "rgb(128, 128, 128)",
    "rgb(144, 144, 144)",
    "rgb(172, 172, 172)",
    "rgb(192, 192, 192)",
    "rgb(212, 212, 212)",
    "rgb(224, 224, 224)",
    "rgb(232, 232, 232)",
    "rgb(242, 242, 242)",
    "rgb(255, 255, 255)"
  ],
  borderColor: "rgba(255,255,255,0.12)",
  labelColor: "rgba(255,255,255,0.7)",
  calendarSelectColor: "magenta",
  color: "rgb(255,255,255)",
  hoverBackground: [
    "rgb(66, 66, 66)",
    "rgb(77, 77, 77)",
    "rgb(92, 92, 92)",
    "rgb(108, 108, 108)",
    "rgb(128, 128, 128)",
    "rgb(144, 144, 144)",
    "rgb(172, 172, 172)",
    "rgb(192, 192, 192)",
    "rgb(212, 212, 212)",
    "rgb(224, 224, 224)",
    "rgb(232, 232, 232)",
    "rgb(242, 242, 242)",
    "rgb(255, 255, 255)"
  ],
  iconColor: "rgba(255,255,255,0.5)",
  iconDisabledColor: "rgba(255,255,255,0.3)",
  iconHoverColor: "rgba(255,255,255,0.05)",
  linkColor: "rgba(255,255,255,0.54)",
  secondaryColor: "rgba(255,255,255,0.54)",
  dangerColor,
  dangerHoverColor,
  warningColor,
  successColor,
  infoColor,
  progressTrailColor: "rgb(33,33,33)",
  tooltipBackground: "rgb(33,33,33)",
  tooltipColor: "rgba(255,255,255, 0.7)",
  tooltipSecondary: "rgba(255,255,255,0.54)"
});

// A custom theme for this app
const theme = createMuiTheme({
  app: myTheme(),
  palette: {
    type: myTheme().themeType,
    primary: {
      light: myTheme().primaryColors.light,
      main: myTheme().primaryColors.main,
      dark: myTheme().primaryColors.dark
    },
    secondary: {
      light: myTheme().secondaryColors.light,
      main: myTheme().secondaryColors.main,
      dark: myTheme().secondaryColors.dark
    },
    background: {
      paper: myTheme().background[1],
      default: myTheme().background[0]
    }
  }
});

export default theme;
