<script>
  import {count} from "./store.js";
  import Display from "./Display.svelte";
  let name ="World";

  let rune = $state(5)


</script>

<hr>

<button onclick={()=> $count+=1}>Add</button>
<button onclick={()=> rune+=1}>Rune Add ({rune})</button>

<Display />
