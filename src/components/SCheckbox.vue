<template>
  <div :class="sizeClass" class="flex items-center" role="button" :aria-disabled="disabled">
    <div class="flex items-center rounded-full bg-black-8 justify-center">
      <input type="checkbox" :id="inputId" class="size-full opacity-0 cursor-pointer peer" />
      <div
        class="size-4.5 rounded-xs ring ring-black-24 ring-inset absolute pointer-events-none peer-checked:bg-primary peer-checked:ring-0 flex items-center justify-center peer-not-checked:[&>svg]:hidden"
      >
        <inline-svg :src="CheckSVG" class="size-6 text-white" />
      </div>
    </div>
    <label v-text="label" :for="inputId" />
  </div>
</template>

<script setup lang="ts">
import { computed, useId } from 'vue'
import CheckSVG from '@/assets/icons/check.svg'

const { size = 'md', disabled = false } = defineProps<{
  label: string
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}>()

const inputId = 'checkbox-' + useId()

const sizeClass = computed(() => {
  return {
    sm: 's-checkbox-sm',
    md: 's-checkbox-md',
    lg: 's-checkbox-lg',
  }[size]
})
</script>
