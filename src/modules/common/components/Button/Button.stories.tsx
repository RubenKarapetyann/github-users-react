import { PALETTE } from "../../constants/palette";
import Button from "./Button";
import { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Button> = {
    component: Button,
    title: "Default Button",
    argTypes: {
        color: {
            type: "string",
            description: "background color",
            options: Object.values(PALETTE),
            control: {
                type: "radio"
            }
        }
    }
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
    name: "default",
    args: {
        children: "Click me",
    }
}

export const Purple: Story = {
    name: "purple",
    args: {
        children: "Purple Button",
        color: PALETTE.purple
    }
}