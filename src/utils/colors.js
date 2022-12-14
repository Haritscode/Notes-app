const colors = [
    "#001219", "#005f73", "#0a9396", "#94d2bd", "#e9d8a6", "#ee9b00", "#ca6702", "#bb3e03", "#ae2012", "#9b2226",
];

const getColorsMapping = () => {
    const mapping = {};
    colors.forEach(color => mapping[color] = color)
    return mapping;
}

module.exports = {colors, getColorsMapping}
