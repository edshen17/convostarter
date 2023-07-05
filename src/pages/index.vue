<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <main>
    <section class="u-relative u-py-3 u-px-4 u-h-screen">
      <div class="u-container u-mx-auto">
        <div class="u-flex u-flex-wrap u-justify-center">
          <div class="u-w-full lg:u-w-8/12 lg:u-py-4">
            <div class="u-flex u-flex-wrap lg:u-flex-nowrap u-pb-10">
              <div
                class="u-px-4 u-text-2xl u-font-bold u-leading-8 lg:u-leading-loose lg:u-w-1/2 u-text-center u-order-1 lg:u-order-first u-mx-auto"
              >
                <div
                  class="u-w-80 u-mx-auto u-pt-4 u-pb-10 lg:u-text-4xl lg:u-pt-28 lg:u-tracking-wide dark:u-dark-title"
                  style="line-height: 3rem"
                >
                  {{ t('homepage.placeholder') }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<route lang="yaml">
meta:
  layout: default
</route>

