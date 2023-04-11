export const useUser = () => {
  const userId = JSON.parse(localStorage.getItem('user') || '{}')._id
  const userName = JSON.parse(localStorage.getItem('user') || '{}').name

  return {
    userId,
    userName,
  }
}
