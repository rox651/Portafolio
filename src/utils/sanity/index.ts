import { createClient } from "@sanity/client";

export const client = createClient({
	projectId: "qnn7w6ta",
	dataset: "production",
	apiVersion: "2024-01-01",
	useCdn: false,
});
