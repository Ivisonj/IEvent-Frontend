import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface MenuState {
  openItem: any[]
  openComponent: any | null
}

const initialState = {
  openItem: ['home'],
  defaultId: 'home',
  openComponent: 'buttons',
}

const menu = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    activeItem(state: MenuState, action: PayloadAction<{ openItem: any[] }>) {
      state.openItem = action.payload.openItem
    },

    activeComponent(
      state: MenuState,
      action: PayloadAction<{ openComponent: any | null }>,
    ) {
      state.openComponent = action.payload.openComponent
    },
  },
})

export default menu.reducer

export const { activeItem, activeComponent } = menu.actions
