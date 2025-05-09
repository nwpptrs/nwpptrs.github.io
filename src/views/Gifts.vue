<script setup>
import { ref } from "vue";
import zooImage from "../assets/1.jpeg";
import zooImage2 from "../assets/2.JPG";
import zooImage3 from "../assets/3.jpeg";

import twoImage from "../assets/4.jpeg";
import twoImage2 from "../assets/5.jpeg";
import twoImage3 from "../assets/6.jpeg";

import threeImage from "../assets/7.jpeg";
import threeImage2 from "../assets/11.jpeg";
import threeImage3 from "../assets/10.jpeg";

const selectedGifts = ref([]);
const activeGift = ref(null);

const gifts = [
  {
    id: 1,
    year: 1,
    title: "วันนั้นที่เขินสุดๆ แล้วได้จับมือกันครั้งแรก 💑",
    images: [zooImage, zooImage2, zooImage3],
    description: `
ตอนที่ได้เจอเธอครั้งแรก... รู้สึกเขินสุดๆ และทำตัวไม่ถูกเลย  
ในปีแรกนี้ เราได้ไปเที่ยวด้วยกัน หลายๆที่ ที่แรกคือสวนสัตว์ 
มีความสุขมากๆนะ ที่ได้เจอเธอ
และปีนี้ก็เป็นปีที่เราได้เรียนรู้และปรับหลายๆ อย่างในการใช้ชีวิตคู่ 😊
`,
  },
  {
    id: 2,
    year: 2,
    title: "ปีที่ใช้เงินเยอะสุด แต่ก็มีความสุขสุดเหมือนกัน! 💸🍽️",
    images: [twoImage2, twoImage, twoImage3],
    description: `
ปีที่สองของเรา... เป็นปีที่เราได้ใช้ชีวิตเยอะมากๆ  
เราได้ออกไปทำในสิ่งที่อยากทำ ลองในสิ่งที่ไม่เคยลอง  
และใช้เงินเยอะสุดๆ 😂 แต่ก็มีความสุขมากๆ เช่นกัน  
ได้เที่ยว ได้กินของอร่อยกับเธอเยอะมากกกกก 🍣🍰💖
`,
  },
  {
    id: 3,
    year: 3,
    title: "ปีที่อะไรหลายๆอย่างไม่ดีเท่าไหร่ แต่ก็จับมือผ่านมันมาด้วยกันนะ ❤️",
    images: [threeImage3, threeImage2, threeImage],
    description: `
ปีที่สาม... เป็นปีที่เต็มไปด้วยมรสุมชีวิต  
แต่เราก็จับมือและผ่านมันมาด้วยกัน  
มีเหตุการณ์มากมายเกิดขึ้น ทั้งเรื่องที่ดีและเรื่องที่ไม่ดี เราก็ปรับแก้  
เราทั้งคู่ได้ลองผิดลองถูก ลองทำสิ่งใหม่ๆ  
แม้จะมีเครียดบ้างเรื่องงาน เรื่องชีวิต แต่เราก็เป็นกำลังใจให้กันเสมอ  
เป็นอีกปีที่ดีมากๆอีกปีเลย 💕
`,
  },
];

function selectGift(id) {
  // ถ้าเลือกยังไม่ครบ 3 และยังไม่เคยเลือก => เพิ่ม
  if (!selectedGifts.value.includes(id) && selectedGifts.value.length < 3) {
    selectedGifts.value.push(id);
  }

  // ตั้ง activeGift ทุกครั้ง ไม่ว่าจะเคยเลือกหรือไม่
  activeGift.value = gifts.find((gift) => gift.id === id);
}
</script>

<template>
  <div class="container">
    <h1 class="title">ความทรงจำขเล็กๆน้อยๆตลอด 3 ปี 🎁</h1>
    <p class="subtitle">เลือกรับของขวัญจากความทรงจำในแต่ละปี อิอิ💖</p>

    <div class="gift-grid">
      <button
        v-for="gift in gifts"
        :key="gift.id"
        @click="selectGift(gift.id)"
        class="gift-card"
      >
        <img :src="gift.images[0]" alt="Gift Image" class="gift-image" />
        <h2 class="gift-title">{{ gift.title }}</h2>
      </button>
    </div>

    <!-- ปุ่มไปจดหมายรัก -->
    <div v-if="selectedGifts.length === 3" class="letter-button-container">
      <router-link to="/letter">
        <button class="letter-button">ไปที่จดหมาย 💌</button>
      </router-link>
    </div>

    <!-- แสดงรายละเอียดของขวัญ -->
    <div v-if="activeGift" class="gift-details">
      <h3 class="gift-detail-title">{{ activeGift.title }}</h3>

      <div class="gift-detail-images">
        <img
          v-for="(img, index) in activeGift.images"
          :key="index"
          :src="img"
          alt="Gift Image"
          class="gift-detail-image"
        />
      </div>

      <p class="gift-description">{{ activeGift.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100vw; /* เต็มความกว้าง */
  min-height: 100vh;
  background-color: #fbcfe8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 16px;
  margin: 0;
  box-sizing: border-box;
}

.title {
  font-size: 2rem;
  font-weight: 800;
  color: #db2777;
  margin-bottom: 24px;
}

.subtitle {
  font-size: 1.25rem;
  color: #4b5563;
  margin-bottom: 32px;
}

.gift-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  width: 100%;
  box-sizing: border-box;
}

/* iPad แนวนอน/แนวตั้ง */
@media (min-width: 640px) {
  .gift-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* หน้าจอใหญ่ */
@media (min-width: 1024px) {
  .gift-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.gift-card {
  background-color: white;
  border: 2px solid #f3d9e1;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.gift-card:hover {
  transform: scale(1.05);
}

.gift-image {
  width: 80px;
  height: 80px;
  margin-bottom: 16px;
  object-fit: cover;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.gift-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #db2777;
}

.letter-button-container {
  margin-top: 48px;
}

.letter-button {
  background-color: #db2777;
  color: white;
  padding: 12px 32px;
  border-radius: 9999px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
}

.letter-button:hover {
  background-color: #e11d48;
}

.gift-details {
  margin-top: 32px;
  padding: 24px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.gift-detail-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #db2777;
  margin-bottom: 16px;
}

.gift-detail-images {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin-bottom: 16px;
}

.gift-detail-image {
  width: 100%;
  max-width: 300px;
  height: auto;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.gift-description {
  color: #4b5563;
  font-size: 1rem;
}
</style>
