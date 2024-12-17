import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../Pages/Home'

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  billing:{
    name: string
    email: string
    document: string
  }
  delivery: {
    email:string
  }
  payment:{
    card: {
      active:boolean
      owner?:{
        name:string
        document:string
      }
      name?:string
      number?:string
      expires?:{
        month:number
        year:number
      }
      code?:number
    }
    installments: number
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/eplay'
  }),
  endpoints: (builder) => ({
    getGames: builder.query<Game, void>({
      query: () => `destaque`
    }),
    getOnSale: builder.query<Game[], void>({
      query: () => `promocoes`
    }),
    getSoon: builder.query<Game[], void>({
      query: () => `em-breve`
    }),
    getActionGames: builder.query<Game[], void>({
      query: () => `acao`
    }),
    getRpgGames: builder.query<Game[], void>({
      query: () => `rpg`
    }),
    getSimulacaoGames: builder.query<Game[], void>({
      query: () => `simulacao`
    }),
    getLutaGames: builder.query<Game[], void>({
      query: () => `luta`
    }),
    getEsporteGames: builder.query<Game[], void>({
      query: () => `espotes`
    }),
    getGame: builder.query<Game, string>({
      query: (id) => `jogos/${id}`
    }),
  purchase: builder.mutation<any, PurchasePayload >({
      query: (body)=>({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const { useGetGamesQuery, useGetOnSaleQuery, useGetSoonQuery, useGetActionGamesQuery, useGetRpgGamesQuery, useGetSimulacaoGamesQuery, useGetLutaGamesQuery, useGetEsporteGamesQuery, useGetGameQuery, usePurchaseMutation } = api

export default api
