<template>
  <div class="mr-10 mt-10 flex flex-col gap-6">
    <SButton color="primary" size="md" variant="inlined" :icon="HeartSVG" />
    <SBadge label="جدید" />
    <STag label="محصولات" :icon="HeartSVG" removable color="success" />
    <SChip
      label="گران ترین"
      behavior="removable"
      rounded
      variant="filled"
      color="primary"
      :icon="HeartSVG"
    />
  </div>
</template>

<script setup lang="ts">
import SButton from '@/components/SButton.vue'
import SBadge from '@/components/SBadge.vue'
import STag from '@/components/STag.vue'
import SChip from '@/components/SChip.vue'
import HeartSVG from '@/assets/icons/heart.svg'
</script>
