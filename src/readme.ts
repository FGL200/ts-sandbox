/**
 * This is a TS/JS Sandbox.
 * To start, open terminal and run the command `npm run dev`
 * 
 * Every time a file changes inside the `src` folder, the ternimal will automatically run your program.
 * 
 * The program starts in `index.ts`
 * The program will crash if there is no index.ts found.
 * 
 * The program is dependent on:
 * 1. npm install typescript
 * 2. npm install -g onchange
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * To Recreate this from an empty folder:
 * 1. In terminal run `npm init` and press Enter until prompts are complete.
 * 2. Install:
 *    npm install typescript
 *    npm install -g onchange
 * 3. In ternimal run `npx tsc --init`, this will create `tsconfig.json`
 * 4. In `tsconfig.json` uncomment the line containing `outDir` and change its value to `"./dist"` (usually on line 58) and save the file.
 * 5. In package.json remove everything and replace the value of `"scripts"` with:
      "scripts": {
        "start": "npx tsc && echo Output: && node dist/index.js",
        "dev" : "onchange -i -k src/* -- npm run start"
      }
 * 6. Create a folder `src` in root folder.
 * 7. Create index.ts inside the `src` folder.
 * 8. In terminal, run the command `npm run dev`
 * 9. Start coding inside the index.ts!
 */
const start = () => console.log("Hello World!");