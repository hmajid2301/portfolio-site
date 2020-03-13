import banter from "~/assets/images/banter-bus.png";
import comperisation from "~/assets/images/composerisation.png";
import nerf from "~/assets/images/nerf.jpg";
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
        rewritten. It was originally written using Ionic/Apache
        Cordova.`,
    url: "https://gitlab.com/hmajid2301/stegappasaurus",
    alt: "Stegappasaurus App"
  },
  {
    background: "#962D3E",
    image: comperisation,
    name: "[WIP]: composerisation",
    content: `Composerisation is an open-source CLI tool, build using
    Python. The tool allows you to convert between docker run and docker compose
    (both ways) syntax.`,
    url: "https://gitlab.com/hmajid2301/composerisation",
    alt: "Composerisation Tool"
  },
  {
    background: "#4C8CAF",
    image: nerf,
    name: "[WIP]: Nerf Tank",
    content: `A remote control car built using arduino, which has a nerf gun.
    It uses ML to determine who it should shot and then tracks the target.`,
    url: "https://gitlab.com/hmajid2301/nerf-tank",
    alt: "Nerf Tank"
  },
  {
    background: "#77C9B2",
    image: banter,
    name: "[WIP]: Banter Bus",
    content: `Banter Bus is an open-source PWA, build using
    React and Go. The application is a multiplayer game where players
    answer questions and the answers are voted on by the other players.`,
    url: "https://gitlab.com/hmajid2301/banter-bus",
    alt: "Banter Bus"
  }
];

export default Projects;
