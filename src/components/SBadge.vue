<template>
  <span
    ref="badgeRef"
    class="rounded-full bg-primary-500 inline-flex transform-none"
    :style="!solo ? floatingStyles : undefined"
    :class="[
      label
        ? 'text-2xs font-medium w-min px-1 h-4 justify-center items-center min-w-4 text-white text-nowrap'
        : sizeClass,
    ]"
  >
    <slot>
      {{ label }}
    </slot>
  </span>
</template>

<script setup lang="ts">
import { computed, useTemplateRef } from 'vue'
import { useElementBounding, useParentElement } from '@vueuse/core'
import { autoUpdate, offset, useFloating } from '@floating-ui/vue'

const {
  label,
  size = 'md',
  placement = 'top-start',
  solo = false,
} = defineProps<{
  label?: string
  size?: 'sm' | 'md' | 'lg'
  solo?: boolean
  placement?:
    | 'top-start'
    | 'top'
    | 'top-end'
    | 'right'
    | 'left'
    | 'bottom-start'
    | 'bottom'
    | 'bottom-end'
}>()

const parentRef = useParentElement()
const badgeRef = useTemplateRef<HTMLSpanElement>('badgeRef')

const { width: parentWidth, height: parentHeight } = useElementBounding(parentRef)
const { width: badgeWidth, height: badgeHeight } = useElementBounding(badgeRef)

const isParentCircle = computed(() => {
  if (!parentRef.value) return false
  const computedStyle = getComputedStyle(parentRef.value)
  const borderRadius = parseFloat(computedStyle.borderRadius) || 0
  const minDimension = Math.min(parentWidth.value, parentHeight.value)
  return borderRadius >= minDimension / 2
})

const { floatingStyles } = useFloating(parentRef, badgeRef, {
  placement,
  middleware: [
    offset(() => ({
      alignmentAxis:
        badgeWidth.value / (isParentCircle.value ? (label && label.length > 1 ? -4 : 2) : -2),
      mainAxis: ['top', 'bottom', 'right', 'left'].includes(placement)
        ? badgeHeight.value / -2
        : isParentCircle.value
          ? parentWidth.value / -4
          : badgeHeight.value / -2,
    })),
  ],
  whileElementsMounted: autoUpdate,
})

const sizeClass = computed(() => {
  return {
    sm: 's-badge-sm',
    md: 's-badge-md',
    lg: 's-badge-lg',
  }[size]
})
</script>
