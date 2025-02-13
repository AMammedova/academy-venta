export interface FeatureType {
  title: string;
  description: string;
  features: {
    [key: string]: string;
  };
}
