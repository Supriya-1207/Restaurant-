import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface Order {
  id: string
  items: Array<{ name: string; quantity: number; price: number }>
  total: number
  customerName: string
  email: string
  phone: string
  address: string
  status: "pending" | "confirmed" | "preparing" | "ready" | "delivered"
  createdAt: string
}

interface OrderState {
  orders: Order[]
  currentOrder: Order | null
}

const initialState: OrderState = {
  orders: [],
  currentOrder: null,
}

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    createOrder: (state, action: PayloadAction<Omit<Order, "id" | "createdAt">>) => {
      const newOrder: Order = {
        ...action.payload,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
      }
      state.orders.push(newOrder)
      state.currentOrder = newOrder
    },
    updateOrderStatus: (state, action: PayloadAction<{ id: string; status: Order["status"] }>) => {
      const order = state.orders.find((order) => order.id === action.payload.id)
      if (order) {
        order.status = action.payload.status
      }
    },
    clearCurrentOrder: (state) => {
      state.currentOrder = null
    },
  },
})

export const { createOrder, updateOrderStatus, clearCurrentOrder } = orderSlice.actions
export default orderSlice.reducer
