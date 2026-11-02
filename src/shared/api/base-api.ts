import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

/** Features inject typed endpoints here when a real backend contract is available. */
export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL || '/api' }),
  tagTypes: ['Menu', 'Order', 'Customer', 'Reservation', 'Invoice', 'Settings'],
  endpoints: () => ({}),
});
