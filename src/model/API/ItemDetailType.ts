export default interface ItemDetail{
    icon: string,
    icon_large: string,
    id: number,
    type: string,
    typeIcon: string,
    name: string,
    description: string,
    current: ItemTrend,
    today: ItemTrend,
    members: boolean,
    day30: ItemTrend,
    day90: ItemTrend,
    day180: ItemTrend
}


interface ItemTrend {
    trend: string;
    price?: string;
    change?: string;
}