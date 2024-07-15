const API_BASE_URL = 'https://x8ki-letl-twmt.n7.xano.io/api:M2OpT1yH/suggestions';

export const getSuggestions = async (taskDetails: any) => {
  const response = await fetch(`${API_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(taskDetails),
  });
  return await response.json();
};
