import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";



const ThemedComponent = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)

    const styles = {
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "black" : "#fff",
        padding: "20px",
        textAlign: "center"
    }


    return (<div style={styles}>
        <h1>The current themes is {theme}</h1>
        <button onClick={toggleTheme}>Toggle theme</button>
    </div>)


}

export default ThemedComponent;