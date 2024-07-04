import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
// import {VAC_MES_BASE_URL} from '@env';

export const bookingApi = createApi({
  baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3000/api/MES"}),
  reducerPath: 'bookingApi',
  tagTypes: ['Booking'],
  endpoints: builder => ({
    getBatchCode: builder.query({
      query: ({product, batchCode}) =>
        `/GetBatchCode?Product=${product}&BatchCode=${batchCode}`,
      providesTags: ['Booking'],
    }),
  }),
});

export const {useLazyGetBatchCodeQuery} = bookingApi;
