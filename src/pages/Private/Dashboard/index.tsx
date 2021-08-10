import React, { PropsWithChildren } from 'react'
import { RouteComponentProps } from 'react-router'
import { AnchorButton } from '@blueprintjs/core'
import { useSelector } from 'src/store'
import { useEffect } from 'react'

interface DashboardProps extends RouteComponentProps {}

function Dashboard({ history }: PropsWithChildren<DashboardProps>) {
  const { userInfo } = useSelector(state => state.AppReducer)
  useEffect(() => {
    console.log(userInfo)
  }, [])
  return (
    <div>
      <AnchorButton text="Go to user manage" onClick={() => history.push('/admin/management')} />
    </div>
  )
}

export default React.memo(Dashboard)
