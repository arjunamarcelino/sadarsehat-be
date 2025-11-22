import { DoneFuncWithErrOrRes, FastifyInstance, FastifyPluginOptions } from 'fastify'
import DashboardController from './dashboard_controller.js'
import DashboardSchema from './dashboard_schema.js'

export default function (app: FastifyInstance, _: FastifyPluginOptions, done: DoneFuncWithErrOrRes) {
  app.get('/dashboard/hoax-trends', {
    schema: DashboardSchema.getHoaxTrends,
  }, DashboardController.getHoaxTrends)

  app.get('/dashboard/heatmap', {
    schema: DashboardSchema.getHeatmap,
  }, DashboardController.getHeatmap)

  app.get('/dashboard/literacy', {
    schema: DashboardSchema.getLiteracy,
  }, DashboardController.getLiteracy)

  app.get('/dashboard/facility-insights', {
    schema: DashboardSchema.getFacilityInsights,
  }, DashboardController.getFacilityInsights)

  app.get('/dashboard/emerging-threats', {
    schema: DashboardSchema.getEmergingThreats,
  }, DashboardController.getEmergingThreats)

  app.get('/dashboard/library-insights', {
    schema: DashboardSchema.getLibraryInsights,
  }, DashboardController.getLibraryInsights)

  app.get('/dashboard/verification-stats', {
    schema: DashboardSchema.getVerificationStats,
  }, DashboardController.getVerificationStats)

  app.get('/dashboard/policy-recommendations', {
    schema: DashboardSchema.getPolicyRecommendations,
  }, DashboardController.getPolicyRecommendations)

  app.get('/dashboard', {
    schema: DashboardSchema.getDashboard,
  }, DashboardController.getDashboard)

  done()
}
