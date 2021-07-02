import { apiURL } from '../containers/App/constants';

export async function getAPI() {
  try {
    const res = await fetch(`${apiURL}`, {
      method: 'GET',
      header: { 'Content-type': 'application/json' },
    });
    return await res.json();
  } catch (err) {
    throw err;
  }
}
