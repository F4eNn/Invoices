import { createContext } from 'react'

type DefaultValuesProps = {}

const defaultValue: DefaultValuesProps = {}

export const UserInfoCtx = createContext<DefaultValuesProps>(defaultValue)
