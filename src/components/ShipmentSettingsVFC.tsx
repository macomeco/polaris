import { Layout, Card, FormLayout, TextField, Stack, RadioButton, Button, TextStyle } from "@shopify/polaris";
import { useState, useCallback, VFC } from "react";

type ShipmentSettingsProps={
    ShipmentCompany:string;
};
const ShipmentSettings:VFC<ShipmentSettingsProps>=(props)=>{
    const [value, setValue] = useState('disabled');
    const [SomeArea,setSomeArea]=useState<boolean>(true);
    const [Honshu,setHonshu]=useState<boolean>(false);
    const handleChange = useCallback(
        (_checked, newValue) => {
            setValue(newValue);
            setSomeArea((SomeArea)=>!SomeArea);
            setHonshu((Honshu)=>!Honshu);
        },[],
    );
    return(
        <Layout.Section secondary>
                <Card title={props.ShipmentCompany}>
                <Card.Section>
                    <Stack vertical>
                        <FormLayout>
                            <RadioButton
                                label="全国一律"
                                helpText="北海道・本州・四国・九州・沖縄・離島"
                                checked={value === 'disabled'}
                                id="disabled"
                                name="accounts"
                                onChange={handleChange}
                            />
                            <TextField disabled={Honshu} type="number" label="価格" onChange={()=>{}}　prefix="¥"></TextField>
                        </FormLayout>
                        <FormLayout>
                            <RadioButton
                                label="離島・一部地域別"
                                helpText="離島を含む一部地域：北海道・沖縄・離島"
                                id="optional"
                                name="accounts"
                                checked={value === 'optional'}
                                onChange={handleChange}
                            />
                            <TextField disabled={SomeArea} type="number" label="本州・四国・九州" onChange={()=>{}}　prefix="¥"></TextField>
                            <TextField disabled={SomeArea} type="number" label="離島・一部地域" onChange={()=>{}}　prefix="¥"></TextField>
                        </FormLayout>
                    </Stack>
                </Card.Section>
                <Card.Section>
                    <Stack>
                        <Stack.Item fill><TextStyle variation="subdued">N件</TextStyle></Stack.Item>
                        <Stack.Item>
                            <Button primary>商品の追加</Button>
                        </Stack.Item>
                    </Stack>
                </Card.Section>
            </Card>
        </Layout.Section>
    );
}
export default ShipmentSettings;