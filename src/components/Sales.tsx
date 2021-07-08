import { Card, Layout,TextStyle,ResourceList,ResourceListSelectedItems,ResourceItem} from "@shopify/polaris";
import { useState } from "react";
//news blog mail magazine sale
//sort　クリック数とか　売上数　絞り込み昨日
export default function Salse() {
    const [selectedItems, setSelectedItems] = useState<ResourceListSelectedItems>([]);

    

    return (
        <Layout.Section>
    <Card>
        <ResourceList
            resourceName={{singular: 'blog post', plural: 'blog posts'}}
            items={[
                {
                    id: '6',
                    url: 'posts/6',
                    title: 'How To Get Value From Wireframes',
                    author: 'Jonathan Mangrove',
                },
            ]}
                selectedItems={selectedItems}
                onSelectionChange={setSelectedItems}
                selectable
                renderItem={(item) => {
                const {id, url, title, author} = item;
                const authorMarkup = author ? <div>by {author}</div> : null;
                return (
                    <ResourceItem
                    id={id}
                    url={url}
                    accessibilityLabel={`View details for ${title}`}
                    name={title}
                    >
                    <h3>
                        <TextStyle variation="strong">{title}</TextStyle>
                    </h3>
                    {authorMarkup}
                    </ResourceItem>
                );
            }}
        />
    </Card>
    </Layout.Section>
    );
}