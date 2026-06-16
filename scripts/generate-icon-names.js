const fs = require("fs");
const path = require("path");

const selection = require("../src/components/atom/Icon/selection.json");

const names = selection.icons.map((icon) => icon.properties.name);

const content = `export const iconNames = [
${names.map((name) => `  '${name}',`).join("\n")}
] as const;
`;
console.log(__dirname);
fs.writeFileSync(
  path.resolve(__dirname, "../src/components/atom/Icon/iconNames.ts"),
  content,
);

console.log(`Generated ${names.length} icon names`);
