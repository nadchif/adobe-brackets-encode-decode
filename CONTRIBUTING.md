Contributing - adobe-brackets-encode-decode
=======

Contributions and suggestions are very welcome and wanted. I try to respond to pull requests within 48 hours. To contribute simply

1. Fork the repository.

	[How do I do this?](https://help.github.com/en/github/getting-started-with-github/fork-a-repo#fork-an-example-repository)

2. Open your extensions folder by selecting `Help > Show Extensions Folder` in Brackets

3. Clone your forked repository inside the `user` folder in the folder from step 2
	```
	git clone https://github.com/YOUR-USERNAME/adobe-brackets-encode-decode
	cd adobe-brackets-encode-decode
	```
	Resources:
	* https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
	
4. Setup the development environment
	```
	npm install
	```
	Resources:
	* https://www.taniarascia.com/how-to-install-and-use-node-js-and-npm-mac-and-windows/
	

5. Make the fix or add features to `src/main.js`. (See detailed instructions below)
	<details>
  		<summary>
		Detailed Instructions: How to add a new encoder or decoder  
	  	</summary>
	 	In order to keep the code clean and readable, implement the encoders/decoders in the `src/convertors` folder, as a RequireJS module:
	
	```
		/**
 		*  File: YourFormat.js
 		*  Author: Your Name <your@email.com>
 		*  Description:  Encodes and decodes String <--> YourFormat
 		*/
 
		define(function(require, exports) {
   		const encodeToYourFormat = (input) => {
		//write your decoding implementation here
		return result; // result must be a String
 		};
		
 		const decodeFromYourFormat = (input) => {
		//write your encoding implementation here
		return result; // result must be a String
 		 };
  		exports.encodeToYourFormat = encodeToYourFormat;
 		exports.decodeFromYourFormat = decodeFromYourFormat;
		});
	```
	
	Import the module to `src/main.js` and register it using the following format: 
	
	```
		const encodeToYourFormat = require('convertors/YourFormat').encodeToYourFormat;
		const encodeFromYourFormat = require('convertors/YourFormat').encodeFromYourFormat;
	```
	Register your encoder/decoder  with the Context Menu, by adding it to `const ENCODERS_DECODERS ` in the following format: 
	```
		  const ENCODERS_DECODERS = [{
		    title: 'YourFormat',
		    encodeTitle: 'String to YourFormat',  //optional
		    encoder: encodeToYourFormat, //The encoder function you imported
		    decodeTitle: 'YourFormat to String', //optional
		    decoder: decodeFromYourFormat,  //The encoder function you imported. If there is non, set value as 'null'
		  }
	```
		
	</details>

 	Compile the extension to use/test it in Brackets using `npm run build`
 
	 Restart Brackets via `Debug > Reload With Extensions` to see your changes.

	 To debug problems, use `Debug > Show Developer Tools`. You can use console.log(), set breakpoints, etc.
	 
	 Resources:
	 * https://github.com/adobe/brackets/wiki/How-to-Write-Extensions

6. Sync your fork to make sure you have the latest changes.
 	
	```
	# Fetch upstream master and merge with your repo's master branch
	git fetch upstream
	git checkout master
	git merge upstream/master

	# If there were any new commits, rebase your development branch
	git checkout newfeature
	git rebase master
	```
	Resources:
	* https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork
	* https://gist.github.com/Chaser324/ce0505fbed06b947d962#cleaning-up-your-work
7. Create a pull request.

	Resources:
	* https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork
	* https://gist.github.com/Chaser324/ce0505fbed06b947d962
	
8. Wait for the maintainer to respond. 

Thank you for you for your awesome contribution :-)
