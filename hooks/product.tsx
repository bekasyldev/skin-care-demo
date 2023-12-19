import { create } from "zustand";

type CounterProduct = {
  count: number;
  increment: (quantity: number) => void;
  decrement: (quantity: number) => void;
};

export const useCounterProduct = (initialCount: number = 1) =>
  create<CounterProduct>((set) => ({
    count: initialCount,
    increment: () => {
      set((state) => ({ count: state.count + 1 }));
    },
    decrement: () => {
      set((state) => ({ count: state.count - 1 }));
    },
  }));
