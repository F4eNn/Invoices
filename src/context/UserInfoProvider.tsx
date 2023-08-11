import React, { ReactNode } from 'react'

import { UserInfoCtx } from './UserInfoCtx'

export const UserInfoProvider = ({ children }: { children: ReactNode }) => {


	const value = {}

	return <UserInfoCtx.Provider value={value}>{children}</UserInfoCtx.Provider>
}
