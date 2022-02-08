import Head from 'next/head'
import tw, { css, styled } from 'twin.macro'

const Title = styled.h1`
  font-size: 4rem;
`

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
        <link rel="icon" type="image/png" href="/icon-192x192.png" />
      </Head>
      <p
        css={[
          css`
            font-color: #f0f0f0;
          `,
          tw`text-xs`,
        ]}
        tw="font-bold"
      >
        Hello World
      </p>
      <Title>Judul baru</Title>
    </div>
  )
}
