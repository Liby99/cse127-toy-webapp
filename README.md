1. Install node.js and npm; I recommend using [NVM](https://github.com/creationix/nvm)

2. Install dependencies with `npm install`

3. In two terminals run the web servers: `node evil.js` and `node bank.js`

4. Point your browser to [test.lvh.me:3000](http://test.lvh.me:3000)

5. Read the sources.


#### About

evil.js and bank.js are pretty much the same web app. They implement a simple
(totally insecure) `/hello` route that echos back whatever was stored in the
database via `/set`. You can make posts cross-origins and thus carry out CSRF
attacks. You can also easily inject attacker code to carry out XSS attacks.

I recommend reading the code (both JavaScript and HTML  files), playing around
with the code and using the browser console to look at cookies etc.
