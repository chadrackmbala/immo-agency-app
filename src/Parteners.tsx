import './App.css';
import { Amazon, Meta, Google, Microsoft, Deloitte, Apple, Ey, Presidence, Vodacom } from './images/index';
import { ScrollFadeIn } from './ScrollFadeIn';

function Parteners() {
  // Liste des logos
  const logos = [Meta, Google, Microsoft, Amazon, Vodacom, Presidence, Ey, Apple, Deloitte];

  return (
    <div className="bg-white py-5">
      <ScrollFadeIn>
        <h3 className="text-black font-bold text-2xl text-center mb-5">Nos partenaires</h3>
      </ScrollFadeIn>
      <ScrollFadeIn>
        <div className="overflow-hidden relative w-full">
          {/* Track qui défile */}
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {/* On map les logos deux fois pour l'effet infini */}
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`logo-${index}`}
                className="inline-block w-[63px] h-[61px]"
              />
            ))}
          </div>
        </div>
      </ScrollFadeIn>
    </div>
  );
}

export default Parteners;
