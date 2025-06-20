import { IClient } from '../../types/interfaces';
import Api from '../api';

export const authApi = Api.injectEndpoints({
  endpoints: builder => ({
    getClientById: builder.query<IClient, string>({
      query: id => ({
        url: `users/${id}`,
        method: 'GET',
      }),
    }),

    updateClientPoints: builder.mutation<
      IClient,
      { id: string; data: Partial<IClient> }
    >({
      query: ({ id, data }) => ({
        url: `users/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['clients'],
    }),
  }),
});

export const { useGetClientByIdQuery, useUpdateClientPointsMutation } = authApi;
