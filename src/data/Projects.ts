import banter from "~/assets/images/banter-bus.png";
import comperisation from "~/assets/images/composerisation.png";
import retfundl from "~/assets/images/re-t-fund-l.jpg";
import stegappasaurus from "~/assets/images/stegappasaurus.png";

const Projects = [
  {
    background: "#367EE9",
    image: stegappasaurus,
    name: "Stegappasaurus",
    content: `Stegappasaurus is an open-source free mobile application, built using
        React Native. This application uses steganography algorithms to hide
        data within images. The project was originally conceptualised as a
        third-year project for university. It has since then been completely
        rewritten from scratch. It was originally written using Ionic/Apache
        Cordova.`,
    url: "https://gitlab.com/hmajid2301/stegappasaurus"
  },
  {
    background: "#4C8CAF",
    image: retfundl,
    name: "[WIP]: re-t-fund-l",
    content: `Re-t-fund-l is an open-source web based application, build using
    React and Python. The application allow use to upload your TFL travel data,
    and it will automatically send emails on your behalf to TFL to request refunds
    for delayed journeys.`,
    url: "https://gitlab.com/hmajid2301/re-t-fund-l"
  },
  {
    background: "#962D3E",
    image: comperisation,
    name: "[WIP]: composerisation",
    content: `Composerisation is an open-source CLI tool, build using
    Python. The tool allows you to convert between docker run and docker compose
    (both ways) syntax.`,
    url: "https://gitlab.com/hmajid2301/composerisation"
  },
  {
    background: "#77C9B2",
    image: banter,
    name: "[WIP]: Banter Bus",
    content: `Banter Bus is an open-source PWA, build using
    React and Go. The application is a multiplayer game where players
    answer questions and the answers are voted on by the other players.`,
    url: "https://gitlab.com/hmajid2301/banter-bus"
  }
];

export default Projects;
