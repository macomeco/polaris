import { Card, Layout } from "@shopify/polaris";

export default function ToDo(){
    return(
        <>
        <Layout.Section>
        <Card>
        <Card.Section>
            やることリスト
            Contents   一括管理
            Setting 管理者以外のユーザー設定とか
        </Card.Section>
        </Card>
        </Layout.Section>
        </>
    );
}