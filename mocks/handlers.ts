import { delay, http, HttpResponse } from 'msw';
import { heroData } from './mockData';

const ENDPOINT_LATENCY_MS = {
    health: { base: 120, jitter: 80 },
    homepage: { base: 450, jitter: 300 },
    productDetails: { base: 800, jitter: 500 },
    products : { base: 500, jitter: 200 },
} as const;

async function simulateLatency(
    endpoint: keyof typeof ENDPOINT_LATENCY_MS
): Promise<void> {
    const { base, jitter } = ENDPOINT_LATENCY_MS[endpoint];
    const randomized = base + Math.floor(Math.random() * (jitter + 1));
    await delay(randomized);
}


export const handlers = [
    
    http.get(/\/api\/health$/i, async () => {
        await simulateLatency('health');
        console.log(`Mock health check response: Healthy`);
        return HttpResponse.text('Healthy');
    }),
    http.get(/\/v1\/homepage\/hero$/i, async () => {
        await simulateLatency('homepage');
        return HttpResponse.json(heroData);
    })
   
]
