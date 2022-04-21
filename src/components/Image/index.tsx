import React from 'react'

export interface ImageProps {
  src?: string
  className?: string
  onClick?: () => void
}
export const Image: React.FC<ImageProps> = ({ src, className, onClick }) => {
  return <img onClick={onClick} src={src} className={className} alt="" />
}

export default Image
