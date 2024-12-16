import { SECOND_MS } from '@/constants/time-ms'
import { NodeStatusSchema, getNodeData, type StackableNode } from '@/data/requests'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

const colors = [
  '#1DDCF2',
  '#AFDD79',
  '#FED83D',
  '#C740F2',
  '#9558FA',
  '#FEA56F',
  '#FF60B2',
  '#FEA56F',
  '#DBDE54',
]

export type NodeData = ReturnType<typeof useNodeData>[0]

export const useNodeData = ({
  initialData,
  liveQuery,
}: { initialData?: NodeStatusSchema; liveQuery?: boolean } = {}) => {
  const { data } = useQuery({
    queryKey: ['nodeStatus'],
    queryFn: getNodeData,
    refetchInterval: liveQuery ? 30 * SECOND_MS : undefined,
    initialData,
  })

  const nodeConnections = useMemo(() => {
    return formatNodeData(data)
  }, [data])

  return nodeConnections
}

export const formatNodeData = (data: NodeStatusSchema | undefined) => {
  if (!data) return []
  const operators = new Set<string>()
  return data.nodes.map((n, i) => {
    operators.add(n.record.operator)
    const operatorIndex = Array.from(operators.values()).indexOf(n.record.operator)
    return {
      id: n.record.url,
      index: i,
      nodeUrl: n.record.url,
      statusText: n.record.status_text,
      status: n.record.status,
      operator: n.record.operator,
      operatorIndex,
      data: n,
      color: colors[Math.floor((i * colors.length) / data.nodes.length) % colors.length],
      operatorColor: colors[(3 + operatorIndex) % colors.length],
      // TODO: add user stacked amount - use it to sort in the UI
    }
  })
}

export type StackableNodeData = ReturnType<typeof formatStackableNodeData>[number]

export const formatStackableNodeData = (data: StackableNode[] | undefined) => {
  if (!data) return []
  const operators = new Set<string>()
  return data.map((n, i) => {
    operators.add(n.record.operator)
    const operatorIndex = Array.from(operators.values()).indexOf(n.record.operator)
    return {
      id: n.record.url,
      index: i,
      nodeUrl: n.record.url,
      statusText: n.record.status_text,
      status: n.record.status,
      operator: n.record.operator,
      operatorIndex,
      data: n,
      color: colors[Math.floor((i * colors.length) / data.length) % colors.length],
      operatorColor: colors[(3 + operatorIndex) % colors.length],
      // TODO: add user stacked amount - use it to sort in the UI
    }
  })
}
