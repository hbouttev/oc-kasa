// Basic types for Kasa API
// For now we consider every property as required and not nullable
export interface Housing {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: Host;
  rating: string;
  location: string;
  equipments: string[];
  tags: string[];
}

export interface Host {
  name: string;
  picture: string;
}
