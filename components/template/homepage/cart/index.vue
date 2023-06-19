<template>
  <div class="cart">
    <div class="cart-container">
      <div class="cart-container-wrapper">
        <div class="cart-container-wrapper-bag">
          <h1>Tas</h1>
          <div class="cart-container-wrapper-bag-card">
            <div class="cart-container-wrapper-bag-card-image">
              <img src="/static/img/homepage/cart/book-1.png" alt="" />
            </div>
            <div class="cart-container-wrapper-bag-card-content">
              <h1>Pemanfaatan Sumber Daya Nuklir Ramah Lingkungan</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
                facilis debitis maxime perspiciatis mollitia reprehenderit
                deleniti voluptatem voluptates! Neque, labore cupiditate. Quos
                eaque quasi illum. Ab exercitationem eligendi quasi praesentium.
              </p>
              <div class="cart-container-wrapper-bag-card-content-input">
                <button @click="decrement">-</button>
                <input type="text" :value="quantity" readonly />
                <button @click="increment">+</button>
              </div>
            </div>
            <div class="cart-container-wrapper-bag-card-button">
              <a href="/cart" class="cursor-pointer">
                <img
                  src="/static/img/homepage/cart/trash-can.png"
                  alt="search-icon"
                  class="w-[36px] h-[18px] self-end"
                />
              </a>
            </div>
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
            </div>
            <div class="center-button">
              <a
                class="donation-form-container-card-link"
                href="/donation/success"
              >
                <span class="donation-form-container-card-link-ctr">
                  Pinjam
                </span>
              </a>
              <a
                class="donation-form-container-card-link"
                href="/donation/success"
              >
                <span class="donation-form-container-card-link-ctr">
                  Pinjam
                </span>
              </a>
            </div>
          </div>
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
.cart {
  @apply pt-[64px];

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
            @apply w-[390px] h-[154px] pr-[16px];
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
            @apply flex flex-col justify-center px-[28px];

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
  }
}
.center-button {
  @apply flex justify-center mt-4;
}

.donation-form-container-card-link {
  @apply rounded-[32px] w-[186px] h-[54px] bg-black;
  @apply font-bold font-robotoslab text-white flex items-center justify-center my-[40px];
}

.donation-form-container-card-link-ctr {
  @apply text-center;
}
</style>
