const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json([
    {
      id: "1",
      title: "Book Review: The Bear & The Nightingale",
    },
    {
      id: "2",
      title: "Game Review: Pokemon Brillian Diamond",
    },
    {
      id: "3",
      title: "Show Review: Alice in Borderland",
    },
  ]);
});

app.listen(4000, () => {
  console.log("listening for requests on port 4000");
});

// To erase all images and containers use
// docker system prune -a

//To create a new container and image use
//docker build -t <name_of_the_container>:v1 .

//to display list of images use
// docker images

//to display list of containers use
// dockers ps -a

//to remove all containers
// docker container rm <name_of_the_container

//to run a new container
//docker run --name myapp_c -p 4000:4000 myapp:v1
