<script setup>
import mainImage from "../assets/9.jpeg";
</script>

<template>
  <div class="container">
    <h1 class="title">Happy Anniversary 3 Year นะอ้วนนนน 💖</h1>
    <p class="description">มีของขวัญน่ารักๆ ให้เปิดด้วยน้าาลองเปิดดูสิ 🎁</p>
    <img :src="mainImage" alt="Anniversary Gift" class="gift-image" />
    <router-link to="/gifts">
      <button class="gift-button">เปิดของขวัญ 💝</button>
    </router-link>
  </div>
</template>

<style scoped>
.container {
  min-height: 100vh;
  background-color: #fef2f2;
  margin: 0;
  padding: 40px 24px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center; /* จัดกลางแนวตั้ง */
  align-items: center; /* จัดกลางแนวนอน */
  text-align: center;
}
.title {
  font-size: 2rem;
  font-weight: bold;
  color: #db2777;
  margin-bottom: 16px;
}

.description {
  font-size: 1.125rem;
  color: #374151;
  margin-bottom: 24px;
}

.gift-image {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  border: 2px solid #f4d4e3;
  margin-bottom: 10px;
}

.test {
  color: #ef4444;
  font-size: 1.875rem;
}

.gift-button {
  background-color: #ec4899;
  color: white;
  padding: 12px 24px;
  border-radius: 9999px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
}

.gift-button:hover {
  background-color: #db2777;
}
</style>
