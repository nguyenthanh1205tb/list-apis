import React, { useEffect, useState } from 'react'
import { Collapse } from 'antd'
import { Request } from 'src/DigestAuth'

const { Panel } = Collapse
function ListApis() {
  const [activeKeys] = useState<string[]>([])
  const callback = (key: string | string[]) => {
    console.log(key)
  }

  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `

  useEffect(() => {
    Request.get({
      url: '/ISAPI/Event/notification/httpHosts/capabilities',
    }).then(res => {
      console.log(res)
    })
  }, [])

  return (
    <div>
      <Collapse defaultActiveKey={activeKeys} onChange={callback}>
        <Panel header="This is panel header 1" key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" key="3">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </div>
  )
}
export default ListApis
