export default {
  async fetch(request) {
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      });
    }
    const body = await request.text();
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': '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',
        'anthropic-version': '2023-06-01',
      },
      body,
    });
    const data = await response.text();
    return new Response(data, {
      status: response.status,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    });
  }
};
