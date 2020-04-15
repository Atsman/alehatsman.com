import { configure } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { addDecorator } from "@storybook/react"
import centered from '@storybook/addon-centered/react';
import { GlobalDecorator } from "./GlobalDecorator"

// automatically import all files ending in *.stories.js
configure(
  require.context("../src", true, /\.stories\.(js|jsx|ts|tsx)$/),
  module
)
// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = ""
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = (pathname) => {
  action("NavigateTo:")(pathname)
}

addDecorator(centered)
addDecorator(GlobalDecorator)
