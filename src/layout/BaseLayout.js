import React from "react";
import styles from "./BaseLayout.module.css";

export const BaseLayout = ({children}) => {
    return(
        <div className={styles.mainWrapper}>
            <header>header</header>
            <main>
                {children}
                <div className={"item"}></div>
                <div className={"item"}></div>
                <div className={"item"}></div>
                <div className={"item"}></div>
                <div className={"item"}></div>
                <div className={"item"}></div>

            </main>
            <footer>footer</footer>
        </div>
    )
}