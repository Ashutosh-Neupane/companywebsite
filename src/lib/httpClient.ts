// src/lib/httpClient.ts
import axios from "axios";

export const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.example.com",
  headers: {
    "Content-Type": "application/json",
  },
});
