<template>
  <div class="donation-form">
    <div class="donation-form-container">
      <div class="donation-form-container-card">
        <div class="donation-form-container-card-title">
          <h1>Donasi Sekarang</h1>
        </div>
        <div class="donation-form-container-card-content">
          <h1>Judul Buku</h1>
          <input type="text" placeholder="Judul Buku" aria-label="Judul Buku" />
          <h1>Pengarang</h1>
          <input type="text" placeholder="Pengarang" aria-label="Pengarang" />
          <h1>Tahun Terbit</h1>
          <input
            type="text"
            placeholder="Tahun Terbit"
            aria-label="Tahun Terbit"
          />
          <h1>Alasan Donasi</h1>
          <input
            type="text"
            placeholder="Alasan Donasi"
            aria-label="Alasan Donasi"
          />
          <h1>Tanggal Antar</h1>
          <input type="date" />
          <h1>Jumlah Buku (per judul)</h1>
          <div class="input-group">
            <button @click="decrement" class="btn">-</button>
            <input type="text" :value="quantity" class="input" readonly />
            <button @click="increment" class="btn">+</button>
          </div>
        </div>
        <div class="center-button">
          <a
            class="donation-form-container-card-link"
            href="/donation/success"
          >
            <span class="donation-form-container-card-link-ctr">
              Donasi Sekarang
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const quantity = ref(0);

const increment = () => {
  quantity.value++;
};

const decrement = () => {
  if (quantity.value > 0) {
    quantity.value--;
  }
};
</script>

<style scoped lang="postcss">
.donation-form {
  @apply py-[80px];
  &-container {
    @apply mx-auto max-w-7xl flex items-center justify-center;
    &-card {
      @apply rounded-[24px] bg-white flex flex-col;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

      &-title {
        @apply flex justify-center;

        & > h1 {
          @apply font-ptserif font-bold text-[32px];
          @apply pt-[38px] pb-[25px];
        }
      }

      &-content {
        @apply flex flex-col justify-center px-[70px];

        & > h1 {
          @apply font-robotoslab text-[18px] pb-[2px] pt-[18px];
        }

        & > input {
          @apply border rounded-2xl px-4 flex h-[50px] py-1 outline-none;
          border-color: #272726;
        }
      }
    }
  }
}

.input-group {
  @apply border rounded-2xl px-4 flex items-center h-[50px] py-1 outline-none;
  @apply text-[24px];

  & > input {
    @apply w-[380px] h-[20px] cursor-default;
    @apply text-[18px] text-center;
  }

  & > input:focus {
    outline: none;
  }
}

.center-button {
  @apply flex justify-center mt-4;
}

.donation-form-container-card-link {
  @apply rounded-[32px] w-[234px] h-[54px] bg-black;
  @apply font-bold font-robotoslab text-white flex items-center justify-center my-[40px];
}

.donation-form-container-card-link-ctr {
  @apply text-center;
}
</style>
