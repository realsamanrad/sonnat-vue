<template>
  <div :class="sizeClass" class="w-full flex flex-col">
    <label v-if="label" :for="dropdownId" class="font-medium text-black-87 mb-2" v-text="label" />
    <div
      ref="select"
      :aria-controls="dropdownId"
      :aria-disabled="disabled"
      :aria-expanded="open"
      :aria-invalid="error ? true : undefined"
      :class="{
        '!text-gray-87': model?.length,
        '!rounded-full': rounded,
      }"
      :tabindex="disabled ? -1 : 0"
      aria-haspopup="listbox"
      class="flex items-center justify-between rounded-sm border border-gray-24 cursor-pointer hover:border-gray-48 transition duration-240 text-gray-32 focus-visible:ring focus-visible:border-primary focus-visible:ring-primary focus-visible:outline-0 focus-visible:ring-inset aria-disabled:pointer-events-none aria-disabled:border-gray-12 group aria-disabled:text-gray-32 aria-invalid:border-error group"
      role="button"
      @click.self="open = !open"
      @keydown.enter.space.prevent="open = !open"
      @keydown.esc="open = false"
    >
      <ul
        v-if="multiple && Array.isArray(model) && model.length"
        class="flex items-center gap-1 flex-wrap"
      >
        <li v-for="(item, i) in model" :key="i" :data-index="i" class="my-0.5">
          <SChip
            :disabled
            :label="options.find((option) => option.value === item)?.label"
            behavior="removable"
            class="in-[.s-select-sm]:s-chip-sm in-[.s-select-lg]:s-chip-lg"
            @remove="removeOption(item)"
          />
        </li>
      </ul>
      <template v-else>
        {{ options.find((option) => option.value === model)?.label ?? placeholder }}
      </template>
      <div class="flex items-center group-aria-invalid:[&>*]:text-error pointer-events-none">
        <slot name="append">
          <span v-if="appendText" class="text-gray-32" v-text="appendText" />
        </slot>
        <ChevronDownSVG
          :class="{
            'rotate-180': open,
          }"
          class="text-gray-32 transition-transform group-aria-disabled:text-gray-12"
        />
      </div>
    </div>
    <small v-if="helperText" class="text-gray-56 px-2 mt-1" v-text="helperText" />
    <Transition name="fade">
      <div
        v-show="open"
        :id="dropdownId"
        ref="floating"
        :style="floatingStyles"
        class="bg-white rounded-sm z-20 text-gray-56 overflow-hidden shadow-[0_1px_6px_rgba(0,0,0,0.04),0_-8px_32px_rgba(0,0,0,0.08),0_16px_24px_rgba(0,0,0,0.04)]"
        role="listbox"
        @keyup.esc="open = false"
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
        <ul class="flex flex-col w-full max-h-64 overflow-auto outline-primary" tabindex="-1">
          <li
            v-for="(option, i) in _options"
            :key="i"
            :aria-disabled="option.disabled"
            :aria-selected="model === option.value"
            :class="{
              'text-primary': isSelected(option),
            }"
            :data-index="i"
            :data-value="option.value"
            :tabindex="option.disabled ? -1 : 0"
            class="w-full min-h-8 cursor-pointer hover:bg-gray-4 aria-disabled:pointer-events-none aria-disabled:text-gray-24 flex items-center px-4 shrink-0 outline-0 focus-visible:bg-gray-4"
            role="option"
            @click="onOptionClick(option.value)"
            @keyup.enter="onOptionClick(option.value)"
          >
            <CheckSVG v-if="multiple" class="size-4" />
            {{ option.label }}
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, useId, useTemplateRef, watch } from 'vue'
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
import SChip from '@/components/SChip.vue'

interface Option {
  label: string
  value: string
  disabled?: boolean
}

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
  options: Option[]
  label?: string
}>()

const open = ref(false)
const search = ref('')

const dropdownId = useId()

const selectRef = useTemplateRef<HTMLDivElement>('select')
const floatingRef = useTemplateRef<HTMLDivElement>('floating')

const model = defineModel<string | string[]>()

const _options = computed(() => {
  if (!searchable || !search.value) {
    return options
  }
  return options.filter((option) => option.label.toLowerCase().includes(search.value.toLowerCase()))
})

const isSelected = (option: Option): boolean => {
  if (multiple) {
    return Array.isArray(model.value) && model.value.includes(option.value)
  }
  return model.value === option.value
}

// const modelValueDisplay = computed(() => {
//   if (multiple) {
//     return Array.isArray(model.value) && model.value.length > 0
//   }
//   return model.value !== undefined && model.value !== null && model.value !== ''
// })

function onOptionClick(optionValue: string) {
  if (multiple) {
    const currentModelArray = Array.isArray(model.value) ? [...model.value] : []
    const index = currentModelArray.indexOf(optionValue)

    if (index > -1) {
      currentModelArray.splice(index, 1)
    } else {
      currentModelArray.push(optionValue)
    }
    model.value = currentModelArray
  } else {
    model.value = optionValue
    open.value = false
  }
}

function removeOption(optionValue: string) {
  if (Array.isArray(model.value)) {
    model.value = model.value.filter((item) => item !== optionValue)
  }
}

watch(
  () => multiple,
  (isMultiple) => {
    if (isMultiple && typeof model.value === 'undefined') {
      model.value = []
    } else if (!isMultiple && Array.isArray(model.value)) {
      model.value = model.value.length > 0 ? model.value[0] : undefined
    }
  },
  { immediate: true },
)

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
