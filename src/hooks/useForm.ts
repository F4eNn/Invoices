import { useContext } from 'react'

import { FormCtx } from '@/context/FormCtx'

export const useForm = () => useContext(FormCtx)
