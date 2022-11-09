const http = require("http");
const app = require("./app");
const PORT = process.env.PORT || 7070;
const { loadPlanetsData } = require("./models/planets.model");
const server = http.createServer(app);

loadPlanetsData();

server.listen(PORT, () => {
  console.log(`Server in running on ${PORT}`);
});
