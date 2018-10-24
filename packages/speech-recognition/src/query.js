export async function query(query, variables, options) {
  const body = JSON.stringify({ query, variables });

  const response = await fetch('/graphql', {
    body,
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    ...options
  });

  return response.json();
}
