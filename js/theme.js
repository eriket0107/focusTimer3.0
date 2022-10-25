import {
  light,
  dark,
  body,
 } from "./elements.js"

export function changeTheme(){
  light.classList.toggle('hide')
  dark.classList.toggle('hide')
  body.classList.toggle('dark')
}