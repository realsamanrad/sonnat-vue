<template>
  <span
    class="rounded-full bg-primary-500 inline-flex transform-none"
    :class="[
      label
        ? 'text-2xs font-medium w-min px-1 h-4 justify-center items-center min-w-4 text-white text-nowrap '
        : sizeClass,
      { absolute: !solo, [positionClass]: !solo, [translateClass]: !solo },
    ]"
  >
    <slot>
      {{ label }}
    </slot>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const {
  label,
  size = 'md',
  placement = 'bottom-left',
  solo = false,
  circularParent = false,
} = defineProps<{
  label?: string
  size?: 'sm' | 'md' | 'lg'
  solo?: boolean
  circularParent?: boolean
  placement?:
    | 'top-right'
    | 'top-center'
    | 'top-left'
    | 'middle-right'
    | 'middle-left'
    | 'bottom-right'
    | 'bottom-center'
    | 'bottom-left'
}>()

const positionClass = computed(() => {
  return {
    'top-right': circularParent ? 'top-3/20 right-3/20' : 'top-0 right-0',
    'top-center': 'top-0',
    'top-left': circularParent ? 'top-3/20 left-3/20' : 'top-0 left-0',
    'middle-right': 'right-0',
    'middle-center': 'left-1/2 top-1/2',
    'middle-left': 'left-0',
    'bottom-right': circularParent ? 'bottom-3/20 right-3/20' : 'bottom-0 right-0',
    'bottom-center': 'bottom-0',
    'bottom-left': circularParent ? 'bottom-3/20 left-3/20' : 'bottom-0 left-0',
  }[placement]
})

const translateClass = computed(() => {
  return {
    'top-right': 'translate-x-1/2 -translate-y-1/2',
    'top-center': '-translate-y-1/2 -translate-x-1/2',
    'top-left': '-translate-x-1/2 -translate-y-1/2',
    'middle-right': 'translate-x-1/2 -translate-y-1/2',
    'middle-center': '-translate-x-1/2 -translate-y-1/2',
    'middle-left': '-translate-x-1/2 -translate-y-1/2',
    'bottom-right': 'translate-y-1/2 translate-x-1/2',
    'bottom-center': 'translate-y-1/2 translate-x-1/2',
    'bottom-left': 'translate-y-1/2 -translate-x-1/2',
  }[placement]
})

const sizeClass = computed(() => {
  return {
    sm: 's-badge-sm',
    md: 's-badge-md',
    lg: 's-badge-lg',
  }[size]
})
</script>
