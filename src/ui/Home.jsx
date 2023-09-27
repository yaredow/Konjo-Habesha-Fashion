function Home() {
  return (
    <div>
      <div>
        <div className=" relative h-screen">
          <img
            src="/images/home-background.jpeg"
            alt="Home background photo"
            className=" absolute top-0 left-0 w-full h-full opacity-70 object-cover"
          />

          <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold text-shadow"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
