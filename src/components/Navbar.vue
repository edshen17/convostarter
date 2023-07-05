<script setup lang="ts">
import { storeToRefs } from 'pinia'
const { t } = useI18n()
const userStore = useUserStore()
const { entityStateData } = storeToRefs(userStore)
const showMobileMenu = ref(false)
const showDropdownMenu = ref(false)

const innerRouterLinks = computed(() => {
  return [
    {
      title: t('nav.profile'),
      path: `/user/${entityStateData.value._id}`,
      isShowing: true,
    },
    {
      title: t('nav.logout'),
      path: '/log-out',
      isShowing: true,
    },
  ]
})

const profileImageUrl = 'https://dummyimage.com/300x300/000/fff'
const iconClass = 'u-py-3 lg:u-mt-0 lg:u-ml-2 u-block u-text-lg sm:u-py-0 u-rounded u-px-3 lg:u-px-4 u-nav-link'
const icons = ['i-carbon:search', 'i-carbon:settings']

const handleEscape = (e: KeyboardEvent) => {
  if (['Esc', 'Escape'].includes(e.key)) {
    showDropdownMenu.value = false
  }
}

onBeforeMount(() => {
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
})
</script>

<template>
  <header class="u-flex u-items-center u-justify-between u-flex-wrap u-px-4 u-py-3 lg:u-sticky u-w-full u-z-10000 u-top-0 u-border-b-2 u-bg-white md:u-border-none md:u-shadow-md u-relative dark:u-bg-dark dark:md:u-border-b-1.5 dark:u-border-gray-700">
    <div class="u-flex u-w-full lg:u-w-auto u-items-center u-justify-between u-py-1 lg:u-py-2">
      <RouterLink to="/" class="u-text-2xl u-px-3 u-font-bold dark:u-text-white u-font-sans u-text-black">
        Convostarter
      </RouterLink>
      <div class="u-px-3 lg:u-px-0">
        <button type="button" class="u-block lg:u-hidden" @click="showMobileMenu = !showMobileMenu">
          <div v-if="!showMobileMenu" i-carbon-menu class="u-text-xl" />
          <div v-else i-carbon-close class="u-text-2xl" />
        </button>
      </div>
    </div>
    <div class="u-px-1 u-pt-2 u-pb-4 lg:u-py-0 lg:u-flex u-items-center" :class="showMobileMenu ? 'u-block' : 'u-hidden'">
      <div v-for="icon in icons" :key="icon" class="u-hidden lg:u-block">
        <p :class="`${icon} ${iconClass}`" />
      </div>
      <div class="u-relative u-hidden lg:u-block">
        <button class="u-h-10 u-w-10 u-mx-4 u-relative u-z-10 u-block u-rounded-full u-overflow-hidden u-outline-none u-border-transparent u-ring-0 hover:u-ring-2 focus:u-ring-pink-600 focus:u-ring-2 u-outline-none u-ring-2 u-ring-pink-600 u-border-transparent" @click="showDropdownMenu = !showDropdownMenu">
          <img :src="profileImageUrl" class="u-h-full u-w-full u-object-cover">
        </button>
        <button v-if="showDropdownMenu" class="u-fixed u-inset-0 u-h-full u-w-full u-cursor-default" tabindex="-1" @click="showDropdownMenu = false" />
        <FadeInOut>
          <div v-if="showDropdownMenu" class="u-absolute u-m-3 u-right-0 u-w-80 u-bg-gray-800 u-rounded-md u-shadow-xl">
            <div class="u-w-full u-px-3 u-mx-auto lg:u-text-white">
              <div class="u-my-6 lg:u-my-2" />
              <hr class="u-border-gray-400 u-mx-auto lg:u-hidden">
              <div class="u-grid u-grid-flow-col u-grid-cols-12">
                <img :src="profileImageUrl" class="u-col-span-3 md:u-col-span-2 lg:u-col-span-4 u-my-4 u-mx-4 u-h-16 u-w-16 u-z-10 u-block u-rounded-full u-object-cover"><div class="u-col-span-9 u-my-3 u-mx-6 md:u-mx-0 font-semi-bold">
                  <p class="u-text-lg">
                    Name
                  </p>
                  <div class="u-flex u-flex-wrap u-gap-x-4 u-mt-3 u-items-center">
                    <p class="u-capitalize">
                      {{ t(`userProfile.role.${entityStateData.role}`) }}
                    </p>
                  </div>
                </div>
              </div>
              <hr class="u-border-gray-400 u-mx-auto">
              <div class="u-mt-6 lg:u-my-2">
                <div v-for="link in innerRouterLinks" :key="link.path" class="u-py-4 lg:u-py-3 lg:u-px-3 u-inline-block u-no-underline u-w-full u-h-full u-text-gray-500">
                  <RouterLink v-if="link.isShowing" :to="link.path" class="u-py-4 lg:u-py-2 lg:u-px-4 u-inline-block u-no-underline u-w-full u-h-full lg:hover:u-bg-gray-600 lg:u-rounded-md u-text-white">
                    {{ link.title }}
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </FadeInOut>
      </div>
      <div class="u-w-full u-px-3 u-mx-auto lg:u-text-white u-h-2/6 lg:u-hidden u-mt-4 u-text-gray-500">
        <!-- refactor this component as it's the same as above -->
        <div class="u-my-6 lg:u-my-2" />
        <hr class="u-border-gray-400 u-mx-auto lg:u-hidden">
        <div class="u-grid grid-flow-col u-grid-cols-12">
          <img :src="profileImageUrl" class="u-col-span-3 md:u-col-span-2 lg:u-col-span-4 u-my-4 u-mx-4 u-h-16 u-w-16 u-z-10 u-block u-rounded-full u-object-cover">
          <div class="u-col-span-9 u-my-3 u-mx-6 md:u-mx-0">
            <p class="u-text-lg">
              Name
            </p>
            <div class="u-flex u-flex-wrap u-gap-x-4 u-mt-3 u-items-center">
              <p class="u-capitalize">
                {{ t(`userProfile.role.${entityStateData.role}`) }}
              </p>
            </div>
          </div>
        </div>
        <hr class="u-border-gray-400 u-mx-auto">
        <div class="u-mt-6 lg:u-my-2">
          <div v-for="link in innerRouterLinks" :key="link.path" class="u-py-4 lg:u-py-3 lg:u-px-3 u-inline-block u-no-underline u-w-full u-h-full u-text-gray-500">
            <RouterLink :to="link.path">
              {{ link.title }}
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
