<template>
  <div class="letter-container">
    <h1 class="letter-title">จดหมายถึงอ้วนๆของเค้า Pang 💖 💌</h1>

    <div class="letter-content">
      <p class="letter-text">
        เค้าอยากจะบอกว่า… เค้ามีความสุขมากๆ เลยที่มีเธอเข้ามาอยู่ในชีวิต
        ทำให้มีชีวิต ชีวาขึ้น เค้ารู้สึกโชคดีมากๆ ที่เราได้เจอกัน
        และได้เรียนรู้กันไปในทุกๆ วัน ตลอด 3 ปีที่ผ่านมา มันมีทั้งเรื่องสนุก
        เรื่องวุ่นวาย แต่สิ่งที่ดีที่สุด คือเค้ามีเธออยู่ตรงนี้
        <br /><br />
        เค้าอยากอยู่ด้วยกันไปนานๆ นะ อยู่ด้วยกันแบบนี้เรื่อยๆ เลย
        เวลาเค้าหัวเราะ ก็อยากให้เธออยู่ข้างๆ เวลาเค้าเหนื่อย
        เค้าก็อยากมีเธอคอยกอด
        <br /><br />
        ขอบคุณที่อยู่ด้วยกันนะ แล้วก็… รักมากๆ เลยนะ 💞 อยู่ด้วยกันไปนานๆ นะอ้วน
      </p>

      <div class="letter-image-container">
        <img src="../assets/8.jpeg" alt="Love Image" class="letter-image" />
      </div>
    </div>

    <div class="letter-footer">
      <p>รักเธอที่สุดเลย 💕</p>
      <p>10/5/58</p>
    </div>
  </div>
</template>

<style scoped>
.letter-container {
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

.letter-title {
  font-size: 2rem;
  font-weight: 700;
  color: #db2777;
  margin-bottom: 24px;
}

.letter-content {
  font-size: 1.2rem;
  color: #4b5563;
  line-height: 1.8;
  margin-bottom: 24px;
  white-space: pre-wrap;
}

.letter-footer {
  font-size: 1.1rem;
  font-style: italic;
  color: #db2777;
  margin-top: 24px;
}

.letter-image-container {
  margin-top: 32px;
}

.letter-image {
  max-width: 35%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
