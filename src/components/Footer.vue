<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="u-py-4">
    <div class="u-container u-mx-auto u-flex u-justify-center">
      <p class="u-text-gray-600 u-text-sm u-copyright">
        &copy; {{ currentYear }} Convostarter, Inc.
      </p>
    </div>
  </footer>
</template>

<style>
select {
  appearance: none;
}
</style>
