export type INavigation = {
  Home: undefined;
  AddPoints: { client_id: string };
};

export interface IClient {
  id?: string;
  name: string;
  phone_number: string;
  points: number;
  createdAt: string;
}
