export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-500 to-red-600">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Is it BBQ weather?</h1>
          <p className="text-xl text-white/90">
            The weather is currently 75&deg;F and cloudy with a chance of meat
            burning.
          </p>
        </div>
      </div>
    </div>
  );
}