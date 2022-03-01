import api from '@/services/api'

export default {
  fetchHeroesList() {
    return api.get(`all_heroes`)
              .then(response => response.data)
  }
}