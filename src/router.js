import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home.vue";
import Transaction from "@/pages/Transaction.vue";
import TransactionDetail from "@/pages/TransactionDetail.vue";
import NotFound from "@/pages/404.vue";

const routes = [
  {
    path: "/",
    name: "overview-route",
    component: Home,
  },
  {
    path: "/transaction",
    name: "transaction-route",
    component: Transaction,
  },
  {
    path: "/transaction/:id",
    name: "transaction-details-route",
    component: TransactionDetail,
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
}); // phải là 1 object

export default router;
