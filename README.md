## Setup  

### Prerequisites
* Node
* Yarn


### Installation

Run `yarn install`


### Development

Run `yarn dev`


### Production build and start application
Run `yarn build && yarn start`


### Run tests
Run `yarn test`


### Technical decisions
* The appllication is powered by Next JS.
* Redux (with `@reduxjs/toolkit`) is used to manage UI state.
* CSS-in-JS with `styled-components` library.
* For testing `Jest + React Testing Library` were the selected libraries.
* Components that could live in a design systems or an UI library, like buttons or inputs, are inside the folder `components/Elements`.
* Application does not support i18n.