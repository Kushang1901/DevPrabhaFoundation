import {
  Eye,
  Compass,
  Target,
  HeartPulse,
  BookOpen,
  Heart,
  Leaf,
  Sprout,
  Award,
} from "lucide-react";

export function getIconWidget(
  name: string,
  className = "text-brand-orange",
  size = 24,
) {
  switch (name) {
    case "Eye":
      return <Eye className={className} size={size} />;

    case "Compass":
      return <Compass className={className} size={size} />;

    case "Target":
      return <Target className={className} size={size} />;

    case "Activity":
      return <HeartPulse className={className} size={size} />;

    case "BookOpen":
      return <BookOpen className={className} size={size} />;

    case "Heart":
      return <Heart className={className} size={size} />;

    case "Leaf":
      return <Leaf className={className} size={size} />;

    case "Sprout":
      return <Sprout className={className} size={size} />;

    default:
      return <Award className={className} size={size} />;
  }
}
