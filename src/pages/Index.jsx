// Update this page (the content is just a fallback if you fail to update the page)

import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="py-6 px-4 md:px-8">
        <h1 className="text-3xl font-bold">SpaceXplorer</h1>
      </header>
      <main className="container mx-auto px-4 md:px-8">
        <section className="py-12 md:py-20 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Discover the Wonders of Space</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">Embark on a journey through the cosmos and explore the mysteries of the universe.</p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">Start Your Adventure</Button>
        </section>
        <section className="py-12 md:py-20 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <img src="/placeholder.svg" alt="Planets" className="mx-auto object-cover w-24 h-24 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Explore Planets</h3>
            <p>Discover the diverse worlds within our solar system and beyond.</p>
          </div>
          <div className="text-center">
            <img src="/placeholder.svg" alt="Galaxies" className="mx-auto object-cover w-24 h-24 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Gaze at Galaxies</h3>
            <p>Witness the breathtaking beauty of distant galaxies and nebulae.</p>
          </div>
          <div className="text-center">
            <img src="/placeholder.svg" alt="Space Technology" className="mx-auto object-cover w-24 h-24 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Space Technology</h3>
            <p>Learn about cutting-edge space exploration technologies and missions.</p>
          </div>
        </section>
      </main>
      <footer className="py-6 px-4 md:px-8 text-center">
        <p>&copy; 2024 SpaceXplorer. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
