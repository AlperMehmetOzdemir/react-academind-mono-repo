export default function Tabs({ children, buttons, buttonsContainer: ButtonsContainer = "menu", ...props }) {
    return (
        <>
            <ButtonsContainer {...props}>
                {buttons}
            </ButtonsContainer>
            {children}
        </>
    )
}
