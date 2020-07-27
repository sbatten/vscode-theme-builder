const fs = require("fs").promises;
const createTheme = require("./github-style");
const colors = require("./colors");

const theme = createTheme(colors, "light");

fs.mkdir("./themes", { recursive: true })
  .then(() => Promise.all([
    fs.writeFile("./themes/light.json", JSON.stringify(theme, null, 2)),
  ]))
  .catch(() => process.exit(1))