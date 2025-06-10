<template>
  <div class="mx-10 mt-10 flex flex-col gap-6">
    <SRating v-model="rating" />
    <SButton :icon="HeartSVG" />
    <SDropdown ref="dropdownRef" class="mt-1">
      <template #toggle="{ open }">
        <SButton
          :class="{ '[&_svg]:rotate-180 ': open }"
          :icon="ChevronDownSVG"
          class="[&_svg]:transition"
          label="دسته بندی ها"
          @click="dropdownRef?.toggle()"
        />
      </template>
      <template #dropdown>
        <div class="shadow-sm p-4 rounded-sm bg-white w-full">asdsasadsaddas sadsdads asdas</div>
      </template>
    </SDropdown>

    <div id="test" class="size-11 rounded-xs bg-primary" />
    <SButton label="نمایش تغییرات" @click="showModal = true" />
    <SModal v-model="showModal" title="ذخیره تغییرات" />
    <div>
      <SCheckbox label="ارسال به پست" size="lg" />
    </div>
    <div class="flex flex-col gap-4">
      <div class="flex gap-4">
        <SSelect
          v-model="selectedOptions"
          :options
          append-text="پسوند"
          helper-text="این یک متن راهنما است"
          multiple
          searchable
          size="sm"
        />
        <SSelect
          v-model="selectedOptions"
          :options
          append-text="پسوند"
          helper-text="این یک متن راهنما است"
          multiple
          searchable
          size="md"
        />
        <SSelect
          v-model="selectedOptions"
          :options
          append-text="پسوند"
          helper-text="این یک متن راهنما است"
          multiple
          searchable
          size="lg"
        />
      </div>
      <div class="flex gap-4">
        <SSelect
          v-model="selectedOptions"
          :options
          append-text="پسوند"
          helper-text="این یک متن راهنما است"
          multiple
          rounded
          searchable
          size="sm"
        />
        <SSelect
          v-model="selectedOptions"
          :options
          append-text="پسوند"
          helper-text="این یک متن راهنما است"
          multiple
          rounded
          searchable
          size="md"
        />
        <SSelect
          v-model="selectedOptions"
          :options
          append-text="پسوند"
          helper-text="این یک متن راهنما است"
          multiple
          rounded
          searchable
          size="lg"
        />
      </div>
      <div class="flex gap-4">
        <SSelect
          v-model="selectedOption"
          :options
          append-text="پسوند"
          helper-text="این یک متن راهنما است"
          searchable
          size="sm"
        />
        <SSelect
          v-model="selectedOption"
          :options
          append-text="پسوند"
          helper-text="این یک متن راهنما است"
          searchable
          size="md"
        />
        <SSelect
          v-model="selectedOption"
          :options
          append-text="پسوند"
          helper-text="این یک متن راهنما است"
          searchable
          size="lg"
        />
      </div>
      <div class="flex gap-4">
        <SSelect
          v-model="selectedOption"
          :options
          append-text="پسوند"
          helper-text="این یک متن راهنما است"
          rounded
          searchable
          size="sm"
        />
        <SSelect
          v-model="selectedOption"
          :options
          append-text="پسوند"
          helper-text="این یک متن راهنما است"
          rounded
          searchable
          size="md"
        />
        <SSelect
          v-model="selectedOption"
          :options
          append-text="پسوند"
          helper-text="این یک متن راهنما است"
          rounded
          searchable
          size="lg"
        />
      </div>
    </div>
    <div class="border p-2 w-fit mx-auto">
      <span>hover me</span>
      <STooltip label="این یک متن راهنما است" placement="top" />
    </div>
    <SRadio label="پرداخت در محل" />
    <div class="flex flex-col gap-4">
      <div class="flex flex-wrap gap-4">
        <SButton :icon="HeartSVG" color="primary" label="سلامتی" size="sm" variant="filled" />
        <SButton
          :icon="HeartSVG"
          :trailing-icon="HeartSVG"
          color="primary"
          label="سلامتی"
          size="sm"
          variant="filled"
        />
        <SButton
          :trailing-icon="HeartSVG"
          color="primary"
          label="سلامتی"
          size="sm"
          variant="filled"
        />
        <SButton color="primary" label="سلامتی" size="sm" variant="filled" />
        <SButton :icon="HeartSVG" color="primary" size="sm" variant="filled" />
      </div>
      <div class="flex flex-wrap gap-4">
        <SButton :icon="HeartSVG" color="primary" label="سلامتی" size="md" variant="filled" />
        <SButton
          :icon="HeartSVG"
          :trailing-icon="HeartSVG"
          color="primary"
          label="سلامتی"
          size="md"
          variant="filled"
        />
        <SButton
          :trailing-icon="HeartSVG"
          color="primary"
          label="سلامتی"
          size="md"
          variant="filled"
        />
        <SButton color="primary" label="سلامتی" size="md" variant="filled" />
        <SButton :icon="HeartSVG" color="primary" size="md" variant="filled" />
      </div>
      <div class="flex flex-wrap gap-4">
        <SButton :icon="HeartSVG" color="primary" label="سلامتی" size="lg" variant="filled" />
        <SButton
          :icon="HeartSVG"
          :trailing-icon="HeartSVG"
          color="primary"
          label="سلامتی"
          size="lg"
          variant="filled"
        />
        <SButton
          :trailing-icon="HeartSVG"
          color="primary"
          label="سلامتی"
          size="lg"
          variant="filled"
        />
        <SButton color="primary" label="سلامتی" size="lg" variant="filled" />
        <SButton :icon="HeartSVG" color="primary" size="lg" variant="filled" />
      </div>
      <div class="flex flex-wrap gap-4">
        <SButton
          :icon="HeartSVG"
          color="primary"
          label="سلامتی"
          rounded
          size="sm"
          variant="filled"
        />
        <SButton
          :icon="HeartSVG"
          :trailing-icon="HeartSVG"
          color="primary"
          label="سلامتی"
          rounded
          size="sm"
          variant="filled"
        />
        <SButton
          :trailing-icon="HeartSVG"
          color="primary"
          label="سلامتی"
          rounded
          size="sm"
          variant="filled"
        />
        <SButton color="primary" label="سلامتی" rounded size="sm" variant="filled" />
        <SButton :icon="HeartSVG" color="primary" rounded size="sm" variant="filled" />
      </div>
      <div class="flex flex-wrap gap-4">
        <SButton
          :icon="HeartSVG"
          color="primary"
          label="سلامتی"
          rounded
          size="md"
          variant="filled"
        />
        <SButton
          :icon="HeartSVG"
          :trailing-icon="HeartSVG"
          color="primary"
          label="سلامتی"
          rounded
          size="md"
          variant="filled"
        />
        <SButton
          :trailing-icon="HeartSVG"
          color="primary"
          label="سلامتی"
          rounded
          size="md"
          variant="filled"
        />
        <SButton color="primary" label="سلامتی" rounded size="md" variant="filled" />
        <SButton :icon="HeartSVG" color="primary" rounded size="md" variant="filled" />
      </div>
      <div class="flex flex-wrap gap-4">
        <SButton
          :icon="HeartSVG"
          color="primary"
          label="سلامتی"
          rounded
          size="lg"
          variant="filled"
        />
        <SButton
          :icon="HeartSVG"
          :trailing-icon="HeartSVG"
          color="primary"
          label="سلامتی"
          rounded
          size="lg"
          variant="filled"
        />
        <SButton
          :trailing-icon="HeartSVG"
          color="primary"
          label="سلامتی"
          rounded
          size="lg"
          variant="filled"
        />
        <SButton color="primary" label="سلامتی" rounded size="lg" variant="filled" />
        <SButton :icon="HeartSVG" color="primary" rounded size="lg" variant="filled" />
      </div>
    </div>
    <div class="w-fit">
      علی محمدحسینی
      <SBadge class="" label="خریدار تایید شده" size="md" solo />
    </div>
    <div class="flex gap-4 flex-wrap">
      <div class="bg-black-16 p-12 w-fit rounded-sm relative">
        <SBadge class="" label="خریدار تایید شده" size="md" />
      </div>
      <div class="bg-black-16 p-12 w-fit rounded-full relative">
        <SBadge circular-parent class="" label="خریدار" size="md" />
      </div>
      <div class="bg-black-16 p-12 w-fit rounded-full relative">
        <SBadge circular-parent class="" label="خریدار تایید شده واقعی" size="md" />
      </div>
      <div class="bg-black-16 size-24 rounded-full relative">
        <SBadge circular-parent class="" size="lg" />
      </div>
      <div class="bg-black-16 size-64 rounded-full relative">
        <SBadge circular-parent class="" label="0" size="lg" />
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
import ChevronDownSVG from '@/assets/icons/chevron-down.svg'

import { ref, useTemplateRef } from 'vue'
import SRadio from '@/components/SRadio.vue'
import SInput from '@/components/SInput.vue'
import SToggle from '@/components/SToggle.vue'
import STooltip from '@/components/STooltip.vue'
import SSelect from '@/components/SSelect.vue'
import SCheckbox from '@/components/SCheckbox.vue'
import SModal from '@/components/SModal.vue'
import SDropdown from '@/components/SDropdown.vue'
import SRating from '@/components/SRating.vue'

const dropdownRef = useTemplateRef<InstanceType<typeof SDropdown>>('dropdownRef')

const selected = ref(true)
const text = ref('نام')
const rating = ref(3)

const showModal = ref(false)

const selectedOption = ref('option1')
const selectedOptions = ref(['option1', 'option2'])

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
