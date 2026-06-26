import "server-only";

export const API_BASE_URL =
    process.env.API_BASE_URL ||
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://localhost:44350/api";

export const API_KEY = process.env.API_KEY || "your-api-key-here"; // Replace with your actual API key or use environment variables 

export async function healthCheckStatus(): Promise<string> {

    console.log(`Performing health check at: ${API_BASE_URL}/health`);
    try
    {
        const response = await fetch(`${API_BASE_URL}/health`, {
            headers: {
                "x-api-key": API_KEY
            }
        });
        if (!response.ok) {
            console.error(`.Health check failed with status: ${response.status}`);
            throw new Error(`Health check failed with status: ${response.status}`);
        }
        return response.text();
    }
    catch (error) {
        console.error(`.Health check failed: ${error}`);
        console.error(error);
        throw error;
    }
    
}