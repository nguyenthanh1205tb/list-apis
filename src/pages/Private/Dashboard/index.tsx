import React, { PropsWithChildren } from 'react'
import { RouteComponentProps } from 'react-router'
import { AnchorButton } from '@blueprintjs/core'

interface DashboardProps extends RouteComponentProps {}

function Dashboard({ history }: PropsWithChildren<DashboardProps>) {
  return (
    <div>
      <AnchorButton text="Go to user manage" onClick={() => history.push('/admin/management')} />
    </div>
  )
}

export default React.memo(Dashboard)
