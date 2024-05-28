import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";

type Props = {
    showSuggestions: boolean;
    suggestions: string[];
    setCity: Dispatch<SetStateAction<string>>;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    setShowSuggestions: React.Dispatch<React.SetStateAction<boolean>>;
};

function SuggestionsModal(props: Props) {
    const {
        showSuggestions,
        suggestions,
        setCity,
        setValue,
        setShowSuggestions,
    } = props;

    const [ulAnimationComplete, setUlAnimationComplete] = useState(false);

    return (
        <>
            {showSuggestions && (
                <motion.ul
                    className="absolute 3 bg-secondary w-full py-[2vh] px-[4vw] grid gap-[1vh] rounded-md origin-top-left"
                    initial={{
                        scaleX: 0.1,
                        scaleY: 0,
                    }}
                    animate={{ scaleX: 1, scaleY: 1, y: 4 }}
                    transition={{
                        scaleY: { duration: 0.1 },
                        scaleX: { delay: 0.1, duration: 0.1 },
                    }}
                    onAnimationComplete={() => setUlAnimationComplete(true)}
                >
                    {ulAnimationComplete &&
                        suggestions.map((suggestion, ind) => (
                            <motion.li
                                key={ind}
                                className="bg-primary-content text-white rounded-sm"
                                initial={{ x: -200 }}
                                animate={{
                                    x: 0,
                                    transition: { delay: 0.1 + ind * 0.1 },
                                }}
                            >
                                <button
                                    type="button"
                                    className="w-full py-1 px-2 text-start"
                                    onClick={(
                                        e: React.MouseEvent<HTMLButtonElement>,
                                    ) => {
                                        const button =
                                            e.target as HTMLButtonElement;
                                        const city =
                                            button.textContent?.toLowerCase() ||
                                            "";
                                        setValue(city);
                                        setCity(city);
                                        setShowSuggestions(false);
                                    }}
                                >
                                    {suggestion}
                                </button>
                            </motion.li>
                        ))}
                </motion.ul>
            )}
        </>
    );
}

export default SuggestionsModal;
