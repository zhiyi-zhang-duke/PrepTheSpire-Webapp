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

11-9-2022
I was able to configure CORS and apollographql correctly. Now I just need to use the data correctly within RunPrep.js. It'll need to map the results to the data object for the SelectList dropdown.

11-11-22
I was able to get CARDS_QUERY working. I think I need an intermediate screen. The flow should be:
New Run -> Choose class
Run Prep -> (Choose between: New Card, Remove Card, Deck Stats, Fight Info)

11-12-22
Tried to figure out how to pass props via Link. Did not have a good time. Turns out it has to be done very specifically. Lots of contradictory documentation even from reactrouter.com.
Figured out how to get the dropdown to call the function within the component. Just need to redirect to RunPrepNow.

11-14-22
Tweaking the UI. I've also gotten app storage to work and that may be the direction I decide to take all of the info being transmitted throughout the components.
Left off trying to figure out how to get the AsynStorage item value for hero. Await should theoretically allow me to do synchronous execution.

# To do list

- Figure out why links aren't clickable in the right places
- (not project related) setup a better shell for my IDE

# Questions that I need to ask a sme

- Should I use react router to render pages in a single page web application or hide and show components within a parent component?
- Why does AsyncStorage work across components?

# Resources

Some resources I used along the way

Setting up react native for development

- https://reactnative.dev/docs/environment-setup
  Configuring react router for single page web applications
- https://v5.reactrouter.com/native/guides/quick-start
- https://v5.reactrouter.com/web/example/basic
  Integration apollo graphql
- https://www.apollographql.com/docs/react/integrations/react-native/
  Creating my first query
- https://github.com/GraphQLGuide/guide-react-native
  Useful ui element
- https://www.npmjs.com/package/react-native-dropdown-select-list
  Passing props within react router
- https://ui.dev/react-router-pass-props-to-components
  Storage within app
- https://reactnative.dev/docs/asyncstorage
  Styling buttons
- https://docs.expo.dev/ui-programming/react-native-styling-buttons/
  A question about redirecting
- https://stackoverflow.com/questions/34735580/how-to-do-a-redirect-to-another-route-with-react-router

# Legacy readme

> Why do I have a folder named ".expo" in my project?
> The ".expo" folder is created when an Expo project is started using "expo start" command.
> What do the files contain?

- "devices.json": contains information about devices that have recently opened this project. This is used to populate the "Development sessions" list in your development builds.
- "settings.json": contains the server configuration that is used to serve the application manifest.
  > Should I commit the ".expo" folder?
  > No, you should not share the ".expo" folder. It does not contain any information that is relevant for other developers working on the project, it is specific to your machine.
  > Upon project creation, the ".expo" folder is already added to your ".gitignore" file.
