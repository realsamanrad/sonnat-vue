<template>
  <div class="inline-flex text-black-24" dir="ltr">
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
  if (hoverStar.value === 0) {
    return n <= model.value ? 'text-primary' : ''
  }
  // Hover interactions
  if (model.value === 0) {
    // All gray - show selection preview
    return n <= hoverStar.value ? 'text-primary-400' : ''
  } else if (model.value === 5) {
    // All primary - show deselection preview
    if (hoverStar.value < 5 && n > hoverStar.value) {
      return 'text-gray-600'
    }
  } else {
    // Partial selection
    if (hoverStar.value <= model.value) {
      // Deselection preview
      if (n > hoverStar.value && n <= model.value) {
        return 'text-gray-600'
      }
    } else {
      // Selection preview
      if (n > model.value && n <= hoverStar.value) {
        return 'text-primary-400'
      }
    }
  }
  if (n <= model.value) {
    return 'text-primary'
  }
  return ''
}

const model = defineModel<number>({ default: 0 })
</script>
