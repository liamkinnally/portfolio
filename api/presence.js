const STATUS_MAP = {
  online: 'online',
  idle: 'away',
  dnd: 'busy',
  offline: 'offline',
};

export default async function handler(request, response) {
  if (request.method !== 'GET') {
    response.setHeader('Allow', 'GET');
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const userId = process.env.DISCORD_USER_ID;
  if (!userId) {
    return response.status(503).json({ error: 'Presence is not configured' });
  }

  try {
    const lanyardResponse = await fetch(`https://api.lanyard.rest/v1/users/${userId}`, {
      headers: { Accept: 'application/json' },
    });

    if (!lanyardResponse.ok) {
      return response.status(502).json({ error: 'Presence provider unavailable' });
    }

    const payload = await lanyardResponse.json();
    const discordStatus = payload?.data?.discord_status;
    const status = STATUS_MAP[discordStatus] ?? 'offline';

    response.setHeader('Cache-Control', 'public, s-maxage=20, stale-while-revalidate=40');
    return response.status(200).json({ status });
  } catch {
    return response.status(502).json({ error: 'Presence provider unavailable' });
  }
}
