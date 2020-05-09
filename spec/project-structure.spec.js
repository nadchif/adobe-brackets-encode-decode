/*
* For tests to do with the structure of this project, files, folders etc.
* Original author: Chif <nadchif@gmail.com>
*/

const fs = require('fs');
const srcFolder = fs.readdirSync(`${__dirname}/../src`);

describe('Project Structure =>', () => {
  describe('src folder =>', () => {
    it('should contain a main.js file', () => {
      expect(srcFolder).toContain('main.js');
    });
    it('should contain a convertors folder', () => {
      expect(srcFolder).toContain('convertors');
    });
  });
});
