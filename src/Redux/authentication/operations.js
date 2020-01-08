import { API } from '../../config';

export const signIn = async payload => {
  try {
    const res = await fetch(`${API}/pre-signup`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    return res.json();
  } catch (err) {
    console.log('Error', err);
  }
};

export const activate = async payload => {
  try {
    const res = await fetch(`${API}/signup`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ token: payload })
    });
    return res.json();
  } catch (err) {
    console.log('Error', err);
  }
};