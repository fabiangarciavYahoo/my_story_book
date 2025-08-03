import './myLabel.css'

export interface Props {
  label: string;
  color: 'text-primary' | 'text-secondary' | 'text-tertiary';
  allCaps: boolean;
  size?: 'normal' | 'h1' | 'h2' | 'h3';
  backgroundColor?: string;
}

export const MyLabel = ({
  label,
  color,
  allCaps,
  size = 'normal',
  backgroundColor = 'transparent'
}: Props) => {
  return (
    <span style={
      {
        textTransform: allCaps ? 'uppercase' : 'none',
        backgroundColor
      }
    } className={`${size} ${color}`}>{label}</span>
  )
}