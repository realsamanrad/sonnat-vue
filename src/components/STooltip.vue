<template>
  <div
    v-show="open"
    ref="floatingRef"
    :style="floatingStyles"
    class="bg-black-77 text-white px-3 py-2 rounded-sm text-xs absolute"
  >
    <span
      ref="arrowRef"
      :class="{
        'rounded-br-xs': arrowPosition === 'bottom',
        'rounded-tr-xs': arrowPosition === 'right',
        'rounded-bl-xs': arrowPosition === 'left',
        'rounded-tl-xs': arrowPosition === 'top',
      }"
      :style="{
        left: middlewareData.arrow?.x != null ? `${middlewareData.arrow.x}px` : '',
        top: middlewareData.arrow?.y != null ? `${middlewareData.arrow.y}px` : '',
        [arrowPosition]: '-4px',
      }"
      class="size-2 absolute rotate-45 bg-black-77"
    />
    <slot>{{ label }}</slot>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, useTemplateRef } from 'vue'
import {
  useFloating,
  offset,
  flip,
  shift,
  arrow,
  autoUpdate,
  type UseFloatingOptions,
} from '@floating-ui/vue'
import { useParentElement, useEventListener } from '@vueuse/core'

const { placement = 'top' } = defineProps<{
  label?: string
  placement?: UseFloatingOptions['placement']
}>()

const reference = useParentElement()
const floatingRef = useTemplateRef<HTMLDivElement>('floatingRef')
const arrowRef = useTemplateRef<HTMLSpanElement>('arrowRef')

const open = ref(false)

useEventListener(reference, 'mouseenter', () => (open.value = true))
useEventListener(reference, 'mouseleave', () => (open.value = false))

const {
  floatingStyles,
  middlewareData,
  placement: actualPlacement,
} = useFloating(reference, floatingRef, {
  placement,
  middleware: [offset(10), flip(), shift(), arrow({ element: arrowRef })],
  whileElementsMounted: autoUpdate,
})

const arrowPosition = computed(() => {
  return {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right',
  }[actualPlacement.value.split('-')[0]] as string
})
</script>
