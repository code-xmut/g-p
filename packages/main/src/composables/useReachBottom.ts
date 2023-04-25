export const useReachBottom = () => {
  const reachBottom = ref(false)

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement
    if (scrollTop + clientHeight >= scrollHeight)
      reachBottom.value = true
    else
      reachBottom.value = false
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  const removeScrollListener = () => {
    window.removeEventListener('scroll', handleScroll)
  }

  const addScrollListener = () => {
    window.addEventListener('scroll', handleScroll)
  }

  return {
    reachBottom,
    removeScrollListener,
    addScrollListener,
  }
}
