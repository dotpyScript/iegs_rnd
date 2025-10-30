import api from './api';

export const teamService = {
  getAll: async () => {
    const response = await api.get('/team');
    return response.data;
  },

  getById: async (id) => {
    const response = await api.get(`/team/${id}`);
    return response.data;
  },

  create: async (memberData) => {
    const response = await api.post('/team', memberData);
    return response.data;
  },

  update: async (id, memberData) => {
    const response = await api.put(`/team/${id}`, memberData);
    return response.data;
  },

  delete: async (id) => {
    const response = await api.delete(`/team/${id}`);
    return response.data;
  },
};

