import "server-only";
import { getRequest } from "./genericRequest";

export async function healthCheckStatus(): Promise<string> {
    return getRequest<string>("health", { excludeApiVersion: true });
}