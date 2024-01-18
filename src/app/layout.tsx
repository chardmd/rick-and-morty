"use client";

import { Analytics } from "@vercel/analytics/react";
import { Providers } from "./providers";
import { fonts } from "./fonts";
import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={fonts.rubik.variable}>
        <Providers>
          <ApolloProvider client={client}>{children}</ApolloProvider>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
