import { isAddress } from "viem";
import { z } from "zod";

// TODO: This node should be decided by making a read call from the RiverRegistry in RiverChain 
// over rpc first and pick an active node's url.
const MAIN_NODE = 'https://river1.nodes.gamma.towns.com'

export const getNodeData = async () => {
    const res = await fetch(`${MAIN_NODE}/debug/multi/json`)
    return res.json() as Promise<NodeStatusSchema>
};

const zodAddress = z.string().refine(isAddress)
export type NodeStatusSchema = z.infer<typeof nodeStatusSchema>

export const nodeStatusSchema = z.object({
    nodes: z.array(
        z.union([
            z.object({
                record: z.object({
                    address: zodAddress,
                    url: z.string(),
                    operator: zodAddress,
                    status: z.number(),
                    status_text: z.string(),
                }),
                http11: z.object({
                    success: z.boolean(),
                    status: z.number(),
                    status_text: z.string(),
                    elapsed: z.string(),
                    elapsed_after_dns: z.string(),
                    elapsed_after_conn: z.string(),
                    response: z.object({
                        status: z.string(),
                        instance_id: z.string(),
                        address: z.string(),
                        version: z.string(),
                        start_time: z.string(),
                        uptime: z.string(),
                        graffiti: z.string(),
                    }),
                    protocol: z.string(),
                    used_tls: z.boolean(),
                    remote_address: z.string(),
                    dns_addresses: z.array(z.string()),
                }),
                http20: z.object({
                    success: z.boolean(),
                    status: z.number(),
                    status_text: z.string(),
                    elapsed: z.string(),
                    elapsed_after_dns: z.string(),
                    elapsed_after_conn: z.string(),
                    response: z.object({
                        status: z.string(),
                        instance_id: z.string(),
                        address: z.string(),
                        version: z.string(),
                        start_time: z.string(),
                        uptime: z.string(),
                        graffiti: z.string(),
                    }),
                    protocol: z.string(),
                    used_tls: z.boolean(),
                    remote_address: z.string(),
                    dns_addresses: z.array(z.string()),
                }),
                grpc: z.object({
                    success: z.boolean(),
                    status_text: z.string(),
                    elapsed: z.string(),
                    elapsed_after_dns: z.string(),
                    elapsed_after_conn: z.string(),
                    version: z.string(),
                    start_time: z.string(),
                    uptime: z.string(),
                    graffiti: z.string(),
                    protocol: z.string(),
                    x_http_version: z.string(),
                    remote_address: z.string(),
                    dns_addresses: z.array(z.string()),
                }),
                river_eth_balance: z.string(),
            }),
            z.object({
                record: z.object({
                    address: zodAddress,
                    url: z.string(),
                    operator: zodAddress,
                    status: z.number(),
                    status_text: z.string(),
                }),
                local: z.boolean(),
                http11: z.object({
                    success: z.boolean(),
                    status: z.number(),
                    status_text: z.string(),
                    elapsed: z.string(),
                    elapsed_after_dns: z.string(),
                    elapsed_after_conn: z.string(),
                    response: z.object({
                        status: z.string(),
                        instance_id: z.string(),
                        address: z.string(),
                        version: z.string(),
                        start_time: z.string(),
                        uptime: z.string(),
                        graffiti: z.string(),
                    }),
                    protocol: z.string(),
                    used_tls: z.boolean(),
                    remote_address: z.string(),
                    dns_addresses: z.array(z.string()),
                }),
                http20: z.object({
                    success: z.boolean(),
                    status: z.number(),
                    status_text: z.string(),
                    elapsed: z.string(),
                    elapsed_after_dns: z.string(),
                    elapsed_after_conn: z.string(),
                    response: z.object({
                        status: z.string(),
                        instance_id: z.string(),
                        address: z.string(),
                        version: z.string(),
                        start_time: z.string(),
                        uptime: z.string(),
                        graffiti: z.string(),
                    }),
                    protocol: z.string(),
                    used_tls: z.boolean(),
                    remote_address: z.string(),
                    dns_addresses: z.array(z.string()),
                }),
                grpc: z.object({
                    success: z.boolean(),
                    status_text: z.string(),
                    elapsed: z.string(),
                    elapsed_after_dns: z.string(),
                    elapsed_after_conn: z.string(),
                    version: z.string(),
                    start_time: z.string(),
                    uptime: z.string(),
                    graffiti: z.string(),
                    protocol: z.string(),
                    x_http_version: z.string(),
                    remote_address: z.string(),
                    dns_addresses: z.array(z.string()),
                }),
                river_eth_balance: z.string(),
            }),
        ]),
    ),
    query_time: z.string(),
    elapsed: z.string(),
})
