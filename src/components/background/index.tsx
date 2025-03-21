import { useState, useEffect } from "react";

export const Grid = () => {
    return (
      <div className="absolute inset-0 z-0">
        <div className="grid grid-cols-4 grid-rows-8 sm:grid-cols-12 sm:grid-rows-8 h-full w-full">
          {Array.from({ length: 96 }).map((_, i) => (
            <div key={`cell-${i}`} className="border border-stone-600/40" />
          ))}
        </div>
      </div>
    );
};

export const Particles = () => {
    const [particles, setParticles] = useState<{ size: number, xPos: number, yPos: number, opacity: number }[]>([]);

    useEffect(() => {
        const newParticles = Array.from({ length: 50 }).map(() => ({
            size: Math.floor(Math.random() * 5) + 2,
            xPos: Math.random() * 100,
            yPos: Math.random() * 100,
            opacity: Math.random() * 0.6 + 0.1,
        }));
        setParticles(newParticles);
    }, []);

    return (
        <>
            {particles.map((particle, i) => (
                <div
                    key={`particle-${i}`}
                    className="absolute rounded-full bg-cyan-400"
                    style={{
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        left: `${particle.xPos}%`,
                        top: `${particle.yPos}%`,
                        opacity: particle.opacity,
                    }}
                />
            ))}
        </>
    );
};

const PortfolioBackground = () => {
    return (
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-gray-950 z-0">
        <Grid />
        <Particles />
      </div>
    );
};

export default PortfolioBackground;
