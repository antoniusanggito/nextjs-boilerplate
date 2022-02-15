import Head from 'next/head';
import Link from 'next/link';
import tw, { css, styled } from 'twin.macro';

// Example using styled component
const Title = styled.h1`
  font-size: 4rem;
`;

const Home: React.FC = () => {
  return (
    // Example using tailwind classes
    <div tw="bg-green-300 flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>NextJS Template</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
        <link rel="icon" type="image/png" href="/icon-192x192.png" />
      </Head>

      {/* Example using inline emotion css/tw */}
      <h1
        css={[
          css`
            font-color: #f0f0f0;
          `,
          tw`text-xl font-bold`,
        ]}
      >
        Next JS
      </h1>
      <Title>Hello World</Title>

      <div tw="w-28 flex justify-between items-center">
        <Link href="/about">
          <button>About</button>
        </Link>
        <Link href="/empty">
          <button>Empty</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
