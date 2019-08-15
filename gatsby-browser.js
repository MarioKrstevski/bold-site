/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react"
import { AuthProvider } from "./src/context/AuthContext"
import { StoreProvider } from "./src/state/StoreWrapper"
export const wrapRootElement = ({ element }) => (
  <StoreProvider>
    <AuthProvider>{element}</AuthProvider>
  </StoreProvider>
)

// You can delete this file if you're not using it
