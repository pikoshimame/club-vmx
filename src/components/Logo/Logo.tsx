/** @jsxImportSource @emotion/react */
import { Wrapper } from './styles'

export function Logo() {
  return (
    <h1 css={Wrapper}>
      <img src="/logo.svg" width={79} height={150} alt="VOCALOID-ManiaX"></img>
    </h1>
  );
}
