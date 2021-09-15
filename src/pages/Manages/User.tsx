import React, { PropsWithChildren } from 'react'

interface UserManageProps {}

function UserManage({}: PropsWithChildren<UserManageProps>) {
  return (
    <div>
      <h1>User Manage</h1>
    </div>
  )
}

export default React.memo(UserManage)
