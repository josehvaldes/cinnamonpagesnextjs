
/* global process */
export async function register() {

    if (
        process.env.NEXT_RUNTIME === "nodejs" &&
        process.env.NEXT_PUBLIC_ENABLE_MOCKS === "true"
    ) {

        const { server } = await import("./mocks/server");

        server.listen({
            onUnhandledRequest: "bypass",
        });
    }
}