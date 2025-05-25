<template>
  <div :class="sizeClass" class="w-full">
    <div
      ref="selectRef"
      class="flex items-center justify-between px-2 rounded-sm border border-black-24 cursor-pointer hover:border-black-48 transition duration-240 text-black-32 text-xs"
      @click="open = !open"
    >
      سایز انتخابی
      <inline-svg :src="ChevronDownSVG" class="text-black-32 size-6" />
    </div>
    <div
      v-if="open"
      ref="floatingRef"
      :style="floatingStyles"
      class="flex items-center p-4 bg-white rounded-sm shadow-[0_1px_6px_rgba(0,0,0,0.04),0_-8px_32px_rgba(0,0,0,0.08),0_16px_24px_rgba(0,0,0,0.04)] h-20"
    >
      asdasd
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, useTemplateRef } from 'vue'
import ChevronDownSVG from '@/assets/icons/chevron-down.svg'
import {
  autoUpdate,
  flip,
  offset,
  shift,
  useFloating,
  size as floatingSize,
} from '@floating-ui/vue'

const { size = 'md' } = defineProps<{
  size?: 'sm' | 'md' | 'lg'
}>()

const open = ref(false)

const selectRef = useTemplateRef<HTMLDivElement>('selectRef')
const floatingRef = useTemplateRef<HTMLDivElement>('floatingRef')

const {
  floatingStyles,
  middlewareData,
  placement: actualPlacement,
} = useFloating(selectRef, floatingRef, {
  placement: 'bottom',
  strategy: 'fixed',
  middleware: [
    offset(4),
    flip(),
    shift(),
    floatingSize({
      apply({ rects, elements }) {
        Object.assign(elements.floating.style, {
          width: `${rects.reference.width}px`,
        })
      },
    }),
  ],
  whileElementsMounted: autoUpdate,
})

const sizeClass = computed(() => {
  return {
    sm: 's-select-sm',
    md: 's-select-md',
    lg: 's-select-lg',
  }[size]
})
</script>
