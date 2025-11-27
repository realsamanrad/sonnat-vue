<template>
  <nav aria-label="Breadcrumb" class="overflow-hidden">
    <ol class="flex gap-1 text-xs text-gray-56">
      <li
        v-for="(item, i) in items"
        :key="i"
        class="inline-flex items-center gap-1 hover:text-gray-87 group peer peer-hover:[&_svg]:rotate-180 text-nowrap"
      >
        <component :is="linkComponent" v-if="item.href" class="" v-bind="getLinkProps(item.href)">
          {{ item.text }}
        </component>
        <span v-else aria-current="page" class="text-gray-32" v-text="item.text" />
        <ChevronLeftIcon
          v-if="i < items.length - 1"
          class="size-4 transition-transform duration-360 group-hover:rotate-180"
        />
      </li>
    </ol>
  </nav>
</template>

<script lang="ts" setup>
import type { Component } from 'vue'
import ChevronLeftIcon from '@/assets/icons/chevron-left.svg'

const { linkComponent = 'a' } = defineProps<{
  items: { text: string; href?: string }[]
  linkComponent?: string | Component
}>()

const getLinkProps = (href: string) => {
  if (linkComponent === 'a') {
    return { href }
  }
  return { to: href }
}
</script>
