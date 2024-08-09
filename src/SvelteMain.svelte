<script>
  import {Route, Router} from "svelte-routing";
  import {LibraryApp} from "@/library/svelte.ts";
  export let url = "";
</script>

<Router {url}>
  <Route path="/*">
    <LibraryApp />
  </Route>
</Router>
