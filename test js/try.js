// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQDQ5tnzxno15v4fxTCYTjF2NcD7j9vD0GNlpHUh0DtdzKwGE_fki62LlzzFjNMue6R32kkYR9V9iZavecp4TRk9qsBNPVKwk0pBFg4iQvYqO5Qa73g';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

async function lastplayed() {
  return(await fetchWebApi('v1/me/player/recently-played', 'GET')).items[0].track.name;
}

async function current() {
  return(await fetchWebApi('v1/me/player/currently-playing', 'GET')).item.name;
}

async function main() {
  console.log(
    recommendedTracks?.map(
      ({name, artists}) =>
        `${name} by ${artists.map(artist => artist.name).join(', ')}`
    )
  );
}

main();
