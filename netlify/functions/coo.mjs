export default async (req) => {
  if (req.method === 'OPTIONS') {
      return new Response(null, { headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST', 'Access-Control-Allow-Headers': 'Content-Type' } });
        }
          const apiKey = Netlify.env.get('ANTHROPIC_API_KEY');
            if (!apiKey) return new Response(JSON.stringify({ error: 'API key not configured' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
              const body = await req.json();
                const response = await fetch('https://api.anthropic.com/v1/messages', {
                    method: 'POST',
                        headers: { 'Content-Type': 'application/json', 'x-api-key': apiKey, 'anthropic-version': '2023-06-01' },
                            body: JSON.stringify(body),
                              });
                                const data = await response.json();
                                  return new Response(JSON.stringify(data), { status: response.status, headers: { 'Content-Type': 'application/json' } });
                                  };
                                  export const config = { path: '/api/coo' };
