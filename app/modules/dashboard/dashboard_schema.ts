const commonQueryParams = {
  type: 'object',
  properties: {
    period: {
      type: 'string',
      enum: ['daily', 'weekly', 'monthly'],
      description: 'Time period for trends',
      example: 'daily',
    },
    region: {
      type: 'string',
      description: 'Filter by specific region/province',
      example: 'Jawa Barat',
    },
    facilityId: {
      type: 'string',
      description: 'Filter by specific facility ID',
      example: 'faskes_001',
    },
    startDate: {
      type: 'string',
      format: 'date',
      description: 'Start date for data range (ISO 8601 format: YYYY-MM-DD)',
      example: '2025-01-01',
    },
    endDate: {
      type: 'string',
      format: 'date',
      description: 'End date for data range (ISO 8601 format: YYYY-MM-DD)',
      example: '2025-01-31',
    },
  },
}

const commonResponse = {
  200: {
    description: 'Successfully retrieved data',
    type: 'object',
    properties: {
      status: { type: 'number', example: 200 },
      code: { type: 'string', example: null },
      message: { type: 'string' },
      data: { type: 'object' },
    },
  },
  400: {
    description: 'Validation error',
    type: 'object',
    properties: {
      status: { type: 'number', example: 400 },
      code: { type: 'string', example: 'VALIDATION_ERROR' },
      message: { type: 'string' },
      data: { type: 'null' },
    },
  },
  500: {
    description: 'Internal server error',
    type: 'object',
    properties: {
      status: { type: 'number', example: 500 },
      code: { type: 'string', example: 'SYSTEM_ERROR' },
      message: { type: 'string' },
      data: { type: 'null' },
    },
  },
}

const DashboardSchema = {
  getHoaxTrends: {
    description: 'Get hoax trends data',
    tags: ['Dashboard'],
    summary: 'Retrieve hoax trends including daily/weekly/monthly trends, top topics, and spike detection',
    querystring: commonQueryParams,
    response: commonResponse,
  },

  getHeatmap: {
    description: 'Get hoax distribution heatmap',
    tags: ['Dashboard'],
    summary: 'Retrieve hoax distribution heatmap by province with hotspot detection',
    querystring: commonQueryParams,
    response: commonResponse,
  },

  getLiteracy: {
    description: 'Get public health literacy scores',
    tags: ['Dashboard'],
    summary: 'Retrieve literacy scores by region, missed topics, and age group breakdowns',
    querystring: commonQueryParams,
    response: commonResponse,
  },

  getFacilityInsights: {
    description: 'Get healthcare facility insights',
    tags: ['Dashboard'],
    summary: 'Retrieve insights from healthcare facilities including frequently asked hoaxes and question trends',
    querystring: commonQueryParams,
    response: commonResponse,
  },

  getEmergingThreats: {
    description: 'Get emerging threat detection alerts',
    tags: ['Dashboard'],
    summary: 'Retrieve AI-detected emerging threats and new hoax patterns',
    querystring: commonQueryParams,
    response: commonResponse,
  },

  getLibraryInsights: {
    description: 'Get library insights and content trends',
    tags: ['Dashboard'],
    summary: 'Retrieve most verified hoaxes, most read facts, and most accessed content',
    querystring: commonQueryParams,
    response: commonResponse,
  },

  getVerificationStats: {
    description: 'Get AI verification statistics',
    tags: ['Dashboard'],
    summary: 'Retrieve general verification statistics including total verifications, formats, and device sources',
    querystring: commonQueryParams,
    response: commonResponse,
  },

  getPolicyRecommendations: {
    description: 'Get AI-based policy recommendations',
    tags: ['Dashboard'],
    summary: 'Retrieve AI-generated policy recommendations with priorities and suggested actions',
    querystring: commonQueryParams,
    response: commonResponse,
  },

  getDashboard: {
    description: 'Get comprehensive dashboard analytics data',
    tags: ['Dashboard'],
    summary: 'Retrieve all dashboard analytics in one response (summary endpoint)',
    querystring: commonQueryParams,
    response: {
      200: {
        description: 'Successfully retrieved dashboard data',
        type: 'object',
        properties: {
          status: { type: 'number', example: 200 },
          code: { type: 'string', example: null },
          message: { type: 'string', example: 'Dashboard data retrieved successfully' },
          data: {
            type: 'object',
            properties: {
              summary: {
                type: 'object',
                properties: {
                  lastUpdated: { type: 'string', format: 'date-time' },
                  verificationStats: { type: 'object' },
                  hoaxTrends: { type: 'object' },
                  heatmap: { type: 'object' },
                  literacy: { type: 'object' },
                  facilityInsights: { type: 'object' },
                  emergingThreats: { type: 'object' },
                  libraryInsights: { type: 'object' },
                  policyRecommendations: { type: 'object' },
                },
              },
              timestamp: { type: 'string', format: 'date-time' },
            },
          },
        },
      },
      400: {
        description: 'Validation error',
        type: 'object',
        properties: {
          status: { type: 'number', example: 400 },
          code: { type: 'string', example: 'VALIDATION_ERROR' },
          message: { type: 'string', example: 'Invalid date format' },
          data: { type: 'null' },
        },
      },
      500: {
        description: 'Internal server error',
        type: 'object',
        properties: {
          status: { type: 'number', example: 500 },
          code: { type: 'string', example: 'SYSTEM_ERROR' },
          message: { type: 'string', example: 'Failed to retrieve dashboard data' },
          data: { type: 'null' },
        },
      },
    },
  },
}

export default DashboardSchema
