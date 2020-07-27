const githubColors = {
  "black": "#1b1f23",
  "white": "#fff",
  //            0           1          2          3          4          5          6         7          8          9
  "gray":   ["#fafbfc", "#f6f8fa", "#e1e4e8", "#d1d5da", "#959da5", "#6a737d", "#586069", "#444d56", "#2f363d", "#24292e"],
  "blue":   ["#f1f8ff", "#dbedff", "#c8e1ff", "#79b8ff", "#2188ff", "#0366d6", "#005cc5", "#044289", "#032f62", "#05264c"],
  "green":  ["#f0fff4", "#dcffe4", "#bef5cb", "#85e89d", "#34d058", "#28a745", "#22863a", "#176f2c", "#165c26", "#144620"],
  "yellow": ["#fffdef", "#fffbdd", "#fff5b1", "#ffea7f", "#ffdf5d", "#ffd33d", "#f9c513", "#dbab09", "#b08800", "#735c0f"],
  "orange": ["#fff8f2", "#ffebda", "#ffd1ac", "#ffab70", "#fb8532", "#f66a0a", "#e36209", "#d15704", "#c24e00", "#a04100"],
  "red":    ["#ffeef0", "#ffdce0", "#fdaeb7", "#f97583", "#ea4a5a", "#d73a49", "#cb2431", "#b31d28", "#9e1c23", "#86181d"],
  "purple": ["#f5f0ff", "#e6dcfd", "#d1bcf9", "#b392f0", "#8a63d2", "#6f42c1", "#5a32a3", "#4c2889", "#3a1d6e", "#29134e"],
  "pink":   ["#ffeef8", "#fedbf0", "#f9b3dd", "#f692ce", "#ec6cb9", "#ea4aaa", "#d03592", "#b93a86", "#99306f", "#6d224f"]
};

const githubColorIndex = 4;

const colors = {

  dark: {

    accent0: githubColors.red[githubColorIndex],
    accent1: githubColors.orange[githubColorIndex],
    accent2: githubColors.yellow[githubColorIndex],
    accent3: githubColors.green[githubColorIndex],
    accent4: githubColors.blue[githubColorIndex - 1],
    accent5: githubColors.blue[githubColorIndex],
    accent6: githubColors.purple[githubColorIndex],
    accent7: githubColors.pink[githubColorIndex],

    shade0: githubColors[9],
    shade1: githubColors[7],
    shade2: githubColors[6],
    shade3: githubColors[5],
    shade4: githubColors[4],
    shade5: githubColors[3],
    shade6: githubColors[2],
    shade7: githubColors[0]


  },

  light: {

    accent0: githubColors.red[githubColorIndex + 2],
    accent1: githubColors.orange[githubColorIndex + 2],
    accent2: githubColors.yellow[githubColorIndex + 2],
    accent3: githubColors.green[githubColorIndex + 2],
    accent4: githubColors.blue[githubColorIndex - 1 + 2],
    accent5: githubColors.blue[githubColorIndex + 2],
    accent6: githubColors.purple[githubColorIndex + 2],
    accent7: githubColors.pink[githubColorIndex + 2],

    shade0: githubColors[9],
    shade1: githubColors[7],
    shade2: githubColors[6],
    shade3: githubColors[5],
    shade4: githubColors[4],
    shade5: githubColors[3],
    shade6: githubColors[2],
    shade7: githubColors[0]

  },
};

module.exports = {
  colors
};