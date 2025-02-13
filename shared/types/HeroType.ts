export interface HeroType {
  title: string;
  description: string;
  button: string;
  list: {
    [key: string]: string;
  };
}
