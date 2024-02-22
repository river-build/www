import beaverAscii from '@/data/beaver-ascii-2.json'
import { generateRandomString } from '@/lib/utils/generateRandomString'
import { create } from 'zustand'

type AsciiLine = {
  originalText: string
  currentText: string[]
  animating: boolean
  toRandom: boolean
  curCharIndex: number
  index: number
}

type BeaverStoreState = {
  lines: AsciiLine[]
  numLines: number
  getNonAnimatingLines: () => number[]
  getAnimatingLines: () => number[]
  startLineAnimation: (index: number) => void
  updateLineText: (index: number) => void
  animatedOnce: { [key: number]: boolean }
}

const intialAsciiLines = beaverAscii.map((line, idx) => ({
  originalText: line.text,
  currentText: new Array(line.text.length).fill('&nbsp'),
  animating: false,
  toRandom: true,
  curCharIndex: 0,
  firstAnimation: false,
  index: idx,
}))

const useBeaverStore = create<BeaverStoreState>((set, get) => ({
  lines: intialAsciiLines,
  numLines: beaverAscii.length,
  animatedOnce: {},
  get allLinesAnimated() {
    return get().lines.every((line) => !line.animating)
  },
  getNonAnimatingLines: () => {
    const animatedOnce = get().animatedOnce
    const lines = get().lines
    if (Object.keys(animatedOnce).length === get().numLines)
      return lines.filter((line) => !line.animating).map((line) => line.index)
    return lines
      .filter((line) => !line.animating && !animatedOnce[line.index])
      .map((line) => line.index)
  },
  getAnimatingLines: () => {
    return get()
      .lines.filter((line) => line.animating)
      .map((line) => line.index)
  },
  startLineAnimation: (index: number) => {
    const numLines = get().numLines
    if (index >= numLines) return
    const lines = get().lines
    const line = lines[index]
    if (line.animating) return
    set((state) => ({
      ...state,
      animatedOnce: { ...state.animatedOnce, [index]: true },
      lines: state.lines.map((l, idx) => {
        if (idx === index) {
          // set isAnimating to true, flip the toRandom to randomize the text
          return { ...l, animating: true, toRandom: !l.toRandom }
        }
        return l
      }),
    }))
  },
  updateLineText: (index: number) => {
    if (index >= get().numLines) return
    if (!get().lines[index].animating) return
    set((state) => ({
      ...state,
      lines: state.lines.map((line, idx) => {
        if (idx === index) {
          // update currentText by adding random letter at curCharIndex
          let newLine = line.currentText
          if (line.toRandom) {
            const newChar = generateRandomString(1)
            newLine.splice(line.curCharIndex, 1, newChar)
          } else newLine.splice(line.curCharIndex, 1, '#')
          return {
            ...line,
            currentText: newLine,
            curCharIndex:
              line.curCharIndex === line.originalText.length - 1 ? 0 : line.curCharIndex + 1,
            animating: line.curCharIndex < line.originalText.length - 1,
          }
        }
        return line
      }),
    }))
  },
}))

export default useBeaverStore
