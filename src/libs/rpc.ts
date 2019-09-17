
//import { Api, JsonRpc, Serialize } from 'eosjs';
//import { JsSignatureProvider } from 'eosjs/dist/eosjs-jssig';
//import { TextDecoder, TextEncoder } from 'text-encoding';

const { JsonRpc, Api } = require('eosjs');
const { JsSignatureProvider } = require('eosjs/dist/eosjs-jssig');
const fetch = require('node-fetch');
// const { Api, JsonRpc, Serialize } = require('eosjs');
// const { JsSignatureProvider } = require('eosjs/dist/eosjs-jssig');
// const fetch = require('node-fetch');
const { TextDecoder, TextEncoder } = require('text-encoding');
// const eosjsApi = require('eosjs-api');
// const abiJson = require('../config/transaction.abi');
class Rpc {
    private static rpc_url: string = 'https://jungle2.cryptolions.io:443';
    private static chain_id: string = 'e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473';
    //private rpc?: JsonRpc;
    constructor() {
        //const signatureProvider = new JsSignatureProvider(config.private_keys);
        // this.config = config;
        // this.rpc = rpc;

        // this.eosjsApi = new eosjsApi({
        //     httpEndpoint: config.rpc_api
        // });
        // this.transactionTypes = Serialize.getTypesFromAbi(Serialize.createInitialTypes(), abiJson);
        // this.newBuffer = new Serialize.SerialBuffer({
        //     textEncoder: new TextDecoder(),
        //     textDecoder: new TextEncoder()
        // });
    }
    public static getRpc(): any {
        //this.rpc = new JsonRpc(this.rpc_url, { fetch });
        return new JsonRpc(this.rpc_url, { fetch });
    }
    public static getApi(private_keys: any): any {
        const signatureProvider = new JsSignatureProvider(private_keys);
        const rpc: any = this.getRpc();
        return new Api({
            rpc,
            signatureProvider,
            chainId: this.chain_id,
            textDecoder: new TextDecoder(),
            textEncoder: new TextEncoder()
        });
    }
}

export {
    Rpc
}