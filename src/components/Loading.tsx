import React from 'react'
import { Spinner } from './ui/spinner';

interface Props extends React.ComponentProps<typeof Spinner> {
  isLoading: boolean;
  children: React.ReactNode;
}


export const Loading = ({ isLoading, children, ...props }: Props) => {
  if (!isLoading) return children
  return (
    <div className='w-full flex justify-center'>
      <Spinner {...props} />
    </div>
  )
}
