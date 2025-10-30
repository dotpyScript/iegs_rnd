import api from './api';

export const droneService = {
  getAll: async () => {
    const response = await api.get('/drones');
    return response.data;
  },

  getById: async (id) => {
    const response = await api.get(`/drones/${id}`);
    return response.data;
  },

  create: async (droneData) => {
    const response = await api.post('/drones', droneData);
    return response.data;
  },

  update: async (id, droneData) => {
    const response = await api.put(`/drones/${id}`, droneData);
    return response.data;
  },

  delete: async (id) => {
    const response = await api.delete(`/drones/${id}`);
    return response.data;
  },

  getFlightStats: async () => {
    const response = await api.get('/drones/flight-stats');
    return response.data;
  },

  scheduleFlight: async (flightData) => {
    const response = await api.post('/drones/flights', flightData);
    return response.data;
  },
};

