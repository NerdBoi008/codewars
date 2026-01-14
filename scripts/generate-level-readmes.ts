import fs from "fs";
import path from "path";

const ROOT = process.cwd();

const isKyuFolder = (name: string) =>
  /^\d-kyu$/.test(name) && fs.statSync(path.join(ROOT, name)).isDirectory();

const kyuFolders = fs.readdirSync(ROOT).filter(isKyuFolder);

kyuFolders.forEach((kyu: string) => {
  const dirPath = path.join(ROOT, kyu);

  const files = fs
    .readdirSync(dirPath)
    .filter(
      (file: string) =>
        (file.endsWith(".ts") || file.endsWith(".js")) && file !== "README.md",
    );

  let content = `# ${kyu} Codewars Solutions

| Kata | Language |
|------|----------|
`;

  files.forEach((file: string) => {
    const kata = file.replace(/\.(ts|js)$/, "");
    const lang = file.endsWith(".ts") ? "TypeScript" : "JavaScript";
    content += `| [${kata}](./${file}) | ${lang} |\n`;
  });

  fs.writeFileSync(path.join(dirPath, "README.md"), content);
  console.log(`✔ Updated ${kyu}/README.md`);
});
