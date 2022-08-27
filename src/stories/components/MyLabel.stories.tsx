import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyLabel } from "../../components/MyLabel";

export default {
    title:'UI/MyLabel',
    component: MyLabel,
    argTypes:{
        size:{control: 'select'},
        color:{control: 'select'},
        fontColor:{control:'color'}

    }
} as ComponentMeta<typeof MyLabel>

const Template : ComponentStory<typeof MyLabel>= (args) => <MyLabel
                         {...args}
                         />

export const Basic = Template.bind({});
Basic.args= {
    label:'No label',
    size:'normal',
    allCaps:false // true capitilazar toda la palabra

}
export const AllCaps = Template.bind({});
AllCaps.args= {
    size:'normal',
    allCaps:true // true capitilazar toda la palabra

}
export const Secondary = Template.bind({});
Secondary.args= {
    size:'normal',
    color: 'secondary',
    allCaps:true // true capitilazar toda la palabra

}

export const Terciary = Template.bind({});
Terciary.args= {
    size:'normal',
    color: 'tertiary',
    allCaps:true 

}

export const Quarter = Template.bind({});
Terciary.args= {
    size:'h1',
    color: 'tertiary',
    allCaps:true, 
    fontColor: '#312ab6'

}