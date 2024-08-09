<script>
import {Route, Router} from "svelte-routing";
import BookComponent from "@/library/infrastructure/primary/BookComponent.svelte";
import {ISBN} from "@/library/domain/ISBN.ts";
</script>

<Router>
  <Route path="/book/:isbn" let:params>
    <BookComponent isbn="{ISBN.of(params.isbn)}" />
  </Route>
</Router>
