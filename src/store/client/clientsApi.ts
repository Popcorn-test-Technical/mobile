import { IClient } from '../../types/interfaces';
import Api from '../Api';

export const authApi = Api.injectEndpoints({
  endpoints: builder => ({
    getClientById: builder.query<IClient, string>({
      query: id => ({
        url: `clients/${id}`,
        method: 'GET',
      }),
      providesTags: ['clients'],
    }),

    updateClientPoints: builder.mutation<
      IClient,
      { id: string; data: Partial<IClient> }
    >({
      query: ({ id, data }) => ({
        url: `clients/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['clients'],
    }),
  }),
});

export const { useGetClientByIdQuery, useUpdateClientPointsMutation } = authApi;
