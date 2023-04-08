import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { useStorage } from '@vueuse/core'
import type { UserInfo } from '@gp/types/user'

export const useUserStore = defineStore('user', () => {
  const user = ref<UserInfo>(JSON.parse(localStorage.getItem('user') || '{}'))
  const router = useRouter()

  const setUser = (_user: UserInfo) => {
    user.value = useStorage('user', _user)
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('upload')

    if (router.currentRoute.value.path === '/')
      router.go(0)
    else
      router.push('/')
  }

  return {
    user,
    setUser,
    logout,
  }
})
