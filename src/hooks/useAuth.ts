import { useContext } from 'react'

import { AuthCtx } from '@/context/AuthCtx'

export const useAuth = () => useContext(AuthCtx)
