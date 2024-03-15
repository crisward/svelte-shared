<script>
  import {count} from "./store.js";
  import Display from "./Display.svelte";
  let name ="World";
</script>

<h1>Hello {name}!</h1>

<lable>Your Name</lable>
<input type="text" bind:value={name}>
<br>
<p>
  <button on:click={()=> $count+=1}>Add</button>
  <button on:click={()=> $count-=1}>Sub</button>
</p>

<Display />

<style>
  :root{
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }
  h1 {
    color:firebrick;
  }
  button,input{
    all:unset;
    display:inline-grid;
    padding:0.3em 0.8em;
    border:1px solid #444;
  }
  button{
    cursor: pointer;
    background:#444;
    color:white;
  }
</style>