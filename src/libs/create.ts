import { Rpc } from './rpc';
import { SystemAccount, AbiType } from './model/utils';
import { NewAccount } from './model/transaction';
class Create {
    private api: any;
    public async createAccount(entity: NewAccount): Promise<any> {
        this.api = Rpc.getApi(entity.privateKeys);
        const result = await this.api.transact({
            actions: [
                {
                    account: SystemAccount.EOSIO,
                    name: AbiType.NEWACCOUNT,
                    authorization: entity.authorization,
                    data: {
                        creator: entity.creator,
                        name: entity.name,
                        owner: entity.owner,
                        active: entity.active,
                    }
                },
                {
                    account: SystemAccount.EOSIO,
                    name: AbiType.BUYRAMBYTES,
                    authorization: entity.authorization,
                    data: entity.buyBytes
                },
                {
                    account: SystemAccount.EOSIO,
                    name: AbiType.DELEGATEBW,
                    authorization: entity.authorization,
                    data: entity.delegatebw
                }
            ],
        }, {
                blocksBehind: 3,
                expireSeconds: 300,
                broadcast: true
            });
        console.log('广播签名结果：', JSON.stringify(result));
    }
}
export {
    Create
}