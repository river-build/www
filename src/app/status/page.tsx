'use client'

import { NodeAnimationScene } from '@/components/status/node-animation-scene'
import { NodeStatusPill } from '@/components/status/node-status-pill'
import { useNodeData } from '@/lib/hooks/use-node-data'
import { useRef } from 'react'

const StatusPage = () => {
  const nodes = useNodeData()

  const ref = useRef<HTMLDivElement>(null)

  return (
    <div className="hero-glow mx-auto flex h-screen items-center justify-center px-4 py-24">
      <div className="flex flex-col gap-4">
        {nodes.map((node) => (
          <NodeStatusPill key={node.nodeUrl} nodeData={node} />
        ))}
      </div>
    </div>
  )
}

export default StatusPage
