import type { UpdateUserProfileDto, UserInfo } from '@gp/types/user'
import { useRouter } from 'vue-router'
import { userApi } from '@/api'

export const useUser = () => {
  const userId = JSON.parse(localStorage.getItem('user') || '{}')._id
  const userName = JSON.parse(localStorage.getItem('user') || '{}').name
  const user = ref<UserInfo>(JSON.parse(localStorage.getItem('user') || '{}'))
  const newAvatarUrl = ref('')
  const defaultAvatar = ref('https://cdn.dribbble.com/assets/avatar-default-e370af14535cdbf137637a27ee1a8e451253edc80be429050bc29d59b1f7cda0.gif')

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

  const deleteUserAvatar = async () => {
    // alert with cancel and confirm buttons
    const isDelete = confirm('确认删除头像?')
    if (isDelete) {
      newAvatarUrl.value = defaultAvatar.value
      await updateAvatar()
    }
  }

  return {
    user,
    userId,
    userName,
    setUserInfo,
    updateUserInfo,
    uploadAvatarFile,
    updateAvatar,
    deleteUserAvatar,
  }
}
