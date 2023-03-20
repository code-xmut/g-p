import type { User } from '@gp/types'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = ref<User>()

  const setUser = (_user: User) => {
    user.value = _user
  }

  return {
    user,
    setUser,
  }
})
