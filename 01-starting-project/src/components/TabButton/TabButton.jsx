
export default function TabButton({children, onClick}) {
    function onClickHandler() {
        console.log('Tab button clicked!');
    }

    return (
        <li>
            <button onClick={onClick}>{children}</button>
        </li>
    )
}