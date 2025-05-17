<template>
  <div
    :aria-disabled="disabled"
    :class="[
      sizeClass,
      _class,
      {
        '!rounded-full': rounded,
        'cursor-pointer': behavior === 'selective' || behavior === 'interactive',
        'pointer-events-none': disabled,
      },
    ]"
    class="rounded-sm flex items-center justify-center w-fit select-none transition duration-300"
    role="button"
    @click="handleClick"
  >
    <inline-svg v-if="icon" :src="icon" />
    <slot>
      <span v-text="label" />
    </slot>
    <button
      v-if="behavior === 'removable'"
      class="h-full group cursor-pointer flex justify-center items-center"
    >
      <inline-svg
        :class="btnStateClass[variant]"
        :src="CloseSVG"
        class="size-4 rounded-full transition duration-300"
      />
    </button>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import CloseSVG from '@/assets/icons/close.svg'

const {
  variant = 'filled',
  color = 'default',
  rounded = false,
  size = 'md',
  behavior = 'interactive',
  disabled = false,
} = defineProps<{
  label?: string
  variant?: 'filled' | 'outlined'
  color?: 'primary' | 'default'
  rounded?: boolean
  icon?: string
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  behavior?: 'removable' | 'selective' | 'interactive'
}>()

const selected = defineModel<boolean>('selected', {
  default: false,
})

const sizeClass = computed(() => {
  return {
    sm: 's-chip-sm',
    md: 's-chip-md',
    lg: 's-chip-lg',
  }[size]
})

const btnStateClass = {
  filled: 'group-hover:bg-black/12 group-active:bg-black/24',
  outlined: 'group-hover:bg-primary/12 group-active:bg-primary/24',
}

const interactiveClass = {
  filled: {
    default:
      'text-black/56 bg-black/4 hover:bg-black/12 active:bg-black/24 aria-disabled:bg-black/4 aria-disabled:text-black/24',
    primary:
      'text-white bg-primary hover:bg-primary-400 active:bg-primary-600 aria-disabled:bg-primary/8 aria-disabled:text-black/24',
  },
  outlined: {
    default:
      'text-black/56 border border-black/12 hover:bg-black/4 active:bg-black/12 aria-disabled:border-black/12 aria-disabled:text-black/24',
    primary:
      'text-primary border border-primary hover:bg-primary/12 active:bg-primary/24 aria-disabled:border-primary/12 aria-disabled:text-primary/32',
  },
}

const selectiveClass = {
  true: {
    filled: {
      default:
        'text-white bg-black/56 hover:black/48 active:!bg-black/64 aria-disabled:bg-black/4 aria-disabled:text-black/24',
      primary:
        'text-white bg-primary hover:bg-primary-400 active:bg-primary-600 aria-disabled:bg-primary/8 aria-disabled:text-black/24',
    },
    outlined: {
      default:
        'text-black/56 border border-black/48 bg-black/4 hover:bg-black/12 active:bg-black/24 aria-disabled:bg-black/4 aria-disabled:text-black/24 aria-disabled:border-transparent',
      primary:
        'text-primary border border-primary bg-primary/8 hover:bg-primary/12 active:bg-primary/24 aria-disabled:bg-primary/8 aria-disabled:text-black/24 aria-disabled:border-transparent',
    },
  },
  false: {
    filled: {
      default:
        'text-black/56 bg-black/4 hover:bg-black/12 active:bg-black/24 aria-disabled:bg-black/4 aria-disabled:text-black/24',
      primary:
        'text-black/56 bg-black/4 hover:bg-black/12 active:bg-black/24 aria-disabled:bg-primary/8 aria-disabled:text-primary/32',
    },
    outlined: {
      default:
        'text-black/56 border border-black/12 hover:bg-black/4 active:bg-black/12 aria-disabled:border-black/12 aria-disabled:text-black/24',
      primary:
        'text-black/56 border border-black/12 hover:bg-black/4 active:bg-black/12 aria-disabled:border-primary/12 aria-disabled:text-primary/32',
    },
  },
}

const removableClass = {
  filled: {
    default: 'text-black/56 bg-black/4 aria-disabled:text-black/24 aria-disabled:bg-black/4',
    primary: 'text-white bg-primary aria-disabled:text-black/24 aria-disabled:bg-primary/8',
  },
  outlined: {
    default:
      'text-black/56 border border-black/12 bg-black/4 aria-disabled:text-black/24 aria-disabled:border-black/12 aria-disabled:bg-transparent',
    primary:
      'text-primary border border-primary bg-primary/8 aria-disabled:text-primary/32 aria-disabled:border-primary/12 aria-disabled:bg-transparent',
  },
}

const _class = computed(() => {
  if (behavior === 'interactive') {
    return interactiveClass[variant][color]
  }
  if (behavior === 'selective') {
    return selectiveClass[selected.value ? 'true' : 'false'][variant][color]
  }
  return removableClass[variant][color]
})

function handleClick() {
  if (behavior === 'selective') {
    selected.value = !selected.value
  }
}

defineEmits(['remove'])
</script>
