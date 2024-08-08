<template>
  <template v-if="opened">
    <button data-selector="modal.close" @click="close">
      Close
    </button>
    <div data-selector="modal-area">
      <component :is="body"></component>
    </div>
  </template>
</template>

<script lang="ts">
import {Component, defineComponent, ref} from "vue";
import {VUE_MODAL_ACTION, VUE_MODAL_LISTEN} from "@/modal/VueModalKey.ts";
import {inject} from "@/injections.ts";

export default defineComponent({
  setup() {
    const modal = inject(VUE_MODAL_LISTEN);
    const modalAction = inject(VUE_MODAL_ACTION);
    const opened = ref(false);
    const body = ref<Component>();

    modal.onOpen(component => {
      body.value = component;
      opened.value = true;
    });

    modal.onClose(() => opened.value = false);

    const close = () => modalAction.close();

    return  {
      opened,
      close,
      body,
    }
  }
})
</script>
