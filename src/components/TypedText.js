import React, { useEffect, useState } from 'react';
import Typewriter from 'react-ts-typewriter';

const TypedText = () => {
  return (
    <div className="text-orange-500 text-2xl font-bold">
      <Typewriter text={['#barber', '#človek', '#otec','#progressbarber']} loop={true} speed={200} delay={1500} />
    </div>
  );
};

export default TypedText;