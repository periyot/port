import viteLogo from '/public/vite.svg';

function App() {
  return (
    <>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:shrink-0">
          <img
            class="h-48 w-full object-cover md:h-full md:w-48"
            src={viteLogo}
            alt="Modern building architecture"
          />
        </div>
      </div>
    </>
  );
}

export default App;
