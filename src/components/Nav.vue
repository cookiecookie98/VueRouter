<template>
  <nav>
    <ul>
      <router-link :to="{ name: 'overview-route' }">Overview</router-link>
      <router-link :to="{ name: 'transaction-route' }">Transaction</router-link>
      <router-link to="/">Budgets</router-link>
      <router-link to="/">Report</router-link>
    </ul>
  </nav>
</template>
