export type INavigation = {
  Home: { successMessage: string };
  AddPoints: { client_id: string };
};

export interface IClient {
  id?: string;
  name: string;
  phone_number: string;
  total_points: number;
  createdAt: string;
}
