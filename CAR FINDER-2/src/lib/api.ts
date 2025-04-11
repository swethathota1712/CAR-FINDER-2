import axios from 'axios';
import type { JobApplication } from '../types';

const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
  throw new Error('VITE_API_URL environment variable is not set');
}

export const api = {
  async getJobs() {
    const { data } = await axios.get<JobApplication[]>(`${API_URL}/jobs`);
    return data;
  },

  async createJob(job: Omit<JobApplication, '_id'>) {
    const { data } = await axios.post<JobApplication>(`${API_URL}/jobs`, job);
    return data;
  },

  async updateJob(id: string, job: Partial<JobApplication>) {
    const { data } = await axios.patch<JobApplication>(`${API_URL}/jobs/${id}`, job);
    return data;
  },

  async deleteJob(id: string) {
    await axios.delete(`${API_URL}/jobs/${id}`);
  }
};