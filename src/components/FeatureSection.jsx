import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div id="fonctionnalite" className="relative mt-20 border-b border-neutral-200 min-h-[800px]">
      <div className="text-center" data-aos="fade-down">
        <span className="bg-white text-blue-600 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Fonctionnalité
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Obtenez votre App ou site {" "}
          <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
            Rapidement
          </span>
        </h2>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-3 px-3 sm:mt-12 sm:grid-cols-3 sm:gap-5 lg:mt-20 lg:gap-6">
        {features.map((feature, index) => (
          <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="h-full rounded-xl border border-neutral-200 bg-white p-3 shadow-sm sm:p-5">
              <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 p-2 text-blue-700 sm:h-10 sm:w-10">
                {feature.icon}
              </div>
              <h5 className="mb-2 text-sm font-semibold leading-snug sm:text-base">{feature.text}</h5>
              <p className="text-xs leading-relaxed text-neutral-500 sm:text-sm">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
