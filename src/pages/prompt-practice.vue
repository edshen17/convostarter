<template>
  <div class="u-container u-mx-auto u-flex u-justify-center u-h-screen">
    <div class="u-w-7/12 u-mt-5 lg:u-mt-10 u-gap-y-4 u-flex u-flex-col">
      <div class="u-bg-gray-600 u-text-white u-w-1/2 u-mx-auto u-py-1">
        <p class="u-text-center">
          Prompt instruction
        </p>
      </div>
      <div class="u-bg-gray-300 u-text-white u-flex u-justify-center u-w-11/12 u-mx-auto u-items-center u-h-96 u-rounded-md u-border u-border-1.5 u-border-black">
        <p class="u-text-center u-text-black">
          Visual/Text prompt
        </p>
      </div>
      <div class="u-bg-gray-600 u-text-white u-w-3/4 u-mx-auto u-py-1">
        <p class="u-text-center">
          (Response requirement)
        </p>
      </div>
      <div class="u-flex u-flex-col u-justify-center">
        <input type="text" class="u-w-full u-py-2 u-px-4 u-border u-border-1.5 u-border-black u-rounded-lg" placeholder="Respond to prompt...">
        <button class="u-bg-purple-500 u-text-white u-w-44 u-mx-auto u-py-2 u-px-4 u-mt-2">
          Evaluate
        </button>
      </div>
    </div>
  </div>
</template>
