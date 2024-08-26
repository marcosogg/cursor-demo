export const Features = () => {
  const features = [
    { title: 'Easy Integration', description: 'Seamlessly integrate with your existing tools.' },
    { title: 'Advanced Analytics', description: 'Gain insights with powerful analytics features.' },
    { title: '24/7 Support', description: 'Our team is always here to help you succeed.' },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};