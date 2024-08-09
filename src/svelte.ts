import SvelteMain from "@/SvelteMain.svelte";
import {libraryProvider} from "@/library/svelte.ts";

export const createSvelte = () => {
  libraryProvider();

  new SvelteMain({target: document.getElementById('app')!});
};
