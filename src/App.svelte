<script>
  import {count} from "./store.js";
  import Display from "./Display.svelte";
  let name ="World";
</script>

<h1>Hello {name}!</h1>

<lable>Your Name</lable>
<input type="text" bind:value={name}>

<button on:click={()=> $count+=1}>Add</button>

<Display />
