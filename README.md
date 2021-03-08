# YACL (Yet Another Component Library)

Yet Another Component Library is a React library used by Online, a student organization for informatics students. YACL is built on top of [Chakra-UI](https://chakra-ui.com/), which provides great accessibility features and styling options for rapid developement:

# YACL usage

Install the library with

```
yarn add @dotkomonline/yacl

# or

npm install @dotkomonline/yacl
```

In your entry file, for example index.tsx og \_app.tsx, use the provider.

```
# index.tsx

import { OnlineTheme, ThemeProvider } from "@dotkomonline/yacl";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={OnlineTheme} resetCSS>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

After that you can use any component.

```
# MyComponent.tsx

import React from 'react'
import { Button } from '@dotkomonline/yacl'

const MyComponent = () => <Button colorScheme="blue">Foobar</Button>
```

# Developement

Start by installing dependencies with `npm install` and then start the project with `npm start`.
