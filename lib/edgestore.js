"use client";
// import { type EdgeStoreRouter } from '../app/api/edgestore/[...edgestore]/route';
import { createEdgeStoreProvider } from "@edgestore/react";
const { EdgeStoreProvider, useEdgeStore } = createEdgeStoreProvider();
export { EdgeStoreProvider, useEdgeStore };
