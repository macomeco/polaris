import { Card,DataTable, Layout, } from "@shopify/polaris";
import OrderSort from "./OrderSort";
//Saleの売り上げ　にんきしょうひん、金額 クーポン利用など
export default function Orders(){

    const status:string[] = ['新規受付','発送準備','発送中','発送済み','キャンセル'];
    const numberOfSales:number[]=[12,2,24,189];
    const quantity:number[]=[140,140,140,140];
    const test:number=233
    const profit:number[]=[test,1234,12334,112345];
    
    const rows = 
        [
            [status[0], numberOfSales[0], quantity[0], 30,'¥'+profit[0] ],
            [status[1], numberOfSales[1], quantity[1], 20,'¥'+profit[1]],
            [status[2], numberOfSales[2], quantity[2], 30,'¥'+ profit[2]],
            [status[3], numberOfSales[3], quantity[3], 60,'¥'+profit[3] ]
        ];

        return (<>
            <Layout.Section>
                <Card>
                    <DataTable
                        columnContentTypes={[
                        'text', //テキスト
                        'numeric',  //数値
                        'numeric','numeric','numeric',
                        ]}
                        headings={[
                            '状況','件数','個数','客数','売上',
                        ]}
                        rows={rows}
                        totals={['', 200,  560,200, '¥'+profit.reduce(function(a,b){return a+b})]}
                        showTotalsInFooter
                    />
                </Card>
            </Layout.Section>
            <OrderSort />

        </>);
}