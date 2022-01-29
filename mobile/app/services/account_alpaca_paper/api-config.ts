// const { ENVIRONMENT_DEPENDENT_VARIABLE } = require("../../config/env.dev OR ../../config/env.prod")

const API_URL = "http://example.com"

export interface ApiConfig {
  url: string

  /**
   * Milliseconds before we timeout the request.
   */
  timeout: number
}

/**
 * The default configuration for the app.
 */
export const DEFAULT_API_CONFIG: ApiConfig = {
  url: API_URL || "https://jsonplaceholder.typicode.com",
  timeout: 10000,
}
