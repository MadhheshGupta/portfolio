const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const projectsDir = path.join(root, "public", "images", "projects");
const ids = ["student-dbms", "noisepulse", "expense-tracker"];

(async () => {
  for (const id of ids) {
    const png = path.join(projectsDir, `${id}.png`);
    if (fs.existsSync(png)) {
      await sharp(png)
        .webp({ quality: 85 })
        .toFile(path.join(projectsDir, `${id}.webp`));
    }
  }

  const heroSvg = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#6366f1;stop-opacity:0.55"/>
        <stop offset="100%" style="stop-color:#22d3ee;stop-opacity:0.4"/>
      </linearGradient>
    </defs>
    <rect width="500" height="500" fill="#0f172a"/>
    <rect width="500" height="500" fill="url(#g)"/>
  </svg>`
  );

  await sharp(heroSvg)
    .webp({ quality: 82 })
    .toFile(path.join(root, "public", "hero.webp"));

  console.log("Wrote public/hero.webp and project .webp thumbnails");
})();
