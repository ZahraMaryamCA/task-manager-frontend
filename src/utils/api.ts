const API_BASE = "https://personal-task-manager-backend-mrkg.onrender.com/api";  // deployed backend URL

export const api = {
  getToken() {
    return localStorage.getItem("token");
  },

  headers() {
    const token = this.getToken();
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };
    
    // Backend expects token directly in Authorization header (no Bearer prefix)
    if (token) {
      headers.Authorization = token;
    }
    
    return headers;
  },

  async get(path: string) {
    const res = await fetch(`${API_BASE}${path}`, {
      method: "GET",
      headers: this.headers(),
    });
    
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Failed to fetch");
    }
    
    return res.json();
  },

  async post(path: string, body: any) {
    const res = await fetch(`${API_BASE}${path}`, {
      method: "POST",
      headers: this.headers(),
      body: JSON.stringify(body),
    });
    
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Failed to create");
    }
    
    return res.json();
  },

  async put(path: string, body: any) {
    const res = await fetch(`${API_BASE}${path}`, {
      method: "PUT",
      headers: this.headers(),
      body: JSON.stringify(body),
    });
    
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Failed to update");
    }
    
    return res.json();
  },

  async delete(path: string) {
    const res = await fetch(`${API_BASE}${path}`, {
      method: "DELETE",
      headers: this.headers(),
    });
    
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Failed to delete");
    }
    
    return res.json();
  },
};
