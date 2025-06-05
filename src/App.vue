<template>
  <div class="mx-10 mt-10 flex flex-col gap-6">
    <div id="test" class="size-11 rounded-xs bg-primary" />
    <SButton label="نمایش تغییرات" @click="showModal = true" />
    <SModal v-model="showModal" title="ذخیره تغییرات" />
    <div>
      <SCheckbox label="ارسال به پست" size="lg" />
    </div>
    <div class="flex gap-4">
      <SSelect
        :options
        append-text="پسوند"
        helper-text="این یک متن راهنما است"
        multiple
        searchable
        size="sm"
      />
    </div>
    <div class="border p-2 w-fit mx-auto">
      <span>hover me</span>
      <STooltip label="این یک متن راهنما است" placement="top" />
    </div>
    <SRadio label="پرداخت در محل" />
    <SButton
      :icon="HeartSVG"
      color="primary"
      label="سلامتی"
      size="md"
      tooltip="سلامتی"
      variant="filled"
    />
    <div class="w-fit">
      علی محمدحسینی
      <SBadge class="" label="خریدار تایید شده" size="md" solo />
    </div>
    <div class="flex gap-4 flex-wrap">
      <div class="bg-black-16 p-12 w-fit rounded-sm relative">
        <SBadge class="" label="خریدار تایید شده" size="md" />
      </div>
      <div class="bg-black-16 p-12 w-fit rounded-full relative">
        <SBadge class="" label="خریدار" size="md" circular-parent />
      </div>
      <div class="bg-black-16 p-12 w-fit rounded-full relative">
        <SBadge class="" label="خریدار تایید شده واقعی" size="md" circular-parent />
      </div>
      <div class="bg-black-16 size-24 rounded-full relative">
        <SBadge class="" size="lg" circular-parent />
      </div>
      <div class="bg-black-16 size-64 rounded-full relative">
        <SBadge class="" size="lg" label="0" circular-parent />
      </div>
      <div class="bg-black-16 size-24 rounded-sm relative">
        <SBadge class="" size="lg" />
      </div>
    </div>
    <div class="flex flex-wrap gap-4">
      <SToggle label="افزودن به لیست" size="lg" />
    </div>
    <div class="flex flex-col gap-4">
      <SInput
        v-model="text"
        :append-icon="HeartSVG"
        :helper-icon="HeartSVG"
        :prepend-icon="HeartSVG"
        append-text="تستی است"
        class=""
        error="لطفا به صورت صحیح وارد کنید."
        float-label
        helper-text="این یک متن راهنما است"
        label="نام خانوادگی"
        name="test2"
        placeholder="نام خانوادگی"
        required
        rounded
        size="lg"
        variant="outlined"
      />
      <SInput
        v-model="text"
        :append-icon="HeartSVG"
        :helper-icon="HeartSVG"
        :prepend-icon="HeartSVG"
        append-text="تستی است"
        class=""
        helper-text="این یک متن راهنما است"
        label="نام خانوادگی"
        name="test"
        placeholder="نام خانوادگی"
        required
        rounded
        size="sm"
      />
    </div>
    <div class="flex flex-wrap gap-3">
      <STag :icon="HeartSVG" color="success" label="محصولات" removable />
      <STag :icon="HeartSVG" color="success" label="محصولات" removable variant="outlined" />
      <STag :icon="HeartSVG" color="success" dense label="محصولات" removable />
      <STag :icon="HeartSVG" color="success" dense label="محصولات" removable variant="outlined" />
    </div>
    <div class="flex gap-4 flex-wrap mb-12">
      <SChip
        :icon="HeartSVG"
        behavior="removable"
        color="primary"
        label="گران ترین"
        rounded
        variant="filled"
      />
      <SChip
        :icon="HeartSVG"
        behavior="interactive"
        color="primary"
        label="گران ترین"
        rounded
        variant="filled"
      />
      <SChip
        :icon="HeartSVG"
        behavior="selective"
        color="primary"
        label="گران ترین"
        rounded
        variant="filled"
      />
      <SChip
        :icon="HeartSVG"
        behavior="removable"
        color="primary"
        label="گران ترین"
        rounded
        variant="outlined"
      />
      <SChip
        :icon="HeartSVG"
        behavior="interactive"
        color="primary"
        label="گران ترین"
        rounded
        variant="outlined"
      />
      <SChip
        :icon="HeartSVG"
        behavior="selective"
        color="primary"
        label="گران ترین"
        rounded
        variant="outlined"
      />
      <SChip
        :icon="HeartSVG"
        behavior="removable"
        color="primary"
        label="گران ترین"
        variant="outlined"
      />
      <SChip
        :icon="HeartSVG"
        behavior="interactive"
        color="primary"
        label="گران ترین"
        variant="outlined"
      />
      <SChip
        :icon="HeartSVG"
        behavior="selective"
        color="primary"
        label="گران ترین"
        variant="outlined"
      />
      <SChip
        :icon="HeartSVG"
        behavior="removable"
        color="primary"
        label="گران ترین"
        variant="filled"
      />
      <SChip
        :icon="HeartSVG"
        behavior="interactive"
        color="primary"
        label="گران ترین"
        variant="filled"
      />
      <SChip
        :icon="HeartSVG"
        behavior="interactive"
        color="default"
        disabled
        label="ارزان‌ترین"
        variant="filled"
      />
      <SChip
        :icon="HeartSVG"
        behavior="interactive"
        color="primary"
        disabled
        label="گران ترین"
        variant="filled"
      />
      <SChip
        :icon="HeartSVG"
        behavior="interactive"
        color="default"
        disabled
        label="گران ترین"
        variant="outlined"
      />
      <SChip
        :icon="HeartSVG"
        behavior="interactive"
        color="primary"
        disabled
        label="گران ترین"
        variant="outlined"
      />
      <SChip
        :icon="HeartSVG"
        behavior="selective"
        color="default"
        disabled
        label="گران ترین"
        variant="filled"
      />
      <SChip
        :icon="HeartSVG"
        behavior="selective"
        color="primary"
        disabled
        label="گران ترین"
        variant="filled"
      />
      <SChip
        :icon="HeartSVG"
        behavior="selective"
        color="default"
        disabled
        label="گران ترین"
        variant="outlined"
      />
      <SChip
        :icon="HeartSVG"
        behavior="selective"
        color="primary"
        disabled
        label="گران ترین"
        variant="outlined"
      />

      <SChip
        v-model:selected="selected"
        :icon="HeartSVG"
        behavior="selective"
        color="default"
        disabled
        label="گران ترین"
        variant="filled"
      />
      <SChip
        v-model:selected="selected"
        :icon="HeartSVG"
        behavior="selective"
        color="primary"
        disabled
        label="گران ترین"
        variant="filled"
      />
      <SChip
        v-model:selected="selected"
        :icon="HeartSVG"
        behavior="selective"
        color="default"
        disabled
        label="گران ترین"
        variant="outlined"
      />
      <SChip
        v-model:selected="selected"
        :icon="HeartSVG"
        behavior="selective"
        color="primary"
        disabled
        label="گران ترین"
        variant="outlined"
      />

      |

      <SChip
        :icon="HeartSVG"
        behavior="removable"
        color="default"
        disabled
        label="گران ترین"
        variant="filled"
      />
      <SChip
        :icon="HeartSVG"
        behavior="removable"
        color="primary"
        disabled
        label="گران ترین"
        variant="filled"
      />
      <SChip
        :icon="HeartSVG"
        behavior="removable"
        color="default"
        disabled
        label="گران ترین"
        variant="outlined"
      />
      <SChip
        :icon="HeartSVG"
        behavior="removable"
        color="primary"
        disabled
        label="گران ترین"
        variant="outlined"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import SButton from '@/components/SButton.vue'
import SBadge from '@/components/SBadge.vue'
import STag from '@/components/STag.vue'
import SChip from '@/components/SChip.vue'
import HeartSVG from '@/assets/icons/heart.svg?component'
import { ref } from 'vue'
import SRadio from '@/components/SRadio.vue'
import SInput from '@/components/SInput.vue'
import SToggle from '@/components/SToggle.vue'
import STooltip from '@/components/STooltip.vue'
import SSelect from '@/components/SSelect.vue'
import SCheckbox from '@/components/SCheckbox.vue'
import SModal from '@/components/SModal.vue'

const selected = ref(true)
const text = ref('نام')

const showModal = ref(false)

const options = [
  { label: '250 گرم', value: 'option1' },
  { label: '300 گرم', value: 'option2' },
  { label: '500 گرم', value: 'option3' },
  { label: '750 گرم', value: 'option4', disabled: true },
  { label: '1 کیلوگرم', value: 'option5' },
  { label: '2 کیلوگرم', value: 'option6' },
  { label: '3 کیلوگرم', value: 'option7' },
  { label: '4 کیلوگرم', value: 'option8' },
  { label: '5 کیلوگرم', value: 'option9' },
]
</script>
