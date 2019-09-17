import { Rpc } from './rpc'
class Query {
    private rpc: any;
    constructor() {
        this.rpc = Rpc.getRpc();
    }
    public async queryBlockInfo(): Promise<string> {
        // 获取区块信息
        const block_info = await this.rpc.get_info();
        return JSON.stringify(block_info);
    }
    public async queryBlockByBlockNum(head_block_num: number): Promise<string> {
        const block = await this.rpc.get_block(head_block_num);
        //console.log('timestamp:', block.timestamp)
        //console.log('ref_block_prefix:', block.ref_block_prefix)
        return JSON.stringify(block);
    }
    public async queryAccountInfo(): Promise<string> {
        const accountInfo = await this.rpc.get_account('invaulteos11');
        return JSON.stringify(accountInfo);
    }
    public async queryAccountBalance(): Promise<any> {
        //获取账号invaulteos11的资产,查询资产的时候要加上资产的合约名字eosio.token
        const balance = await this.rpc.get_currency_balance('eosio.token', 'invaulteos11');
        return balance;
    }
}

export {
    Query
}