import { NodeData } from '@/lib/hooks/use-node-data'
import { cn } from '@/lib/utils'
import { MinusIcon, PlusIcon } from 'lucide-react'
import { useCallback, useState } from 'react'
import { StatusDot } from '../icons/StatusDot'

const formatUrl = (url: string) => {
  return url.replace('https://', '').replace('http://', '')
}

export const NodeStatusPill = ({ nodeData }: { nodeData: NodeData }) => {
  const nodeStatus = NodeStatus[nodeData.data.record.status]

  const [isToggled, setIsToggled] = useState(false)

  const onToggleClick = useCallback(() => {
    setIsToggled(!isToggled)
  }, [isToggled])

  return (
    <div className="flex flex-col gap-1 rounded-md bg-[#222026] p-4">
      <div className="flex items-center justify-between gap-2">
        <div
          className="flex items-center gap-2"
          style={{ color: `#${nodeData.color.getHexString()}` }}
        >
          <StatusDot />
          <span className="overflow-hidden text-ellipsis">{formatUrl(nodeData.nodeUrl)}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className={cn('rounded-md px-2 py-1', nodeStatus.className)}>
            <span>{nodeStatus.statusText}</span>
          </div>
          {isToggled ? (
            <MinusIcon className="h-4 w-4 text-[#8A8791]" />
          ) : (
            <PlusIcon className="h-4 w-4 text-[#8A8791]" />
          )}
        </div>
      </div>
      <InfoRow
        label="Health"
        value={
          <>
            {nodeData.data.grpc.elapsed} gRPC
            <span className="text-[#CECBD8]"> &bull; </span>
            {nodeData.data.http20.elapsed} HTTP/2
          </>
        }
      />
      {/* 
      <Stack gap="sm">
        <Stack horizontal alignItems="center" gap="sm">
          <Box minWidth="x1">
            <StatusDot />
          </Box>

          <Paragraph truncate>{nodeData.nodeUrl}</Paragraph>

          {nodeStatus && (
            <Box alignItems="end">
              <Box
                fontSize="sm"
                rounded="md"
                paddingX="paragraph"
                paddingY="sm"
                background={nodeStatus.background}
                tooltip={nodeStatus.description}
              >
                <Paragraph size="sm">{nodeData.data.record.status_text}</Paragraph>
              </Box>
            </Box>
          )}
          <Box grow alignItems="end">
            <IconButton icon={isToggled ? 'minus' : 'plus'} onClick={onToggleClick} />
          </Box>
        </Stack> */}

      {/* {isToggled && (
          <>
            <InfoRow label="Uptime" value={formatUptime(new Date(nodeData.data.grpc.start_time))} />
            <InfoRow label="Version" value={nodeData.data.grpc.version} />
            <InfoRow
              label="Address"
              value={
                <ClipboardCopy
                  color="gray1"
                  label={shortAddress(nodeData.data.record.address)}
                  clipboardContent={nodeData.data.record.address}
                />
              }
            />
            <InfoRow
              label="Operator"
              value={
                <ClipboardCopy
                  color="gray1"
                  label={shortAddress(nodeData.data.record.operator)}
                  clipboardContent={nodeData.data.record.operator}
                />
              }
            />
          </>
        )} */}
    </div>
  )
}

const InfoRow = ({ label, value }: { label: React.ReactNode; value: React.ReactNode }) => {
  return (
    <div className="flex gap-2">
      <span className="text-[#CECBD8]">{label}</span>
      <span className="overflow-hidden text-ellipsis text-[#8A8791]">{value}</span>
    </div>
  )
}

const NodeStatus = [
  {
    statusCode: 0,
    statusText: 'Not Initialized',
    description: 'Initial entry, node is not contacted in any way',
    className: 'text-gray-500 bg-gray-500/10',
  },
  {
    status: 1,
    statusText: 'Remote Only',
    description: 'Node proxies data, does not store any data',
    className: 'text-gray-500 bg-gray-500/10',
  },
  {
    status: 2,
    statusText: 'Operational',
    description: 'Node serves existing data, accepts stream creation',
    className: 'text-green-500 bg-green-500/10',
  },
  {
    status: 3,
    statusText: 'Failed',
    description: 'Node crash-exited, can be set by DAO',
    className: 'text-red-500 bg-red-500/10',
  },
  {
    status: 4,
    statusText: 'Departing',
    description:
      'Node continues to serve traffic, new streams are not allocated, data needs to be moved out to other nodes before grace period.',

    className: 'text-red-500 bg-red-500/10',
  },
  {
    status: 5,
    statusText: 'Deleted',
    description: 'Final state before RemoveNode can be called',
    className: 'text-gray-500 bg-gray-500/10',
  },
] as const
