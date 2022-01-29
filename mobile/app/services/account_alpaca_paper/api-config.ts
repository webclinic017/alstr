// const { ENVIRONMENT_DEPENDENT_VARIABLE } = require("../../config/env.dev OR ../../config/env.prod")
const { APCA_PAPER_BASE_URL } = require("../constants.js")

const API_URL = APCA_PAPER_BASE_URL

export interface ApiConfig {
  url: string
  timeout: number
}

/**
 * The default configuration for the app.
 */
export const DEFAULT_API_CONFIG: ApiConfig = {
  url: API_URL || "https://jsonplaceholder.typicode.com",
  timeout: 10000,
}
