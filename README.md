# Getting Started with Create React App + Tailwind CSS

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and configured with [Tailwind CSS](https://tailwindcss.com).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.  
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.  
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.  
Your app is ready to be deployed!

To include Tailwind CSS in your production build, make sure to purge unused styles by configuring the `content` section in `tailwind.config.js`.  

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point, you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Configuring Tailwind CSS

1. Install Tailwind CSS:

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init
   ```

2. Update the `tailwind.config.js` file to include your project files:

   ```js
   module.exports = {
     content: [
       "./src/**/*.{js,jsx,ts,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

3. Add the Tailwind directives to your CSS file (e.g., `src/index.css`):

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

4. Start your app with `npm start` to see Tailwind CSS styles in action.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).  
To learn more about using Tailwind CSS, visit the [Tailwind CSS documentation](https://tailwindcss.com/docs/installation).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### Troubleshooting Tailwind CSS in Production

If your styles are not being applied in production, ensure your `tailwind.config.js` file is correctly configured, and unused styles are purged. For more help, check out the [Tailwind CSS troubleshooting guide](https://tailwindcss.com/docs/installation#building-your-css).
