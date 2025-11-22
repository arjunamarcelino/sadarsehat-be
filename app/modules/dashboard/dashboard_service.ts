import {
  DashboardRequest,
  DashboardResponse,
  DashboardSummary,
  HoaxTrendData,
  HoaxHeatmapData,
  LiteracyData,
  FacilityInsightsData,
  EmergingThreatData,
  LibraryInsight,
  VerificationStats,
  PolicyRecommendationsData,
} from './dashboard_types.js'

class DashboardService {
  getHoaxTrends(request?: DashboardRequest): Promise<HoaxTrendData> {
    const topics = ['Vaksin', 'COVID-19', 'Herbal', 'JKN', 'Nutrisi', 'Ibu-Anak', 'Obat Generik']
    const trends: Array<{ date: string; count: number; topTopics: string[] }> = []

    // Generate last 30 days
    for (let i = 29; i >= 0; i--) {
      const date = new Date()
      date.setDate(date.getDate() - i)
      trends.push({
        date: date.toISOString().split('T')[0],
        count: Math.floor(Math.random() * 200) + 50,
        topTopics: topics.sort(() => Math.random() - 0.5).slice(0, 3),
      })
    }

    return Promise.resolve({
      period: request?.period || 'daily',
      trends,
      topTopics: [
        { topic: 'Vaksin', count: 1250, percentage: 32.5 },
        { topic: 'COVID-19', count: 980, percentage: 25.4 },
        { topic: 'Herbal', count: 650, percentage: 16.9 },
        { topic: 'JKN', count: 520, percentage: 13.5 },
        { topic: 'Nutrisi', count: 450, percentage: 11.7 },
      ],
      spikes: [
        { date: new Date().toISOString().split('T')[0], topic: 'Vaksin DPT', increasePercentage: 340 },
        { date: new Date(Date.now() - 86400000 * 3).toISOString().split('T')[0], topic: 'Obat Herbal', increasePercentage: 240 },
      ],
    })
  }

  getHeatmap(request?: DashboardRequest): Promise<HoaxHeatmapData> {
    const provinces = [
      'Jawa Barat', 'Jawa Timur', 'Jawa Tengah', 'DKI Jakarta', 'Sumatera Utara',
      'Sulawesi Selatan', 'Sumatera Selatan', 'Banten', 'Bali', 'Lampung',
    ]

    let filteredProvinces = provinces
    if (request?.region) {
      filteredProvinces = provinces.filter((p) => p.toLowerCase().includes(request.region!.toLowerCase()))
    }

    const distributions = filteredProvinces.map((province, index) => ({
      province,
      hoaxCount: Math.floor(Math.random() * 500) + 100,
      intensity: (index < 3 ? 'critical' : index < 6 ? 'high' : index < 8 ? 'medium' : 'low') as 'low' | 'medium' | 'high' | 'critical',
      hotspot: index < 4,
    }))

    return Promise.resolve({
      distributions,
      totalHotspots: distributions.filter((d) => d.hotspot).length,
      criticalProvinces: distributions.filter((d) => d.intensity === 'critical').map((d) => d.province),
    })
  }

  getLiteracyData(request?: DashboardRequest): Promise<LiteracyData> {
    const regions = [
      'DKI Jakarta', 'Jawa Barat', 'Jawa Timur', 'Jawa Tengah', 'Sumatera Utara',
      'Sulawesi Selatan', 'Yogyakarta', 'Bali',
    ]

    const regionalScores = regions.map((region) => ({
      region,
      averageScore: Math.floor(Math.random() * 30) + 60,
      totalParticipants: Math.floor(Math.random() * 5000) + 1000,
      frequentlyMissedTopics: [
        { topic: 'Vaksin COVID-19', errorRate: 35 },
        { topic: 'Obat Herbal', errorRate: 28 },
        { topic: 'JKN', errorRate: 22 },
      ],
      ageGroupScores: [
        { ageGroup: '18-30', averageScore: 72 },
        { ageGroup: '31-45', averageScore: 68 },
        { ageGroup: '46-60', averageScore: 65 },
        { ageGroup: '60+', averageScore: 62 },
      ],
    }))

    let filteredScores = regionalScores
    if (request?.region) {
      filteredScores = regionalScores.filter((r) => r.region.toLowerCase().includes(request.region!.toLowerCase()))
    }

    return Promise.resolve({
      nationalAverage: 67,
      regionalScores: filteredScores,
      topMissedTopics: [
        { topic: 'Vaksin dapat mengubah DNA', errorRate: 42, affectedRegions: ['Jawa Barat', 'Jawa Timur'] },
        { topic: 'Obat herbal lebih aman dari obat kimia', errorRate: 38, affectedRegions: ['Jawa Tengah', 'Sumatera Utara'] },
        { topic: 'JKN tidak menanggung penyakit tertentu', errorRate: 31, affectedRegions: ['Sulawesi Selatan', 'Bali'] },
      ],
    })
  }

  getFacilityInsights(request?: DashboardRequest): Promise<FacilityInsightsData> {
    const facilities = [
      {
        facilityId: 'faskes_001',
        facilityName: 'Puskesmas Ciputat',
        facilityType: 'puskesmas' as const,
        region: 'Jawa Barat',
      },
      {
        facilityId: 'faskes_002',
        facilityName: 'RSUD Dr. Soetomo',
        facilityType: 'rumah_sakit' as const,
        region: 'Jawa Timur',
      },
      {
        facilityId: 'faskes_003',
        facilityName: 'Puskesmas Menteng',
        facilityType: 'puskesmas' as const,
        region: 'DKI Jakarta',
      },
    ]

    const facilityInsights = facilities.map((facility) => ({
      ...facility,
      frequentlyAskedHoaxes: [
        { hoax: 'Vaksin COVID-19 mengandung chip', count: Math.floor(Math.random() * 50) + 20 },
        { hoax: 'Obat generik tidak efektif', count: Math.floor(Math.random() * 40) + 15 },
        { hoax: 'JKN tidak menanggung operasi', count: Math.floor(Math.random() * 30) + 10 },
      ],
      questionTrends: Array.from({ length: 7 }, (_, i) => {
        const date = new Date()
        date.setDate(date.getDate() - (6 - i))

        return {
          date: date.toISOString().split('T')[0],
          questionCount: Math.floor(Math.random() * 30) + 10,
        }
      }),
      priorityContentNeeds: ['Vaksinasi', 'JKN Benefits', 'Obat Generik'],
    }))

    let filteredFacilities = facilityInsights
    if (request?.facilityId) {
      filteredFacilities = facilityInsights.filter((f) => f.facilityId === request.facilityId)
    }
    if (request?.region) {
      filteredFacilities = filteredFacilities.filter((f) => f.region.toLowerCase().includes(request.region!.toLowerCase()))
    }

    return Promise.resolve({
      facilities: filteredFacilities,
      topAskedHoaxes: [
        { hoax: 'Vaksin COVID-19 mengandung chip', count: 125, facilities: ['Puskesmas Ciputat', 'RSUD Dr. Soetomo'] },
        { hoax: 'Obat generik tidak efektif', count: 98, facilities: ['Puskesmas Menteng', 'Puskesmas Ciputat'] },
        { hoax: 'JKN tidak menanggung operasi', count: 76, facilities: ['RSUD Dr. Soetomo'] },
      ],
    })
  }

  getEmergingThreats(request?: DashboardRequest): Promise<EmergingThreatData> {
    return Promise.resolve({
      threats: [
        {
          id: 'threat_001',
          hoaxContent: 'Vaksin DPT menyebabkan autisme pada anak',
          firstDetected: new Date(Date.now() - 86400000 * 2).toISOString(),
          spikePercentage: 340,
          timeWindow: '24 jam',
          relatedTopics: ['Vaksin', 'DPT', 'Autisme', 'Anak'],
          severity: 'critical',
          isNewPattern: true,
          correlationTopics: ['Vaksin', 'Ibu-Anak'],
        },
        {
          id: 'threat_002',
          hoaxContent: 'Obat herbal dapat menggantikan semua obat dokter',
          firstDetected: new Date(Date.now() - 86400000 * 5).toISOString(),
          spikePercentage: 240,
          timeWindow: '48 jam',
          relatedTopics: ['Herbal', 'Obat', 'Pengobatan Alternatif'],
          severity: 'high',
          isNewPattern: false,
          correlationTopics: ['Herbal', 'Obat Generik'],
        },
        {
          id: 'threat_003',
          hoaxContent: 'JKN akan dihapus tahun 2025',
          firstDetected: new Date(Date.now() - 86400000 * 7).toISOString(),
          spikePercentage: 180,
          timeWindow: '72 jam',
          relatedTopics: ['JKN', 'BPJS', 'Asuransi Kesehatan'],
          severity: 'medium',
          isNewPattern: false,
        },
      ],
      criticalAlerts: 1,
      newPatterns: 1,
    })
  }

  getLibraryInsights(request?: DashboardRequest): Promise<LibraryInsight> {
    return Promise.resolve({
      mostVerifiedHoaxes: [
        { hoax: 'Vaksin COVID-19 mengubah DNA', verificationCount: 3450, fact: 'Vaksin tidak mengubah DNA manusia' },
        { hoax: 'HIV menular melalui keringat', verificationCount: 2890, fact: 'HIV tidak menular melalui keringat' },
        { hoax: 'Minum 8 gelas air wajib setiap hari', verificationCount: 2150, fact: 'Kebutuhan air bervariasi per individu' },
        { hoax: 'Makanan organik selalu lebih sehat', verificationCount: 1980, fact: 'Tidak ada bukti konsisten makanan organik lebih bergizi' },
        { hoax: 'Detoks dengan jus membersihkan racun', verificationCount: 1650, fact: 'Tubuh memiliki sistem detoksifikasi alami' },
      ],
      mostReadFacts: [
        { fact: 'Cara mencegah COVID-19', readCount: 12500, category: 'Penyakit Menular' },
        { fact: 'Manfaat vaksinasi', readCount: 9800, category: 'Vaksinasi' },
        { fact: 'Hak dan kewajiban peserta JKN', readCount: 8700, category: 'JKN' },
        { fact: 'Nutrisi seimbang untuk anak', readCount: 7200, category: 'Nutrisi' },
        { fact: 'Olahraga untuk kesehatan mental', readCount: 6500, category: 'Gaya Hidup' },
      ],
      mostAccessedContent: [
        { contentTitle: 'Panduan Lengkap JKN', accessCount: 15200, contentType: 'PDF' },
        { contentTitle: 'Mitos dan Fakta Vaksin', accessCount: 12800, contentType: 'Artikel' },
        { contentTitle: 'Video: Cara Mencuci Tangan yang Benar', accessCount: 11200, contentType: 'Video' },
        { contentTitle: 'Infografis: Gejala COVID-19', accessCount: 9800, contentType: 'Infografis' },
        { contentTitle: 'E-book: Gizi Seimbang', accessCount: 8900, contentType: 'E-book' },
      ],
    })
  }

  getVerificationStats(request?: DashboardRequest): Promise<VerificationStats> {
    const startDate = request?.startDate ? new Date(request.startDate) : new Date(Date.now() - 86400000 * 30)
    const endDate = request?.endDate ? new Date(request.endDate) : new Date()

    return Promise.resolve({
      totalContentVerified: 45678,
      hoaxPercentage: 62.5,
      factPercentage: 37.5,
      inputFormats: {
        text: 28500,
        image: 12500,
        pdf: 4678,
      },
      averageVerificationTime: 3.2,
      deviceSources: {
        mobile: 32000,
        web: 9800,
        kiosk: 3878,
      },
      timeRange: {
        start: startDate.toISOString(),
        end: endDate.toISOString(),
      },
    })
  }

  getPolicyRecommendations(request?: DashboardRequest): Promise<PolicyRecommendationsData> {
    return Promise.resolve({
      recommendations: [
        {
          id: 'rec_001',
          priority: 'urgent',
          recommendation: 'Luncurkan edukasi terkait vaksin DPT di Jawa Barat minggu ini',
          targetRegion: 'Jawa Barat',
          targetTopic: 'Vaksin DPT',
          rationale: 'Spike 340% dalam 24 jam terakhir, pola baru terdeteksi',
          suggestedActions: [
            'Buat konten edukasi khusus vaksin DPT',
            'Distribusikan ke puskesmas di Jawa Barat',
            'Lakukan kampanye media sosial',
          ],
          estimatedImpact: 'Dapat mengurangi misinformasi hingga 40%',
          timeframe: '1 minggu',
        },
        {
          id: 'rec_002',
          priority: 'high',
          recommendation: 'Topik misleading tentang obat herbal meningkat 240%',
          targetTopic: 'Obat Herbal',
          rationale: 'Peningkatan signifikan dalam 48 jam terakhir',
          suggestedActions: [
            'Perkuat konten tentang penggunaan obat herbal yang benar',
            'Kolaborasi dengan tenaga kesehatan',
            'Update library dengan fakta terkini',
          ],
          estimatedImpact: 'Dapat mengurangi misinformasi hingga 30%',
          timeframe: '2 minggu',
        },
        {
          id: 'rec_003',
          priority: 'medium',
          recommendation: 'Tambahkan konten gizi anak di library edukasi',
          targetTopic: 'Nutrisi',
          rationale: 'Tingkat kesalahan tinggi pada topik nutrisi anak (error rate 38%)',
          suggestedActions: [
            'Buat konten gizi anak yang komprehensif',
            'Sertakan infografis dan video',
            'Distribusikan ke faskes prioritas',
          ],
          estimatedImpact: 'Dapat meningkatkan literasi gizi hingga 25%',
          timeframe: '3 minggu',
        },
        {
          id: 'rec_004',
          priority: 'high',
          recommendation: 'Fokus edukasi JKN di Sulawesi Selatan dan Bali',
          targetRegion: 'Sulawesi Selatan, Bali',
          targetTopic: 'JKN',
          rationale: 'Error rate tinggi (31%) pada topik JKN di kedua wilayah',
          suggestedActions: [
            'Buat konten lokal tentang manfaat JKN',
            'Lakukan sosialisasi di puskesmas',
            'Kolaborasi dengan BPJS Kesehatan',
          ],
          estimatedImpact: 'Dapat meningkatkan pemahaman JKN hingga 35%',
          timeframe: '2 minggu',
        },
      ],
      urgentCount: 1,
    })
  }

  async getDashboard(request: DashboardRequest): Promise<DashboardResponse> {
    // Generate all dashboard components
    const [
      verificationStats,
      hoaxTrends,
      heatmap,
      literacy,
      facilityInsights,
      emergingThreats,
      libraryInsights,
      policyRecommendations,
    ] = await Promise.all([
      this.getVerificationStats(request),
      this.getHoaxTrends(request),
      this.getHeatmap(request),
      this.getLiteracyData(request),
      this.getFacilityInsights(request),
      this.getEmergingThreats(request),
      this.getLibraryInsights(request),
      this.getPolicyRecommendations(request),
    ])

    const summary: DashboardSummary = {
      lastUpdated: new Date().toISOString(),
      verificationStats,
      hoaxTrends,
      heatmap,
      literacy,
      facilityInsights,
      emergingThreats,
      libraryInsights,
      policyRecommendations,
    }

    return {
      summary,
      timestamp: new Date().toISOString(),
    }
  }
}

export default new DashboardService()

