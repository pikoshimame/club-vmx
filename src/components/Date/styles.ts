import { css } from '@emotion/react';

const BaseText = css`
  display: block;
  font-weight: bold;
  line-height: 1.2em;
`;

export const YearText = css`
  ${BaseText}
  font-size: 40px;
  letter-spacing: 0.1em;
`;

export const DateText = css`
  ${BaseText}
  font-size: 40px;
  letter-spacing: -0.02em;
`;

export const TimeText = css`
  ${BaseText}
  font-size: 24px;
`;

export const Wrapper = css`
  display: block;
  padding: 48px 0;
`;
