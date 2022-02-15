import Head from 'next/head';
import Link from 'next/link';
import tw, { css, styled } from 'twin.macro';
import { Layout } from '../components/Utils/Layout';

// Example using styled component
const Title = styled.h1`
  font-size: 4rem;
`;

const Home: React.FC = () => {
  return (
    // Example using tailwind classes
    <Layout>
      <Head>
        <title>NextJS Template</title>
      </Head>

      <div tw="pt-8 pb-16 flex flex-col items-center justify-center min-h-screen w-full bg-green-300">
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
    </Layout>
  );
};

export default Home;
