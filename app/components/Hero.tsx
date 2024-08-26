import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="bg-blue-50 py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Welcome to Our Platform</h1>
          <p className="text-xl text-gray-600 mb-8">Discover amazing features that will revolutionize your workflow.</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/hero-image.png"
            alt="Hero Image"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};