<template>
  <div class="inline-flex text-gray-24" dir="ltr">
    <StarIcon
      v-for="n of 5"
      :key="n"
      :class="[
        {
          'text-primary ': model > n - 1,
          'pointer-events-none': readonly,
        },
        starClass(n),
      ]"
      :data-index="n"
      class="size-4 cursor-pointer transition"
      role="button"
      @click="model = n"
      @mouseleave="hoverStar = 0"
      @mouseover="hoverStar = n"
    />
  </div>
</template>

<script lang="ts" setup>
import StarIcon from '@/assets/icons/star.svg'
import { ref } from 'vue'

const { readonly = false } = defineProps<{
  readonly?: boolean
}>()

const hoverStar = ref(0)

function starClass(n: number) {
  if (!hoverStar.value) {
    return
  }
  if (hoverStar.value <= model.value) {
    if (n > hoverStar.value && n <= model.value) {
      return '!text-gray-24'
    }
  }
  if (n > model.value && n <= hoverStar.value) {
    return 'text-primary'
  }
  return ''
}

const model = defineModel<number>({ default: 0 })
</script>
