# PrepTheSpire-Webapp

This is the react native front end for PrepTheSpire. When this is fully finished, it should allow you start new runs and continue existing runs. From there you should be offered tier score insights into your card choices and insights into different objectives your deck needs to do.

# Setup

npx create-expo-app react-native-example
npx expo install react-native-web@~0.18.7 react-dom@18.0.0 @expo/webpack-config@^0.17.0
npm expo start

# Where I left off

11-4-2022
I realized I need this to be a single page app so I replaced the App component with a router. After following a tutorial and then realizing that tutorial was outdated, I now have a working version of the router in place. The router is rendering the Home component which just says home. This needs to be where I put the menu with all the buttons.

11-5-2022
I managed to add the router component and get it working with the stylesheet. Now I just need to make each menu option it's own separate component and start designing.
I can now view my baby in the crib while working on my code and have it above all my windows! Ctrl + Win + T, Windows PowerToy ftw.

11-6-2022
Took me a while to figure this out but I had to add this as a submodule. That made everything work.

# To do list

- See how I would link the data from the graphql to this frontend
- Integrate apollographql

# Resources

Some resources I used along the way

- https://reactnative.dev/docs/environment-setup
- https://v5.reactrouter.com/native/guides/quick-start
- https://v5.reactrouter.com/web/example/basic
- https://www.apollographql.com/docs/react/integrations/react-native/

# Legacy readme

> Why do I have a folder named ".expo" in my project?
> The ".expo" folder is created when an Expo project is started using "expo start" command.
> What do the files contain?

- "devices.json": contains information about devices that have recently opened this project. This is used to populate the "Development sessions" list in your development builds.
- "settings.json": contains the server configuration that is used to serve the application manifest.
  > Should I commit the ".expo" folder?
  > No, you should not share the ".expo" folder. It does not contain any information that is relevant for other developers working on the project, it is specific to your machine.
  > Upon project creation, the ".expo" folder is already added to your ".gitignore" file.
