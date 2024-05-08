'use client'

import { NodeStatusPill } from '@/components/status/node-status-pill'
import { NodeStatusSchema } from '@/data/requests'
import { useNodeData } from '@/lib/hooks/use-node-data'

export const NodeStatus = ({ initialData }: { initialData?: NodeStatusSchema }) => {
  const nodes = useNodeData({ initialData })
  return (
    <>
      {nodes.map((node) => (
        <NodeStatusPill key={node.nodeUrl} nodeData={node} />
      ))}
    </>
  )
}
