<template>
  <div class="u-container u-mx-auto u-flex u-justify-center u-h-screen">
    <div class="u-w-5/12 u-mt-5 lg:u-mt-10 u-gap-y-4 u-flex u-flex-col">
      <div class="u-bg-gray-300 u-flex u-flex-col u-text-white u-justify-between u-py-4 u-flex u-w-11/12 u-mx-auto u-items-center u-h-96">
        <div style="width: 100%; max-width: 550px">
          <q-chat-message
            avatar="https://cdn.quasar.dev/img/avatar1.jpg"
            :text="['hey, how are you?']"
            sent
            text-color="black"
            bg-color="white"
          />
          <q-chat-message
            avatar="https://cdn.quasar.dev/img/avatar5.jpg"
            :text="['doing fine, how r you?']"
            text-color="black"
            bg-color="white"
          />
        </div>
        <div class="u-flex u-flex-col u-gap-y-2">
          <button class=" u-text-gray-600 u-w-64 u-mx-auto u-py-2 u-px-4 u-mt-2">
            Click for translation
          </button>
          <button class="u-bg-purple-500 u-text-white u-w-44 u-mx-auto u-py-2 u-px-4 u-mt-2">
            Next conversation
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
.my-emoticon
  vertical-align: middle
  height: 2em
  width: 2em
</style>
