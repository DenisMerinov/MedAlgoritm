export type { UserStateScheme } from './model/types/userScheme'
export { userReducer, userActions } from './model/slices/userSlice'

export { ProfileCard } from './ui/ProfileCard/ProfileCard'
export { getInited } from './model/selectors/getInited/getInited'
export { getIsAuth } from './model/selectors/getIsAuth/getIsAuth'
export { useIsAuth, useLazyLogoutUser, useAuthByUsername, useGetDataUser } from './api/userApi'
