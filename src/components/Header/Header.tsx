import Aurora from "../../bits/Aurora";
import RotatingText from "../../bits/RotatingText";
import "./Header.css"
function Header() {
    return (
        <header className="h-screen relative">
            <Aurora
                colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
                speed={0.5} />
            <section className="absolute top-0 w-full h-full flex justify-center flex-col items-center gap-6">
                <img src="me.jpg" alt="" className="picture h-[300px]" />
                <div className="flex items-center">
                    <RotatingText
                        texts={["Frontend", "Backend", "Mobile"]}
                        mainClassName="text-4xl px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={3000}
                    />
                    <span className="pl-2 text-4xl">
                        developer!
                    </span>
                </div>
            </section>
        </header>
    );
}

export default Header;