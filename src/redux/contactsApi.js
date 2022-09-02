import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6312580af5cba498da916c44.mockapi.io/api/v1/',
  }),
  endpoints: builder => ({
    getContactsItems: builder.query({
      query: () => `contacts`,
      providesTags: ['contacts'],
    }),
    createContact: builder.mutation({
      query: body => ({
        url: `contacts`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['contacts'],
    }),

    deleteContact: builder.mutation({
      query: id => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['contacts'],
    }),
  }),
});

export const {
  useGetContactsItemsQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
} = contactsApi;
