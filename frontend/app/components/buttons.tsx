import { Button, ButtonGroup } from "@chakra-ui/react";

type ButtonProp = {
    w: string
    h: string
    text: string
    onClick: () => void
    fontWeight: string
    fontSize: string | undefined
    fontWeightH: string
    isLoading: boolean
    isDisabled?: boolean
}

const PrimaryButton = ({ fontWeight, w, h, text, onClick, fontSize, fontWeightH, isLoading, isDisabled }: ButtonProp) => {
    return (
        <Button
            background="#5134A4"
            colorScheme="purple"
            fontWeight={fontWeight}
            fontSize={fontSize}
            fontFamily="Montserrat, sans-serif"
            h={h}
            w={w}
            onClick={onClick}
            color="#FFFFFF"
            borderRadius={8}
            _hover={{
                color: "#06081A",
                backgroundColor: "#F3F3F3",
                fontWeight: fontWeightH,
            }}
            isLoading={isLoading}
            isDisabled={isDisabled}
        // spinner={<BeatLoader size={8} color='white' />}
        >
            {text}
        </Button>
    );
}

const SecondaryButton = ({ fontWeight, w, h, text, onClick, fontSize, fontWeightH, isLoading }: ButtonProp) => {
    return (
        <Button
            color="#F3F3F3"
            variant="outline"
            borderRadius={8}
            h={h}
            w={w}
            fontWeight={fontWeight}
            fontSize={fontSize}
            colorScheme="whiteAlpha"
            onClick={onClick}
            _hover={{
                backgroundColor: "#1D1E37",
                borderColor: "#707392",
                fontWeight: fontWeightH,
            }}
        >
            {text}
        </Button>
    );
}

export default PrimaryButton;
export { SecondaryButton };
