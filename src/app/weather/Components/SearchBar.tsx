import { FaSearch } from "react-icons/fa";
import SuggestionsModal from "./SuggestionsModal";

type Props = {
    value: string;
    showSuggestions: boolean;
    suggestions: string[];
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
};

function SearchBar(props: Props) {
    const { value, showSuggestions, suggestions, onChange, onSubmit } = props;

    return (
        <div className=" relative w-full md:w-[320px]">
            <form action="" className=" join w-full " onSubmit={onSubmit}>
                <input
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Search.."
                    value={value}
                    className="input input-bordered input-sm join-item grow"
                    onChange={onChange}
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
            />
        </div>
    );
}

export default SearchBar;
