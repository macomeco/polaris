import { Card, FormLayout, Layout, Tabs, TextContainer ,TextField  } from "@shopify/polaris";
import { useCallback, useState } from "react";

export default function Melon(){
    const [selected, setSelected]=useState(0);
    const toggleSetSelected=useCallback(
        (selectedTabIndex)=>setSelected(selectedTabIndex)
        ,[]);
    const [counter,setCounter]=useState('1');
    const counterchange=useCallback(
        (newvalue)=>setCounter(newvalue),[]
    );
    
    const tabcontent = (
        <FormLayout>
            <FormLayout.Group>
                <TextField type="number" label="Minimum order" onChange={counterchange} value={counter} min='1' />
                <TextField type="number" label="Maximum order" onChange={() => {}} />
            </FormLayout.Group>
        </FormLayout>
    );
        
    const tabs = [
        {
            id: 'all-customers-1',
            content: 'All',
            accessibilityLabel: 'All customers',
            panelID: 'all-customers-content-1',
        },
        {
            id: 'accepts-marketing-1',
            content: 'Accepts marketing',
            panelID: 'accepts-marketing-content-1',
        },
        {
            id: 'repeat-customers-1',
            content: 'Repeat customers',
            panelID: 'repeat-customers-content-1',
        },
        {
            id: 'prospects-1',
            content: 'Prospects',
            panelID: 'prospects-content-1',
            accessibilityLabel:'accessibilityLabel',
        },
    ];
    return(<>
        <Layout.Section>
            <Card>
                <Card.Section title="TITLE MELON">
                    melon melon melon melon
                </Card.Section>

                <Tabs tabs={tabs} selected={selected} onSelect={toggleSetSelected}>
                    <Card.Section title={tabs[selected].content}>
                        <p>Tab {selected} selected</p> 
                    </Card.Section>
                    <Card.Section title="PANEL ID">
                        <TextContainer>
                            {tabs[selected].panelID}
                        </TextContainer>
                    </Card.Section>
                    {tabs[selected].content==='All'&&
                        <Card.Section>{tabcontent}</Card.Section>} {/** accessibilitylabelが存在する時に表示 */}
                    
                </Tabs>
                
            </Card>
        </Layout.Section>
    </>);
};