interface Send {
    authorization:Array<Authorization>;
    from: string;
    to: string;
    quantity: string;
    memo: string;
    privateKeys: Array<string>;
}
interface NewAccount {
    creator: string;
    name:string;
    authorization:Array<Authorization>;
    owner: Owner,
    active: Active,
    buyBytes: BuyBytes;
    delegatebw: Delegatebw;
    privateKeys: Array<string>;
}
interface Authorization{
    actor: string;
    permission: string;
}
interface Owner {
    threshold: number;
    keys: Array<Key>;
    accounts: [];
    waits: [];
}
interface Active {
    threshold: number;
    keys: Array<Key>;
    accounts: [];
    waits: [];
}
interface Key {
    key: string;
    weight: number;
}

interface BuyBytes {
    payer: string;
    receiver: string;
    bytes: number;
}
interface Delegatebw {
    from: string;
    receiver: string;
    stake_net_quantity: string;
    stake_cpu_quantity: string;
    transfer: boolean;
}

export {
    Send,
    NewAccount
}