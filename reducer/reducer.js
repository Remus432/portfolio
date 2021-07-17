export const reducer = (state, action) => {
  console.log(action)
    return {
      activeSection: action.payload.section
    }
}