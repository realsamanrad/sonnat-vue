<template>
  <div ref="toggle" v-bind="$attrs">
    <slot name="toggle" :open="open" />
  </div>
  <Transition name="fade">
    <div :style="floatingStyles" v-show="open" ref="dropdown" v-bind="$attrs" class="z-10">
      <slot name="dropdown" />
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { autoUpdate, offset, flip, useFloating, size } from '@floating-ui/vue'
import { ref, useTemplateRef } from 'vue'
import { onClickOutside } from '@vueuse/core'

const dropdownRef = useTemplateRef<HTMLDivElement>('dropdown')
const toggleRef = useTemplateRef<HTMLDivElement>('toggle')
const open = ref(false)

const { floatingStyles } = useFloating(toggleRef, dropdownRef, {
  placement: 'bottom-start',
  strategy: 'fixed',
  middleware: [
    offset(8),
    flip(),
    // shift(),
    size({
      padding: 16,
      apply({ availableWidth, availableHeight, elements }) {
        Object.assign(elements.floating.style, {
          maxWidth: `${Math.max(0, availableWidth)}px`,
          maxHeight: `${Math.max(0, availableHeight)}px`,
        })
      },
    }),
  ],
  whileElementsMounted: autoUpdate,
})

onClickOutside(
  dropdownRef,
  () => {
    open.value = false
  },
  { ignore: [toggleRef] },
)

defineExpose({
  open: () => (open.value = true),
  toggle: () => (open.value = !open.value),
})
</script>
