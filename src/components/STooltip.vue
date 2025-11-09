<template>
  <Transition name="fade">
    <div v-show="open" ref="floatingRef" :style="floatingStyles"
      class="bg-gray-77 text-white px-3 py-2 rounded-sm text-xs z-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.12)]">
      <span v-if="tailed" ref="arrowRef" :class="{
        'rounded-br-xs': arrowPosition === 'bottom',
        'rounded-tr-xs': arrowPosition === 'right',
        'rounded-bl-xs': arrowPosition === 'left',
        'rounded-tl-xs': arrowPosition === 'top',
      }" :style="{
          left: middlewareData.arrow?.x != null ? `${middlewareData.arrow.x}px` : '',
          top: middlewareData.arrow?.y != null ? `${middlewareData.arrow.y}px` : '',
          [arrowPosition]: '-6px',
        }" class="size-3 absolute rotate-45 bg-gray-77" />
      <slot>{{ label }}</slot>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { computed, ref, useTemplateRef, watchEffect } from 'vue'
import {
  useFloating,
  offset,
  flip,
  shift,
  arrow,
  autoUpdate,
  type UseFloatingOptions,
} from '@floating-ui/vue'
import { useParentElement, useElementHover, useFocusWithin } from '@vueuse/core'

const { placement = 'top', tailed = true, visible = false } = defineProps<{
  label?: string
  placement?: UseFloatingOptions['placement']
  tailed?: boolean
  visible?: boolean
}>()

const parentRef = useParentElement()
const floatingRef = useTemplateRef<HTMLDivElement>('floatingRef')
const arrowRef = useTemplateRef<HTMLSpanElement>('arrowRef')

const open = ref(false)

const isHovered = useElementHover(parentRef)
const { focused } = useFocusWithin(parentRef)

watchEffect(() => {
  open.value = visible ?? (isHovered.value || focused.value)
})

const {
  floatingStyles,
  middlewareData,
  placement: actualPlacement,
} = useFloating(parentRef, floatingRef, {
  placement,
  middleware: [offset(10), flip(), shift(), arrow({ element: arrowRef })],
  whileElementsMounted: autoUpdate,
})

const arrowPosition = computed(() => {
  return (
    {
      top: 'bottom',
      right: 'left',
      bottom: 'top',
      left: 'right',
    }[actualPlacement.value.split('-')[0] ?? 'top'] ?? 'bottom'
  )
})
</script>
