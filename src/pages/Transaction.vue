<template>
  <h1>Transaction is here</h1>

  <nav class="item" v-for="transaction in transactions" :key="transaction.id">
    <router-link
      :to="{
        name: 'transaction-details-route',
        params: { id: transaction.id },
      }"
      >{{ transaction.name }}</router-link
    >
  </nav>
</template>

<script>
export default {
  data() {
    return {
      transactions: [
        {
          id: 1,
          name: "Hà Nội ngày vắng em",
          price: 2000000,
        },
        {
          id: 2,
          name: "Mùa thu ngày lá rụng",
          price: 3000000,
        },
        {
          id: 3,
          name: "Tuyết rơi mùa hè",
          price: 4000000,
        },
        {
          id: 4,
          name: "Quê em mùa nước lũ",
          price: 5000000,
        },
      ],
    };
  },
};
</script>
