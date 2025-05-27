<template>
  <div :class="sizeClass" class="w-full fa-digits">
    <div
      ref="selectRef"
      :aria-controls="dropdownId"
      :aria-disabled="disabled"
      :aria-expanded="open"
      :aria-invalid="error ? true : undefined"
      :class="{
        'text-black-87': model,
        '!rounded-full': rounded,
      }"
      :tabindex="disabled ? -1 : 0"
      aria-haspopup="listbox"
      class="flex items-center justify-between rounded-sm border border-black-24 cursor-pointer hover:border-black-48 transition duration-240 text-black-32 focus-visible:ring focus-visible:border-primary focus-visible:ring-primary focus-visible:outline-0 focus-visible:ring-inset aria-disabled:pointer-events-none aria-disabled:border-black-12 group aria-disabled:text-black-32 aria-invalid:border-error"
      role="button"
      @click="open = !open"
      @keydown.enter.space.prevent="open = !open"
      @keydown.esc="open = false"
    >
      {{ options.find((option) => option.value === model)?.label ?? placeholder }}
      <div class="flex items-center group-aria-invalid:[&>*]:text-error">
        <slot name="append">
          <span v-if="appendText" class="text-black-32" v-text="appendText" />
        </slot>
        <inline-svg
          :class="{
            'rotate-180': open,
          }"
          :src="ChevronDownSVG"
          class="text-black-32 transition-transform group-aria-disabled:text-black-12"
        />
      </div>
    </div>
    <small v-if="helperText" class="text-black-56 px-2 mt-1" v-text="helperText" />
    <Transition name="fade">
      <div
        v-show="open"
        :id="dropdownId"
        ref="floatingRef"
        :style="floatingStyles"
        class="bg-white rounded-sm z-20 text-black-56 overflow-hidden shadow-[0_1px_6px_rgba(0,0,0,0.04),0_-8px_32px_rgba(0,0,0,0.08),0_16px_24px_rgba(0,0,0,0.04)]"
        role="listbox"
      >
        <SInput
          v-if="searchable"
          v-model="search"
          :prepend-icon="MagnifierSVG"
          class="p-1 in-[.s-select-lg]:s-input-lg in-[.s-select-sm]:s-input-sm"
          name="search"
          placeholder="جستجوی عناوین"
          variant="filled"
        />
        <ul class="flex flex-col w-full max-h-64 overflow-auto">
          <li
            v-for="(option, i) in _options"
            :key="i"
            :aria-disabled="option.disabled"
            :aria-selected="model === option.value"
            :class="{
              'text-primary': model === option.value,
            }"
            :data-index="i"
            :data-value="option.value"
            class="w-full min-h-8 cursor-pointer hover:bg-black-4 aria-disabled:pointer-events-none aria-disabled:text-black-24 flex items-center px-4 shrink-0"
            role="option"
            @click="onOptionClick(option.value)"
          >
            <inline-svg v-if="multiple" :src="CheckSVG" class="size-4" />
            {{ option.label }}
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, useId, useTemplateRef, watchEffect } from 'vue'
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
import SInput from '@/components/SInput.vue'
import MagnifierSVG from '@/assets/icons/magnifier.svg'
import CheckSVG from '@/assets/icons/check.svg'

const {
  size = 'md',
  disabled = false,
  placeholder = 'انتخاب کنید',
  rounded = false,
  variant = 'outlined',
  searchable = false,
  options,
  multiple = false,
} = defineProps<{
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  placeholder?: string
  helperText?: string
  appendText?: string
  rounded?: boolean
  variant?: 'outlined' | 'filled'
  error?: string
  searchable?: boolean
  multiple?: boolean
  options: {
    label: string
    value: string
    disabled?: boolean
  }[]
}>()

const open = ref(false)
const search = ref('')

const dropdownId = useId()

const selectRef = useTemplateRef<HTMLDivElement>('selectRef')
const floatingRef = useTemplateRef<HTMLDivElement>('floatingRef')

const model = defineModel<string | string[]>()

const _options = computed(() => {
  return searchable
    ? options.filter((option) => option.label.toLowerCase().includes(search.value.toLowerCase()))
    : options
})

function onOptionClick(option: string) {
  if (Array.isArray(model.value)) {
    model.value.push(option)
  } else {
    model.value = option
    open.value = false
  }
}

// watchEffect((e) => {
//   console.log(e)
// })

onClickOutside(
  floatingRef,
  () => {
    open.value = false
  },
  { ignore: [selectRef] },
)

const { floatingStyles } = useFloating(selectRef, floatingRef, {
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
