<template>
  <div
    :aria-disabled="disabled"
    :class="sizeClass"
    class="inline-flex items-center gap-1"
    role="button"
  >
    <div class="inline-flex items-center justify-center">
      <input
        ref="inputRef"
        :id="inputId"
        :disabled
        class="inline-flex items-center justify-center relative appearance-none cursor-pointer peer before:rounded-full before:bg-black/4 checked:before:bg-primary/4 before:opacity-0 before:absolute before:scale-0 before:transition before:duration-240 focus-visible:not-hover:before:bg-black/12 focus-visible:not-hover:checked:before:bg-primary/12 focus-visible:outline-0 focus-visible:not-hover:before:scale-100 focus-visible:before:opacity-100 disabled:pointer-events-none hover:before:scale-100 hover:before:opacity-100 after:ring-black-24 after:ring-1 after:ring-inset after:size-5 after:rounded-xs checked:after:bg-primary checked:after:ring-0 after:absolute"
        type="checkbox"
        v-model="model"
      />
      <svg
        aria-hidden="true"
        focusable="false"
        class="absolute size-4 pointer-events-none w-3 h-2 group/svg peer-not-checked:opacity-0"
      >
        <polyline
          class="stroke-2 stroke-white fill-none [stroke-linecap:round] [stroke-linejoin:round] [stroke-dasharray:48] transition-all duration-200 [stroke-dashoffset:48] group-peer-checked/svg:[stroke-dashoffset:0] delay-48"
          points="2 0.292893219 2 4.29289322 9.94974747 4.41421356"
          transform="translate(5.974874, 2.353553) rotate(-45.000000) translate(-5.974874, -2.353553)"
        />
        <!--        TODO: Add `indeterminate` state -->
        <!--        <line-->
        <!--          stroke="#FFFFFF"-->
        <!--          stroke-linecap="round"-->
        <!--          stroke-linejoin="round"-->
        <!--          stroke-width="2"-->
        <!--          x1="1.03268998"-->
        <!--          x2="11.0000728"-->
        <!--          y1="4"-->
        <!--          y2="4"-->
        <!--        ></line>-->
      </svg>
    </div>
    <label :for="inputId" class="text-black-87" v-text="label" />
  </div>
</template>

<script lang="ts" setup>
import { computed, useId, useTemplateRef } from 'vue'

const {
  size = 'md',
  disabled = false,
  // indeterminate = false,
} = defineProps<{
  label: string
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  // indeterminate?: boolean
}>()

const inputRef = useTemplateRef<HTMLInputElement>('inputRef')

const model = defineModel<boolean>({ default: false })

const inputId = 'checkbox-' + useId()

const sizeClass = computed(() => {
  return {
    sm: 's-checkbox-sm',
    md: 's-checkbox-md',
    lg: 's-checkbox-lg',
  }[size]
})
</script>

<style>
@keyframes check {
  0% {
    stroke-dashoffset: 48;
  }
  100% {
    stroke-dashoffset: 0;
  }
}
</style>
