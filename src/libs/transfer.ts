import { Rpc } from './rpc';
import { SystemAccount, AbiType } from './model/utils';
import { Send } from './model/entity';
class Transfer {
    private api: any;
    constructor() {
    }
    public async send(entity: Send): Promise<any> {
        this.api = Rpc.getApi(entity.privateKeys);
        const result = await this.api.transact({
            actions: [{
                account: SystemAccount.EOSTOKEN,
                name: AbiType.TRANSFER,
                authorization: entity.authorization,
                data: {
                    from: entity.from,
                    to: entity.to,
                    quantity: entity.quantity,
                    memo: entity.memo
                }
            }]
        }, {
                blocksBehind: 3,
                expireSeconds: 30,
                broadcast: true
            });
        console.log('广播签名结果：', result);
        return result;
    }
}

export {
    Transfer
}