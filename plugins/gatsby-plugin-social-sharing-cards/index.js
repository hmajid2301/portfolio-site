const jimp = require('jimp');

module.exports = async ({ markdownNode }) => {
  const {
    frontmatter: { slug, title = 'Haseeb Majid', tags = ['Blog'] },
    fields: { readingTime },
  } = markdownNode;

  const location = `./public/${slug}/card.jpg`;
  const cleanedTitle = title.replace(
    /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
    ''
  );

  const tag = tags[0];
  const time = readingTime ? `${Math.ceil(readingTime.minutes)}m` : '3m';

  const titleFont = await jimp.loadFont(`${__dirname}/fonts/Title.fnt`);
  const detailFont = await jimp.loadFont(`${__dirname}/fonts/Detail.fnt`);

  return Promise.all([jimp.read(`${__dirname}/templates/default.png`)]).then(
    ([image]) => {
      image.print(detailFont, 132, 341, time, 1100).write(location);
      image.print(detailFont, 315, 341, tag, 1100).write(location);
      image
        .print(
          titleFont,
          77,
          10,
          {
            text: cleanedTitle,
            alignmentX: jimp.HORIZONTAL_ALIGN_LEFT,
            alignmentY: jimp.VERTICAL_ALIGN_BOTTOM,
          },
          700,
          300
        )
        .write(location);
    }
  );
};
