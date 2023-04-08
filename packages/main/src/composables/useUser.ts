export const useUser = () => {
  const userId = JSON.parse(localStorage.getItem('user') || '{}')._id

  return {
    userId,
  }
}
