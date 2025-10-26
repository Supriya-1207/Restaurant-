import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: string
  image: string
}

interface MenuState {
  items: MenuItem[]
  selectedCategory: string
}

const initialState: MenuState = {
  items: [
    {
      id: "1",
      name: "Margherita Pizza",
      description: "Classic pizza with tomato, mozzarella, and basil",
      price: 12.99,
      category: "Pizza",
      image: "/margherita-pizza.png",
    },
    {
      id: "2",
      name: "Pepperoni Pizza",
      description: "Traditional pizza with pepperoni and cheese",
      price: 14.99,
      category: "Pizza",
      image: "/pepperoni-pizza.png",
    },
    {
      id: "3",
      name: "Caesar Salad",
      description: "Fresh romaine lettuce with parmesan and croutons",
      price: 9.99,
      category: "Salads",
      image: "/caesar-salad.png",
    },
    {
      id: "4",
      name: "Grilled Salmon",
      description: "Fresh salmon fillet with seasonal vegetables",
      price: 18.99,
      category: "Main Courses",
      image: "/grilled-salmon-plate.png",
    },
    {
      id: "5",
      name: "Tiramisu",
      description: "Classic Italian dessert with mascarpone and espresso",
      price: 7.99,
      category: "Desserts",
      image: "/classic-tiramisu.png",
    },
  ],
  selectedCategory: "All",
}

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload
    },
  },
})

export const { setSelectedCategory } = menuSlice.actions
export default menuSlice.reducer
