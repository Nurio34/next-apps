import { FaSearch } from "react-icons/fa";
import SuggestionsModal from "./SuggestionsModal";
import { Dispatch, SetStateAction } from "react";

type Props = {
    value: string;
    showSuggestions: boolean;
    suggestions: string[];
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
    setCity: Dispatch<SetStateAction<string>>;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    setShowSuggestions: React.Dispatch<React.SetStateAction<boolean>>;
};

function SearchBar(props: Props) {
    const {
        value,
        showSuggestions,
        suggestions,
        onChange,
        onSubmit,
        setCity,
        setValue,
        setShowSuggestions,
    } = props;

    return (
        <div className=" relative w-full md:w-[320px]">
            <form action="" className=" join w-full " onSubmit={onSubmit}>
                <input
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Search.."
                    value={value}
                    className="input input-bordered input-sm join-item grow capitalize"
                    onChange={onChange}
                    autoComplete="off"
                />
                <button
                    type="submit"
                    className="join-item btn btn-secondary btn-sm"
                >
                    <FaSearch className=" " />
                </button>
            </form>
            <SuggestionsModal
                showSuggestions={showSuggestions}
                suggestions={suggestions}
                setCity={setCity}
                setValue={setValue}
                setShowSuggestions={setShowSuggestions}
            />
        </div>
    );
}

export default SearchBar;
