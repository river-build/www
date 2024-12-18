import { Button } from '@/components/ui/button'
import type { StackableNodeData } from '@/lib/hooks/use-node-data'
import { cn } from '@/lib/utils'
import { Dialog, type DialogContentProps, type DialogProps } from '@radix-ui/react-dialog'
import { ArrowLeft } from 'lucide-react'
import { createContext, useContext, useState } from 'react'
import { RedelegateButton } from '../delegate/redelegate-button'
import { DialogContent, DialogHeader, DialogTitle, closeStyle } from '../ui/dialog'
import { Typography } from '../ui/typography'
import { NodeCard } from './node-card'

type RedelegateFormProps = {
  currentNode: StackableNodeData
  availableNodes: StackableNodeData[]
  depositId: bigint
  onRedelegateFinish?: () => void
}

export const RedelegateDialogContent = ({
  currentNode,
  availableNodes,
  depositId,
  onRedelegateFinish,
  ...rest
}: RedelegateFormProps & DialogContentProps) => {
  const {
    onOpenChange,
    selectedOperator,
    showOperatorSelect,
    setSelectedOperator,
    setShowOperatorSelect,
  } = useContext(RedelegateContext)

  // TODO: animate height x.x
  return (
    <DialogContent disableInteractOutside {...rest}>
      {showOperatorSelect && (
        <button
          onClick={() => setShowOperatorSelect(false)}
          className={cn(closeStyle, 'absolute left-4 top-4')}
        >
          <ArrowLeft className="h-4 w-4 text-white" />
          <span className="sr-only">Back</span>
        </button>
      )}
      <DialogHeader>
        <DialogTitle className="text-center">
          {showOperatorSelect ? 'Select a new operator' : 'Redelegate'}
        </DialogTitle>
        {showOperatorSelect && (
          <Typography className="text-center text-sm">
            To distribute power on the network, please delegate to top performing operators.
          </Typography>
        )}
      </DialogHeader>

      {!showOperatorSelect && (
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <Typography className="text-sm font-medium">Currently delegated to:</Typography>
            <NodeCard node={currentNode} allNodes={availableNodes} />
          </div>
          <div className="space-y-2">
            <Typography className="text-sm font-medium">Redelegate to:</Typography>
            <Button
              className="w-full justify-start text-left"
              variant={selectedOperator ? 'secondary' : 'primary'}
              onClick={() => setShowOperatorSelect(true)}
            >
              {selectedOperator ? (
                <span>{new URL(selectedOperator.data.record.url).hostname}</span>
              ) : (
                'Select Operator'
              )}
            </Button>
          </div>
          <RedelegateButton
            depositId={depositId}
            delegatedAddress={selectedOperator?.data.record.operator}
            className="w-full"
            onRedelegateFinish={() => {
              onRedelegateFinish?.()
              setSelectedOperator(undefined)
              onOpenChange(false)
            }}
          />
        </div>
      )}
      {showOperatorSelect && (
        <div className="relative max-h-[60vh] overflow-y-auto px-4 py-2">
          <div className="grid grid-cols-1 gap-4">
            {availableNodes
              .filter((node) => node.data.record.operator !== currentNode.data.record.operator)
              .map((node) => (
                <NodeCard
                  key={node.id}
                  node={node}
                  allNodes={availableNodes}
                  onSelect={() => {
                    setSelectedOperator(node)
                    setShowOperatorSelect(false)
                  }}
                  className={cn(
                    'cursor-pointer transition-all hover:opacity-85',
                    selectedOperator?.id === node.id ? 'ring-2 ring-white' : '',
                  )}
                  ringColor={
                    selectedOperator?.id === node.id ? selectedOperator.color : 'transparent'
                  }
                />
              ))}
          </div>
          {/* scroll bottom fade out gradient */}
          <div className="pointer-events-none sticky bottom-0 left-0 right-0 z-50">
            <div className="h-8 w-full bg-gradient-to-b from-transparent to-gray-80" />
          </div>
        </div>
      )}
    </DialogContent>
  )
}

const RedelegateContext = createContext<{
  onOpenChange: (open: boolean) => void
  selectedOperator: StackableNodeData | undefined
  setSelectedOperator: (operator: StackableNodeData | undefined) => void
  showOperatorSelect: boolean
  setShowOperatorSelect: (show: boolean) => void
  open: boolean
}>({
  onOpenChange: () => {},
  selectedOperator: undefined,
  setSelectedOperator: () => {},
  showOperatorSelect: false,
  setShowOperatorSelect: () => {},
  open: false,
})

export const RedelegateProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false)
  const [showOperatorSelect, setShowOperatorSelect] = useState(false)
  const [selectedOperator, setSelectedOperator] = useState<StackableNodeData>()

  return (
    <RedelegateContext.Provider
      value={{
        onOpenChange: (open: boolean) => {
          setShowOperatorSelect((state) => (open ? false : state))
          setOpen(open)
          setSelectedOperator(undefined)
        },
        selectedOperator,
        showOperatorSelect,
        setSelectedOperator,
        setShowOperatorSelect,
        open,
      }}
    >
      {children}
    </RedelegateContext.Provider>
  )
}

export const RedelegateDialog = ({
  children,
  open,
  onOpenChange,
  defaultOpen,
  ...rest
}: { children: React.ReactNode } & DialogProps) => {
  const { onOpenChange: redelegateOnOpenChange } = useContext(RedelegateContext)

  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        redelegateOnOpenChange(open)
        onOpenChange?.(open)
      }}
      {...rest}
    >
      {children}
    </Dialog>
  )
}
