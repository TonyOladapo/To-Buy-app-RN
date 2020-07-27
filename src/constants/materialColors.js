export function pickRandomColor() {
  const colors = {
    red: {
      "50": "#ffebee",
      "100": "#ffcdd2",
      "200": "#ef9a9a",
      "300": "#e57373",
      a100: "#ff8a80",
      a200: "#ff5252",
    },
    pink: {
      "100": "#f8bbd0",
      "200": "#f48fb1",
      "300": "#f06292",
      a100: "#ff80ab",
      a200: "#ff4081",
    },
    purple: {
      "100": "#e1bee7",
      "200": "#ce93d8",
      "300": "#ba68c8",
      a100: "#ea80fc",
      a200: "#e040fb",
    },
    deepPurple: {
      "100": "#d1c4e9",
      "200": "#b39ddb",
      "300": "#9575cd",
      a100: "#b388ff",
      a200: "#7c4dff",
    },
    indigo: {
      "100": "#c5cae9",
      "200": "#9fa8da",
      "300": "#7986cb",
      a100: "#8c9eff",
      a200: "#536dfe",
    },
    blue: {
      "100": "#bbdefb",
      "200": "#90caf9",
      "300": "#64b5f6",
      hex: "#2196f3",
      a100: "#82b1ff",
      a200: "#448aff",
    },
    lightBlue: {
      "100": "#b3e5fc",
      "200": "#81d4fa",
      "300": "#4fc3f7",
      a100: "#80d8ff",
      a200: "#40c4ff",
    },
    cyan: {
      "100": "#b2ebf2",
      "200": "#80deea",
      "300": "#4dd0e1",
      a100: "#84ffff",
      a200: "#18ffff",
    },
    teal: {
      "100": "#b2dfdb",
      "200": "#80cbc4",
      "300": "#4db6ac",
      a100: "#a7ffeb",
      a200: "#64ffda",
    },
    green: {
      "100": "#c8e6c9",
      "200": "#a5d6a7",
      "300": "#81c784",
      a100: "#b9f6ca",
      a200: "#69f0ae",
    },
    lightGreen: {
      "100": "#dcedc8",
      "200": "#c5e1a5",
      "300": "#aed581",
      a100: "#ccff90",
      a200: "#b2ff59",
    },
    lime: {
      "100": "#f0f4c3",
      "200": "#e6ee9c",
      "300": "#dce775",
      a100: "#f4ff81",
      a200: "#eeff41",
    },
    yellow: {
      "100": "#fff9c4",
      "200": "#fff59d",
      "300": "#fff176",
      a100: "#ffff8d",
      a200: "#ffff00",
    },
    amber: {
      "100": "#ffecb3",
      "200": "#ffe082",
      "300": "#ffd54f",
      a100: "#ffe57f",
      a200: "#ffd740",
    },
    orange: {
      "100": "#ffe0b2",
      "200": "#ffcc80",
      "300": "#ffb74d",
      a100: "#ffd180",
      a200: "#ffab40",
    },
    deepOrange: {
      "100": "#ffccbc",
      "200": "#ffab91",
      "300": "#ff8a65",
      a100: "#ff9e80",
      a200: "#ff6e40",
    },
    brown: {
      "100": "#d7ccc8",
      "200": "#bcaaa4",
      "300": "#a1887f",
    },
    blueGrey: {
      "100": "#cfd8dc",
      "200": "#b0bec5",
      "300": "#90a4ae",
    },
  };

  var colorList = colors[pickRandomProperty(colors)];
  var newColorKey = pickRandomProperty(colorList);
  var newColor = colorList[newColorKey];
  return newColor;
}

function pickRandomProperty(obj) {
  var result;
  var count = 0;
  for (var prop in obj) if (Math.random() < 1 / ++count) result = prop;
  return result;
}
