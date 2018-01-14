import { NEXT_SLIDE, PREVIOUS_SLIDE } from './constants'

const initialState = {
  images: [
    'https://www.w3schools.com/w3css/img_fjords.jpg',
    'https://www.w3schools.com/w3css/img_lights.jpg',
    'https://www.w3schools.com/w3css/img_mountains.jpg',
    'https://www.w3schools.com/w3css/img_forest.jpg'
  ],
  currentSlide: 0,
}

export default function reducer (state = initialState, action) {
  let firstSlide = 0
  let lastSlide = state.images.length - 1
  let currentSlide = state.currentSlide

  switch (action.type) {
    case NEXT_SLIDE:
      if (currentSlide >= lastSlide) {
        return state
      }

      return Object.assign({}, state, { currentSlide: currentSlide + 1 })
    case PREVIOUS_SLIDE:
      if (currentSlide <= firstSlide) {
        return state
      }
      
      return Object.assign({}, state, { currentSlide: currentSlide -1 })
    default:
      return state
  }
}