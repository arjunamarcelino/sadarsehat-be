import { FastifyReply, FastifyRequest } from 'fastify'
import DashboardService from './dashboard_service.js'
import { DashboardRequest } from './dashboard_types.js'

const validateDateRange = (startDate?: string, endDate?: string, reply?: FastifyReply): boolean => {
  if (startDate && endDate) {
    const start = new Date(startDate)
    const end = new Date(endDate)

    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      reply?.json(null, 400, 'VALIDATION_ERROR', 'Invalid date format. Use ISO 8601 format (YYYY-MM-DD)')

      return false
    }

    if (start > end) {
      reply?.json(null, 400, 'VALIDATION_ERROR', 'Start date must be before end date')

      return false
    }
  }

  return true
}

const DashboardController = {
  getHoaxTrends: async function (request: FastifyRequest<{ Querystring: DashboardRequest }>, reply: FastifyReply) {
    try {
      if (!validateDateRange(request.query.startDate, request.query.endDate, reply)) {
        return
      }

      const data = await DashboardService.getHoaxTrends(request.query)
      reply.json(data, 200, null, 'Hoax trends retrieved successfully')
    } catch (error) {
      reply.json(null, 500, 'SYSTEM_ERROR', 'Failed to retrieve hoax trends')
    }
  },

  getHeatmap: async function (request: FastifyRequest<{ Querystring: DashboardRequest }>, reply: FastifyReply) {
    try {
      const data = await DashboardService.getHeatmap(request.query)
      reply.json(data, 200, null, 'Heatmap data retrieved successfully')
    } catch (error) {
      reply.json(null, 500, 'SYSTEM_ERROR', 'Failed to retrieve heatmap data')
    }
  },

  getLiteracy: async function (request: FastifyRequest<{ Querystring: DashboardRequest }>, reply: FastifyReply) {
    try {
      const data = await DashboardService.getLiteracyData(request.query)
      reply.json(data, 200, null, 'Literacy data retrieved successfully')
    } catch (error) {
      reply.json(null, 500, 'SYSTEM_ERROR', 'Failed to retrieve literacy data')
    }
  },

  getFacilityInsights: async function (request: FastifyRequest<{ Querystring: DashboardRequest }>, reply: FastifyReply) {
    try {
      const data = await DashboardService.getFacilityInsights(request.query)
      reply.json(data, 200, null, 'Facility insights retrieved successfully')
    } catch (error) {
      reply.json(null, 500, 'SYSTEM_ERROR', 'Failed to retrieve facility insights')
    }
  },

  getEmergingThreats: async function (request: FastifyRequest<{ Querystring: DashboardRequest }>, reply: FastifyReply) {
    try {
      const data = await DashboardService.getEmergingThreats(request.query)
      reply.json(data, 200, null, 'Emerging threats retrieved successfully')
    } catch (error) {
      reply.json(null, 500, 'SYSTEM_ERROR', 'Failed to retrieve emerging threats')
    }
  },

  getLibraryInsights: async function (request: FastifyRequest<{ Querystring: DashboardRequest }>, reply: FastifyReply) {
    try {
      const data = await DashboardService.getLibraryInsights(request.query)
      reply.json(data, 200, null, 'Library insights retrieved successfully')
    } catch (error) {
      reply.json(null, 500, 'SYSTEM_ERROR', 'Failed to retrieve library insights')
    }
  },

  getVerificationStats: async function (request: FastifyRequest<{ Querystring: DashboardRequest }>, reply: FastifyReply) {
    try {
      if (!validateDateRange(request.query.startDate, request.query.endDate, reply)) {
        return
      }

      const data = await DashboardService.getVerificationStats(request.query)
      reply.json(data, 200, null, 'Verification stats retrieved successfully')
    } catch (error) {
      reply.json(null, 500, 'SYSTEM_ERROR', 'Failed to retrieve verification stats')
    }
  },

  getPolicyRecommendations: async function (request: FastifyRequest<{ Querystring: DashboardRequest }>, reply: FastifyReply) {
    try {
      const data = await DashboardService.getPolicyRecommendations(request.query)
      reply.json(data, 200, null, 'Policy recommendations retrieved successfully')
    } catch (error) {
      reply.json(null, 500, 'SYSTEM_ERROR', 'Failed to retrieve policy recommendations')
    }
  },

  getDashboard: async function (request: FastifyRequest<{ Querystring: DashboardRequest }>, reply: FastifyReply) {
    try {
      if (!validateDateRange(request.query.startDate, request.query.endDate, reply)) {
        return
      }

      const response = await DashboardService.getDashboard(request.query)
      reply.json(response, 200, null, 'Dashboard data retrieved successfully')
    } catch (error) {
      reply.json(null, 500, 'SYSTEM_ERROR', 'Failed to retrieve dashboard data')
    }
  },
}

export default DashboardController
