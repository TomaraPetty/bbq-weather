import React from 'react';

export default function Hero() {
  return (
    <div className="flex flex-col items-center text-center justify-center mx-auto w-3/5">
      <h1 className="text-8xl font-bold text-white mb-6">
        Suns out, grills out!
      </h1>
      <p className="text-2xl text-white/90 mb-4">
        Check the weather in your area to see if you should fire up the
        grill this week.
      </p>
    </div>
  );
}
