import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play Bleachers Wordle" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        You have 6 tries to guess the word. After each guess, the color of the tiles will
        change to show how close your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="M" status="correct" />
        <Cell value="U" />
        <Cell value="S" />
        <Cell value="I" />
        <Cell value="C" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter M is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="D" />
        <Cell value="R" />
        <Cell value="U" status="present" />
        <Cell value="M" />
        <Cell value="S" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter U is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="R" />
        <Cell value="E" />
        <Cell value="A" />
        <Cell value="D" status="absent" />
        <Cell value="Y" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter D is not in the word in any spot.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        Bleachers Wordle was built by Lauren Ferrett with the help of an open source version of Wordle -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          check out the code here
        </a>. Project managed by Moira Healy.{' '}
      </p>
    </BaseModal>
  )
}
