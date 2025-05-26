<template>
  <div :class="sizeClass" class="w-full fa-digits">
    <div
      ref="selectRef"
      :aria-disabled="disabled"
      :class="{
        'text-black-87': model,
      }"
      class="flex items-center justify-between px-2 rounded-sm border border-black-24 cursor-pointer hover:border-black-48 transition duration-240 text-black-32 text-xs"
      role="button"
      @click="open = !open"
    >
      {{ options.find((option) => option.value === model)?.label ?? placeholder }}
      <inline-svg
        :class="{
          'rotate-180': open,
        }"
        :src="ChevronDownSVG"
        class="text-black-32 size-6 transition-transform"
      />
    </div>
    <Transition name="fade">
      <ul
        v-show="open"
        ref="floatingRef"
        :style="floatingStyles"
        class="flex items-center bg-white rounded-sm shadow-[0_1px_6px_rgba(0,0,0,0.04),0_-8px_32px_rgba(0,0,0,0.08),0_16px_24px_rgba(0,0,0,0.04)] text-xs flex-col z-20 text-black-56"
        role="listbox"
      >
        <li
          v-for="(option, i) in options"
          :key="i"
          :aria-disabled="option.disabled"
          :class="{
            'text-primary': model === option.value,
          }"
          :data-value="option.value"
          class="w-full min-h-8 cursor-pointer hover:bg-black-4 aria-disabled:pointer-events-none aria-disabled:text-black-24 flex items-center px-4"
          role="option"
          @click="((model = option.value), (open = false))"
        >
          {{ option.label }}
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
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
import { onClickOutside } from '@vueuse/core'

const {
  size = 'md',
  disabled = false,
  placeholder = 'انتخاب کنید',
} = defineProps<{
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  placeholder?: string
  options: {
    label: string
    value: string
    disabled?: boolean
  }[]
}>()

const open = ref(false)

const selectRef = useTemplateRef<HTMLDivElement>('selectRef')
const floatingRef = useTemplateRef<HTMLDivElement>('floatingRef')

const model = defineModel<string>()

onClickOutside(
  floatingRef, // The primary target for outside clicks
  () => {
    open.value = false
  },
  { ignore: [selectRef] }, // Ignore clicks on the selectRef (the trigger)
)

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
