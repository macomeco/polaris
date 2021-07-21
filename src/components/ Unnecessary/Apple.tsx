import { ActionList, Button,Card,Layout, List, Popover, TextContainer } from "@shopify/polaris";
import { HomeMajor } from "@shopify/polaris-icons";
import { useCallback, useState } from "react";

export default function Apple(){
    //Popover
    const [popover, setPopover] = useState(false);
    const togglePopover=useCallback(
        ()=>setPopover((popover)=>!popover),
    [],);
    const activator=(
        <Button onClick={togglePopover} disclosure plain>
            More
        </Button>
    );
    const cardOK = useCallback(
        ()=>{},[]
    )

    return(<>
        <Layout sectioned>
        <Layout.Section>
            <Card secondaryFooterActions={[{content:'NG'}]} primaryFooterAction={{content:'OK' ,loading:false, onAction:cardOK, outline:false, icon:HomeMajor  }} >
                <Card.Header
                    title="APPLE"
                    actions={[
                        {
                            content: 'action',
                            url: '/'
                        },
                        {
                            content:'action2',
                            url:'/'
                            
                        }
                    ]}
                >
                <Popover
                    active={popover}
                    activator={activator}
                    onClose={togglePopover}
                >
                <ActionList items={[{content: 'action3'}, {content: 'action4'}]} />
                </Popover>
                </Card.Header>

                <Card.Section>
                    <TextContainer>
                        apple apple apple apple apple apple apple apple apple apple apple apple apple apple apple apple apple apple 
                        apple apple apple apple apple apple apple apple apple apple apple apple apple apple apple apple apple apple
                    </TextContainer>
                </Card.Section>

                <Card.Section title="APPLE LINE">
                    <TextContainer>
                        apple pie
                    </TextContainer>
                </Card.Section>

                <Card.Section title="APPLE DARK" subdued>
                    <List >
                        <List.Item>Apple pie A</List.Item>
                        <List.Item>Apple pie B</List.Item>
                        <List.Item>Apple pie C</List.Item>
                        <List.Item>Apple pie D</List.Item>
                    </List>
                </Card.Section>
                <Card.Section title="APPLE END">
                    <TextContainer>
                        appple pie
                    </TextContainer>
                </Card.Section>
            </Card>
        </Layout.Section>
    </Layout>
    </>);
};