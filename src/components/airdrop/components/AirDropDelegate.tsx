import { Typography } from '@/components/ui/typography'
import { useReadNodeOperatorGetOperators } from '@/contracts'
import { useNodeData } from '@/lib/hooks/use-node-data'
import { cn } from '@/lib/utils'
import { useEffect } from 'react'

const box = cn(
  'flex rounded-xl border border-solid border-gray-60 bg-gray-80 p-6 text-gray-100 flex-grow flex-col gap-1  col-span-4',
)

export const AirDropDelegate = (props: { onBackClick: () => void }) => {
  const { data: operators } = useReadNodeOperatorGetOperators()

  const nodeData = useNodeData()

  useEffect(() => {
    console.log({ nodeData })
  }, [nodeData])

  useEffect(() => {
    console.log({ operators })
  }, [operators])

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-row items-center justify-between">
        <div
          onClick={props.onBackClick}
          className="absolute -m-48 rounded-3xl bg-gray-800 p-2 px-4 text-gray-400"
        >
          Back
        </div>
        <div className="flex flex-grow flex-col gap-4">
          <Typography as="h2" size="2xl" className="place-self-center text-center text-gray-10">
            Delegate
          </Typography>
          <Typography as="h2" size="md" className="place-self-center text-center text-gray-10">
            To distribute power on the network, please delegate to top performing operators.
          </Typography>
        </div>
      </div>
      <div className="grid h-full grid-cols-12 gap-4">
        {nodeData?.map((node, index) => (
          <div className={box} key={index}>
            {/* <NodeCard node={node} /> */}
          </div>
        ))}
      </div>
    </div>
  )
}
