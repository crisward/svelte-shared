import { mount } from 'svelte';
import App from "./App.svelte"

// new App({target:document.querySelector("#app")})
 mount(App, { target: document.querySelector("#app")});