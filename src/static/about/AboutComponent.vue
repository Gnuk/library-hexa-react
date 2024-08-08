<template>
  <h2 data-selector="about.title">{{t('about.title')}}</h2>
  <p data-selector="about.description">{{t('about.description')}}</p>
  <button data-selector="about.more-info.button" @click="moreInfo">
    {{t('about.more-info.button')}}
  </button>
  <button data-selector="about.cgu.button" @click="cgu">
    {{t('about.cgu.button')}}
  </button>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useTranslation} from "i18next-vue";
import {inject} from "@/injections.ts";
import {VUE_MODAL_ACTION} from "@/modal/vue.ts";
import MoreInfoComponent from "@/static/about/MoreInfoComponent.vue";
import CGUComponent from "@/static/about/CGUComponent.vue";

export default defineComponent({
  setup() {
    const {t} = useTranslation();
    const modal = inject(VUE_MODAL_ACTION);

    const moreInfo = () => {
      modal.open(MoreInfoComponent)
    };

    const cgu = () => {
      modal.open(CGUComponent);
    };

    return {
      t,
      moreInfo,
      cgu,
    }
  },
});
</script>
