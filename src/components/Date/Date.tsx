/** @jsxImportSource @emotion/react */
import { Wrapper, YearText, DateText, TimeText } from './styles'

export function Date() {
  return (
    <time css={Wrapper} dateTime="2023-10-15T14:00+09:00">
      <span css={YearText}>2023</span>
      <span css={DateText}>10/15</span>
      <span css={TimeText}>14:00-</span>
    </time>
  );
}
