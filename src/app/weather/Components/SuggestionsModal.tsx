type Props = {
    showSuggestions: boolean;
    suggestions: string[];
};

function SuggestionsModal(props: Props) {
    const { showSuggestions, suggestions } = props;

    return (
        <>
            {showSuggestions && (
                <ul className=" absolute bg-secondary w-full py-[2vh] px-[4vw] grid gap-[1vh] rounded-md">
                    {suggestions.map((suggestion, ind) => {
                        return (
                            <li
                                key={ind}
                                className=" bg-primary-content text-white py-1 px-2 rounded-sm"
                            >
                                {suggestion}{" "}
                            </li>
                        );
                    })}
                </ul>
            )}
        </>
    );
}

export default SuggestionsModal;
