import API_ENV from "../config/api.config.js";

export async function login(name, email, password) {
  try {
    const response = await fetch(`${API_ENV.apiUrl}`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        password
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    });

    const json = await response.json();
    console.log('Успех:', JSON.stringify(json));
    return json;

  } catch (err) {
    console.log('Ошибка:', err);
    return Promise.reject(err);
  }
}