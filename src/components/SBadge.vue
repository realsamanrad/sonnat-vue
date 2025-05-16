<template>
  <span
    class="rounded-full bg-primary-500 inline-flex"
    :class="
      label
        ? 'text-2xs font-medium w-min px-1 h-4  justify-center items-center min-w-4  text-white'
        : `s-badge-${dotSize}`
    "
  >
    <slot>
      {{ label }}
    </slot>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { dotSize = 'md' } = defineProps<{
  label?: string
  dotSize?: 'sm' | 'md' | 'lg'
}>()
</script>
