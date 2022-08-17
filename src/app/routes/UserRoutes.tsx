import { HomePage } from 'app/pages/HomePage/Homepage'
import { People } from 'app/pages/People'
import { UserPhoto } from 'app/pages/UserPhotos/UserPhotos'
import { UserProfile } from 'app/pages/UserProfile/loadable'
import { UserSettings } from 'app/pages/UserSettings'

export const UserRoutes = [
  { path: '/photos', element: <UserPhoto /> },
  { path: '/profile', element: <UserProfile /> },
  { path: '/settings', element: <UserSettings /> },
]

export const GeneralRoutes = [
  { path: '/', element: <HomePage /> },
  { path: '/people', element: <People /> },
]
