import { RotatingLines } from 'react-loader-spinner'

export function RotationSpinner() {
  return (
    <RotatingLines
      strokeColor="white"
      strokeWidth="5"
      animationDuration="0.75"
      width="24"
      visible={true}
    />
  )
}
