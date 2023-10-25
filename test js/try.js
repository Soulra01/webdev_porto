// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQDXlCGuf4z0Nq4IT0LcAmVto_U_1IyP5wnQaSZymmU1VStQqJGYfebuQdlAymJ00mpfmwRvBdDHOz2E220ml7jP6UAf3fQ4E0QtrjXjcjwH7wARdo8Sh1Fsajl4cL2WQJw0NtlXuQxIAawnoSuMh-prfpL1gf7_K5VPRdaUA_L5L6h89FISDr5Fn9OW0F9-1YW3KH_QBhBGSWs5RkumN9LApp2u8acJ7xTlY7k6q36zDU8RzfSL4TnaTs8LGKXO8U4';
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

async function getTopTracks(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=short_term&limit=5', 'GET'
  )).items;
}

async function main() {
    const topTracks = await getTopTracks();
    console.log(
      topTracks?.map(({ name, artists }) =>
        `${name} by ${artists.map(artist => artist.name).join(', ')}`
      )
    );
  }
  
  main();
  