import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', {
  state: () => ({
    isModalOpen: false,
  }),
  actions: {
    openModal() {
      this.isModalOpen = true;
      let modalCreate = new bootstrap.Modal(document.getElementById('modalElementId'), show())
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
});
