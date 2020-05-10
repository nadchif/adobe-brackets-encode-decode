/*
* For tests to do with the structure of this project, files, folders etc.
* Original author: Chif <nadchif@gmail.com>
*/

const fs = require('fs');
const path = require('path');

const srcFolder = fs.readdirSync(`${__dirname}/../src`);
const specFolder = fs.readdirSync(__dirname);

describe('Project Structure =>', () => {
  describe('src folder =>', () => {
    it('should contain a main.js file', () => {
      expect(srcFolder).toContain('main.js');
    });
    it('should contain a convertors folder', () => {
      expect(srcFolder).toContain('convertors');
    });

    // each convertor must have a unit test template in the spec folder
    const convertorsFolder = fs.readdirSync(`${__dirname}/../src/convertors`);

    // filter to only the .js files
    const jsFiles = convertorsFolder.filter((entry) => {
      return path.extname(entry).toLowerCase() == '.js';
    });

    // check if each file has a unit test template counterpart in the spec folder
    jsFiles.forEach((file) => {
      describe(`${file} =>`, () => {
        const fileName = path.basename(file);
        const specFileName = `${fileName.substr(0, fileName.lastIndexOf('.js'))}.spec.js`;
        it(`should have a matching spec counterpart (${specFileName}) in /spec folder`, () => {
          expect(specFolder).toContain(specFileName);
        });
      });
    });
  });
});
