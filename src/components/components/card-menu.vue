<template>
  <div class="w-full h-full rounded-md overflow-hidden hover:shadow-2xl hover:bg-white">
    <div class="w-full">
      <img :src="item.image" class="w-full" />
    </div>
    <div class="w-full font-title p-4">
      <span>{{ item.name }}</span>
    </div>
    <div class="p-4">
      <div class="w-full font-sans mb-4">
        <p>{{ item.description }}</p>
      </div>
      <div class="w-full flex justify-between items-center font-sans">
        <span class="text-gray-200">{{ item.category }}</span>
        <badge :text="`$${item.price}`" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>