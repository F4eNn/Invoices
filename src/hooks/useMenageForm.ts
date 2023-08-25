import { useContext } from 'react'

import { MenageFormCtx } from '@/context/ManageFormCtx'

export const useMenageForm = () => useContext(MenageFormCtx)
