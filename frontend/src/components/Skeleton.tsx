import { motion } from "framer-motion";

interface SkeletonProps {
  className?: string;
  variant?: "text" | "circular" | "rectangular" | "rounded";
  width?: string | number;
  height?: string | number;
  lines?: number;
  animate?: boolean;
}

const Skeleton = ({ 
  className = "", 
  variant = "rectangular",
  width,
  height,
  lines = 1,
  animate = true
}: SkeletonProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "text":
        return "h-4 rounded";
      case "circular":
        return "rounded-full";
      case "rectangular":
        return "rounded-none";
      case "rounded":
        return "rounded-lg";
      default:
        return "rounded";
    }
  };

  const getSkeletonStyle = () => {
    const style: React.CSSProperties = {};
    if (width) style.width = typeof width === "number" ? `${width}px` : width;
    if (height) style.height = typeof height === "number" ? `${height}px` : height;
    return style;
  };

  const shimmerAnimation = animate ? {
    background: [
      "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
      "linear-gradient(90deg, transparent, rgba(245,166,35,0.2), transparent)",
      "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  } : {};

  if (variant === "text" && lines > 1) {
    return (
      <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }, (_, i) => (
          <motion.div
            key={i}
            className={`bg-muted ${getVariantClasses()}`}
            style={{
              ...getSkeletonStyle(),
              width: i === lines - 1 ? "70%" : "100%"
            }}
            animate={shimmerAnimation}
          />
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className={`bg-muted ${getVariantClasses()} ${className}`}
      style={getSkeletonStyle()}
      animate={shimmerAnimation}
    />
  );
};

// Card Skeleton Component
export const CardSkeleton = () => (
  <div className="glass-card rounded-2xl p-6 border border-border/50">
    <div className="space-y-4">
      <Skeleton variant="circular" width={60} height={60} />
      <Skeleton variant="text" height={24} width="80%" />
      <Skeleton variant="text" lines={3} />
      <Skeleton variant="rectangular" height={40} className="mt-4" />
    </div>
  </div>
);

// Testimonial Skeleton Component
export const TestimonialSkeleton = () => (
  <div className="glass-card rounded-2xl p-8 border border-border/50">
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Skeleton variant="circular" width={50} height={50} />
        <div className="flex-1 space-y-2">
          <Skeleton variant="text" height={20} width="40%" />
          <Skeleton variant="text" height={16} width="60%" />
        </div>
      </div>
      <Skeleton variant="text" lines={4} />
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Skeleton key={star} variant="rectangular" width={20} height={20} className="rounded-sm" />
        ))}
      </div>
    </div>
  </div>
);

// Portfolio Skeleton Component
export const PortfolioSkeleton = () => (
  <div className="group relative overflow-hidden rounded-2xl border border-border/50 glass-card">
    <Skeleton variant="rectangular" height={250} className="w-full" />
    <div className="p-6 space-y-3">
      <Skeleton variant="text" height={24} width="70%" />
      <Skeleton variant="text" lines={2} />
      <div className="flex flex-wrap gap-2 mt-4">
        {[1, 2, 3].map((tag) => (
          <Skeleton key={tag} variant="rectangular" width={80} height={24} className="rounded-full" />
        ))}
      </div>
    </div>
  </div>
);

// Service Skeleton Component
export const ServiceSkeleton = () => (
  <div className="glass-card rounded-2xl p-8 border border-border/50 hover:border-accent/50 transition-all duration-300">
    <div className="space-y-4">
      <Skeleton variant="rounded" width={60} height={60} />
      <Skeleton variant="text" height={28} width="60%" />
      <Skeleton variant="text" lines={3} />
      <Skeleton variant="rectangular" height={40} className="mt-4" />
    </div>
  </div>
);

// Team Member Skeleton Component
export const TeamMemberSkeleton = () => (
  <div className="text-center group">
    <div className="relative mb-6">
      <Skeleton variant="circular" width={200} height={200} className="mx-auto" />
    </div>
    <div className="space-y-2">
      <Skeleton variant="text" height={24} width="60%" className="mx-auto" />
      <Skeleton variant="text" height={18} width="40%" className="mx-auto" />
      <div className="flex justify-center gap-3 mt-4">
        <Skeleton variant="circular" width={36} height={36} />
        <Skeleton variant="circular" width={36} height={36} />
        <Skeleton variant="circular" width={36} height={36} />
      </div>
    </div>
  </div>
);

export default Skeleton;
