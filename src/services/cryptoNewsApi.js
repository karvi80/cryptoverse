import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_NEWS_API_KEY,
  "X-RapidAPI-Host": "investing-cryptocurrency-markets.p.rapidapi.com",
};

const baseUrl = "https://investing-cryptocurrency-markets.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ page, cryptoName }) =>
        createRequest(
          `/coins/get-news?pair_ID=${cryptoName}&page=${page}&time_utc_offset=28800&lang_ID=1`
        ),
    }),

    getCryptocoinsListPairs: builder.query({
      query: () => createRequest(`/coins/list-pairs`),
    }),
  }),
});

export const { useGetCryptoNewsQuery, useGetCryptocoinsListPairsQuery } =
  cryptoNewsApi;
