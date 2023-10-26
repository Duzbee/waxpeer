/// <reference types="node" />
import { EventEmitter } from 'events';
export declare class TradeWebsocket extends EventEmitter {
    private apiKey;
    private steamid;
    private tradelink;
    private w;
    socketOpen: boolean;
    constructor(apiKey: string, steamid: string, tradelink: string);
    connectWss(): Promise<void>;
}
