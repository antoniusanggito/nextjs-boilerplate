import React from 'react';
import 'twin.macro';

import Button from '../components/About/Button';

const About: React.FC = () => {
  return (
    <div tw="min-h-screen bg-blue-300">
      <div tw="pt-4 text-center text-xl font-bold">
        <Button>Back to Home</Button>
      </div>
    </div>
  );
};

export default About;
