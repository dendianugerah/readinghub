<template>
  <div class="cart">
    <div class="cart-container">
      <div class="cart-container-wrapper">
        <div class="cart-container-wrapper-bag">
          <h1>Tas</h1>
          <div
            v-for="(item, index) in cartItems"
            :key="index"
            class="cart-container-wrapper-bag-card"
          >
            <div class="cart-container-wrapper-bag-card-image">
              <img :src="item.image" alt="" />
            </div>
            <div class="cart-container-wrapper-bag-card-content">
              <h1>{{ item.title }}</h1>
              <p>{{ item.description }}</p>
              <div class="cart-container-wrapper-bag-card-content-input">
                <button @click="decrement(index)">-</button>
                <input type="text" :value="item.quantity" readonly />
                <button @click="increment(index)">+</button>
              </div>
            </div>
            <div class="cart-container-wrapper-bag-card-button">
              <a class="cursor-pointer" @click="removeItem(index)">
                <img
                  src="/static/img/homepage/cart/trash-can.png"
                  alt="search-icon"
                  class="w-[36px] h-[18px] self-end"
                />
              </a>
            </div>
          </div>
          <div class="cart-container-wrapper-bag-total">
            <p>Total Buku:</p>
            <span>{{ totalQuantity }}</span>
          </div>
        </div>
        <div class="cart-container-wrapper-form">
          <h1>Data Peminjam</h1>
          <div class="cart-container-wrapper-form-card">
            <div class="cart-container-wrapper-form-card-content">
              <h1>ID Anggota</h1>
              <input
                type="text"
                placeholder="AB90110"
                aria-label="ID Anggota"
              />
              <h1>Nama Peminjam</h1>
              <input
                type="text"
                placeholder="Joko Widodo"
                aria-label="Nama Peminjam"
              />
              <h1>Tanggal Peminjaman</h1>
              <input type="date" />
              <h1>Tanggal Pengembalian</h1>
              <input type="date" />
              <div class="cart-container-wrapper-form-card-content-btn">
                <nuxt-link
                  to="/book/search"
                  class="cart-container-wrapper-form-card-content-btn-cancel"
                >
                  Batal
                </nuxt-link>
                <nuxt-link
                  class="cart-container-wrapper-form-card-content-btn-link"
                  to="/"
                >
                  <span
                    class="cart-container-wrapper-form-card-content-btn-link-ctr"
                  >
                    Pinjam
                  </span>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const cartItems = ref([
  {
    image: "/static/img/homepage/cart/book-1.png",
    title: "Belajar Ngoding itu Menyenangkan Jika Bersama Naufal",
    description:
      "Ternyata belajar bahasa komputer itu tidak sulit-sulit amat ah! Di buku ini akan lengkap membahas mengenai bagaimana Naufal (yang awalnya adalah bergelut di bidang kayu seperti pak Jokowi) dapat menjadi master programming hanya dalam waktu 2 bulan.",
    quantity: 0,
  },
  {
    image: "/static/img/homepage/cart/book-2.png",
    title: "Lulus Ujian Nasional dengan Nilai Sempurna",
    description:
      "Ujian itu mudah jika kamu tahu caranya. Di buku ini akan dijelaskan bagaimana caranya agar kamu dapat lulus ujian nasional dengan nilai sempurna. Diajarkan oleh murid yang pernah mendapatkan nilai sempurna di ujian nasional dan ujian apapun. Ain",
    quantity: 1,
  },
  {
    image: "/static/img/homepage/cart/book-3.png",
    title: "Pengenalan Bahasa Inggris untuk Anak-Anak",
    description:
      "IELTS, TOEFL, TOEIC, dan lain-lain. Apa itu semua? Aku, Novita. Aku akan membantumu untuk memahami bahasa Inggris dengan mudah. Ayo belajar bersama! Huahahahahahahahhaahhaahahhahahahahahhhahahahahhahahahahahhhahahahhahahahhahahaha",
    quantity: 2,
  },
  {
    image: "/static/img/homepage/cart/book-4.png",
  title: "Sebuah Seni untuk Bersikap Bodo Ahmad",
    description:
      "Hai, aku Dhito dan aku adalah seorang bodo amat. Aku hanya ingin hidupku bahagia dan tidak peduli dengan orang lain. Sampai suatu hari, aku bertemu dengan seseorang yang membuatku berpikir ulang tentang hidupku. Seseorang itu bernama Ahmad.",
    quantity: 1,
  },
]);

const increment = (index) => {
  cartItems.value[index].quantity++;
};

const decrement = (index) => {
  if (cartItems.value[index].quantity > 0) {
    cartItems.value[index].quantity--;
  }
};

const removeItem = (index) => {
  cartItems.value.splice(index, 1);
};

// Calculate the total quantity
const totalQuantity = computed(() => {
  return cartItems.value.reduce((total, item) => total + item.quantity, 0);
});
</script>

<style scoped lang="postcss">
.cart {
  @apply pt-[64px] pb-[80px];

  &-container {
    @apply max-w-7xl mx-auto;

    &-wrapper {
      @apply flex flex-col md:grid md:grid-cols-5 gap-[32px];

      &-bag {
        @apply col-span-3;

        & > h1 {
          @apply font-ptserif font-bold text-[30px] pb-[32px];
        }

        &-card {
          @apply rounded-[24px] bg-white flex flex-row py-[16px] px-[16px] mb-[16px];
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

          &-image {
            @apply w-[450px] h-[154px] pr-[16px];
          }

          &-content {
            & > h1 {
              @apply font-ptserif font-bold text-[16px] pb-[18px];
            }

            & > p {
              @apply font-robotoslab text-[13px] pb-[18px];
            }

            &-input {
              @apply border rounded-2xl px-4 flex w-[141px] h-[40px] py-1 outline-none;
              @apply text-[24px] items-center;

              & > input {
                @apply w-[80px];
                @apply text-[16px] text-center cursor-default;
              }

              & > input:focus {
                outline: none;
              }
            }
          }

          &-button {
            @apply flex flex-col justify-end mb-[10px] mr-[14px];
          }
        }

        &-total {
          @apply rounded-[24px] bg-primary flex flex-row py-[16px] px-[16px] mt-[32px];
          @apply justify-between text-tertiary;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

          & > p {
            @apply font-robotoslab font-bold text-[16px];
          }

          & > span {
            @apply font-robotoslab font-bold text-[16px] pr-[26px];
          }
        }
      }

      &-form {
        @apply col-span-2;

        & > h1 {
          @apply font-ptserif font-bold text-[30px] mb-[32px];
        }

        &-card {
          @apply rounded-[24px] bg-white flex flex-col;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

          &-content {
            @apply flex h-full flex-col justify-between px-[28px] pb-[30px];

            & > h1 {
              @apply font-robotoslab text-[18px] pb-[2px] pt-[18px];
            }

            & > input {
              @apply border rounded-2xl px-4 flex h-[50px] py-1 outline-none;
              border-color: #272726;
            }

            &-btn {
              @apply flex flex-row justify-center mt-[24px] gap-[10px];

              &-link {
                @apply rounded-[32px] w-[185px] h-[45px] bg-black;
                @apply font-bold font-robotoslab text-white flex items-center justify-center;

                &-ctr {
                  @apply text-center;
                }
              }

              &-cancel {
                @apply rounded-[32px] border-primary border-[2px] w-[185px] h-[45px];
                @apply font-robotoslab text-primary font-bold;
                @apply flex justify-center items-center;
              }
            }
          }
        }
      }
    }
  }
}
</style>
