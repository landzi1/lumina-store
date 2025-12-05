export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Lumina Pro Max",
    tagline: "Dźwięk, który definiuje ciszę.",
    price: 2499,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
    description: "Aktywna redukcja szumów klasy studyjnej w ultralekkiej obudowie z tytanu.",
  },
  {
    id: "2",
    name: "Lumina Air",
    tagline: "Lekkość bytu.",
    price: 899,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=1000&auto=format&fit=crop",
    description: "Bezprzewodowa wolność z 24-godzinnym czasem pracy na baterii.",
  },
  {
    id: "3",
    name: "Lumina Studio",
    tagline: "Dla twórców.",
    price: 3299,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1000&auto=format&fit=crop",
    description: "Referencyjna jakość dźwięku dla profesjonalistów audio.",
  },
];