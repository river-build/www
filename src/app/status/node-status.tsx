'use client'

import { NodeStatusPill } from '@/components/status/node-status-pill'
import { getNodeData, NodeStatusSchema } from '@/data/requests'
import { useNodeData } from '@/lib/hooks/use-node-data'
import { useEffect, useState } from 'react'

export const NodeStatus = () => {
  const [initialData, setInitialData] = useState<NodeStatusSchema>()
  useEffect(() => {
    ;(async () => {
      const data = await getNodeData().catch(() => undefined)
      setInitialData(data)
    })()
  }, [])
  const nodes = useNodeData({ initialData })
  return (
    <>
      {nodes.map((node) => (
        <NodeStatusPill key={node.nodeUrl} nodeData={node} />
      ))}
    </>
  )
}
