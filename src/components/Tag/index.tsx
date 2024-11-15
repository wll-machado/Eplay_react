import { TagContainer } from "./style";

export type Props = {
  size?: 'small' | 'big';
  children: string
}

const Tag = ({children, size = 'small'}:Props) => {
  return (
    <TagContainer size={size}>
      { children}
    </TagContainer>
  )
}

export default Tag
