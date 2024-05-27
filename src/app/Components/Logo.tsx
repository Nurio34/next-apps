import Link from "next/link";

function Logo() {
    return (
        <Link
            href={"/"}
            className=" font-semibold text-2xl capitalize no-underline"
            style={{ fontVariant: "small-caps" }}
        >
            Next.js
        </Link>
    );
}

export default Logo;
