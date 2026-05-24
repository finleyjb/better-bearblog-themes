export default function (ctx) {
  return {
    map: ctx.options.map,
    parser: ctx.options.parser,
    plugins: {
      "postcss-import": { root: ctx.file.dirname },
      autoprefixer: {},
      "postcss-preset-env": {},
    },
  };
}
