/*
 * A mock module to simulate the structure of the Brackets module
 * IMPORTANT NOTE: This is not a requireJS module.
 */
const brackets = () => {
  const getModule = () => {
    return {
      showModalDialog: (err, title, msg) => {
        // console.log(`Show Dialog:${title}\n${msg}`);
      },
    };
  };
  return {
    getModule,
  };
};

module.exports = brackets;
