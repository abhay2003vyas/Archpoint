import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
} from "framer-motion";

const IMGS = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=800&q=80",
];

const IMG_LABELS = [
  "Modern Office",
  "Luxury Villa", 
  "Contemporary Museum",
  "Boutique Hotel",
  "Smart City Development",
  "Eco-Friendly Complex",
  "Urban Apartments",
  "Minimalist Residence",
  "Urban Loft",
  "Garden Pavilion"
];

const FeaturedProjects = ({
  autoplay = true,
  pauseOnHover = true,
  images = [],
}) => {
  images = images.length > 0 ? images : IMGS;

  const [isScreenSizeSm, setIsScreenSizeSm] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 640 : false
  );
  
  useEffect(() => {
    const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cylinderWidth = isScreenSizeSm ? 1800 : 3000;
  const faceCount = images.length;
  const faceWidth = (cylinderWidth / faceCount) * 0.8;
  const radius = cylinderWidth / (2 * Math.PI);

  const dragFactor = 0.05;
  const rotation = useMotionValue(0);
  const controls = useAnimation();

  const transform = useTransform(
    rotation,
    (val) => `rotate3d(0,1,0,${val}deg)`
  );

  const startInfiniteSpin = (startAngle) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: {
        duration: 25,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    if (autoplay) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    } else {
      controls.stop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay]);

  const handleUpdate = (latest) => {
    if (typeof latest.rotateY === "number") {
      rotation.set(latest.rotateY);
    }
  };

  const handleDrag = (_, info) => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_, info) => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);

    if (autoplay) {
      startInfiniteSpin(finalAngle);
    }
  };

  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) {
      controls.stop();
    }
  };
  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    }
  };

  return (
    <div className="w-full bg-white py-12">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-5xl md:text-6xl font-black text-gray-600 px-8 py-4" style={{fontWeight: 900}}>
          Featured Projects
        </h2>
      </div>
      
      <div className="relative h-[600px] w-full overflow-hidden bg-white">
      {/* Left fade gradient */}
      <div
        className="absolute top-0 left-0 h-full w-[60px] z-10"
        style={{
          background:
            "linear-gradient(to left, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 100%)",
        }}
      />
      {/* Right fade gradient */}
      <div
        className="absolute top-0 right-0 h-full w-[60px] z-10"
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 100%)",
        }}
      />

      <div className="flex h-full items-center justify-center [perspective:1200px] [transform-style:preserve-3d]">
        <motion.div
          drag="x"
          dragElastic={0}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          animate={controls}
          onUpdate={handleUpdate}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          className="flex min-h-[300px] cursor-grab items-center justify-center [transform-style:preserve-3d] active:cursor-grabbing"
        >
          {images.map((url, i) => (
            <div
              key={i}
              className="group absolute flex h-fit items-center justify-center p-[2%] [backface-visibility:hidden]"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${(360 / faceCount) * i
                  }deg) translateZ(${radius}px)`,
              }}
            >
              <div className="relative">
                <img
                  src={url}
                  alt={`Gallery image ${i + 1}`}
                  className="pointer-events-none h-[200px] w-[350px] rounded-[20px] border-[4px] border-gray-200 object-cover
                             transition-all duration-500 ease-out group-hover:scale-105 group-hover:shadow-2xl group-hover:brightness-110
                             sm:h-[160px] sm:w-[280px] group-hover:border-blue-400 shadow-lg"
                />
                {/* Overlay with label */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-[20px] 
                               flex items-end justify-center opacity-0 group-hover:opacity-100 
                               transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <span className="text-white text-sm sm:text-base font-semibold text-center px-3 pb-4 drop-shadow-lg">
                    {IMG_LABELS[i] || "Featured Project"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      
        {/* Instructions */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-600 text-sm text-center">
          Drag to rotate • Hover to pause
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;