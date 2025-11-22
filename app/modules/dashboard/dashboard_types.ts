// 1. Tren Hoaks Kesehatan Nasional
export interface HoaxTrend {
  date: string
  count: number
  topTopics: string[]
}

export interface HoaxTrendData {
  period: 'daily' | 'weekly' | 'monthly'
  trends: HoaxTrend[]
  topTopics: Array<{
    topic: string
    count: number
    percentage: number
  }>
  spikes: Array<{
    date: string
    topic: string
    increasePercentage: number
  }>
}

// 2. Peta Persebaran Hoaks (Heatmap Indonesia)
export interface HoaxDistribution {
  province: string
  regency?: string
  hoaxCount: number
  intensity: 'low' | 'medium' | 'high' | 'critical'
  hotspot: boolean
}

export interface HoaxHeatmapData {
  distributions: HoaxDistribution[]
  totalHotspots: number
  criticalProvinces: string[]
}

// 3. Skor Literasi Kesehatan Publik
export interface LiteracyScore {
  region: string
  averageScore: number
  totalParticipants: number
  frequentlyMissedTopics: Array<{
    topic: string
    errorRate: number
  }>
  ageGroupScores?: Array<{
    ageGroup: string
    averageScore: number
  }>
}

export interface LiteracyData {
  nationalAverage: number
  regionalScores: LiteracyScore[]
  topMissedTopics: Array<{
    topic: string
    errorRate: number
    affectedRegions: string[]
  }>
}

// 4. Insight Fasilitas Kesehatan
export interface FacilityInsight {
  facilityId: string
  facilityName: string
  facilityType: 'puskesmas' | 'rumah_sakit' | 'klinik'
  region: string
  frequentlyAskedHoaxes: Array<{
    hoax: string
    count: number
  }>
  questionTrends: Array<{
    date: string
    questionCount: number
  }>
  priorityContentNeeds: string[]
}

export interface FacilityInsightsData {
  facilities: FacilityInsight[]
  topAskedHoaxes: Array<{
    hoax: string
    count: number
    facilities: string[]
  }>
}

// 5. Emerging Threat Detection (AI Alert)
export interface EmergingThreat {
  id: string
  hoaxContent: string
  firstDetected: string
  spikePercentage: number
  timeWindow: string
  relatedTopics: string[]
  severity: 'low' | 'medium' | 'high' | 'critical'
  isNewPattern: boolean
  correlationTopics?: string[]
}

export interface EmergingThreatData {
  threats: EmergingThreat[]
  criticalAlerts: number
  newPatterns: number
}

// 6. Library Insight (Myth–Fact Trends)
export interface LibraryInsight {
  mostVerifiedHoaxes: Array<{
    hoax: string
    verificationCount: number
    fact: string
  }>
  mostReadFacts: Array<{
    fact: string
    readCount: number
    category: string
  }>
  mostAccessedContent: Array<{
    contentTitle: string
    accessCount: number
    contentType: string
  }>
}

// 7. Statistik Verifikasi AI (General Dashboard Metrics)
export interface VerificationStats {
  totalContentVerified: number
  hoaxPercentage: number
  factPercentage: number
  inputFormats: {
    text: number
    image: number
    pdf: number
  }
  averageVerificationTime: number // in seconds
  deviceSources: {
    mobile: number
    web: number
    kiosk: number
  }
  timeRange: {
    start: string
    end: string
  }
}

// 8. Rekomendasi Kebijakan Berbasis AI
export interface PolicyRecommendation {
  id: string
  priority: 'low' | 'medium' | 'high' | 'urgent'
  recommendation: string
  targetRegion?: string
  targetTopic: string
  rationale: string
  suggestedActions: string[]
  estimatedImpact: string
  timeframe: string
}

export interface PolicyRecommendationsData {
  recommendations: PolicyRecommendation[]
  urgentCount: number
}

// 9. Dashboard Summary
export interface DashboardSummary {
  lastUpdated: string
  verificationStats: VerificationStats
  hoaxTrends: HoaxTrendData
  heatmap: HoaxHeatmapData
  literacy: LiteracyData
  facilityInsights: FacilityInsightsData
  emergingThreats: EmergingThreatData
  libraryInsights: LibraryInsight
  policyRecommendations: PolicyRecommendationsData
}

// Request/Response Types
export interface DashboardRequest {
  period?: 'daily' | 'weekly' | 'monthly'
  region?: string
  facilityId?: string
  startDate?: string
  endDate?: string
}

export interface DashboardResponse {
  summary: DashboardSummary
  timestamp: string
}

