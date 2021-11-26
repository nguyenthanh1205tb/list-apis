import React, { useState } from 'react'
import { Collapse } from 'antd'

const { Panel } = Collapse
function ListApis() {
  const [activeKeys] = useState<string[]>([])
  const callback = (key: string | string[]) => {
    console.log(key)
  }

  return (
    <div>
      <Collapse defaultActiveKey={activeKeys} onChange={callback}>
        <Panel header="This is panel header 1" key="1">
          <p>
            A dog is a type of domesticated animal. Known for its loyalty and
            faithfulness, it can be found as a welcome guest in many households
            across the world.
          </p>
        </Panel>
        <Panel header="This is panel header 2" key="2"></Panel>
        <Panel header="This is panel header 3" key="3"></Panel>
      </Collapse>
    </div>
  )
}
export default ListApis
