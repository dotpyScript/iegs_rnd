import api from './api';

export const reportService = {
  getAll: async () => {
    const response = await api.get('/reports');
    return response.data;
  },

  getById: async (id) => {
    const response = await api.get(`/reports/${id}`);
    return response.data;
  },

  generate: async (reportType, params) => {
    const response = await api.post('/reports/generate', { type: reportType, params });
    return response.data;
  },

  download: async (id) => {
    const response = await api.get(`/reports/${id}/download`, {
      responseType: 'blob',
    });
    return response.data;
  },

  delete: async (id) => {
    const response = await api.delete(`/reports/${id}`);
    return response.data;
  },
};

