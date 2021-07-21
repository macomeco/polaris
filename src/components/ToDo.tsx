import { Card, Layout } from "@shopify/polaris";

export default function ToDo(){
    return(
        <>
        <Layout.Section>
        <Card>
        <Card.Section>
            memo
            Contents   一括管理
            Setting 管理者以外のユーザー設定とか
            検索は上のとこに統一 header? 統一か個別か　個別の方がごちゃつかなくていい？検索できる範囲の限定なども


        </Card.Section>
        </Card>
        </Layout.Section>
        </>
    );
}