import type { UpdateUserProfileDto, UserInfo } from '@gp/types/user'
import { useRouter } from 'vue-router'
import { userApi } from '@/api'

export const useUser = () => {
  const userId = JSON.parse(localStorage.getItem('user') || '{}')._id
  const userName = JSON.parse(localStorage.getItem('user') || '{}').name
  const userUserName = JSON.parse(localStorage.getItem('user') || '{}').username
  const userBio = JSON.parse(localStorage.getItem('user') || '{}').bio
  const userLocation = JSON.parse(localStorage.getItem('user') || '{}').location
  const userCreatedAt = JSON.parse(localStorage.getItem('user') || '{}').createdAt
  const user = ref<UserInfo>(JSON.parse(localStorage.getItem('user') || '{}'))
  const newAvatarUrl = ref('')
  const defaultAvatar = ref('https://cdn.dribbble.com/assets/avatar-default-e370af14535cdbf137637a27ee1a8e451253edc80be429050bc29d59b1f7cda0.gif')

  const router = useRouter()

  const setUserInfo = (_user: UserInfo) => {
    localStorage.setItem('user', JSON.stringify(_user))
  }

  const isLogged = computed((): boolean => {
    const token = localStorage.getItem('token') || '{}'
    if (token === '{}')
      return false
    return true
  })

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
    const isDelete = confirm('确认删除头像?')
    if (isDelete) {
      newAvatarUrl.value = defaultAvatar.value
      await updateAvatar()
    }
  }

  const updateGeneral = async (generalInfo: { username: string; email: string }) => {
    const { data } = await userApi.updateGeneralInfo(generalInfo, userId)
    if (data) {
      setUserInfo(data)
      router.go(0)
    }
  }

  const updatePassword = async (PasswordInfo: { oldPassword: string; newPassword: string }) => {
    const { data } = await userApi.updatePassword(PasswordInfo, userId)
    if (data) {
      confirm('密码修改成功, 请重新登录')
      localStorage.removeItem('user')
      router.push({ name: 'auth', query: { pattern: 'login' } })
    }
    else {
      alert('密码修改失败, 请确认旧密码是否正确')
    }
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

  const DeleteAccount = async () => {
    const isDelete = confirm('最后一次询问，此操作将删除您的所有数据，无法恢复，是否继续')
    if (isDelete) {
      await userApi.deleteUser()
      logout()
    }
  }

  return {
    user,
    userId,
    userName,
    userUserName,
    userBio,
    userLocation,
    userCreatedAt,
    isLogged,
    setUserInfo,
    updateUserInfo,
    uploadAvatarFile,
    updateAvatar,
    deleteUserAvatar,
    updateGeneral,
    updatePassword,
    logout,
    DeleteAccount,
  }
}
