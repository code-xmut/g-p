import type { UpdateUserProfileDto, UserInfo } from '@gp/types/user'
import { useRouter } from 'vue-router'
import { userApi } from '@/api'

export const useUser = () => {
  const userId = JSON.parse(localStorage.getItem('user') || '{}')._id
  const userName = JSON.parse(localStorage.getItem('user') || '{}').name
  const user = ref<UserInfo>(JSON.parse(localStorage.getItem('user') || '{}'))
  const newAvatarUrl = ref('')
  const router = useRouter()

  const setUserInfo = (_user: UserInfo) => {
    localStorage.setItem('user', JSON.stringify(_user))
  }

  const uploadAvatarFile = async (avatar: FormData) => {
    const { data } = await userApi.uploadFile(avatar)
    if (data && data.url)
      newAvatarUrl.value = data.url
  }

  const updateAvatar = async () => {
    const { data } = await userApi.updateUserAvatar(newAvatarUrl.value, userId)
    if (data) {
      setUserInfo(data)
      router.go(0)
    }
    return false
  }

  const updateUserInfo = async (userInfo: UpdateUserProfileDto) => {
    const { data } = await userApi.updateUserInfo(userInfo)
    if (data) {
      setUserInfo(data)
      return true
    }
    return false
  }

  return {
    user,
    userId,
    userName,
    setUserInfo,
    updateUserInfo,
    uploadAvatarFile,
    updateAvatar,
  }
}
