<script>
  import {count} from "./store.js";
  import Display from "./Display.svelte";
  let name ="World";
</script>

<hr>

<button on:click={()=> $count+=1}>Add</button>

<Display />
