import { FaSearch } from "react-icons/fa";

type Props = {
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
};

function SearchBar(props: Props) {
    const { value, onChange, onSubmit } = props;

    return (
        <form
            action=""
            className=" join w-full md:w-[320px]"
            onSubmit={onSubmit}
        >
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
    );
}

export default SearchBar;
