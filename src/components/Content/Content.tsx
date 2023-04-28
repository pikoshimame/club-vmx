import Head from 'next/head';
import { Logo } from '../../components/Logo';
import { Text } from '../../components/Text';
import { Footer } from '../../components/Footer';
/** @jsxImportSource @emotion/react */
import { Wrapper } from './styles'

export function Content() {
  return (
    <>
      <Head>
        <title>VOCALOID-ManiaX オフィシャルサイト</title>
        <meta name="description" content="VOCALOID-ManiaX(ボーカロイドマニアクス)は、VOCALOID(ボーカロイド)が得意とするジャンルの一つである「ダンスミュージック」というジャンルを主軸にしたパーティーです。"></meta>
        <meta property="og:url" content="https://club-vmx.com"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content="VOCALOID-ManiaX オフィシャルサイト"></meta>
        <meta property="og:description" content="VOCALOID-ManiaX(ボーカロイドマニアクス)は、VOCALOID(ボーカロイド)が得意とするジャンルの一つである「ダンスミュージック」というジャンルを主軸にしたパーティーです。"></meta>
        <meta property="og:image" content="https://club-vmx.com/ogp.jpg"></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:title" content="VOCALOID-ManiaX オフィシャルサイト"></meta>
        <meta name="twitter:description" content="VOCALOID-ManiaX(ボーカロイドマニアクス)は、VOCALOID(ボーカロイド)が得意とするジャンルの一つである「ダンスミュージック」というジャンルを主軸にしたパーティーです。"></meta>
        <meta name="twitter:image" content="https://club-vmx.com/summary_large_image.jpg"></meta>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png"></link>
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png"></link>
      </Head>
      <main css={Wrapper}>
        <Logo />
        <Text />
        <Footer />
      </main>
    </>
  );
}
