'use client'
import { SiteDataQuery } from '@/gql/graphql'
import { ChevronRight } from 'lucide-react'
import { CryptoCurrency } from './icons/Benefits'
import { Button } from './ui/button'

export const HeroInteract = ({ cms }: { cms: SiteDataQuery }) => {
  return (
    <div className="mt-8 flex items-center gap-3">
      <Button
        variant="primary"
        size="lg"
        className="text-sm"
        aria-label="Read the docs"
        onClick={() =>
          window.open(
            cms.heroSection?.leftButtonUrl ?? 'https://docs.river.build/introduction',
            '_blank',
          )
        }
      >
        <div className="flex items-center gap-1">
          <span>{cms.heroSection?.leftButtonText ?? 'Read the Docs'}</span>
          <ChevronRight color="#02000A" height={16} width={16} />
        </div>
      </Button>
      <Button
        variant="secondary"
        size="lg"
        aria-label="Run a node"
        onClick={() =>
          window.open(
            cms.heroSection?.rightButtonUrl ?? 'https://docs.river.build/run/introduction',
            '_blank',
          )
        }
      >
        <div className="flex items-center gap-2">
          <CryptoCurrency />
          <span>{cms.heroSection?.rightButtonText ?? 'Run a Node'}</span>
        </div>
      </Button>
    </div>
  )
}
