import { Apartment } from 'src/app/Core/models/Apartement';
export interface Residence {
  id: number;
  name: string;
  address: string;
  image: string;
  status: string;
  apartments: Apartment[];
}
