import { Layout, Card, FormLayout, TextField, Stack, RadioButton } from "@shopify/polaris";
import { useState, useCallback } from "react";

export default function ShipmentSettings(){
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
                <Card title="配送先　XXX">
                <Card.Section>
                    <Stack vertical>
                        <FormLayout>
                            <RadioButton
                                label="全国一律"
                                helpText="Customers will only be able to check out as guests."
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
            </Card>
        </Layout.Section>
    );
}