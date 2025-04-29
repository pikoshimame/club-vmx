/** @jsxImportSource @emotion/react */
import { Wrapper, YearText, DateText, TimeText } from './styles'

export function Date() {
  return (
    <time css={Wrapper} dateTime="2025-10-19T14:00+09:00">
      <span css={YearText}>2025</span>
      <span css={DateText}>10/19</span>
      <span css={TimeText}>14:00-</span>
    </time>
  );
}
