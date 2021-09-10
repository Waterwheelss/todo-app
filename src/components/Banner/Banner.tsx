import { Container } from './style';

type PropsType = {
  url: string,
}

export default function Banner({ url }: PropsType) {
  return <Container url={url} />
}